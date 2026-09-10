import { ArrowRight, BookOpen } from "lucide-react";
import portrait from "@/assets/hero-portrait.png";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 sm:pt-32 md:pt-40">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 top-0 size-[38rem] rounded-full bg-navy-veil blur-3xl"
      />
      <div className="rail relative grid items-end gap-8 pb-14 md:grid-cols-[1.05fr_0.95fr] md:gap-10 md:pb-24">
        <div className="max-w-xl">
          <p className="eyebrow inline-block text-[#A5232B]">
            Leadership · Governance · Service
          </p>
          <h1 className="mt-6 text-[2rem] leading-[1.28] text-navy sm:mt-8 sm:text-[3.4rem] lg:text-[3.5rem]">
            Strengthening people.
            <br />
            Building institutions.
            <br />
            Serving communities.
          </h1>
          <p className="mt-7 max-w-lg text-[0.95rem] leading-relaxed text-muted-foreground">
            I am Ibrahim Owolabi, an HR leader, governance steward,leadership educator, community
            advocate and mediator working across people and institutions.
          </p>
          <div className="mt-8 flex flex-col items-start gap-5 sm:mt-10 sm:flex-row sm:items-center sm:gap-4">
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3.5 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-paper transition-all hover:-translate-y-0.5 hover:bg-burgundy hover:shadow-lift"
            >
              Explore my work
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
            {/* <a
              href="#ideas"
              className="group inline-flex items-center gap-2 border-b border-transparent pb-1 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-navy transition-colors hover:border-gold"
            >
              <BookOpen className="size-4 text-gold" />
              Writing
            </a> */}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm md:max-w-none">
          <div className="absolute inset-x-6 bottom-0 top-10 rounded-t-[14rem] bg-secondary" />
          <img
            src={portrait}
            alt="Portrait of Ibrahim Owolabi"
            width={1024}
            height={1280}
            className="relative mx-auto w-full max-w-md object-contain"
          />
        </div>
      </div>

      <div className="rail">
        <div className="hairline" />
      </div>
    </section>
  );
}
