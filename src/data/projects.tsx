export const projectsData = [
  {
    title: "LegalIntelligencePlatform",
    description: "AI-powered legal solutions for contract reviews and compliance.",
    src: "/projects/legaltech.png",
    aiHint: "legal document",
    ctaText: "View Project",
    ctaLink: "https://legal-tech-v0.vercel.app/",
    content: () => {
      return (
        <>
          <p>
            An AI-driven platform designed to empower businesses and individuals with intelligent legal solutions.
          </p>
          <p>
            It helps streamline contract reviews, ensure regulatory compliance, and ultimately protect user interests by leveraging the power of advanced AI. Built with Next.js and Supabase for a robust and scalable architecture.
          </p>
        </>
      );
    },
  },
  {
    title: "Prathividhi",
    description: "A forum for citizens to discuss and solve societal problems.",
    src: "/projects/prathividhi.png",
    aiHint: "community forum",
    ctaText: "View Project",
    ctaLink: "https://prathividhi.web.app/",
    content: () => {
      return (
        <>
          <p>
            My first React application, built to assess my self-taught React skills. 
          </p>
          <p>
            Prathividhi is a forum where users can post civic problems they face, and other users can collaborate to suggest and discuss solutions. It’s a platform for community empowerment and problem-solving.
          </p>
        </>
      );
    },
  },
  {
    title: "ScriptForge",
    description: "AI-assisted screenplay writer to streamline your creative process.",
    src: "/projects/scriptforge.png",
    aiHint: "screenwriting AI",
    ctaText: "View Project",
    ctaLink: "https://script-forge-two.vercel.app/",
    content: () => {
      return (
        <>
          <p>
            ScriptForge is an AI-assisted screenplay writer that transforms a simple story thread into a structured series of key events. It provides an organized workspace for writers to craft their screenplay with a natural flow.
          </p>
          <h4 className="font-bold mt-4">Features:</h4>
          <ul className="list-disc pl-4">
            <li>AI-suggested scenes based on story threads.</li>
            <li>Emotion enhancement for dialogue and scenes.</li>
            <li>Tools to make scenes more cinematic.</li>
            <li>In-depth character analysis.</li>
          </ul>
        </>
      );
    },
  },
];
