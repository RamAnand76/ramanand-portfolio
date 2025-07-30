import SpotlightPreview from "@/components/spotlight-demo";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { Home as HomeIcon, MessageCircle, User } from "lucide-react";

export default function HomePage() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <HomeIcon className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "/about",
      icon: <User className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contact",
      link: "/contact",
      icon: (
        <MessageCircle className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];
  return (
    <main>
      <FloatingNav navItems={navItems} />
      <SpotlightPreview />
    </main>
  );
}
