import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";

const capabilities = [
  {
    index: "01",
    title: "Frontend Development",
    description:
      "Building responsive, maintainable interfaces with attention to component structure, interaction, accessibility, and usability.",
  },
  {
    index: "02",
    title: "Full-Stack Development",
    description:
      "Connecting interfaces with application logic, authentication, data, and backend services to build complete application flows.",
  },
  {
    index: "03",
    title: "Product Engineering",
    description:
      "Turning product requirements into working features by connecting interface decisions, application logic, and implementation constraints.",
  },
  {
    index: "04",
    title: "Product Thinking",
    description:
      "Considering user goals, constraints, and trade-offs when deciding what to build and how an implementation should work.",
  },
];

export function Capabilities() {
  return (
    <Section aria-labelledby="capabilities-heading" className="pt-0">
      <Container>
        <div className="border-t border-line pt-6">
          <h2
            id="capabilities-heading"
            className="font-mono text-meta uppercase text-accent"
          >
            02 / CAPABILITIES
          </h2>

          <ol className="mt-14 sm:mt-20 md:grid md:grid-cols-2 md:gap-x-10 lg:gap-x-20 xl:mt-24 xl:gap-x-28">
            {capabilities.map((capability, position) => (
              <li
                key={capability.index}
                className={`py-8 sm:py-10 md:py-0 ${
                  position === 0
                    ? "md:pb-12 lg:pb-14 xl:pb-16"
                    : position === 1
                      ? "border-t border-line md:border-t-0 md:pb-12 lg:pb-14 xl:pb-16"
                      : "border-t border-line md:pt-12 lg:pt-14 xl:pt-16"
                }`}
              >
                <p className="font-mono text-meta text-ink-muted">
                  {capability.index}
                </p>
                <h3 className="mt-5 max-w-[18ch] text-subheading font-medium">
                  {capability.title}
                </h3>
                <p className="mt-5 max-w-[36rem] text-base leading-7 text-ink-muted sm:text-lg sm:leading-8">
                  {capability.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </Section>
  );
}
