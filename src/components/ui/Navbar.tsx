"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const ROUTES = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/skills", label: "Skills" },
  { href: "/garden", label: "Garden" },
  { href: "/now", label: "Now" },
] as const;

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-0 z-50 backdrop-blur-md bg-slate-950/60 border-b border-slate-800">
      <nav
        className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4"
        aria-label="Primary navigation"
      >
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-slate-50 hover:text-brand-400 transition-colors"
        >
          Briyan Biju
        </Link>

        <ul className="flex items-center gap-1">
          {ROUTES.map(({ href, label }) => {
            const isActive =
              href === "/"
                ? pathname === "/"
                : pathname.startsWith(href);

            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`relative px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                    isActive
                      ? "text-brand-400"
                      : "text-slate-400 hover:text-slate-200"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {label}
                  {isActive && (
                    <span className="absolute inset-x-3 -bottom-[1px] h-[2px] rounded-full bg-brand-400" />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
