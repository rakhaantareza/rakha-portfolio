import { mkdir } from "node:fs/promises";
import { resolve } from "node:path";
import { chromium } from "playwright";

const baseUrl = process.env.BASE_URL ?? "http://localhost:3000";

const routes = [{ name: "home", path: "/" }];

const viewports = [
  { width: 1440, height: 900 },
  { width: 1280, height: 800 },
  { width: 1024, height: 768 },
  { width: 768, height: 1024 },
  { width: 430, height: 932 },
  { width: 390, height: 844 },
];

async function ensureServerIsRunning() {
  try {
    await fetch(baseUrl, { signal: AbortSignal.timeout(10_000) });
  } catch (error) {
    throw new Error(
      `Cannot reach ${baseUrl}. Start the portfolio first with \`npm run dev\`, then run \`npm run screenshots\`.`,
      { cause: error },
    );
  }
}

async function preparePageForScreenshot(page) {
  await page.evaluate(() => document.fonts.ready);

  await page.evaluate(async () => {
    const nextFrame = () =>
      new Promise((resolveFrame) => requestAnimationFrame(resolveFrame));
    const scrollStep = Math.max(250, Math.floor(window.innerHeight * 0.75));

    while (
      window.scrollY + window.innerHeight <
      document.documentElement.scrollHeight
    ) {
      window.scrollBy(0, scrollStep);
      await nextFrame();
      await nextFrame();
    }

    window.scrollTo(0, document.documentElement.scrollHeight);
    await nextFrame();
    await nextFrame();
  });

  try {
    await page.waitForFunction(
      () =>
        [...document.images].every(
          (image) =>
            image.complete && (!image.currentSrc || image.naturalWidth > 0),
        ),
      undefined,
      { timeout: 30_000 },
    );
  } catch (error) {
    const pendingImages = await page.evaluate(() =>
      [...document.images]
        .filter(
          (image) =>
            !image.complete || (image.currentSrc && image.naturalWidth === 0),
        )
        .map((image) => image.currentSrc || image.src || "image without a source"),
    );

    throw new Error(
      `Images did not finish loading: ${pendingImages.join(", ") || "unknown image"}`,
      { cause: error },
    );
  }

  await page.evaluate(async () => {
    await Promise.all(
      [...document.images]
        .filter((image) => image.currentSrc)
        .map((image) => image.decode()),
    );

    await new Promise((resolveFrame) =>
      requestAnimationFrame(() => requestAnimationFrame(resolveFrame)),
    );
  });
}

async function captureScreenshots() {
  let browser;

  try {
    await ensureServerIsRunning();
    browser = await chromium.launch();

    const total = routes.length * viewports.length;
    let completed = 0;

    console.log(`Capturing ${total} screenshots from ${baseUrl}`);

    for (const route of routes) {
      const outputDirectory = resolve("screenshots", route.name);
      await mkdir(outputDirectory, { recursive: true });

      for (const viewport of viewports) {
        completed += 1;
        const page = await browser.newPage({ viewport });
        const url = new URL(route.path, baseUrl).toString();
        const outputPath = resolve(outputDirectory, `${viewport.width}.png`);

        console.log(
          `[${completed}/${total}] ${route.path} at ${viewport.width}x${viewport.height}`,
        );

        try {
          const response = await page.goto(url, {
            waitUntil: "load",
            timeout: 30_000,
          });

          if (!response?.ok()) {
            throw new Error(
              `Page returned ${response?.status() ?? "no response"} for ${url}`,
            );
          }

          await preparePageForScreenshot(page);
          await page.screenshot({ path: outputPath, fullPage: true });
        } finally {
          await page.close();
        }
      }
    }

    console.log(`Done. Screenshots saved to ${resolve("screenshots")}`);
  } finally {
    await browser?.close();
  }
}

captureScreenshots().catch((error) => {
  console.error(`Screenshot capture failed: ${error.message}`);
  process.exitCode = 1;
});
