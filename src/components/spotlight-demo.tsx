import React from "react";
import { cn } from "@/lib/utils";
import { Spotlight } from "@/components/ui/spotlight";
import { Button } from "@/components/ui/moving-border";

export default function SpotlightPreview() {
  return (
    <div className="relative flex h-screen w-full flex-col overflow-hidden rounded-md bg-black/[0.96] antialiased items-center justify-center">
      <div
        className={cn(
          "pointer-events-none absolute inset-0 [background-size:40px_40px] select-none",
          "[background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]",
        )}
      />

      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="white"
      />
      <div className="relative z-10 mx-auto w-full max-w-7xl p-4 pt-20 md:pt-0 text-center">
        <h1 className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-4xl font-bold text-transparent md:text-7xl">
          Creative Frontend Developer
        </h1>
        <p className="mx-auto mt-4 max-w-lg text-center text-base font-normal text-neutral-300">
          I build beautiful and interactive user interfaces with a passion for AI and Python.
          Let's create something amazing together.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button
            borderRadius="1.75rem"
            className="border-neutral-200 bg-transparent text-white dark:border-slate-800"
          >
            My Work
          </Button>
          <Button
            borderRadius="1.75rem"
            containerClassName="h-12 w-40"
            className="bg-slate-900 text-white"
          >
            Contact Me
          </Button>
        </div>
      </div>
    </div>
  );
}
