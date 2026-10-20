import { createFileRoute } from "@tanstack/react-router";
import { Presentation } from "@/components/Presentation";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AI-Native Observability — workshop" },
      { name: "description", content: "A full-screen slide deck drawn as a node graph with a gliding camera and branching paths." },
      { property: "og:title", content: "AI-Native Observability — workshop" },
      { property: "og:description", content: "Slides as cards on one canvas, connected by edges, with branches you can walk and return from." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Presentation,
});
