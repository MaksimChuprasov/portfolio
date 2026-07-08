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
    extendedDescription: "A feature-rich Android notepad application with seamless note-sharing, real-time push notifications, and built-in ad monetization..",
    features: ["Real-time note sharing", "Push notifications via Firebase", "AdMob integration", "Secure remote database sync"],
    tags: ["React Native", "TailwindCSS", "Node.js", "MongoDB"],
    images: [
      "/images/projects/notepad-1.jpg",
      "/images/projects/notepad-2.jpg",
      "/images/projects/notepad-3.jpg",
      "/images/projects/notepad-4.jpg"
    ]
  },
  {
    title: "Bar Menu & Dashboard",
    category: "Web App • Full-Stack",
    type: "mobile",
    description: "An elegant digital menu system for bars, complete with a powerful custom administration panel for real-time product management.",
    extendedDescription: "An elegant digital menu system for bars, complete with a powerful custom administration panel for real-time product management.",
    features: ["Dynamic category controls", "Real-time menu updates", "Protected admin authentication"],
    tags: ["React", "TailwindCSS", "Node.js", "MongoDB"],
    images: [
      "/images/projects/hoi-menu-1.png",
      "/images/projects/hoi-menu-2.png",
      "/images/projects/hoi-menu-3.png",
      "/images/projects/hoi-menu-4.png"
    ]
  },
  {
    title: "PAR-SEK",
    category: "Web Platform • Frontend",
    type: "web",
    description: "An analytical web platform for searching and evaluating corporate entities and manufactured products, featuring custom interactive data charts.",
    extendedDescription: "Participated in the frontend development of a data-driven web application designed for comprehensive company search and industrial product analysis. Focused on building a clean user interface and implementing dynamic analytical charts to represent complex market data visually.",
    features: [
      "Interactive data visualization and statistical charts using D3.js",
      "Advanced search functionality with complex product filtration",
      "Optimized and modular DOM manipulation with native JS and jQuery",
      "Responsive and lightweight layout tailored for deep corporate analytics"
    ],
    tags: ["HTML5", "CSS3", "JavaScript", "jQuery", "D3.js"],
    images: [
      "/images/projects/parsek-1.png",
      "/images/projects/parsek-2.png",
      "/images/projects/parsek-3.png"
    ]
  }
];