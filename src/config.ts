import profileImage from "./assets/profile.jpg";
import intelDrawImage from "./assets/projects/intel-draw.png";
import workLensImage from "./assets/projects/work-lens.png";

export const siteConfig = {
  name: "Abdulwahid Hussen",
  title: "Software Engineer | AI & Backend Systems",
  description:
    "Building intelligent AI systems and scalable backend infrastructure with a focus on performance and reliability. I specialize in architecting robust, production-ready solutions that seamlessly integrate advanced AI capabilities with mission-critical business workflows.",
  accentColor: "#1d4ed8",
  social: {
    email: "abdulwahidhussen750@gmail.com",
    linkedin: "https://linkedin.com/in/abdulwahidhussen",
    github: "https://github.com/AbdulwahidHusein",
    twitter: "",
    phone: "+251991290496",
  },
  siteUrl: "https://abdulwahid.dev",
  keywords: [
    "Software Engineer Ethiopia",
    "Abdulwahid Hussen",
    "AI Engineer Ethiopia",
    "Full Stack Developer Ethiopia",
    "Backend Engineer",
    "Generative AI Specialist",
    "System Architect",
    "A2SV Alumni",
    "Addis Ababa Developer",
  ],
  aboutMe:
    "Software Engineer specializing in Generative AI and scalable backend infrastructure. With a strong foundation in Data Structures & Algorithms (1000+ problems solved), I focus on building efficient, reliable systems that deliver real-world impact.",
  skills: [
    "Generative AI",
    "AI Agents",
    "System Architecture",
    "Python",
    "Golang",
    "TypeScript",
    "React",
    "Next.js",
    "PostgreSQL",
    "MongoDB",
    "AWS",
    "Docker",
    "CI/CD",
  ],
  projects: [
    {
      name: "Intel Draw",
      description:
        "Turn your text into instant visuals. Grow your brand with prompts and marketing funnel solutions. Features lightning-fast generation, seamless collaboration, and export in any format.",
      link: "https://inteldraw.com/",
      image: intelDrawImage,
      skills: ["Generative AI", "React", "Node.js"],
    },
    {
      name: "Work Lens",
      description:
        "AI Workspace that connects to your existing tools. Stop switching between AI assistants and work tools. WorkLens brings AI directly into your workflow with GitHub, Google, and Slack integrations.",
      link: "https://worklense.com/",
      image: workLensImage,
      skills: ["Next.js", "Python", "MongoDB", "AI Agents"],
    },
  ],
  experience: [
    {
      company: "Amplitude Ventures",
      link: "http://amplitude.ventures/",
      title: "Generative AI Engineer",
      dateRange: "07/2023 – Present",
      description:
        "Engineered the core AI engine for a content creation platform used by 15+ marketing specialists. Optimized RAG workflows on AWS and deployed 3 scalable AI solutions, directly driving a 40% increase in user engagement and response accuracy.",
    },
    {
      company: "AIHLPR",
      link: "https://aihlpr.com/",
      title: "AI Automation Engineer",
      dateRange: "03/2024 – 01/2025",
      description:
        "Architected autonomous agents that eliminated manual data bottlenecks, increasing operational efficiency by 60%. Integrated large-scale AI models for real-time data processing, enabling faster, data-driven decision making for enterprise clients.",
    },
    {
      company: "Eskalate",
      link: "https://eskalate.io/",
      title: "Full-Stack Developer",
      dateRange: "02/2021 – 07/2024",
      description:
        "Built the backbone of a high-volume restaurant ERP system, designing 50+ scalable RESTful API endpoints in Go. Led backend integration for a team of 6, streamlining development cycles and accelerating feature launches by 30%.",
    },
  ],
  education: [
    {
      school: "Africa To Silicon Valley | ASV",
      degree: "Data Structures & Algorithms Expert",
      dateRange: "12/2023 – Present",
      description:
        "Elite engineering academy. Solved 1000+ complex algorithmic problems on LeetCode/Codeforces. Selected for top-tier placement program with a focus on system design and scalable architecture.",
    },
    {
      school: "Adama Science and Technology University",
      degree: "Bachelor's degree in Software Engineering",
      dateRange: "11/2022 – 05/2026",
      description: "CGPA: 3.9/4.0. Specialized in Distributed Systems and Advanced Database Architecture.",
    },
  ],
};
