/**
 * Portfolio Data for Mangesh Maruti Mali
 * Source of Truth: Verified from public GitHub (@MangeshMali18) and repositories.
 * 
 * You can easily update your college name, graduation year, or resume path here.
 */

export const personalInfo = {
  name: "Mangesh Maruti Mali",
  shortName: "Mangesh",
  headline: "AI Engineer • Full Stack Developer • Software Engineer",
  location: "Pune, Maharashtra, India",
  email: "mangesh.mali2004@gmail.com",
  github: "https://github.com/MangeshMali18",
  linkedin: "https://linkedin.com/in/mangeshmmali",
  resumePath: "/Mangesh M Mali CV.pdf", // Place your resume PDF inside the /public folder
  hasResume: true,
  // Profile photo: drop your photo into /public/profile.jpeg or set any image URL here
  profilePhoto: "/profile.jpeg",
  
  // Roles cycled in the Hero text morph animation (strictly verified)
  morphRoles: [
    "AI Engineer",
    "Full Stack Developer",
    "Machine Learning Engineer",
    "Agentic AI Builder",
    "Software Engineer"
  ],

  heroBio: "Information Technology Engineer from Pune, India, specializing in building modern web applications, Agentic AI systems, Machine Learning solutions, and high-performance REST APIs.",
  
  aboutBio: [
    "I am an Information Technology Engineer from Pune, India. I love working on systems that solve real-world problems. My focus is on software architecture and Artificial Intelligence. I enjoy building solutions that're both practical and powerful.",
    "My engineering focus bridges modern web engineering and applied AI — from designing responsive full-stack interfaces in Next.js and React to orchestrating multi-agent workflows, vector search pipelines with FAISS, and microservices in Node.js and FastAPI.",
    "I believe in clean architecture, performance optimization, and pragmatic product thinking. Whether training predictive ML models on clinical datasets or architecting timestamp-grounded RAG systems, I prioritize writing clean, maintainable, and production-ready software."
  ],

  quickFacts: [
    { label: "Degree", value: "B.E. Information Technology" },
    { label: "Location", value: "Pune, Maharashtra, India" },
    { label: "Current Focus", value: "AI + Full Stack Engineering" },
    { label: "Core Principles", value: "Clean Architecture & Scalability" },
    { label: "Learning", value: "Cloud (AWS), Kubernetes, LLM Engineering" },
    { label: "Open To", value: "Software Engineering & AI Roles" }
  ],

  openToRoles: [
    "Software Engineering Roles",
    "AI Engineer Roles",
    "Full Stack Developer Roles",
    "Backend Engineering",
    "Machine Learning Engineer",
    "Open Source Collaboration"
  ]
};

export const educationData = [
  {
    degree: "Master of Technology (M.Tech) in Computer Science",
    institution: "DES Pune University",
    location: "Pune, Maharashtra, India",
    duration: "Aug 2026 – Jul 2028",
    status: "Current",
    highlights: [
      "Advanced studies in Computer Science with focus on AI, machine learning, and software systems.",
    ]
  },
  {
    degree: "Master of Business Administration (MBA) in Business Analytics",
    institution: "SVKM's Narsee Monjee Institute of Management Studies (NMIMS)",
    location: "Pune, Maharashtra, India",
    duration: "Aug 2026 – Aug 2028",
    status: "Current",
    highlights: [
      "Specialization in Business Analytics — bridging technical expertise with strategic business decision-making.",
    ]
  },
  {
    degree: "Bachelor of Engineering (B.E.) in Information Technology",
    institution: "Engineering College (Affiliated with Savitribai Phule Pune University)",
    location: "Pune, Maharashtra, India",
    duration: "Completed",
    status: "Completed",
    highlights: [
      "Rigorous coursework in Data Structures, Algorithms, DBMS, Operating Systems, Computer Networks, and Artificial Intelligence.",
      "Hands-on architectural and full-stack software development experience.",
      "Practical project execution in AI-driven diagnosis, retrieval systems, and web platforms."
    ]
  }
];

