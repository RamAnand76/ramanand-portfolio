export const projectsData = [
  {
    description: "AI-Powered Code Assistant",
    title: "Genie",
    src: "/projects/genie.png",
    aiHint: "robot code",
    ctaText: "View Project",
    ctaLink: "#",
    content: () => {
      return (
        <p>
          Genie is a code assistant that uses generative AI to help developers write code faster and more efficiently. 
          It can autocomplete code, suggest solutions, and even write entire functions based on natural language descriptions.
        </p>
      );
    },
  },
  {
    description: "E-commerce Recommendation Engine",
    title: "InsightCart",
    src: "/projects/insight-cart.png",
    aiHint: "shopping cart",
    ctaText: "View Project",
    ctaLink: "#",
    content: () => {
      return (
        <p>
          InsightCart is a recommendation engine for e-commerce websites. 
          It uses machine learning to analyze user behavior and provide personalized product recommendations, increasing sales and customer satisfaction.
        </p>
      );
    },
  },
  {
    description: "Interactive Data Visualization Tool",
    title: "DataSphere",
    src: "/projects/datasphere.png",
    aiHint: "data chart",
    ctaText: "View Project",
    ctaLink: "#",
    content: () => {
      return (
        <p>
          DataSphere is a web-based tool for creating interactive data visualizations. 
          It allows users to upload their own data and create beautiful, engaging charts and graphs with just a few clicks.
        </p>
      );
    },
  },
  {
    description: "Personal Portfolio Website",
    title: "My Portfolio",
    src: "/projects/portfolio.png",
    aiHint: "portfolio website",
    ctaText: "View Project",
    ctaLink: "#",
    content: () => {
      return (
        <p>
          A personal portfolio website built with Next.js and Tailwind CSS. 
          It features a clean, modern design and showcases my skills and projects.
        </p>
      );
    },
  },
];
