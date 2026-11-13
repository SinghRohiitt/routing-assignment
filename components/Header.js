import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const navigationLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/blog", label: "Blog" },
];

export default function Header() {
  const { asPath } = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  function isActive(href) {
    if (href === "/") {
      return asPath === "/";
    }

    return asPath === href || asPath.startsWith(`${href}/`);
  }

  return (
    <header className="sticky top-0 z-20 border-b border-slate-200/80 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <Link
          href="/"
          className="flex items-center gap-2.5 rounded-lg text-lg font-bold tracking-tight text-ink"
          onClick={() => setMenuOpen(false)}
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-600 text-sm font-extrabold text-white">
            M
          </span>
          <span>My Next.js App</span>
        </Link>

        <button
          type="button"
          className="rounded-lg border border-slate-200 p-2 text-slate-700 md:hidden"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <svg
            aria-hidden="true"
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            {menuOpen ? (
              <path d="m6 6 12 12M18 6 6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>

        <nav
          id="primary-navigation"
          aria-label="Main navigation"
          className={`${menuOpen ? "flex" : "hidden"} absolute left-0 right-0 top-full flex-col gap-1 border-b border-slate-200 bg-white px-5 py-3 shadow-card md:static md:flex md:flex-row md:items-center md:gap-1 md:border-0 md:bg-transparent md:px-0 md:py-0 md:shadow-none`}
        >
          {navigationLinks.map(({ href, label }) => {
            const active = isActive(href);

            return (
              <Link
                key={href}
                href={href}
                aria-current={active ? "page" : undefined}
                onClick={() => setMenuOpen(false)}
                className={`rounded-lg px-4 py-2 text-sm font-semibold transition-colors ${
                  active
                    ? "bg-brand-50 text-brand-700"
                    : "text-slate-600 hover:bg-slate-100 hover:text-ink"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
