import { FloatingNav } from "@/components/ui/floating-navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Mail } from "lucide-react";
import ContactForm from "@/components/contact-form";
import { navItems } from "@/data/nav.tsx";

export default function ContactPage() {
  return (
    <div className="relative w-full bg-black/[0.96] antialiased">
      <FloatingNav navItems={navItems} />
      <div className="min-h-screen pt-24 sm:pt-32 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-2xl sm:text-3xl font-bold text-white">
              Get in Touch
            </h1>
            <p className="mt-4 text-base text-neutral-300">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>
          </div>

          <div className="max-w-4xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-black border-neutral-800">
              <CardContent className="pt-6 flex flex-col items-center text-center">
                <Mail className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold text-white">Email</h3>
                <p className="text-neutral-400 mt-2">
                  <a href="mailto:ramanandr7666@gmail.com" className="hover:text-primary transition-colors">
                    ramanandr7666@gmail.com
                  </a>
                </p>
              </CardContent>
            </Card>
            <Card className="bg-black border-neutral-800">
              <CardContent className="pt-6 flex flex-col items-center text-center">
                <Linkedin className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold text-white">LinkedIn</h3>
                <p className="text-neutral-400 mt-2">
                  <a href="https://www.linkedin.com/in/ramanand-r-53919821b" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                    Ramanand R
                  </a>
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="max-w-2xl mx-auto mt-12">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
