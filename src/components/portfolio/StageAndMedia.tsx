import { useCallback, useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PlaylistEmbed } from "@/components/portfolio/PlaylistEmbed";
import keynote from "@/assets/speaking3.jpeg";
import tv from "@/assets/tvcTransformativePower.png";
import tv2 from "@/assets/tvcInvolveAfrica.png";
import panel from "@/assets/roundtable.jpeg";
import workshop from "@/assets/speaking.jpeg";
import award from "@/assets/speaking2.jpeg";

const slides = [
  {
    image: keynote,
    kind: "Keynote",
    title: "Leadership & Service",
    place: "Moderated panel | Saint Paul, Minnesota",
  },
  {
    image: tv,
    kind: "Broadcast",
    title: "Harnessing the transformative power of young Nigerians",
    place: "Studio conversation | Lagos, Nigeria",
  },
  {
    image: panel,
    kind: "Panel",
    title: "Governance and institutional accountability",
    place: "Convening | Lagos, Nigeria ",
  },
  {
    image: tv2,
    kind: "Broadcast",
    title: "Youth development and civic participation",
    place: "Studio conversation | Lagos, Nigeria",
  },
  {
    image: workshop,
    kind: "Workshop",
    title: "Leadership education for young professionals",
    place: "Seminar series | Plymouth, Minnesota",
  },
];

export function StageAndMedia() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const sync = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setAtStart(el.scrollLeft < 8);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 8);
  }, []);

  const scrollBy = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * Math.min(el.clientWidth * 0.7, 560), behavior: "smooth" });
  };

  return (
    <section id="stage" className="scroll-mt-24 py-16 md:py-28 bg-secondary/60">
      <div className="rail grid grid-cols-[minmax(0,1fr)_auto] items-end gap-4 md:flex md:justify-between md:gap-6">
        <div>
          <h2 className="mt-4 max-w-xl text-3xl leading-tight text-navy md:text-[2.6rem]">
            Stage and Broadcast
          </h2>
        </div>
        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <Button
            type="button"
            aria-label="Previous"
            onClick={() => scrollBy(-1)}
            disabled={atStart}
            variant="outline"
            size="icon"
            className="size-10 rounded-full border-border bg-card text-navy transition-all hover:-translate-y-0.5 hover:bg-burgundy hover:text-paper sm:size-11"
          >
            <ArrowLeft className="size-4" />
          </Button>
          <Button
            type="button"
            aria-label="Next"
            onClick={() => scrollBy(1)}
            disabled={atEnd}
            size="icon"
            className="size-10 rounded-full bg-navy text-paper transition-all hover:-translate-y-0.5 hover:bg-burgundy sm:size-11"
          >
            <ArrowRight className="size-4" />
          </Button>
        </div>
      </div>

      <div className="rail mt-9 sm:mt-12">
        <div
          ref={trackRef}
          onScroll={sync}
          className="no-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2"
        >

        {slides.map((s) => (
          <figure
            key={s.title}
            className="group relative w-[82vw] max-w-[20rem] shrink-0 snap-start overflow-hidden rounded-2xl bg-card shadow-lift sm:w-[22rem] sm:max-w-none"
          >
            <img
              src={s.image}
              alt={s.title}
              loading="lazy"
              width={1200}
              height={1500}
              className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/90 via-navy/40 to-transparent p-6 pt-16">
              <p className="text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-gold">
                {s.kind}
              </p>
              <figcaption className="mt-2 font-display text-lg leading-snug text-paper">
                {s.title}
              </figcaption>
              <p className="mt-1 text-[0.72rem] tracking-wide text-paper/65">{s.place}</p>
            </div>
          </figure>
        ))}
        </div>
      </div>

      {/* The interviews playlist sits under the slides rather than as a sixth
          card, so visitors can watch on the page without leaving the slider. */}
      <div className="rail">
        <PlaylistEmbed />
      </div>
    </section>
  );
}
