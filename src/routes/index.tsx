import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { SiteNav } from "@/components/portfolio/SiteNav";
import { Hero } from "@/components/portfolio/Hero";
import { AreasOfWork } from "@/components/portfolio/AreasOfWork";
import { PublicLeadership } from "@/components/portfolio/PublicLeadership";
import { StageAndMedia } from "@/components/portfolio/StageAndMedia";
import { IdeasAndMedia } from "@/components/portfolio/IdeasAndMedia";
import { ContactFooter } from "@/components/portfolio/ContactFooter";

const title = "Ibrahim Owolabi — Leadership, Governance, Service";
const description =
  "Ibrahim Owolabi is an HR leader, governance steward, mediator, and leadership educator strengthening people and institutions in Minneapolis, Minnesota.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <main>
        <Hero />
        <AreasOfWork />
        <PublicLeadership />
        <IdeasAndMedia />
        <StageAndMedia />
        <ContactFooter />
      </main>
      <Toaster />
    </div>
  );
}
