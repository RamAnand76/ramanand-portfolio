import SpotlightPreview from "@/components/spotlight-demo";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { navItems } from "@/data/nav";

export default function HomePage() {
  return (
    <main>
      <FloatingNav navItems={navItems} />
      <SpotlightPreview />
    </main>
  );
}
