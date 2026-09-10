import { Users, Landmark, Scale } from "lucide-react";

const areas = [
  {
    icon: Users,
    title: "Human Resources Leadership",
    body: "Employee and labor relations, workplace investigations, performance management, workforce systems, and organizational effectiveness.",
  },
  {
    icon: Landmark,
    title: "Governance & Public Leadership",
    body: "Governance oversight, institutional accountability, civic participation, and inclusive public decision-making.",
  },
  {
    icon: Scale,
    title: "Mediation & Leadership Education",
    body: "Community and court-annexed mediation, conflict resolution, leadership communication, and stewardship.",
  },
];

export function AreasOfWork() {
  return (
    <section id="work" className="rail scroll-mt-28 py-16 md:py-28">
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="eyebrow">Areas of work</p>
          <h2 className="mt-4 max-w-xl text-3xl leading-tight text-navy md:text-[2.6rem]">
            A practice grounded in stewardship.
          </h2>
        </div>
      </div>

      <div className="mt-10 grid gap-4 sm:mt-14 sm:gap-5 md:grid-cols-3">
        {areas.map(({ icon: Icon, title, body }, i) => (
          <article
            key={title}
            className="group relative overflow-hidden rounded-2xl bg-card p-6 shadow-lift transition-all duration-500 hover:-translate-y-1 hover:shadow-glass sm:p-8"
          >
            <span className="absolute inset-x-0 top-0 h-px bg-gold opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="flex items-center justify-between">
              <span className="grid size-11 place-items-center rounded-full bg-secondary text-navy transition-all duration-500 group-hover:rotate-3 group-hover:bg-burgundy group-hover:text-paper">
                <Icon className="size-5" strokeWidth={1.5} />
              </span>
              <span className="font-display text-sm text-muted-foreground">0{i + 1}</span>
            </div>
            <h3 className="mt-8 text-xl leading-snug text-navy">{title}</h3>
            <p className="mt-4 text-[0.88rem] leading-relaxed text-muted-foreground">{body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
