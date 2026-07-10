export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800 bg-slate-950/40 backdrop-blur-sm">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-6 py-10 sm:flex-row sm:justify-between">
        <p className="text-sm text-slate-500">
          &copy; {year} Briyan Biju. Built with Next.js &amp; Tailwind.
        </p>

        <ul className="flex items-center gap-6" aria-label="Social links">
          <li>
            <a
              href="https://linkedin.com/in/briyanbiju"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-slate-400 hover:text-brand-400 transition-colors"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="mailto:briyanbijum@gmail.com"
              className="text-sm text-slate-400 hover:text-brand-400 transition-colors"
            >
              Email
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
