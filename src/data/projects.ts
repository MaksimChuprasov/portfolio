export interface Project {
  title: string;
  category: string;
  type: "mobile" | "web";
  description: string;
  extendedDescription: string;
  features: string[];
  tags: string[];
  images: string[];
}

export const projectList: Project[] = [
  {
    title: "Notepad App",
    category: "Mobile App • Full-Stack",
    type: "mobile",
    description: "A feature-rich Android notepad application with seamless note-sharing, real-time push notifications, and built-in ad monetization.",
    extendedDescription: "A complete mobile solution designed for productivity...",
    features: ["Real-time note sharing", "Push notifications via Firebase", "AdMob integration", "Secure remote database sync"],
    tags: ["React Native", "TailwindCSS", "Node.js", "MongoDB"],
    images: [
      "/images/projects/notepad.png", // Первый скриншот (главный)
      "/images/projects/notepad-2.png", // Второй скриншот (например, экран шеринга)
      "/images/projects/notepad-3.png"  // Третий скриншот
    ]
  },
  {
    title: "Bar Menu & Dashboard",
    category: "Web App • Full-Stack",
    type: "mobile",
    description: "An elegant digital menu system for bars, complete with a powerful custom administration panel for real-time product management.",
    extendedDescription: "A two-sided application built for modern venues...",
    features: ["Dynamic category controls", "Real-time menu updates", "Protected admin authentication"],
    tags: ["React", "TailwindCSS", "Node.js", "MongoDB"],
    images: [
      "/images/projects/bar-dashboard.png",
      "/images/projects/bar-menu-mobile.png"
    ]
  }
];