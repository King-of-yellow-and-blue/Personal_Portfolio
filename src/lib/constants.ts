export const siteConfig = {
  name: "Swastik Joshi",
  title: "Swastik Joshi — AI/ML & Full Stack Developer",
  description:
    "Portfolio of Swastik Joshi — AI/ML Intern, Full Stack Web Developer, and Content Specialist. Building intelligent digital experiences.",
  url: "https://swastikjoshi.dev",
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
] as const;

export const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/King-of-yellow-and-blue",
    icon: "github" as const,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/swastik-joshi/",
    icon: "linkedin" as const,
  },
  {
    label: "Twitter",
    href: "https://x.com/Swastik_A_Joshi",
    icon: "twitter" as const,
  },
];

export const skills = [
  { name: "Python", category: "language" },
  { name: "TypeScript", category: "language" },
  { name: "JavaScript", category: "language" },
  { name: "React", category: "frontend" },
  { name: "Next.js", category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },
  { name: "Node.js", category: "backend" },
  { name: "TensorFlow", category: "ai-ml" },
  { name: "PyTorch", category: "ai-ml" },
  { name: "Scikit-Learn", category: "ai-ml" },
  { name: "Pandas", category: "ai-ml" },
  { name: "MongoDB", category: "backend" },
  { name: "PostgreSQL", category: "backend" },
  { name: "Git", category: "tools" },
  { name: "Docker", category: "tools" },
  { name: "Figma", category: "tools" },
] as const;

export const services = [
  {
    id: "ai-ml",
    title: "AI & Machine Learning",
    description:
      "Building intelligent systems with cutting-edge ML models. From data analysis and model training to deploying AI-powered solutions that solve real-world problems. Starting from ₹15,000 — custom quote based on project scope",
    features: [
      "Machine Learning Model Development",
      "Data Analysis & Visualization",
      "Natural Language Processing",
      "Computer Vision Applications",
      "AI-Powered Automation",
    ],
    icon: "brain" as const,
  },
  {
    id: "fullstack",
    title: "Full Stack Web Development",
    description:
      "Crafting modern, responsive web applications from frontend to backend. Using the latest technologies to deliver seamless user experiences. Starting from ₹8,000 — simple sites to full web apps",
    features: [
      "React & Next.js Applications",
      "RESTful & GraphQL APIs",
      "Database Design & Optimization",
      "Authentication & Authorization",
      "Cloud Deployment & DevOps",
    ],
    icon: "code" as const,
  },
  {
    id: "content",
    title: "AI Chatbot & Business Automation",
    description:
      "I build custom AI chatbots and automation workflows for businesses — customer support bots, lead generation assistants, internal tools, and process automation. Starting from ₹12,000",
    features: [
      "Custom AI Chatbot for your website",
      "WhatsApp / Telegram Bot Integration",
      "Lead Capture & Auto-Response Systems",
      "Business Process Automation",
      "SEO-Optimized Writing",
    ],
    icon: "pen-tool" as const,
  },
] as const;

export const projects = [
  {
    id: 1,
    title: "LUMINA",
    slug: "ai-tutor system",
    description:
      "An AI-powered tutor that diagnoses knowledge gaps and generates personalized structured learning paths for students.",
    tags: ["Python", "OpenAI", "Node.js", "React"],
    category: "ai-ml",
    image: "/images/projects/sentiment.jpg",
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "AmbientMind",
    slug: "Health AI System",
    description:
      "A mental health AI that analyzes behavioral signals to generate early insights on emotional well-being.",
    tags: ["Python", "TensorFlow", "Flask", "React"],
    category: "ai-ml",
    image: "/images/projects/ecommerce.jpg",
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Smart Study Planner",
    slug: "smart-study-planner",
    description:
      "An AI-driven study planner that creates personalized schedules based on learning patterns, exam dates, and subject difficulty.",
    tags: ["React", "Node.js", "OpenAI", "PostgreSQL"],
    category: "ai-ml",
    image: "/images/projects/planner.jpg",
    demoUrl: "#",
    githubUrl: "#",
  },
  /*
  {
    id: 4,
    title: "Portfolio Dashboard",
    slug: "portfolio-dashboard",
    description:
      "A real-time analytics dashboard with interactive charts, data filtering, and customizable widgets for tracking key metrics.",
    tags: ["Next.js", "D3.js", "Tailwind CSS", "Prisma"],
    category: "web",
    image: "/images/projects/dashboard.jpg",
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 5,
    title: "Image Classification API",
    slug: "image-classification",
    description:
      "A deep learning-based image classification API that can identify objects, scenes, and patterns from uploaded images.",
    tags: ["Python", "PyTorch", "FastAPI", "Docker"],
    category: "ai-ml",
    image: "/images/projects/classification.jpg",
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 6,
    title: "Chat Application",
    slug: "chat-app",
    description:
      "A real-time messaging app with WebSocket support, group chats, file sharing, and end-to-end encryption.",
    tags: ["React", "Socket.io", "Express", "MongoDB"],
    category: "web",
    image: "/images/projects/chat.jpg",
    demoUrl: "#",
    githubUrl: "#",
  },
  */
] as const;

export const experiences = [
  {
    title: "Content Specialist",
    company: "Edugreed",
    type: "Part-time (Hybrid)",
    period: "Sep 2025 – Feb 2026",
    description:
      "Created engaging educational content across multiple domains. Collaborated with the content team to develop courses and learning materials that reached thousands of students.",
    skills: ["Content Writing", "Technical Writing", "SEO", "Research"],
  },
] as const;

export const education = [
  {
    degree: "B.Tech in Computer Science & Engineering",
    institution: "Shree Swaminarayan Institute of Technology (SSIT)",
    period: "July 2025 – July 2029",
    status: "Currently in 2nd Semester",
    description:
      "Pursuing a comprehensive education in computer science with a focus on AI/ML and software development.",
  },
] as const;
