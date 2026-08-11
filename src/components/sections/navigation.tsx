import Link from "next/link";

import { Container } from "@/components/layout/container";
import { MobileNavigation } from "@/components/sections/mobile-navigation";

const navigationLinks = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
];

function NavigationItems() {
  return (
    <>
      {navigationLinks.map((link) => (
        <li key={link.href}>
          <a
            href={link.href}
            className="transition-colors hover:text-accent motion-reduce:transition-none"
          >
            {link.label}
          </a>
        </li>
      ))}
      <li>
        <span aria-disabled="true" className="cursor-not-allowed text-ink-muted">
          Resume ↗
        </span>
      </li>
    </>
  );
}

export function Navigation() {
  return (
    <header>
      <Container>
        <nav
          aria-label="Primary navigation"
          className="grid min-h-18 grid-cols-[1fr_auto] items-center border-b border-line"
        >
          <Link
            href="/"
            aria-label="Rakha Antareza, home"
            className="flex min-h-18 items-center py-5 text-lg font-medium tracking-[-0.035em]"
          >
            RAKHA.
          </Link>

          <ul className="hidden items-center gap-10 text-sm lg:flex">
            <NavigationItems />
          </ul>

          <MobileNavigation links={navigationLinks} />
        </nav>
      </Container>
    </header>
  );
}
