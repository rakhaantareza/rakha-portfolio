"use client";

import { useState } from "react";

type NavigationLink = {
  href: string;
  label: string;
};

type MobileNavigationProps = {
  links: NavigationLink[];
};

export function MobileNavigation({ links }: MobileNavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        aria-controls="compact-navigation-menu"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((open) => !open)}
        className="justify-self-end font-mono text-metadata uppercase text-ink-muted transition-colors hover:text-ink motion-reduce:transition-none lg:hidden"
      >
        {isOpen ? "Close" : "Menu"}
      </button>

      <ul
        id="compact-navigation-menu"
        className={`${isOpen ? "grid" : "hidden"} col-span-2 gap-4 border-t border-line py-6 text-ui lg:hidden`}
      >
        {links.map((link) => (
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
          <span
            aria-disabled="true"
            className="cursor-not-allowed text-ink-muted"
          >
            Resume ↗
          </span>
        </li>
      </ul>
    </>
  );
}
