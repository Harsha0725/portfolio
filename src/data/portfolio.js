export const personalDetails = {
  name: "Harshada Mahesh Wagh",
  shortName: "Harshada Wagh",
  title: "AI & Data Science Student | Machine Learning & Web Development Enthusiast",
  roles: [
    "AI & Data Science Student",
    "Machine Learning & AI Enthusiast",
    "Web Development Enthusiast",
    "Data Analytics & Problem Solver"
  ],
  email: "waghharshada@gmail.com",
  phone: "+91 9511269893",
  location: "Nashik, Maharashtra 422401",
  github: "https://github.com/Harsha0725",
  linkedin: "https://linkedin.com/in/harshada-wagh",
  summary: "Artificial Intelligence and Data Science undergraduate with an interest in web development and machine learning. Eager to apply technical skills, enhance practical knowledge, and contribute effectively through teamwork, problem-solving, and continuous learning.",
  aboutText: "An Artificial Intelligence and Data Science undergraduate at K. K. Wagh Institute of Engineering Education and Research with a strong focus on web development, machine learning, and optimization algorithms. Dedicated to applying technical skills, enhancing practical knowledge, and solving real-world problems through continuous learning and effective teamwork.",
  stats: [
    { label: "CGPA", value: "8.22", description: "B.Tech in AI & DS" },
    { label: "Projects", value: "5+", description: "AI, ML, DSA & Web Applications" },
    { label: "Certifications", value: "5+", description: "AWS, Kaggle, Scaler & Simplilearn" },
    { label: "SSC Score", value: "93.20%", description: "Secondary School Certificate" }
  ]
};

export const skillsData = [
  {
    category: "Programming Languages",
    icon: "FaCode",
    skills: [
      { name: "Python", level: 90, badge: "Primary" },
      { name: "C++", level: 82, badge: "Core" },
      { name: "SQL", level: 85, badge: "Database Querying" },
      { name: "JavaScript", level: 80, badge: "Web Logic" }
    ]
  },
  {
    category: "Web Technologies & Frameworks",
    icon: "FaLaptopCode",
    skills: [
      { name: "HTML", level: 92, badge: "Structure" },
      { name: "CSS", level: 90, badge: "Styling" },
      { name: "JavaScript", level: 82, badge: "Frontend" },
      { name: "Node.js", level: 78, badge: "Backend Runtime" },
      { name: "Streamlit", level: 88, badge: "Interactive Dashboards" },
      { name: "React.js", level: 82, badge: "UI Framework" },
      { name: "FastAPI / Flask", level: 80, badge: "RESTful APIs" }
    ]
  },
  {
    category: "Databases & Data Tools",
    icon: "FaDatabase",
    skills: [
      { name: "MySQL", level: 85, badge: "Relational DB" },
      { name: "MongoDB", level: 82, badge: "NoSQL DB" },
      { name: "Power BI", level: 85, badge: "Data & BI Tool" },
      { name: "PostgreSQL", level: 80, badge: "Relational DB" }
    ]
  },
  {
    category: "Tools & Platforms",
    icon: "FaChartBar",
    skills: [
      { name: "Git", level: 88, badge: "Version Control" },
      { name: "GitHub", level: 90, badge: "Code Repository" },
      { name: "VS Code", level: 95, badge: "Development Environment" },
      { name: "Tesseract OCR", level: 80, badge: "Text Extraction" },
      { name: "D-Wave Ocean SDK", level: 75, badge: "QUBO Optimization" }
    ]
  },
  {
    category: "Core Computer Science Concepts",
    icon: "FaCogs",
    skills: [
      { name: "Data Structures & Algorithms", level: 85, badge: "Problem Solving" },
      { name: "Object-Oriented Programming", level: 88, badge: "OOP Concepts" },
      { name: "DBMS", level: 86, badge: "Database Management" },
      { name: "Operating Systems", level: 80, badge: "System Fundamentals" },
      { name: "Computer Networks", level: 78, badge: "Networking Protocols" }
    ]
  }
];

