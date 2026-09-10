import board from "@/assets/lead-board.jpg";
import council from "@/assets/lead-council.jpg";

const appointments = [
  {
    role: "Chair",
    institution: "Hennepin County Human Resources Board",
    image: board,
    appointment: "Current appointment",
  },
  {
    role: "Member-at-Large",
    institution: "Metropolitan Council Equity Advisory Committee",
    image: council,
  },
  {
    role: "Member-at-Large",
    institution: "Hennepin County Race Equity Advisory Council",
    image: board,
  },
];

export function PublicLeadership() {
  return (
    <section id="leadership" className="scroll-mt-24 border-y border-border bg-secondary py-16 text-navy md:py-28">
      <div className="rail">
        <p className="eyebrow text-burgundy">Public leadership</p>
        <h2 className="mt-4 max-w-2xl text-3xl leading-tight text-navy md:text-[2.6rem]">
          Service through public and civic institutions.
        </h2>

        <div className="mt-10 grid gap-8 sm:mt-14 md:grid-cols-3 md:gap-6">
          {appointments.map((a) => (
            <article key={a.institution} className="group">
              <div className="overflow-hidden rounded-2xl bg-card shadow-lift transition-all duration-500 group-hover:-translate-y-1 group-hover:shadow-glass">
                <img
                  src={a.image}
                  alt={`Ibrahim Owolabi serving with the ${a.institution}`}
                  loading="lazy"
                  width={1200}
                  height={900}
                  className="aspect-[4/3] w-full object-cover saturate-[0.75] transition-all duration-700 group-hover:scale-[1.04] group-hover:saturate-100"
                />
              </div>
              <div className="mt-5 border-t border-border pt-5">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-burgundy flex gap-2 text-center">
                  {a.role}
                  <span className=" text-[0.62rem] uppercase text-muted-foreground">
                    {a.appointment}
                  </span>
                </p>
                <h3 className="mt-3 text-xl leading-snug text-navy transition-colors group-hover:text-burgundy">{a.institution}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
