"use client";

import { useLayoutEffect } from "react";

const STORAGE_KEY = "rakha-color-theme";
const DARK_MODE_QUERY = "(prefers-color-scheme: dark)";

type Theme = "light" | "dark";

function getStoredTheme(): Theme | null {
  try {
    const storedTheme = window.localStorage.getItem(STORAGE_KEY);
    return storedTheme === "light" || storedTheme === "dark"
      ? storedTheme
      : null;
  } catch {
    return null;
  }
}

function getSystemTheme(query: MediaQueryList): Theme {
  return query.matches ? "dark" : "light";
}

function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
}

export function ThemeToggle() {
  useLayoutEffect(() => {
    const systemTheme = window.matchMedia(DARK_MODE_QUERY);

    const syncTheme = () => {
      applyTheme(getStoredTheme() ?? getSystemTheme(systemTheme));
    };

    const handleSystemChange = () => {
      if (!getStoredTheme()) {
        applyTheme(getSystemTheme(systemTheme));
      }
    };

    const handleStorage = (event: StorageEvent) => {
      if (event.key === STORAGE_KEY) {
        syncTheme();
      }
    };

    syncTheme();
    systemTheme.addEventListener("change", handleSystemChange);
    window.addEventListener("storage", handleStorage);

    return () => {
      systemTheme.removeEventListener("change", handleSystemChange);
      window.removeEventListener("storage", handleStorage);
    };
  }, []);

  const handleToggle = () => {
    const currentTheme = document.documentElement.dataset.theme === "dark"
      ? "dark"
      : "light";
    const nextTheme = currentTheme === "dark" ? "light" : "dark";

    try {
      window.localStorage.setItem(STORAGE_KEY, nextTheme);
    } catch {
      // The theme still changes for this page if storage is unavailable.
    }

    applyTheme(nextTheme);
  };

  return (
    <button
      type="button"
      onClick={handleToggle}
      className="theme-toggle inline-flex h-10 w-16 cursor-pointer items-center justify-center bg-transparent p-0"
    >
      <span aria-hidden="true" className="theme-toggle__track">
        <span className="theme-toggle__thumb" />
        <svg
          viewBox="0 0 24 24"
          className="theme-toggle__icon theme-toggle__sun"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        >
          <circle cx="12" cy="12" r="3.75" />
          <path d="M12 2.5V5M12 19v2.5M2.5 12H5M19 12h2.5M5.3 5.3l1.8 1.8M16.9 16.9l1.8 1.8M18.7 5.3l-1.8 1.8M7.1 16.9l-1.8 1.8" />
        </svg>
        <svg
          viewBox="0 0 24 24"
          className="theme-toggle__icon theme-toggle__moon"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20 15.2A8.2 8.2 0 0 1 8.8 4a8.2 8.2 0 1 0 11.2 11.2Z" />
        </svg>
      </span>
      <span className="sr-only">
        <span className="theme-toggle__label-dark">Switch to dark theme</span>
        <span className="theme-toggle__label-light">Switch to light theme</span>
      </span>
    </button>
  );
}
