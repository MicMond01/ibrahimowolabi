import type { CSSProperties } from "react";
import { Award, GraduationCap, Quote } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";
import chairImg from "@/assets/speaking3.jpeg";

const intro =
  "Ibrahim Owolabi is a human resources leader, nonprofit executive, mediator, leadership educator, and community advocate based in Minneapolis, Minnesota. With over a decade of experience across the United States and Africa, his work focuses on strengthening people, improving institutions, and serving communities.";

const narrative = [
  "His human resources experience spans government, nonprofit, behavioral health, financial services, and international development organizations. He also serves as Chair of the Hennepin County Human Resources Board and as a Member-at-Large of the Metropolitan Council Equity Advisory Committee and the Hennepin County Race Equity Advisory Council.",
  "In 2017, he co-founded Involve Africa, which supports young people’s participation in governance, civic life, community development, and peacebuilding. He is also the Founder and Executive Director of the Pan-African Development Center, a Minnesota-based nonprofit that helps African-diaspora and Black communities prepare for the workforce, develop leaders, understand public institutions, and participate in civic life.",
  "An experienced community and court-annexed mediator, Ibrahim is listed on the Minnesota Rule 114 Qualified Neutral Roster. He is also the author of The Leadership Intelligence Framework: A Model of Cognitive, Social, and Moral Leadership.",
];

const education = [
  { school: "Georgetown University", detail: "Master’s degree, Human Resources Management" },
  { school: "Lagos State University", detail: "Bachelor’s degree, Banking & Finance" },
];

const credentials = ["GPHR", "MCIPD", "CPHR", "MCIPM", "Distinguished Toastmaster"];

const conviction =
  "Leadership is a responsibility to care for people, strengthen institutions, and use entrusted opportunities with integrity.";

// Enter transition for revealed blocks: fade + rise, with an optional stagger.
const enter = (hidden: boolean, delay = 0, y = 24): CSSProperties => ({
  opacity: hidden ? 0 : 1,
  transform: hidden ? `translateY(${y}px)` : "none",
  transitionDelay: hidden ? "0ms" : `${delay}ms`,
});

export function About() {
  const head = useReveal<HTMLDivElement>();
  const facts = useReveal<HTMLDivElement>();
  const quote = useReveal<HTMLDivElement>();

  return (
    <section id="about" className="scroll-mt-28 py-16 md:py-28 bg-secondary">
      <div className="rail">
        {/* header + split intro (revealed together, staggered) */}
        <div ref={head.ref}>
          <div className="transition-all duration-700 ease-out" style={enter(head.hidden, 0, 16)}>
            <p className="eyebrow">About</p>
            <h2 className="mt-4 max-w-2xl text-3xl leading-tight text-navy md:text-[2.6rem]">
              A steward of people, institutions, and community.
            </h2>
            {/* <span className="mt-6 block h-0.5 w-14 rounded-full bg-gradient-to-r from-burgundy to-gold" /> */}
          </div>

          <div className="mt-10 grid gap-8 sm:mt-14 md:grid-cols-12 md:gap-10 lg:gap-14">
            {/* portrait */}
            <figure
              className="group relative transition-all duration-700 ease-out md:col-span-5"
              style={enter(head.hidden, 120, 28)}
            >
              <div className="relative overflow-hidden rounded-3xl bg-secondary shadow-lift ring-1 ring-navy/[0.06]">
                <img
                  src={chairImg}
                  alt="Ibrahim Owolabi speaking in his leadership work"
                  loading="lazy"
                  width={1000}
                  height={1250}
                  className="aspect-[4/5] w-full object-cover saturate-[0.8] transition-all duration-700 ease-out group-hover:scale-[1.03] group-hover:saturate-100"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/10 to-transparent" />
                <figcaption className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                  <p className="font-display text-2xl italic leading-none text-paper">Ibrahim Owolabi</p>
                  <p className="mt-2 text-[0.6rem] font-semibold uppercase tracking-[0.22em] text-gold">
                    Human Resources · Governance · Mediation
                  </p>
                </figcaption>
              </div>
            </figure>

            {/* narrative */}
            <div
              className="transition-all duration-700 ease-out md:col-span-7"
              style={enter(head.hidden, 200, 28)}
            >
              <p className="max-w-2xl font-display text-xl leading-relaxed text-navy sm:text-[1.5rem] sm:leading-[1.5]">
                {intro}
              </p>
              <div className="mt-7 space-y-5">
                {narrative.map((para) => (
                  <p
                    key={para.slice(0, 24)}
                    className="max-w-2xl text-[0.95rem] leading-relaxed text-muted-foreground"
                  >
                    {para}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* education + credentials */}
        <div
          ref={facts.ref}
          className="mt-12 grid gap-10 rounded-3xl border border-border bg-card p-8 shadow-lift transition-all duration-700 ease-out sm:mt-16 md:grid-cols-2 md:gap-14 md:p-10"
          style={enter(facts.hidden, 0, 24)}
        >
          <div>
            <p className="eyebrow inline-flex items-center gap-2">
              <GraduationCap className="size-4 text-gold" strokeWidth={1.75} />
              Education
            </p>
            <ul className="mt-6 space-y-5">
              {education.map((e) => (
                <li
                  key={e.school}
                  className="border-l-2 border-border pl-4 transition-colors duration-300 hover:border-gold"
                >
                  <p className="text-lg leading-snug text-navy">{e.school}</p>
                  <p className="mt-1 text-[0.85rem] text-muted-foreground">{e.detail}</p>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow inline-flex items-center gap-2">
              <Award className="size-4 text-gold" strokeWidth={1.75} />
              Credentials
            </p>
            <div className="mt-6 flex flex-wrap gap-2.5">
              {credentials.map((c) => (
                <span
                  key={c}
                  className="rounded-full border border-border bg-background px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-navy transition-all duration-300 hover:-translate-y-0.5 hover:border-transparent hover:bg-navy hover:text-paper"
                >
                  {c}
                </span>
              ))}
            </div>
            <p className="mt-6 max-w-sm text-[0.85rem] leading-relaxed text-muted-foreground">
              Credentialed across global and chartered HR bodies, with the Distinguished Toastmaster
              designation in leadership communication.
            </p>
          </div>
        </div>

        {/* guiding conviction */}
        <div ref={quote.ref}>
          <figure
            className="relative mt-12 overflow-hidden rounded-3xl bg-navy px-7 py-10 text-paper shadow-lift transition-all duration-700 ease-out sm:mt-16 sm:px-12 sm:py-14"
            style={enter(quote.hidden, 0, 28)}
          >
            <Quote
              className="absolute -right-2 -top-3 size-28 text-gold/10"
              strokeWidth={1}
              aria-hidden
            />
            <span
              aria-hidden
              className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-gold to-burgundy"
            />
            <blockquote className="relative max-w-3xl font-display text-2xl italic leading-snug sm:text-[1.9rem] sm:leading-[1.35]">
              “{conviction}”
            </blockquote>
            <figcaption className="relative mt-7 flex items-center gap-3 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-gold">
              <span className="h-px w-8 bg-gold" />
              Ibrahim Owolabi
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
