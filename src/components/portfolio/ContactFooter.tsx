import { useState } from "react";
import { ArrowRight, Linkedin, Mail, MapPin } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const fieldClass =
  "w-full border-b border-border bg-transparent pb-3 pt-2 text-base text-navy outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-burgundy sm:text-[0.95rem]";

export function ContactFooter() {
  const [sending, setSending] = useState(false);

  return (
    <section id="contact" className="scroll-mt-24 pt-16 md:pt-28">
      <div className="rail grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:gap-14">
        <div>
          <p className="eyebrow">Contact</p>
          <h2 className="mt-4 text-3xl leading-tight text-navy md:text-[2.6rem]">
            Let&apos;s connect.
          </h2>
          <p className="mt-6 max-w-sm text-[0.95rem] leading-relaxed text-muted-foreground">
            I welcome thoughtful inquiries concerning professional leadership, governance,
            mediation, speaking, writing, and media.
          </p>

          <ul className="mt-8 space-y-4 text-[0.9rem] sm:mt-10">
            <li className="flex items-center gap-3 text-navy">
              <Mail className="size-4 text-gold" />
              <span className="text-muted-foreground">Professional email address</span>
            </li>
            <li className="flex items-center gap-3 text-navy">
              <Linkedin className="size-4 text-gold" />
              <span className="text-muted-foreground">LinkedIn profile</span>
            </li>
            <li className="flex items-center gap-3 text-navy">
              <MapPin className="size-4 text-gold" />
              <span className="text-muted-foreground">Minneapolis, Minnesota</span>
            </li>
          </ul>
        </div>

        <form
          className="rounded-2xl bg-card p-5 shadow-lift sm:p-8 md:p-10"
          onSubmit={(e) => {
            e.preventDefault();
            setSending(true);
            setTimeout(() => {
              setSending(false);
              (e.target as HTMLFormElement).reset();
              toast.success("Thank you — your message has been noted.");
            }, 600);
          }}
        >
          <div className="grid gap-7 sm:grid-cols-2">
            <label className="block">
              <span className="eyebrow">Name</span>
              <input required name="name" placeholder="Your full name" className={fieldClass} />
            </label>
            <label className="block">
              <span className="eyebrow">Email</span>
              <input
                required
                type="email"
                name="email"
                placeholder="you@example.com"
                className={fieldClass}
              />
            </label>
          </div>
          <label className="mt-7 block">
            <span className="eyebrow">Subject</span>
            <input required name="subject" placeholder="Reason for reaching out" className={fieldClass} />
          </label>
          <label className="mt-7 block">
            <span className="eyebrow">How can I help?</span>
            <textarea
              required
              name="message"
              rows={4}
              placeholder="Share a few details"
              className={`${fieldClass} resize-none`}
            />
          </label>
          <Button
            type="submit"
            disabled={sending}
            className="group mt-9 h-auto rounded-full bg-navy px-6 py-3.5 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-paper transition-all hover:-translate-y-0.5 hover:bg-burgundy hover:shadow-lift disabled:opacity-60"
          >
            {sending ? "Sending" : "Send message"}
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </form>
      </div>

      <footer className="mt-16 bg-navy py-10 text-paper sm:mt-20">
        <div className="rail flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-display text-lg tracking-tight flex gap-2">   <span className="grid size-10 place-items-center ">
              <img
                src={logo}
            alt="logo of Ibrahim Owolabi"
            className="relative mx-auto w-full max-w-md object-contain"
          />
            </span>{" "}
            Ibrahim Owolabi
          </p>
          <p className="text-[0.68rem] uppercase tracking-[0.2em] text-paper/55">
            Leadership · Governance · Service
          </p>
          <p className="text-[0.68rem] uppercase tracking-[0.2em] text-paper/40">
            Minneapolis, Minnesota
          </p>
        </div>
      </footer>
    </section>
  );
}