export const experienceData = [
  {
    role: "AI & Machine Learning Project Assessment",
    company: "Sportomic AI Labs",
    period: "2026",
    location: "Remote / Pune",
    type: "Internship Assessment",
    description: "Engineered the Elon Musk Podcast Q&A Assistant — an end-to-end Retrieval-Augmented Generation (RAG) system utilizing HuggingFace embeddings, FAISS vector indexing, and Gemini 2.5 Flash with timestamp-accurate video navigation.",
    technologies: ["Gemini 2.5 Flash", "LangChain", "FAISS", "Python", "Streamlit", "HuggingFace"]
  },
  {
    role: "Systems, Hardware & Network Support",
    company: "Enterprise Infrastructure & Networking",
    period: "Practical Experience",
    location: "Pune, India",
    type: "Engineering Foundations",
    description: "Hands-on experience with computer networking architectures, enterprise hardware troubleshooting, protocol diagnostics, and REST API communications.",
    technologies: ["Networking Protocols", "Hardware Support", "System Administration", "REST APIs"]
  }
];

export const projectsData = [
  {
    id: "ai-disease-diagnosis",
    title: "AI Disease Diagnosis System",
    repoName: "AI_Disease_Detection",
    category: "AI & Full Stack",
    shortDescription: "An end-to-end machine learning platform predicting disease outcomes from clinical patient datasets via decoupled microservice REST APIs.",
    problem: "Clinical diagnostics often depend on tedious manual analysis of multi-dimensional patient indicators, which can cause diagnostic delays in high-volume healthcare settings.",
    solution: "Built a production-ready 3-tier system: a Next.js 14 responsive interface, an Express.js backend gateway with SQLite/Sequelize, and an asynchronous Python FastAPI machine learning microservice for on-demand inference.",
    techStack: [
      "Next.js 14",
      "FastAPI",
      "Python",
      "Node.js",
      "Express",
      "SQLite",
      "Sequelize",
      "Scikit-Learn",
      "Pandas",
      "Docker Compose",
      "Tailwind CSS"
    ],
    features: [
      "Decoupled 3-tier microservice architecture separating UI, Gateway, and ML inference",
      "Automated clinical data preprocessing, normalization, and feature extraction",
      "High-accuracy disease classification algorithms with model evaluation metrics",
      "Containerized deployment configuration using Docker and Docker Compose"
    ],
    github: "https://github.com/MangeshMali18/AI_Disease_Detection",
    liveDemo: null,
    isFeatured: true
  },
  {
    id: "podcast-qa-bot",
    title: "Elon Musk Podcast Q&A Assistant",
    repoName: "Podcast-qa-bot",
    category: "Generative AI & RAG",
    shortDescription: "An AI-powered Retrieval-Augmented Generation system answering natural language queries from podcast transcripts with exact video timestamps.",
    problem: "Finding specific talking points, philosophical insights, or engineering discussions across multi-hour podcast recordings is inefficient without granular transcript indexing.",
    solution: "Designed an intelligent RAG pipeline that digests podcast transcripts, performs timestamp-aware chunking, generates dense embeddings, retrieves top-k semantic contexts using FAISS, and produces grounded answers via Gemini 2.5 Flash.",
    techStack: [
      "Python",
      "Gemini 2.5 Flash",
      "LangChain",
      "FAISS Vector DB",
      "HuggingFace Embeddings",
      "Streamlit",
      "python-docx"
    ],
    features: [
      "Timestamp-aware document chunking that preserves precise video timeline mappings",
      "Dense vector semantic retrieval utilizing FAISS vector store",
      "Evidence-grounded response generation powered by Google Gemini 2.5 Flash",
      "Direct clickable YouTube links navigating to the exact seconds where topics are discussed",
      "Transparent evidence panel displaying supporting transcript excerpts to prevent hallucinations"
    ],
    github: "https://github.com/MangeshMali18/Podcast-qa-bot",
    liveDemo: null,
    badge: "Sportomic AI Labs Assessment",
    isFeatured: true
  },
  {
    id: "room-finder",
    title: "Room Finder Web Application",
    repoName: "room-finder",
    category: "Full Stack Web",
    shortDescription: "A modern, responsive accommodation platform for discovering, listing, and managing room rentals in real-time.",
    problem: "Students and relocating professionals struggle to find verified, real-time room listings with direct host communication and transparent availability.",
    solution: "Developed an interactive single-page web application using React, Vite, and Tailwind CSS backed by Supabase for authentication, state management, and real-time database transactions.",
    techStack: [
      "React",
      "Vite",
      "JavaScript",
      "Supabase",
      "Tailwind CSS",
      "React Router",
      "Vercel"
    ],
    features: [
      "Host and tenant authentication with session persistence via Supabase Auth",
      "Interactive listings feed with filtering, room specifications, and rent details",
      "Dedicated management dashboard for adding, updating, and removing room listings",
      "Production deployment on Vercel with real-time cloud database synchronization"
    ],
    github: "https://github.com/MangeshMali18/room-finder",
    liveDemo: "https://room-finder-lemon.vercel.app",
    isFeatured: true
  },
  {
    id: "agentic-hiring-platform",
    title: "Smart Agentic Hiring Platform",
    repoName: "agentic-hiring-platform",
    category: "Agentic AI",
    shortDescription: "Autonomous multi-agent system orchestrating technical resume screening, competency matching, and automated candidate evaluations.",
    problem: "Standard Applicant Tracking Systems (ATS) rely on brittle keyword lookups, missing contextual engineering proficiency.",
    solution: "Engineered multi-agent LangChain workflows where specialized autonomous agents analyze project repositories, evaluate technical depth, and generate objective evaluation matrices.",
    techStack: [
      "Python",
      "Agentic AI",
      "LangChain",
      "GPT-4o",
      "FastAPI",
      "Prompt Engineering"
    ],
    features: [
      "Multi-agent collaborative workflows for multi-stage candidate assessment",
      "Contextual skill mapping and semantic depth scoring beyond simple keywords",
      "Automated generation of structured recruiter evaluation debriefs"
    ],
    github: "https://github.com/MangeshMali18",
    liveDemo: null,
    isFeatured: false
  },
  {
    id: "ai-failure-analyzer",
    title: "AI-Powered Failure Analyzer",
    repoName: "ai-failure-analyzer",
    category: "Machine Learning",
    shortDescription: "Machine learning diagnostic and anomaly detection system classifying error patterns and recommending remediation actions.",
    problem: "Investigating distributed system incidents and repeating hardware/network faults requires intensive manual log inspection.",
    solution: "Implemented machine learning classification models to parse diagnostic log patterns, detect anomalous system behavior, and predict likely points of failure.",
    techStack: [
      "Python",
      "Scikit-Learn",
      "Pandas",
      "NumPy",
      "REST APIs"
    ],
    features: [
      "Automated log vectorization and failure pattern clustering",
      "Multi-class classification for root cause prediction",
      "Actionable incident resolution guidance grounded in historical failure models"
    ],
    github: "https://github.com/MangeshMali18",
    liveDemo: null,
    isFeatured: false
  }
];

