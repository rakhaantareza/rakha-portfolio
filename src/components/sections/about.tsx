import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";

const technologyGroups = [
  {
    category: "FRONTEND",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
    ],
  },
  {
    category: "BACKEND & DATA",
    technologies: ["InsForge", "SQL", "Laravel"],
  },
  {
    category: "WORKFLOW",
    technologies: ["Git", "GitHub", "Figma"],
  },
];

export function About() {
  return (
    <Section id="about" aria-labelledby="about-heading" className="pt-0">
      <Container>
        <div className="border-t border-line pt-6">
          <h2
            id="about-heading"
            className="font-mono text-meta uppercase text-accent"
          >
            03 / ABOUT
          </h2>

          <div className="mt-14 sm:mt-20 lg:grid lg:grid-cols-12 lg:gap-8 xl:mt-24">
            <h3 className="max-w-[15ch] text-heading font-medium lg:col-span-7 lg:max-w-none">
              I build with both the product and the implementation in mind.
            </h3>

            <div className="mt-10 max-w-[42rem] space-y-5 text-body-lg text-ink-muted sm:mt-12 lg:col-span-5 lg:col-start-8 lg:mt-0">
              <p>
                I&apos;m Rakha, a software engineer with a background in
                Information Systems and experience across web development and
                B2B SaaS.
              </p>
              <p>
                I started in software development, then spent time working
                closer to product and go-to-market teams. That experience gave
                me a broader view of how software decisions connect to user
                needs, business context, and the way a product is experienced.
              </p>
              <p>
                Today, I bring that perspective back into engineering—building
                web applications with attention to implementation, usability,
                and the decisions behind how they work.
              </p>
            </div>
          </div>

          <div className="mt-[var(--section-space-compact)] border-t border-line pt-6">
            <h3 className="font-mono text-meta uppercase text-ink">
              TOOLS &amp; TECHNOLOGIES
            </h3>

            <div className="mt-10 grid gap-10 sm:grid-cols-3 sm:gap-8 lg:mt-12">
              {technologyGroups.map((group) => (
                <div key={group.category}>
                  <h4 className="font-mono text-meta uppercase text-ink-muted">
                    {group.category}
                  </h4>
                  <ul className="mt-5 space-y-2 text-lg leading-snug sm:text-xl">
                    {group.technologies.map((technology) => (
                      <li key={technology}>{technology}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
