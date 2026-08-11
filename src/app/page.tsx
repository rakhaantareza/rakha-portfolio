import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";

export default function Home() {
  return (
    <main className="flex-1">
      <Section className="min-h-[80svh]">
        <Container className="flex min-h-[48svh] flex-col justify-between gap-20">
          <div className="flex items-center justify-between border-b border-line pb-4 font-mono text-meta uppercase text-ink-muted">
            <span>Rakha Antareza</span>
            <span>Foundation / 01</span>
          </div>

          <div>
            <p className="mb-5 font-mono text-meta uppercase text-accent">
              Instrument Sans / Display
            </p>
            <h1 className="max-w-[12ch] text-display font-medium">
              Design foundation.
            </h1>
          </div>
        </Container>
      </Section>

      <Section className="border-t border-line bg-surface">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-4">
              <p className="font-mono text-meta uppercase text-ink-muted">
                01 / Typography
              </p>
            </div>
            <div className="space-y-10 lg:col-span-8">
              <h2 className="text-heading font-medium">
                Editorial scale with a technical accent.
              </h2>
              <p className="max-w-[42rem] text-body-lg text-ink-muted">
                Instrument Sans carries the reading experience. IBM Plex Mono
                is reserved for labels, numbering, and compact metadata.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="border-t border-line">
        <Container>
          <div className="mb-12 flex items-end justify-between gap-6">
            <div>
              <p className="mb-4 font-mono text-meta uppercase text-ink-muted">
                02 / Surface language
              </p>
              <h2 className="text-subheading font-medium">Quiet contrast.</h2>
            </div>
            <span
              className="hidden h-3 w-3 bg-accent sm:block"
              aria-hidden="true"
            />
          </div>

          <div className="grid border border-line sm:grid-cols-3">
            <div className="min-h-44 bg-canvas p-5 font-mono text-meta uppercase text-ink-muted">
              Canvas
            </div>
            <div className="min-h-44 border-t border-line bg-surface p-5 font-mono text-meta uppercase text-ink-muted sm:border-l sm:border-t-0">
              Surface
            </div>
            <div className="min-h-44 border-t border-line bg-inverse p-5 font-mono text-meta uppercase text-inverse-ink sm:border-l sm:border-t-0">
              Inverse
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
