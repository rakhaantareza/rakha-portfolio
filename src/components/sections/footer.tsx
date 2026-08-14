import { Container } from "@/components/layout/container";

export function Footer() {
  return (
    <footer>
      <Container>
        <div className="grid gap-8 border-t border-line py-8 text-ui sm:grid-cols-2 sm:gap-x-8 lg:grid-cols-12 lg:py-10">
          <div className="lg:col-span-3">
            <p className="font-medium">Rakha Antareza</p>
            <p className="mt-1 text-ink-muted">Software Engineer</p>
          </div>

          <p className="text-ink-muted sm:self-end lg:col-span-4 lg:col-start-6 lg:self-start">
            Designed &amp; built by Rakha Antareza.
          </p>

          <p className="font-mono text-metadata text-muted sm:justify-self-end sm:self-end lg:col-span-2 lg:col-start-11 lg:self-start">
            © 2026
          </p>
        </div>
      </Container>
    </footer>
  );
}
