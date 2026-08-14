import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import {
  publishedFeaturedProjects,
  type PublishedFeaturedProject,
} from "@/data/featured-projects";

const actionClassName =
  "inline-flex items-center text-ui font-medium text-ink underline decoration-line-strong transition-[color,text-decoration-color,text-underline-offset] duration-200 hover:text-accent-hover hover:decoration-accent-hover hover:underline-offset-[0.32em] focus-visible:text-accent-hover focus-visible:decoration-accent-hover motion-reduce:transition-none";

type FeaturedProjectEntryProps = {
  project: PublishedFeaturedProject;
  position: number;
};

function FeaturedProjectEntry({
  project,
  position,
}: FeaturedProjectEntryProps) {
  const projectHeadingId = `featured-project-${project.index}`;
  const firstProjectClassName = "mt-12 sm:mt-14 lg:mt-16";
  const subsequentProjectClassName =
    "mt-16 border-t border-line pt-16 sm:mt-20 sm:pt-20";
  const articleClassName =
    position === 0 ? firstProjectClassName : subsequentProjectClassName;

  return (
    <article
      aria-labelledby={projectHeadingId}
      className={`${articleClassName} selected-work-project`}
    >
      <div className="grid min-w-0 grid-cols-12 items-start md:gap-x-8">
        <div className="col-span-12 self-start font-mono uppercase md:col-span-3 md:col-start-1 md:row-start-1">
          <p className="text-lg leading-none font-medium text-ink">
            {project.index}
          </p>
          <p className="mt-3 whitespace-nowrap text-metadata text-ink">
            {project.category}
          </p>
          <p className="mt-2 text-metadata text-muted">{project.year}</p>
        </div>

        <div className="col-span-12 mt-8 min-w-0 md:col-span-9 md:col-start-4 md:row-start-1 md:mt-0 min-[1025px]:contents">
          <div className="selected-work-story min-w-0 min-[1025px]:col-span-5 min-[1025px]:col-start-4 min-[1025px]:row-start-1">
            <div className="flex items-center gap-3.5 sm:gap-4">
              {project.mark ? (
                <Image
                  src={project.mark.src}
                  alt={project.mark.alt}
                  width={project.mark.width}
                  height={project.mark.height}
                  unoptimized
                  className="h-9 w-9 flex-none lg:h-10 lg:w-10"
                />
              ) : null}
              <h3
                id={projectHeadingId}
                className="text-[clamp(2.25rem,3.6vw,3.5rem)] leading-[0.98] font-medium tracking-[-0.045em]"
              >
                {project.name}
              </h3>
            </div>

            <p className="mt-8 text-content-title font-medium sm:mt-9">
              {project.proposition}
            </p>

            <p className="mt-4 text-body text-ink-muted sm:mt-5">
              {project.description}
            </p>

            <p className="mt-6 font-mono text-metadata uppercase text-ink sm:mt-7">
              {project.technologies}
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-x-7 gap-y-3 sm:mt-6">
              <Link
                href={project.caseStudyUrl}
                prefetch={false}
                className={actionClassName}
              >
                View case study ↗
              </Link>
              <a
                href={project.liveProductUrl ?? undefined}
                target={project.liveProductUrl ? "_blank" : undefined}
                rel={project.liveProductUrl ? "noreferrer" : undefined}
                tabIndex={project.liveProductUrl ? undefined : 0}
                className={actionClassName}
              >
                Live demo ↗
              </a>
            </div>
          </div>

          {project.visual ? (
            <div className="mt-10 min-w-0 min-[1025px]:col-span-4 min-[1025px]:col-start-9 min-[1025px]:row-start-1 min-[1025px]:mt-0">
              <figure className="selected-work-proof relative w-full">
                <Image
                  src={project.visual.src}
                  alt={project.visual.alt}
                  width={project.visual.width}
                  height={project.visual.height}
                  sizes="(min-width: 1600px) 459px, (min-width: 1025px) 30vw, (min-width: 768px) 67vw, calc(100vw - 2.5rem)"
                  className="h-auto w-full"
                />
              </figure>
            </div>
          ) : null}
        </div>
      </div>
    </article>
  );
}

export function SelectedWork() {
  return (
    <Section
      id="work"
      aria-labelledby="selected-work-heading"
      className="pt-[var(--hero-transition-after)] lg:pt-0"
    >
      <Container>
        <div className="border-t border-line pt-6">
          <h2
            id="selected-work-heading"
            className="font-mono text-metadata uppercase text-accent"
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
