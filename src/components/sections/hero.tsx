import { Container } from "@/components/layout/container";

const metadata = [
  {
    label: "Based in",
    value: (
      <p className="mt-2 text-base leading-snug sm:text-lg">
        Tangerang, Indonesia
      </p>
    ),
  },
  {
    label: "Focus",
    value: (
      <p className="mt-2 text-base leading-snug sm:text-lg">
        Web Development
        <br />
        Product Engineering
      </p>
    ),
  },
  {
    label: "Currently",
    value: (
      <p className="mt-2 text-base leading-snug sm:text-lg">
        Open to opportunities
      </p>
    ),
  },
];

export function Hero() {
  return (
    <section aria-labelledby="hero-heading">
      <Container className="flex min-h-[calc(100svh-4.5rem)] flex-col justify-between gap-12 py-9 sm:gap-16 sm:py-[clamp(3.5rem,7vw,6.5rem)] md:max-lg:justify-start md:max-lg:gap-64">
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

          <div className="mt-6 grid gap-6 sm:mt-8 sm:gap-8 lg:mt-10 lg:grid-cols-12 lg:items-end">
            <p className="max-w-[42rem] text-body-lg text-ink-muted lg:col-span-6">
              Software engineer focused on building thoughtful web experiences
              through clean interfaces, practical engineering, and product
              thinking.
            </p>

            <div className="flex flex-col items-start gap-3 text-base sm:flex-row sm:gap-7 lg:col-span-4 lg:col-start-9">
              <a
                href="#work"
                className="font-medium underline decoration-line-strong transition-colors hover:text-accent hover:decoration-accent motion-reduce:transition-none"
              >
                Explore my work ↓
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

        <dl className="grid gap-7 border-t border-line pt-6 sm:grid-cols-2 sm:gap-8 md:grid-cols-3 md:gap-6 lg:gap-8">
          {metadata.map((item) => (
            <div key={item.label}>
              <dt className="font-mono text-meta uppercase text-ink-muted">
                {item.label}
              </dt>
              <dd>{item.value}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
