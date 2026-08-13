import { Container } from "@/components/layout/container";

export function Hero() {
  return (
    <section aria-labelledby="hero-heading">
      <Container className="flex min-h-[clamp(32rem,61svh,36rem)] flex-col pt-9 pb-8 sm:pt-[clamp(3.5rem,7vw,6.5rem)] sm:pb-10 md:min-h-[min(calc(100svh-4.5rem),50rem)] lg:min-h-[calc(100svh-4.5rem)] lg:pb-12">
        <div>
          <p className="font-mono text-meta uppercase text-accent">
            Software Engineer · Indonesia
          </p>

          <p className="mt-6 text-lg font-medium tracking-[-0.025em] sm:mt-7 sm:text-xl">
            RAKHA ANTAREZA
          </p>

          <h1
            id="hero-heading"
            className="mt-4 max-w-[18ch] text-heading font-medium max-sm:text-balance"
          >
            I build digital products from idea to implementation.
          </h1>

          <div className="mt-6 sm:mt-8 lg:mt-10">
            <p className="max-w-[42rem] text-body-lg text-ink-muted">
              Software engineer focused on building thoughtful web experiences
              through clean interfaces, practical engineering, and product
              thinking.
            </p>

            <div className="mt-5 flex flex-wrap items-start gap-x-7 gap-y-3 text-base">
              <a
                href="https://github.com/rakhaantareza"
                target="_blank"
                rel="noreferrer"
                className="font-medium underline decoration-line-strong transition-colors hover:text-accent hover:decoration-accent motion-reduce:transition-none"
              >
                GitHub ↗
              </a>
              <a
                href="https://www.linkedin.com/in/rakhaantareza/"
                target="_blank"
                rel="noreferrer"
                className="font-medium underline decoration-line-strong transition-colors hover:text-accent hover:decoration-accent motion-reduce:transition-none"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 md:mt-14 lg:mt-[clamp(4rem,6vw,5.5rem)]">
          <a
            href="#work"
            className="text-lg font-medium underline decoration-2 decoration-accent underline-offset-4 transition-colors hover:text-accent motion-reduce:transition-none"
          >
            Explore my work ↓
          </a>
        </div>
      </Container>
    </section>
  );
}
