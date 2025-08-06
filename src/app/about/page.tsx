"use client";

import { FloatingNav } from "@/components/ui/floating-navbar";
import { Card, CardContent } from "@/components/ui/card";
import { navItems } from "@/data/nav.tsx";
import { IconCloud } from "@/components/ui/icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];

export default function AboutPage() {
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}`,
  );

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
          </div>

          <div className="max-w-6xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-1">
              <img
                src="/projects/me.png"
                alt="Ramanand R"
                className="rounded-lg"
                data-ai-hint="personal photo"
              />
            </div>
            <div className="md:col-span-2">
              <Card className="bg-black border-neutral-800">
                <CardContent className="pt-6">
                  <p className="text-xl text-neutral-200 mb-4 text-center md:text-left">
                    Full-Stack Developer & AI Specialist
                  </p>
                  <p className="text-neutral-300 leading-relaxed">
                    I am a passionate Full-Stack Developer with deep expertise in AI, particularly in Python and its powerful frameworks. I specialize in building intelligent applications leveraging Large Language Models (LLMs), Retrieval-Augmented Generation (RAG) systems, and seamless API integrations with modern frontend frameworks like React. I thrive on solving complex problems and turning innovative ideas into reality.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="max-w-5xl mx-auto mt-16">
            <h2 className="text-3xl font-bold text-white text-center mb-8">My Skills</h2>
            <div className="relative flex size-full items-center justify-center overflow-hidden">
              <IconCloud images={images} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}