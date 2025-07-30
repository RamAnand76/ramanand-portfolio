import { FloatingNav } from "@/components/ui/floating-navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Home, MessageCircle, User, Code, BrainCircuit, Bot, FileJson, Layers, Wind } from "lucide-react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

const PythonLogo = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="#3776ab" d="M11.92,12.22c-0.38-0.03-0.76-0.05-1.14-0.05c-0.8,0-1.58,0.11-2.33,0.31c-0.79,0.21-1.5,0.52-2.12,0.92c-0.58,0.37-1.05,0.82-1.42,1.33c-0.35,0.49-0.6,1.02-0.74,1.57c-0.14,0.55-0.2,1.11-0.2,1.66c0,1.06,0.26,2.05,0.78,2.9c0.5,0.82,1.19,1.48,2.04,1.93c0.85,0.45,1.83,0.69,2.89,0.69c0.8,0,1.58-0.11,2.33-0.31c0.79-0.21,1.5-0.52,2.12-0.92c0.58-0.37,1.05-0.82,1.42-1.33c0.35-0.49,0.6-1.02,0.74-1.57c0.14-0.55,0.2-1.11,0.2-1.66c0-1.06-0.26-2.05-0.78-2.9c-0.5-0.82-1.19-1.48-2.04-1.93C13.75,12.39,12.77,12.16,11.92,12.22z M10.23,19.48c-0.55,0-1.03-0.18-1.42-0.53c-0.4-0.35-0.6-0.8-0.6-1.3c0-0.55,0.2-1.03,0.59-1.42c0.4-0.39,0.88-0.59,1.42-0.59c0.55,0,1.03,0.18,1.42,0.53c0.4,0.35,0.6,0.8,0.6,1.3c0,0.55-0.2,1.03-0.59,1.42C11.15,19.3,10.68,19.48,10.23,19.48z"/><path fill="#ffde57" d="M12.08,11.78c0.38,0.03,0.76,0.05,1.14,0.05c0.8,0,1.58-0.11,2.33-0.31c0.79-0.21,1.5-0.52,2.12-0.92c0.58-0.37,1.05-0.82,1.42-1.33c0.35-0.49,0.6-1.02,0.74-1.57c0.14-0.55,0.2-1.11,0.2-1.66c0-1.06-0.26-2.05-0.78-2.9c-0.5-0.82-1.19-1.48-2.04-1.93c-0.85-0.45-1.83-0.69-2.89-0.69c-0.8,0-1.58,0.11-2.33,0.31c-0.79-0.21-1.5-0.52-2.12-0.92c-0.58-0.37-1.05-0.82-1.42-1.33c-0.35-0.49-0.6-1.02-0.74-1.57c-0.14-0.55-0.2-1.11-0.2-1.66c0-1.06,0.26-2.05,0.78-2.9C4.01,2.22,3.32,1.56,2.47,1.11C1.62,0.66,0.64,0.42-0.27,0.42c-0.15,0-0.3,0-0.45,0.02v4.54c0.38-0.03,0.76-0.05,1.14-0.05c0.8,0,1.58,0.11,2.33,0.31c0.79,0.21,1.5,0.52,2.12,0.92c0.58,0.37,1.05,0.82,1.42,1.33c0.35,0.49,0.6,1.02,0.74,1.57c0.14,0.55,0.2,1.11,0.2,1.66c0,1.06-0.26,2.05-0.78,2.9c-0.5,0.82-1.19,1.48-2.04,1.93c-0.85,0.45-1.83,0.69-2.89,0.69H0v10.5h4.48c0.15,0,0.3,0,0.45-0.02v-4.54c-0.38,0.03-0.76,0.05-1.14,0.05c-0.8,0-1.58-0.11-2.33-0.31c-0.79-0.21-1.5-0.52-2.12-0.92c-0.58-0.37-1.05-0.82-1.42-1.33c-0.35-0.49-0.6-1.02-0.74-1.57c-0.14-0.55-0.2-1.11-0.2-1.66c0-1.06,0.26-2.05,0.78-2.9c0.5-0.82,1.19-1.48,2.04-1.93c0.85-0.45,1.83-0.69,2.89-0.69c0.8,0,1.58,0.11,2.33,0.31c0.79,0.21,1.5,0.52,2.12,0.92c0.58,0.37,1.05,0.82,1.42,1.33c0.35,0.49,0.6,1.02,0.74,1.57c0.14,0.55,0.2,1.11,0.2,1.66c0,1.06-0.26,2.05-0.78,2.9c-0.5,0.82-1.19,1.48-2.04,1.93c-0.85,0.45-1.83,0.69-2.89,0.69H4.92v4.54h7.15V11.78z M13.77,4.52c0.55,0,1.03,0.18,1.42,0.53c0.4,0.35,0.6,0.8,0.6,1.3c0,0.55-0.2,1.03-0.59,1.42c-0.4,0.39-0.88,0.59-1.42,0.59c-0.55,0-1.03-0.18-1.42-0.53c-0.4-0.35-0.6-0.8-0.6-1.3c0-0.55,0.2-1.03,0.59-1.42C12.85,4.7,13.32,4.52,13.77,4.52z"/></svg>
);
const ReactLogo = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="#61dafb" d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20ZM12,5a7,7,0,0,0-7,7,1,1,0,0,0,2,0,5,5,0,0,1,5-5,1,1,0,0,0,0-2Zm0,4a3,3,0,0,0-3,3,1,1,0,0,0,2,0,1,1,0,0,1,1-1,1,1,0,0,0,0-2Z"/></svg>
);
const NextjsLogo = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M16.4,8.5h-2.3L12,12l2.1,3.5h2.3L14.3,12Zm-5.3,0H8.9v7h2.2V8.5Z"/><path fill="currentColor" d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"/></svg>
);
const TypescriptLogo = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="#3178c6" d="M14.1,10.39h-3.32v10.5h3.32c3.54,0,4.62-2.34,4.62-5.25C18.72,12.73,17.64,10.39,14.1,10.39Zm-0.66,8.22h-1.2v-6.3h1.2c2.22,0,2.82,1.26,2.82,3.15C16.28,17.35,15.68,18.61,13.44,18.61Z"/><path fill="#3178c6" d="M22.9,3.52V0.4H1.1v23.2h21.8V3.52H22.9ZM5.28,18.61c-0.84,1.38-2.1,2.28-3.78,2.28H0.3V3.1h5.34c3.42,0,5.22,2.04,5.22,5.16c0,2.16-1.02,3.84-2.7,4.68l3.18,5.67H7.74L5.28,14.23v4.38Z"/></svg>
);
const TailwindLogo = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="#38bdf8" d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm-3.1,8.3a1,1,0,0,1,1-1h6.2a1,1,0,1,1,0,2H14.8l-1.8,1.8a1,1,0,0,1-1.4,0L8.9,10.4A1,1,0,0,1,8.9,10.3ZM15.1,14.4a1,1,0,0,1-1,1H7.9a1,1,0,0,1,0-2H9.2l1.8-1.8a1,1,0,0,1,1.4,0l2.7,2.7A1,1,0,0,1,15.1,14.4Z"/></svg>
);