export const projectsData = [
  {
    id: "q-link-pharma",
    title: "Q-Link Pharma – AI & Quantum-Inspired Drug Distribution Optimizer",
    period: "Jul 2026 – Present",
    category: "AI & Optimization",
    featured: true,
    summary: "An AI-powered logistics optimization system for pharmaceutical distribution using LSTM demand forecasting and quantum-inspired QUBO allocation.",
    highlights: [
      "Built an AI-powered logistics optimization system for pharmaceutical distribution.",
      "Forecasted regional medicine demand using LSTM with Self-Attention.",
      "Implemented QUBO-based optimization using the D-Wave Ocean SDK to improve medicine allocation.",
      "Developed REST APIs with FastAPI and integrated them with a React.js dashboard."
    ],
    techStack: ["Python", "FastAPI", "React.js", "PyTorch", "PostgreSQL", "LSTM", "D-Wave Ocean SDK"],
    githubUrl: "https://github.com/Harsha0725/HarshadaWagh",
    demoUrl: "#"
  },
  {
    id: "bill-decoder",
    title: "BillDecoder – AI-Powered Bill & Legal Document Simplifier",
    period: "Mar 2026",
    category: "AI & Natural Language Processing",
    featured: true,
    summary: "An AI-powered application to simplify government bills and legal documents using Tesseract OCR and Llama 3.3 via Groq API.",
    highlights: [
      "Developed an AI-powered application to simplify government bills and legal documents.",
      "Extracted document text using Tesseract OCR and generated AI-based summaries using Llama 3.3 via the Groq API.",
      "Built the backend using Flask to support document upload, processing, and analysis."
    ],
    techStack: ["Python", "Flask", "HTML", "CSS", "JavaScript", "Tesseract OCR", "Groq API", "Llama 3.3"],
    githubUrl: "https://github.com/Harsha0725/BillDecoder-main",
    demoUrl: "#"
  },
  {
    id: "smartshelf",
    title: "SmartShelf – Inventory Management and Optimization System",
    period: "Sep 2025 – Nov 2025",
    category: "Machine Learning & Web App",
    featured: true,
    summary: "A real-time inventory management and optimization system for stock tracking and demand forecasting.",
    highlights: [
      "Developed a real-time inventory management system for stock tracking.",
      "Designed an interactive Streamlit dashboard for inventory monitoring, stock updates, and reporting.",
      "Utilized Pandas and NumPy for data processing and Scikit-learn to support demand-based inventory optimization."
    ],
    techStack: ["Python", "Streamlit", "XGBoost", "Pandas", "NumPy", "Scikit-learn"],
    githubUrl: "https://github.com/Harsha0725/SmartShelf",
    demoUrl: "#"
  },
  {
    id: "ai-maze-escape",
    title: "AI Maze Escape – Smart Solver vs Human Competition",
    period: "May 2025",
    category: "AI & Game Development",
    featured: false,
    summary: "An AI-powered maze-solving game using the A* search algorithm with Manhattan distance heuristic.",
    highlights: [
      "Built an AI-powered maze-solving game using the A* search algorithm with Manhattan distance heuristic.",
      "Designed responsive gameplay with procedural maze generation and increasing complexity.",
      "Integrated score tracking, shortest-path visualization, and browser-based data storage using LocalStorage."
    ],
    techStack: ["HTML", "CSS", "JavaScript", "A* Algorithm", "LocalStorage"],
    githubUrl: "https://github.com/Harsha0725/AI-mini-project",
    demoUrl: "#"
  },
  {
    id: "file-system-simulator",
    title: "File System Simulator using N-ary Tree",
    period: "Feb 2025",
    category: "Data Structures & Algorithms",
    featured: false,
    summary: "A hierarchical file system simulator built with C++ using an N-ary Tree data structure to represent files and directories.",
    highlights: [
      "Developed a hierarchical file system simulator using an N-ary Tree to represent files and directories.",
      "Implemented add, delete, search, and display operations using recursive Depth-First Search (DFS) traversal.",
      "Simulated real-world file organization through path-based directory navigation and dynamic node management."
    ],
    techStack: ["C++", "N-ary Tree", "DFS", "Recursion"],
    githubUrl: "https://github.com/Harsha0725/DSA",
    demoUrl: "#"
  }
];

