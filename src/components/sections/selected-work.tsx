import Link from "next/link";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import {
  publishedFeaturedProjects,
  type PublishedFeaturedProject,
} from "@/data/featured-projects";

const actionClassName =
  "font-medium underline decoration-line-strong transition-colors hover:text-accent hover:decoration-accent motion-reduce:transition-none";

type FeaturedProjectEntryProps = {
  project: PublishedFeaturedProject;
  position: number;
};

function FeaturedProjectEntry({
  project,
  position,
}: FeaturedProjectEntryProps) {
  const projectHeadingId = `featured-project-${project.index}`;

  return (
    <article
      aria-labelledby={projectHeadingId}
      className={
        position === 0
          ? "mt-14 sm:mt-20 xl:mt-24"
          : "mt-[var(--section-space-compact)] border-t border-line pt-[var(--section-space-compact)]"
      }
    >
      <div className="xl:grid xl:grid-cols-12 xl:gap-8">
        <div className="font-mono uppercase xl:col-span-3">
          <p className="text-lg leading-none font-medium tracking-[-0.03em] text-ink sm:text-xl xl:text-[clamp(1.25rem,1.55vw,1.5rem)]">
            {project.index}
          </p>
          <div className="mt-4 text-meta text-ink-muted">
            <p>{project.year}</p>
            <p className="mt-2">{project.category}</p>
          </div>
        </div>

        <div className="mt-10 xl:col-span-9 xl:mt-0">
          <h3
            id={projectHeadingId}
            className="text-[clamp(3.75rem,9vw,8.5rem)] leading-[0.82] font-medium tracking-[-0.06em]"
          >
            {project.name}
          </h3>

          <div className="mt-8 grid gap-8 border-t border-line pt-7 sm:mt-10 sm:gap-10 sm:pt-8 xl:grid-cols-9 xl:gap-8">
            <p className="max-w-[14ch] text-subheading font-medium xl:col-span-5">
              {project.proposition}
            </p>

            <div className="xl:col-span-4">
              <p className="max-w-[40rem] text-body-lg text-ink-muted">
                {project.description}
              </p>

              <p className="mt-8 font-mono text-meta uppercase text-ink sm:mt-10">
                {project.technologies}
              </p>

              <div className="mt-8 flex flex-col items-start gap-3 text-base sm:mt-10 sm:flex-row sm:gap-7">
                <Link
                  href={project.caseStudyUrl}
                  prefetch={false}
                  className={actionClassName}
                >
                  View case study ↗
                </Link>
                {project.liveProductUrl ? (
                  <a
                    href={project.liveProductUrl}
                    target="_blank"
                    rel="noreferrer"
                    className={actionClassName}
                  >
                    Live product ↗
                  </a>
                ) : (
                  <span
                    aria-disabled="true"
                    className="cursor-not-allowed font-medium text-ink-muted underline decoration-line"
                  >
                    Live product ↗
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export function SelectedWork() {
  return (
    <Section id="work" aria-labelledby="selected-work-heading">
      <Container>
        <div className="border-t border-line pt-6">
          <h2
            id="selected-work-heading"
            className="font-mono text-meta uppercase text-accent"
          >
            01 / SELECTED WORK
          </h2>

          {publishedFeaturedProjects.map((project, position) => (
            <FeaturedProjectEntry
              key={project.index}
              project={project}
              position={position}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
