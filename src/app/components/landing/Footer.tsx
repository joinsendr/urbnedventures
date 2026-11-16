const columns = [
  {
    title: "Product",
    items: [
      { label: "Features", href: "#features" },
      { label: "Pricing", href: "#pricing" },
      { label: "FAQ", href: "#faq" },
    ],
  },
  {
    title: "Company",
    items: [{ label: "Contact", href: "mailto:hello@urbned.com" }],
  },
];

function XIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M18.244 2H21.5l-7.5 8.57L23 22h-6.844l-5.36-6.99L4.7 22H1.44l8.02-9.166L1 2h7.02l4.84 6.39L18.244 2Zm-1.2 18h1.9L7.04 4H5.04l12.004 16Z" />
    </svg>
  );
}

function LinkedInIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function GitHubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.207 11.387.6.11.793-.26.793-.577v-2.17c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.332-1.756-1.332-1.756-1.09-.745.082-.729.082-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.809 1.304 3.495.997.108-.775.42-1.305.763-1.604-2.665-.303-5.467-1.332-5.467-5.93 0-1.31.468-2.382 1.236-3.222-.123-.303-.535-1.524.117-3.176 0 0 1.008-.323 3.3 1.23a11.5 11.5 0 0 1 6.003 0c2.29-1.553 3.297-1.23 3.297-1.23.653 1.652.24 2.873.118 3.176.77.84 1.235 1.912 1.235 3.222 0 4.61-2.807 5.624-5.479 5.92.43.37.814 1.1.814 2.22v3.293c0 .317.192.69.8.573C20.565 21.796 24 17.297 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

const socials = [
  { name: "X", href: "https://x.com/joinsendr", icon: XIcon },
  { name: "LinkedIn", href: "https://www.linkedin.com/company/joinsendr/", icon: LinkedInIcon },
  { name: "GitHub", href: "https://github.com/joinsendr", icon: GitHubIcon },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-background pt-16 pb-10">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="mb-12">
          <a href="#top" className="text-3xl font-bold tracking-tight">
            URBNED
          </a>
          <p className="mt-3 text-sm text-muted-foreground">Your AI-powered coding workspace.</p>
        </div>

        <div className="grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-4">
          {columns.map((col) => (
            <div key={col.title}>
              <div className="mb-4 text-sm font-semibold text-foreground">{col.title}</div>
              <ul className="space-y-3 text-sm text-muted-foreground">
                {col.items.map((item) => (
                  <li key={item.label}>
                    <a href={item.href} className="transition-colors hover:text-foreground">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <div className="mb-4 text-sm font-semibold text-foreground">Legal</div>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a href="#" className="transition-colors hover:text-foreground">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-foreground">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          <div>
            <div className="mb-4 text-sm font-semibold text-foreground">Socials</div>
            <ul className="space-y-3 text-sm text-muted-foreground">
              {socials.map((s) => (
                <li key={s.name}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.name}
                    className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
                  >
                    <s.icon className="h-4 w-4" />
                    <span>{s.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} URBNED. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