export const educationData = [
  {
    degree: "Bachelor of Technology (B.Tech)",
    field: "Artificial Intelligence and Data Science",
    institution: "K. K. Wagh Institute of Engineering Education and Research",
    location: "Nashik, Maharashtra",
    period: "2023 – Present",
    score: "CGPA: 8.22",
    details: "Focusing on Artificial Intelligence, Data Science, Machine Learning, Web Development, Algorithms, and System Architectures."
  },
  {
    degree: "Higher Secondary Certificate (HSC - 12th)",
    field: "Science",
    institution: "Nutan Vidyamandir",
    location: "Deolali Camp, Nashik, Maharashtra",
    period: "2021 – 2023",
    score: "Percentage: 72.67%",
    details: "Completed Higher Secondary Certificate studies in Science."
  },
  {
    degree: "Secondary School Certificate (SSC - 10th)",
    field: "General Academics",
    institution: "Vasudeo Athani English Medium School",
    location: "Deolali Camp, Nashik, Maharashtra",
    period: "2021",
    score: "Percentage: 93.20%",
    details: "Graduated Secondary School Certificate with distinction."
  }
];

export const certificatesData = [
  {
    title: "AWS Cloud Quest: Cloud Practitioner",
    issuer: "Amazon Web Services (AWS)",
    date: "Cloud Practitioner",
    skills: ["Cloud Computing", "AWS EC2", "AWS S3", "Cloud Security"],
    color: "from-sky-500 to-blue-600",
    badge: "AWS",
    image: "/certificates/aws_cloud_quest.png",
    imagePath: "public/certificates/aws_cloud_quest.png"
  },
  {
    title: "Python",
    issuer: "Kaggle",
    date: "Python Data Science",
    skills: ["Python Fundamentals", "Control Structures", "Functions", "Data Manipulation"],
    color: "from-cyan-400 to-blue-500",
    badge: "Kaggle",
    image: "/certificates/kaggle_python.png",
    imagePath: "public/certificates/kaggle_python.png"
  },
  {
    title: "C++ Programming",
    issuer: "Scaler Academy",
    date: "Programming Essentials",
    skills: ["C++ Fundamentals", "Object-Oriented Programming", "Algorithms"],
    color: "from-indigo-500 to-sky-500",
    badge: "Scaler Academy",
    image: "/certificates/scaler_cpp.png",
    imagePath: "public/certificates/scaler_cpp.png"
  },
  {
    title: "DBMS Fundamentals",
    issuer: "Scaler Academy",
    date: "Database Management",
    skills: ["SQL Queries", "Database Design", "Normalization", "DBMS Concepts"],
    color: "from-blue-600 to-teal-400",
    badge: "Scaler Academy",
    image: "/certificates/scaler_dbms.png",
    imagePath: "public/certificates/scaler_dbms.png"
  },
  {
    title: "Power BI",
    issuer: "Simplilearn",
    date: "Data & BI Tool",
    skills: ["Data Visualization", "DAX Expressions", "Interactive Dashboards"],
    color: "from-blue-500 to-cyan-500",
    badge: "Simplilearn",
    image: "/certificates/power_bi.png",
    imagePath: "public/certificates/power_bi.png"
  }
];

export const coCurricularData = [
  {
    title: "Participant, Prompt Quest Competition",
    organization: "Phoenix Club (Celestra), AI & DS Department",
    years: "2024, 2025, 2026",
    description: "Participated in prompt engineering and AI problem-solving events."
  },
  {
    title: "Participant, Flash AI",
    organization: "Debugger Club, Computer Department",
    years: "2026",
    description: "Competed in AI debugging and rapid algorithm coding challenges."
  },
  {
    title: "Participant, Buildathon Hackathon",
    organization: "Guru Gobind Singh College of Engineering & Research Centre, Nashik",
    years: "Hackathon Participant",
    description: "Collaborated in an intensive buildathon hackathon building innovative solutions."
  }
];
