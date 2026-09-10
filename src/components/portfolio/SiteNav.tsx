import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";


const links = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Public Leadership", href: "#leadership" },
  { label: "Stage & Broadcast", href: "#stage" },
  { label: "Ideas", href: "#ideas" },
  { label: "Contact", href: "#contact" },
];

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 px-3 transition-all duration-500 sm:px-0 ${
        scrolled ? "pt-3" : "pt-2 sm:pt-0"
      }`}
    >
      <div
        className={`transition-all duration-500 ${
          scrolled ? "mx-auto w-full max-w-[72rem] sm:w-[min(72rem,calc(100%-2rem))]" : "mx-auto w-full max-w-[78rem] sm:px-6"
        }`}
      >
        <nav
          aria-label="Primary navigation"
          className={`relative grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 transition-all duration-500 md:flex md:gap-6 ${
            scrolled
              ? "glass-bar rounded-full px-3 py-2 md:justify-center md:px-5 md:py-2.5"
              : "border-b border-transparent px-1 py-3 md:justify-between md:px-0 md:py-6"
          }`}
        >

          <a
            href="#top"
            className={`flex min-w-0 items-center gap-2.5 transition-all duration-500 ${
              scrolled ? "md:absolute md:left-5" : ""
            }`}
          >

            <span className="grid size-10 place-items-center ">
              <img
            src={logo}
            alt="logo of Ibrahim Owolabi"
            className="relative mx-auto w-full max-w-md object-contain"
          />
            </span>
            <span
              className={`truncate font-display text-2xl leading-none text-navy sm:text-lg ${scrolled ? "md:hidden xl:inline" : ""}`}
            >
              Ibrahim Owolabi
            </span>
          </a>

          <ul className="hidden items-center gap-7 md:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="group relative text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:text-navy"
                >
                  {l.label}
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          <a
            href="mailto:ibrahimowolabi@example.com"
            className={`group shrink-0 items-center gap-1.5 rounded-full bg-navy px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-paper transition-colors hover:bg-navy-ink ${
               scrolled ? "absolute right-5 hidden lg:inline-flex" : "hidden md:inline-flex"
            }`}
          >

            Let&apos;s talk
            <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          <Button
            type="button"
            variant="ghost"
            size="icon"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((value) => !value)}
            className="size-10 shrink-0 rounded-full text-navy hover:bg-burgundy hover:text-paper md:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>

          <div
            id="mobile-menu"
            className={`absolute inset-x-0 top-[calc(100%+0.65rem)] origin-top overflow-hidden rounded-xl border border-border bg-card p-1 shadow-glass transition-all duration-300 md:hidden ${
              open ? "visible translate-y-0 opacity-100" : "invisible -translate-y-2 opacity-0"
            }`}
          >
            <ul className="grid p-2">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="flex min-h-12 items-center justify-between rounded-lg px-4 text-sm font-semibold text-navy transition-colors hover:bg-secondary hover:text-burgundy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    {link.label}
                    <ArrowUpRight className="size-4 text-gold" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}
