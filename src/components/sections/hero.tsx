import { Container } from "@/components/layout/container";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="lg:flex"
    >
      <Container className="pt-9 sm:pt-[clamp(3.5rem,7vw,6.5rem)] lg:flex lg:flex-1 lg:items-center lg:py-[var(--section-space-compact)]">
        <div className="w-full">
          <div>
            <p className="font-mono text-metadata uppercase text-accent">
              Software Engineer · Indonesia
            </p>

            <p className="mt-6 text-body font-medium tracking-[-0.025em] sm:mt-7">
              RAKHA ANTAREZA
            </p>

            <h1
              id="hero-heading"
              className="mt-4 max-w-[18ch] text-display-hero font-medium max-sm:text-balance"
            >
              I build digital products from idea to implementation.
            </h1>

            <div className="mt-6 sm:mt-8 lg:mt-10">
              <p className="max-w-[42rem] text-body text-ink-muted">
                Software engineer focused on building thoughtful web experiences
                through clean interfaces, practical engineering, and product
                thinking.
              </p>

              <div className="mt-5 flex flex-nowrap items-start gap-x-7 text-ui">
                <a
                  href="https://www.linkedin.com/in/rakhaantareza/"
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium underline decoration-line-strong transition-colors hover:text-accent hover:decoration-accent motion-reduce:transition-none"
                >
                  LinkedIn ↗
                </a>
                <a
                  href="https://github.com/rakhaantareza"
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium underline decoration-line-strong transition-colors hover:text-accent hover:decoration-accent motion-reduce:transition-none"
                >
                  GitHub ↗
                </a>
              </div>
            </div>
          </div>

          <div className="mt-[var(--hero-transition-before)]">
            <a
              href="#work"
              className="text-transition font-medium underline decoration-2 decoration-accent underline-offset-4 transition-colors hover:text-accent motion-reduce:transition-none"
            >
              Explore my work ↓
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