export const skillCategories = [
  { id: "all", label: "All Skills" },
  { id: "programming", label: "Programming" },
  { id: "ai-ml", label: "AI & Machine Learning" },
  { id: "web", label: "Web Development" },
  { id: "database", label: "Databases" },
  { id: "tools", label: "Tools & DevOps" }
];

export const skillsData = [
  // Programming
  { name: "Python", category: "programming", level: "Advanced", icon: "python" },
  { name: "JavaScript (ES6+)", category: "programming", level: "Advanced", icon: "javascript" },
  { name: "SQL", category: "programming", level: "Proficient", icon: "sql" },
  { name: "HTML5", category: "programming", level: "Advanced", icon: "html5" },
  { name: "CSS3", category: "programming", level: "Advanced", icon: "css3" },

  // AI & ML
  { name: "Agentic AI", category: "ai-ml", level: "Specialist", icon: "cpu" },
  { name: "LangChain", category: "ai-ml", level: "Advanced", icon: "workflow" },
  { name: "Retrieval-Augmented Generation (RAG)", category: "ai-ml", level: "Advanced", icon: "search" },
  { name: "FAISS Vector DB", category: "ai-ml", level: "Advanced", icon: "database" },
  { name: "Gemini 2.5 Flash", category: "ai-ml", level: "Advanced", icon: "sparkles" },
  { name: "GPT-4o", category: "ai-ml", level: "Advanced", icon: "bot" },
  { name: "Scikit-Learn", category: "ai-ml", level: "Proficient", icon: "brain" },
  { name: "TensorFlow", category: "ai-ml", level: "Familiar", icon: "layers" },
  { name: "PyTorch", category: "ai-ml", level: "Familiar", icon: "flame" },
  { name: "Pandas & NumPy", category: "ai-ml", level: "Advanced", icon: "table" },
  { name: "Natural Language Processing (NLTK)", category: "ai-ml", level: "Proficient", icon: "book-open" },

  // Web
  { name: "React.js", category: "web", level: "Advanced", icon: "atom" },
  { name: "Next.js 14", category: "web", level: "Proficient", icon: "globe" },
  { name: "Node.js", category: "web", level: "Proficient", icon: "server" },
  { name: "Express.js", category: "web", level: "Proficient", icon: "terminal" },
  { name: "FastAPI", category: "web", level: "Advanced", icon: "zap" },
  { name: "REST API Design", category: "web", level: "Advanced", icon: "webhook" },
  { name: "Tailwind CSS", category: "web", level: "Advanced", icon: "palette" },
  { name: "Vite", category: "web", level: "Advanced", icon: "zap" },

  // Databases
  { name: "MongoDB", category: "database", level: "Proficient", icon: "database" },
  { name: "MySQL", category: "database", level: "Proficient", icon: "hard-drive" },
  { name: "SQLite", category: "database", level: "Proficient", icon: "file-code" },
  { name: "Supabase", category: "database", level: "Proficient", icon: "cloud" },
  { name: "Sequelize ORM", category: "database", level: "Proficient", icon: "link" },

  // Tools & DevOps
  { name: "Git & GitHub", category: "tools", level: "Advanced", icon: "git-branch" },
  { name: "Docker & Compose", category: "tools", level: "Proficient", icon: "container" },
  { name: "VS Code", category: "tools", level: "Advanced", icon: "code" },
  { name: "Figma", category: "tools", level: "Familiar", icon: "pen-tool" },
  { name: "Vercel", category: "tools", level: "Proficient", icon: "upload-cloud" }
];

export const currentFocusData = [
  {
    title: "Agentic AI Orchestration",
    description: "Designing autonomous multi-agent environments with LangChain, tool calling, and self-correcting cognitive loops.",
    tag: "Active Focus"
  },
  {
    title: "Production RAG Architecture",
    description: "Optimizing hybrid search, reranking models, metadata filtering, and reducing latency in vector retrieval systems.",
    tag: "AI Architecture"
  },
  {
    title: "Cloud & Container Orchestration",
    description: "Expanding DevOps practices with Amazon Web Services (AWS), Docker microservices, and Kubernetes clustering.",
    tag: "Currently Learning"
  },
  {
    title: "High-Performance Distributed Systems",
    description: "Engineering scalable backend architectures, caching layers, and resilient microservice communications.",
    tag: "System Design"
  }
];

export const githubProfileSummary = {
  username: "MangeshMali18",
  profileUrl: "https://github.com/MangeshMali18",
  publicReposCount: 6,
  primaryLanguages: ["Python", "JavaScript", "HTML/CSS", "SQL"],
  status: "Actively Shipping AI & Full Stack Projects"
};
