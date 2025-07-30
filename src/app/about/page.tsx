import { FloatingNav } from "@/components/ui/floating-navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Home, MessageCircle, User, Cpu, Code, BrainCircuit } from "lucide-react";
import { Badge } from "@/components/ui/badge";

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
    { name: "Python", icon: <Code className="h-5 w-5 text-primary" /> },
    { name: "AI Frameworks", icon: <BrainCircuit className="h-5 w-5 text-primary" /> },
    { name: "LLMs", icon: <Cpu className="h-5 w-5 text-primary" /> },
    { name: "RAG", icon: <BrainCircuit className="h-5 w-5 text-primary" /> },
    { name: "React", icon: <Code className="h-5 w-5 text-primary" /> },
    { name: "LLM API Integration", icon: <Code className="h-5 w-5 text-primary" /> },
    { name: "Full-Stack Development", icon: <Code className="h-5 w-5 text-primary" /> },
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

          <div className="max-w-4xl mx-auto mt-12">
            <h2 className="text-3xl font-bold text-white text-center mb-8">My Skills</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {skills.map((skill) => (
                <Badge key={skill.name} variant="secondary" className="text-lg py-2 px-4 bg-neutral-800 border-neutral-700">
                  {skill.icon}
                  <span className="ml-2">{skill.name}</span>
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
