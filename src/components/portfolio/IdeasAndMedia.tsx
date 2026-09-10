import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";

const pieces = [
  {
    tag: "Publication",
    title: "The Leadership Intelligence Framework",
    body: "A model of fourteen cognitive, social, and moral leadership capacities, with stewardship at its core.",
    meta: "Framework",
    link: "https://zenodo.org/records/20651922",
  },
  {
    tag: "Essay",
    title: "The Audacity and Architecture of Hope",
    body: "How hope becomes consequential through agency, civic participation, strategy, and institutional capacity.",
    meta: "Essay",
     link: "https://medium.com/@ibrahimowolabiodunayo/the-audacity-and-architecture-of-hope-43530c9c1829",
  },
  {
    tag: "Essay",
    title: "Obama: A Contemporary Mosaic of Hope in America Today",
    body: "A reflection on Obama’s enduring legacy of hope, civic engagement, leadership, and the possibility of...",
    meta: "Essay",
     link: "https://medium.com/@ibrahimowolabiodunayo/obama-a-contemporary-mosaic-of-hope-in-america-today-3ce702f01ba9",
  },
];

export function IdeasAndMedia() {
  const revealRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    setMounted(true);
    const el = revealRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setInView(true);
            io.disconnect();
            break;
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Reveal-on-scroll: cards are hidden only after JS mounts and before they
  // enter the viewport. The prerendered HTML, no-JS visitors, and anyone with
  // reduced motion always get fully visible content.
  const hidden = mounted && !inView;

  return (
    <section
      id="ideas"
      className="relative isolate scroll-mt-24 overflow-hidden border-y border-border bg-navy-shade py-16 md:py-28"
    >
      {/* soft depth: warm gold glow up top, faint navy pool bottom-right */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(72% 60% at 50% -12%, color-mix(in oklab, var(--gold) 10%, transparent), transparent 60%), radial-gradient(48% 52% at 100% 108%, color-mix(in oklab, var(--navy) 6%, transparent), transparent 72%)",
        }}
      />

      <div ref={revealRef} className="rail">
        <div
          className="transition-all duration-700 ease-out"
          style={{
            opacity: hidden ? 0 : 1,
            transform: hidden ? "translateY(20px)" : "none",
          }}
        >
          <p className="eyebrow">Ideas & writing</p>
          <h2 className="mt-4 max-w-xl text-3xl leading-tight text-navy md:text-[2.6rem]">
            Writing and public conversations.
          </h2>
          <span className="mt-6 block h-0.5 w-14 rounded-full bg-gradient-to-r from-burgundy to-gold" />
        </div>

        <div className="mt-10 grid gap-4 sm:mt-14 sm:gap-5 md:grid-cols-3">
          {pieces.map((p, i) => (
            <div
              key={p.title}
              className="h-full transition-all duration-700 ease-out will-change-transform"
              style={{
                transitionDelay: hidden ? "0ms" : `${120 + i * 110}ms`,
                opacity: hidden ? 0 : 1,
                transform: hidden ? "translateY(28px)" : "none",
              }}
            >
              <a
                target="_blank"
                rel="noreferrer"
                href={p.link}
                className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl bg-card p-6 shadow-lift ring-1 ring-navy/[0.05] transition-[transform,box-shadow] duration-500 ease-out hover:-translate-y-1.5 hover:shadow-glass sm:p-8"
              >
                {/* accent bar grows from the left on hover */}
                <span
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-gold to-burgundy transition-transform duration-500 ease-out group-hover:scale-x-100"
                />
                {/* warm wash on hover */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-transparent via-transparent to-gold/[0.08] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />
                {/* gold ring on hover */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-transparent transition-colors duration-500 group-hover:ring-gold/50"
                />
                {/* editorial index numeral */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute -bottom-5 right-2 select-none font-display text-[6.5rem] leading-none text-navy/[0.04] transition-all duration-500 group-hover:-translate-y-1 group-hover:text-navy/[0.07]"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div className="relative">
                  <div className="flex items-start justify-between gap-4">
                    <p className="inline-flex items-center gap-2 text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-burgundy">
                      <span className="size-1.5 rounded-full bg-burgundy transition-transform duration-500 group-hover:scale-150" />
                      {p.tag}
                    </p>
                    <span className="grid size-9 shrink-0 place-items-center rounded-full bg-secondary text-navy transition-all duration-500 group-hover:rotate-6 group-hover:bg-burgundy group-hover:text-paper">
                      <ArrowUpRight className="size-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>
                  <h3 className="mt-7 text-xl leading-snug text-navy transition-colors duration-500 group-hover:text-burgundy">
                    {p.title}
                  </h3>
                  <p className="mt-4 text-[0.88rem] leading-relaxed text-muted-foreground">
                    {p.body}
                  </p>
                </div>

                <div className="relative mt-10 flex items-center justify-between border-t border-border pt-5">
                  <span className="text-[0.68rem] uppercase tracking-[0.18em] text-muted-foreground">
                    {p.meta}
                  </span>
                  <span className="inline-flex -translate-x-1 items-center gap-1 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-navy opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100">
                    Open
                    <ArrowUpRight className="size-3" />
                  </span>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
