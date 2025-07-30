import Projects from "@/components/projects";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { navItems } from "@/data/nav.tsx";

export default function ProjectsPage() {
  return (
    <div className="relative w-full">
      <FloatingNav navItems={navItems} />
      <div className="min-h-screen bg-black/[0.96] antialiased pt-24">
        <h2 className="text-3xl font-bold text-center text-white mb-8">
          My Projects
        </h2>
        <Projects />
      </div>
    </div>
  );
}
