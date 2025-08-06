import Projects from "@/components/projects";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { navItems } from "@/data/nav.tsx";

export default function ProjectsPage() {
  return (
    <div className="relative w-full">
      <FloatingNav navItems={navItems} />
      <div className="min-h-screen bg-black/[0.96] antialiased pt-24 sm:pt-32 pb-16">
        <h1 className="text-3xl font-bold text-center text-white mb-8">
          My Projects
        </h1>
        <Projects />
      </div>
    </div>
  );
}
