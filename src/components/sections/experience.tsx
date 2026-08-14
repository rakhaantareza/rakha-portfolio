import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";

const experiences = [
  {
    company: "Mekari",
    context: "Mekari · Talenta",
    role: "Product Marketing Intern",
    year: "2025",
    description: [
      "Worked across product and go-to-market teams on B2B SaaS initiatives, including product landing pages, feature communication, customer-facing content, and customer case studies.",
      "Collaborated around product launches and feature communication, translating product information into clear experiences and materials for customers and business audiences.",
    ],
  },
  {
    company: "Citiasia Inc.",
    role: "Full Stack Developer Intern",
    year: "2022",
    description: [
      "Built frontend interfaces from Figma designs, contributed to a Laravel-to-Vue migration, and worked with designers and developers within an Agile development team.",
      "Contributed to an existing software codebase by translating interface designs into working frontend implementation and supporting ongoing product development.",
    ],
  },
];

export function Experience() {
  return (
    <Section
      id="experience"
      aria-labelledby="experience-heading"
      className="pt-0"
    >
      <Container>
        <div className="border-t border-line pt-6">
          <h2
            id="experience-heading"
            className="font-mono text-metadata uppercase text-accent"
          >
            04 / EXPERIENCE
          </h2>

          <ol className="mt-14 sm:mt-20 xl:mt-24">
            {experiences.map((experience, position) => {
              const headingId = `experience-${position + 1}`;

              return (
                <li
                  key={experience.company}
                  className={
                    position === 0
                      ? ""
                      : "mt-[var(--section-space-compact)]"
                  }
                >
                  <article
                    aria-labelledby={headingId}
                    className="md:grid md:grid-cols-12 md:gap-8"
                  >
                    <div className="md:col-span-4 lg:col-span-3">
                      <p className="font-mono text-metadata text-ink-muted">
                        {experience.year}
                      </p>
                      <h3
                        id={headingId}
                        className="mt-5 text-body font-medium"
                      >
                        {experience.company}
                      </h3>
                      {experience.context ? (
                        <p className="mt-2 text-body text-ink-muted">
                          {experience.context}
                        </p>
                      ) : null}
                    </div>

                    <div className="mt-9 md:col-span-8 md:mt-0 lg:col-span-7 lg:col-start-5">
                      <p className="max-w-[24ch] text-content-title font-medium">
                        {experience.role}
                      </p>
                      <div className="mt-7 max-w-[43rem] space-y-5 text-body text-ink-muted sm:mt-8">
                        {experience.description.map((paragraph) => (
                          <p key={paragraph}>{paragraph}</p>
                        ))}
                      </div>
                    </div>
                  </article>
                </li>
              );
            })}
          </ol>
        </div>
      </Container>
    </Section>
  );
}
