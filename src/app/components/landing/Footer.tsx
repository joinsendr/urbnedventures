import { Link } from "react-router";

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
    items: [{ label: "Contact", href: "mailto:ceo@urbned.ventures" }],
  },
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

        <div className="grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-3">
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
                <Link to="/privacy" className="transition-colors hover:text-foreground">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="transition-colors hover:text-foreground">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} Urbned Inc. All rights reserved.</span>
          <span>Urbned Inc. · 16192 Coastal Highway, Lewes, Delaware 19958</span>
        </div>
      </div>
    </footer>
  );
}
