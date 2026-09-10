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
  return (
    <section id="ideas" className="scroll-mt-24 py-16 md:py-28">
      <div className="rail">
        <p className="eyebrow">Ideas & media</p>
        <h2 className="mt-4 max-w-xl text-3xl leading-tight text-navy md:text-[2.6rem]">
          Writing and public conversations.
        </h2>

        <div className="mt-10 grid gap-4 sm:mt-14 sm:gap-5 md:grid-cols-3">
          {pieces.map((p) => (
            <a
              key={p.title}
              target="_blank"
              href={p.link}
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl bg-card p-6 shadow-lift transition-all duration-500 hover:-translate-y-1 hover:shadow-glass sm:p-8"
            >
              <span className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-transparent transition-colors duration-500 group-hover:ring-gold/60" />
              <div>
                <div className="flex items-start justify-between gap-4">
                  <p className="text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-burgundy">
                    {p.tag}
                  </p>
                  <span className="grid size-9 shrink-0 place-items-center rounded-full bg-secondary text-navy transition-all duration-500 group-hover:bg-burgundy group-hover:text-paper">
                    <ArrowUpRight className="size-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
                <h3 className="mt-7 text-xl leading-snug text-navy">{p.title}</h3>
                <p className="mt-4 text-[0.88rem] leading-relaxed text-muted-foreground">{p.body}</p>
              </div>
              <div className="mt-10 flex items-center justify-between border-t border-border pt-5">
                <span className="text-[0.68rem] uppercase tracking-[0.18em] text-muted-foreground">
                  {p.meta}
                </span>
                <span className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-navy opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  Open
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
