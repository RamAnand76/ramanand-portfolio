import { Code, Home, MessageCircle, User } from "lucide-react";

export const navItems = [
  {
    name: "Home",
    link: "/",
    icon: <Home className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "About",
    link: "/about",
    icon: <User className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
      name: "Projects",
      link: "/projects",
      icon: <Code className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Contact",
    link: "/contact",
    icon: <MessageCircle className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
];