export default function AboutPage() {
  const navItems = [
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

  const skills = [
    { name: "Python", icon: <PythonLogo /> },
    { name: "AI Frameworks", icon: <BrainCircuit /> },
    { name: "LLMs", icon: <Bot /> },
    { name: "RAG", icon: <FileJson /> },
    { name: "React", icon: <ReactLogo /> },
    { name: "LLM API Integration", icon: <Layers /> },
    { name: "Full-Stack Development", icon: <Code /> },
    { name: "Next.js", icon: <NextjsLogo /> },
    { name: "TypeScript", icon: <TypescriptLogo /> },
    { name: "Tailwind CSS", icon: <TailwindLogo /> },
  ];

  return (
    <div className="relative w-full bg-black/[0.96] antialiased">
      <FloatingNav navItems={navItems} />
      <div className="min-h-screen pt-24 sm:pt-32 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-white">
              About Me
            </h1>
            <p className="mt-4 text-lg text-neutral-300">
              Ramanand R
            </p>
            <p className="mt-6 text-xl text-neutral-200">
              Full-Stack Developer & AI Specialist
            </p>
          </div>

          <div className="max-w-4xl mx-auto mt-12">
            <Card className="bg-black border-neutral-800">
              <CardContent className="pt-6">
                <p className="text-neutral-300 leading-relaxed">
                  I am a passionate Full-Stack Developer with deep expertise in AI, particularly in Python and its powerful frameworks. I specialize in building intelligent applications leveraging Large Language Models (LLMs), Retrieval-Augmented Generation (RAG) systems, and seamless API integrations with modern frontend frameworks like React. I thrive on solving complex problems and turning innovative ideas into reality.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="max-w-5xl mx-auto mt-12">
            <h2 className="text-3xl font-bold text-white text-center mb-8">My Skills</h2>
            <div className="flex flex-col items-center justify-center">
              <InfiniteMovingCards
                items={skills}
                direction="right"
                speed="slow"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
