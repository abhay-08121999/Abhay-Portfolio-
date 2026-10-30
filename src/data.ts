export type Project = {
  id: string;
  title: string;
  description: string;
  stack: string[];
  features: string[];
  problem: string;
  solution: string;
  architecture: string;
  challenges: string;
  results: string;
  github?: string;
  live?: string;
};

export const projects: Project[] = [
  {
    id: "study-buddy",
    title: "Study Buddy Bot",
    description: "An AI-powered study assistant designed to help students interact with educational content and receive intelligent responses.",
    stack: ["Flask", "Groq", "Generative AI", "Python"],
    features: ["AI-powered conversations", "Educational assistance", "Flask backend", "Groq-powered AI", "Responsive interface"],
    problem: "Students need a faster way to interact with learning material and get contextual assistance.",
    solution: "A lightweight Flask application backed by a generative AI model for conversational study support.",
    architecture: "React-style interface → Flask API → Groq model → structured response.",
    challenges: "Designing useful prompts and keeping the interaction simple while preserving responsive UX.",
    results: "Functional AI study assistant with a focused educational workflow.",
  },
  {
    id: "travel-planner",
    title: "Travel Planner Bot",
    description: "An AI-powered travel planning application that generates personalized travel recommendations and itineraries.",
    stack: ["Flask", "Grok", "Python", "Generative AI"],
    features: ["AI itinerary generation", "Destination recommendations", "Interactive planning", "Flask backend", "Generative AI"],
    problem: "Planning a trip involves combining destinations, timing and preferences into a coherent itinerary.",
    solution: "A conversational planning workflow that turns user preferences into generated travel recommendations.",
    architecture: "Client → Flask API → generative model → itinerary response.",
    challenges: "Prompt structure, response consistency and presenting generated plans clearly.",
    results: "A practical AI travel-planning prototype.",
  },
  {
    id: "ironlog",
    title: "Ironlog",
    description: "A modern AI-powered fitness and workout tracking platform.",
    stack: ["Next.js", "Express.js", "Node.js", "MongoDB", "Grok"],
    features: ["Workout tracking", "AI-assisted functionality", "User dashboard", "MongoDB backend", "REST APIs", "Responsive UI"],
    problem: "Workout tracking can become fragmented across notes, spreadsheets and disconnected apps.",
    solution: "A full-stack platform combining workout tracking with AI-assisted functionality.",
    architecture: "Next.js UI → Express/Node REST API → MongoDB → AI integration.",
    challenges: "Connecting frontend state, backend APIs, persistence and AI functionality into one cohesive product.",
    results: "A full-stack fitness product architecture with a responsive dashboard experience.",
  },
  {
    id: "movie-recommender",
    title: "Movie Recommendation System",
    description: "A machine learning based movie recommendation system built using a dataset containing 150+ movie records.",
    stack: ["Python", "Machine Learning", "Pandas", "Recommendation Algorithms"],
    features: ["Recommendation engine", "Data preprocessing", "Similarity-based recommendations", "Interactive movie discovery"],
    problem: "Users need relevant movie suggestions without manually browsing a large catalog.",
    solution: "A data-processing and similarity-based recommendation workflow using a 150+ record dataset.",
    architecture: "Dataset → preprocessing → feature representation → similarity calculation → recommendations.",
    challenges: "Preparing the dataset and selecting useful similarity signals.",
    results: "An interactive recommendation prototype for discovering similar movies.",
  },
  {
    id: "healthhub-crm",
    title: "HealthHub CRM",
    description: "A healthcare CRM platform supporting patient lead management and structured healthcare workflows.",
    stack: ["React", "TypeScript", "Supabase", "PostgreSQL", "Vite"],
    features: ["Patient lead management", "CRM workflows", "Supabase", "PostgreSQL", "Authentication", "Healthcare workflow automation"],
    problem: "Healthcare teams need structured workflows for managing leads and moving cases through operational stages.",
    solution: "A React/TypeScript CRM connected to Supabase and PostgreSQL for structured patient-lead workflows.",
    architecture: "React/Vite → Supabase services → PostgreSQL → authenticated workflow data.",
    challenges: "Workflow state, authentication, database-backed processes and role-sensitive operational flows.",
    results: "A real-world healthcare CRM workflow platform.",
  }
];

export const skills = {
  "AI / Machine Learning": ["Python", "Machine Learning", "Deep Learning", "CNN", "RNN", "LSTM", "NLP", "Generative AI", "RAG", "LangChain", "Prompt Engineering"],
  "Frontend": ["HTML", "CSS", "JavaScript", "React.js", "Next.js", "Tailwind CSS", "shadcn/ui"],
  "Backend": ["Node.js", "Express.js", "Flask", "REST APIs"],
  "Databases": ["MongoDB", "PostgreSQL", "Supabase", "SQL"],
  "Tools & Platforms": ["Git", "GitHub", "VS Code", "Postman", "Vite", "Docker", "AWS"]
};

export const experience = [
  {
    role: "AI/ML Intern",
    company: "Vidhema Technologies, Jaipur",
    period: "Feb 2026 – May 2026",
    bullets: [
      "Worked on SQL/PostgreSQL optimization and improved query performance by approximately 50%.",
      "Contributed to React and Node.js applications supporting 10,000+ users.",
      "Worked with payment integrations including Razorpay and Stripe.",
      "Improved automated testing using pytest and Jest, reaching approximately 85% test coverage in relevant modules.",
      "Worked on practical AI/ML and software development workflows."
    ]
  },
  {
    role: "Data Science Intern",
    company: "Renu Sharma Foundation",
    period: "Internship",
    bullets: [
      "Data analysis",
      "Machine learning workflows",
      "Data preprocessing",
      "Model experimentation",
      "Data-driven insights"
    ]
  }
];

export const education = [
  { title: "B.Tech – Computer Science / Engineering", institution: "JECRC University, Jaipur", period: "2022 – 2026", score: "" },
  { title: "Class 12", institution: "Care International School", period: "2022", score: "72%" },
  { title: "Class 10", institution: "Vadanta International School", period: "2020", score: "80%" }
];

export const achievements = [
  "Top-15 position in a college hackathon",
  "AI/ML internship experience",
  "Full-stack development experience",
  "Real-world AI-powered projects",
  "10,000+ user application experience",
  "PostgreSQL optimization work",
  "AI / Generative AI projects"
];

export const social = {
  github: "https://github.com/abhay-08121999",
  linkedin: "https://linkedin.com/in/abhay-singh-2261602b",
  leetcode: ""
};
