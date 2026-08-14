import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";

const secondaryActions = [
  {
    label: "LinkedIn ↗",
    href: "https://www.linkedin.com/in/rakhaantareza/",
  },
  {
    label: "GitHub ↗",
    href: "https://github.com/rakhaantareza",
  },
];

const actionClassName =
  "text-ui font-medium underline decoration-line-strong transition-colors hover:text-accent hover:decoration-accent motion-reduce:transition-none";

export function Contact() {
  return (
    <Section aria-labelledby="contact-heading" className="pt-0">
      <Container>
        <div className="border-t border-line pt-6">
          <p className="font-mono text-metadata uppercase text-accent">
            05 / CONTACT
          </p>

          <h2
            id="contact-heading"
            className="mt-14 max-w-[12ch] text-display-statement font-medium sm:mt-20 xl:mt-24"
          >
            LET&apos;S BUILD
            <span className="block">SOMETHING USEFUL.</span>
          </h2>

          <div className="mt-12 md:grid md:grid-cols-12 md:gap-8 lg:mt-16 xl:mt-20">
            <p className="max-w-[38rem] text-body text-ink-muted md:col-span-6 lg:col-span-5">
              I&apos;m open to software engineering opportunities across frontend
              and full-stack web development.
            </p>

            <div className="mt-10 md:col-span-6 md:mt-0 lg:col-span-5 lg:col-start-8">
              <a
                href="mailto:rakhaantareza@gmail.com"
                className="inline-block text-content-title font-medium underline decoration-2 decoration-accent underline-offset-[0.18em] transition-colors hover:text-accent motion-reduce:transition-none"
              >
                rakhaantareza@gmail.com ↗
              </a>

              <div className="mt-8 flex flex-nowrap gap-x-7 sm:mt-10">
                {secondaryActions.map((action) => (
                  <a
                    key={action.label}
                    href={action.href}
                    target="_blank"
                    rel="noreferrer"
                    className={actionClassName}
                  >
                    {action.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
