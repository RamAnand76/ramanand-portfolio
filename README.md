# FocusFlash Portfolio Website

Welcome to your new portfolio website! This project is built with Next.js, Tailwind CSS, and shadcn/ui, and is designed to be easily customizable.

This guide will walk you through how to update the content on your site, such as navigation links, skills, and project details.

## How to Update Your Website's Content

The content for your website is managed in a centralized `src/data` directory. By editing the files in this folder, you can easily update your site without needing to change the component code itself.

---

### 1. Updating Navigation Links

To add, remove, or change the links in the main navigation bar, you'll need to edit one file:

- **File:** `src/data/nav.tsx`

**How to Edit:**
Open this file and you will see an array of objects called `navItems`. Each object represents a link in your navigation bar.

```tsx
// src/data/nav.tsx

export const navItems = [
  {
    name: "Home",      // The text that appears for the link
    link: "/",        // The URL path for the link
    icon: <Home />,   // The icon for the link (for mobile view)
  },
  {
    name: "About",
    link: "/about",
    icon: <User />,
  },
  // Add a new link by adding a new object here
];
```

- **To add a new link:** Copy an existing object, paste it at the end of the array, and update the `name`, `link`, and `icon`.
- **To remove a link:** Simply delete the corresponding object from the array.
- **To change a link:** Edit the `name` or `link` values of an existing object.

---

### 2. Updating Your Skills

The "My Skills" section on the "About" page is also managed through a data file.

- **File:** `src/data/about.tsx`

**How to Edit:**
This file contains the `skills` array. Each object in the array represents a skill.

```tsx
// src/data/about.tsx

export const skills = [
  { name: "Python", icon: <PythonLogo /> },
  { name: "AI Frameworks", icon: <BrainCircuit /> },
  // ... more skills
];
```

- **To add a skill:** Add a new object with a `name` and an `icon`. You can use icons from the `lucide-react` library or create your own custom SVG components as shown in the file.
- **To remove a skill:** Delete the object for that skill.

---

### 3. Updating Your Projects

This is the most important section of your portfolio. It involves two steps: adding the project image and updating the project data.

#### Step 1: Add Your Project Image

First, place your project images in the correct folder.

- **Folder:** `public/projects/`

All images you want to use for your projects must be placed inside this folder. For example, if you have an image named `my-new-project.png`, you would save it here.

#### Step 2: Update the Project Data File

Next, you'll add the details of your project to the data file.

- **File:** `src/data/projects.tsx`

**How to Edit:**
This file contains the `projectsData` array. Each object represents one project card.

```tsx
// src/data/projects.tsx

export const projectsData = [
  {
    description: "A short description of your project",
    title: "Project Title",
    src: "/projects/my-new-project.png", // Path to the image you added in Step 1
    aiHint: "keywords for AI",
    ctaText: "View Project",
    ctaLink: "https://your-live-project-link.com",
    content: () => {
      return (
        <p>
          A more detailed description for the project modal.
          You can write multiple paragraphs here.
        </p>
      );
    },
  },
  // Add your next project here
];
```

- **`title`**: The title of your project.
- **`description`**: The short subtitle that appears on the project card.
- **`src`**: The path to your project image. **IMPORTANT:** This path must start with `/projects/` followed by the exact filename of the image you added to the `public/projects` folder.
- **`ctaText`**: The text for the call-to-action button (e.g., "View Project", "See the Code").
- **`ctaLink`**: The live URL to your project or its code repository.
- **`content`**: A function that returns the detailed description for the popup modal. You can use HTML tags like `<p>` for formatting.

By following these instructions, you can keep your portfolio fresh and up-to-date with your latest work.
