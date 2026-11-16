import type { ReactNode } from "react";
import { Navbar } from "../landing/Navbar";
import { Footer } from "../landing/Footer";

export function LegalLayout({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <article className="mx-auto max-w-3xl px-5 py-12 sm:px-8 sm:py-16 lg:px-12">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h1>
        <p className="mt-2 text-sm text-muted-foreground">Last updated: {updated}</p>
        <div
          className="mt-8 space-y-4 text-sm leading-relaxed text-muted-foreground
            [&_h2]:mt-10 [&_h2]:mb-3 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-foreground
            [&_h3]:mt-6 [&_h3]:mb-2 [&_h3]:font-semibold [&_h3]:text-foreground
            [&_p]:my-3 [&_ul]:my-3 [&_ul]:list-disc [&_ul]:pl-6 [&_li]:my-1
            [&_a]:text-foreground [&_a]:underline [&_a]:underline-offset-4"
        >
          {children}
        </div>
      </article>
      <Footer />
    </div>
  );
}
