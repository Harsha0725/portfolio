export const personalDetails = {
  name: "Harshada Mahesh Wagh",
  shortName: "Harshada Wagh",
  title: "AI & Data Science Student | Machine Learning & Web Development Enthusiast",
  roles: [
    "AI & Data Science Student",
    "Machine Learning & AI Enthusiast",
    "Web & Mobile App Enthusiast",
    "Data Analytics & Problem Solver"
  ],
  email: "waghharshada38@gmail.com",
  phone: "+91 9511269893",
  location: "Nashik, Maharashtra (422401)",
  github: "https://github.com/Harsha0725",
  linkedin: "https://linkedin.com/in/harshada-wagh",
  summary: "An enthusiastic Artificial Intelligence & Data Science undergraduate at K. K. Wagh Institute of Engineering Education and Research. Eager to apply technical skills in web development, machine learning, optimization algorithms, and mobile applications to build intelligent, scalable real-world solutions.",
  aboutText: "I am passionate about exploring Artificial Intelligence, Machine Learning, and Modern Web & Mobile Application Development. From working on quantum-inspired drug distribution concepts and OCR-powered document simplifiers to developing inventory dashboards and Android assignment apps, I enjoy learning through hands-on projects and teamwork.",
  stats: [
    { label: "CGPA", value: "8.22", description: "B.Tech in AI & DS" },
    { label: "Projects", value: "5+", description: "AI, ML, DSA, Web & Mobile Apps" },
    { label: "Certifications", value: "5+", description: "AWS, Kaggle, MKCL, Scaler & Simplilearn" },
    { label: "SSC Score", value: "93.20%", description: "Secondary School Certificate" }
  ]
};

export const skillsData = [
  {
    category: "Programming Languages",
    icon: "FaCode",
    skills: [
      { name: "Python", level: 90, badge: "Advanced" },
      { name: "C++", level: 82, badge: "Intermediate" },
      { name: "SQL", level: 85, badge: "Intermediate" },
      { name: "JavaScript", level: 80, badge: "Intermediate" },
      { name: "Kotlin", level: 78, badge: "Android Dev" }
    ]
  },
  {
    category: "AI, ML & Data Science",
    icon: "FaBrain",
    skills: [
      { name: "PyTorch", level: 80, badge: "Deep Learning" },
      { name: "Scikit-learn", level: 85, badge: "ML Algorithms" },
      { name: "XGBoost", level: 78, badge: "Model Boosting" },
      { name: "Pandas", level: 92, badge: "Data Processing" },
      { name: "NumPy", level: 90, badge: "Numerical Computing" },
      { name: "LSTM & Self-Attention", level: 78, badge: "Sequential Models" }
    ]
  },
  {
    category: "Web & Mobile Technologies",
    icon: "FaLaptopCode",
    skills: [
      { name: "React.js", level: 82, badge: "Frontend" },
      { name: "FastAPI", level: 80, badge: "Backend API" },
      { name: "Flask", level: 82, badge: "Web Framework" },
      { name: "Node.js", level: 78, badge: "Backend Runtime" },
      { name: "HTML5 & CSS3", level: 92, badge: "UI Design" },
      { name: "Streamlit", level: 88, badge: "Interactive Apps" },
      { name: "Android SDK", level: 78, badge: "Mobile Dev" }
    ]
  },
  {
    category: "Databases & Cloud",
    icon: "FaDatabase",
    skills: [
      { name: "MySQL", level: 84, badge: "Relational DB" },
      { name: "PostgreSQL", level: 80, badge: "SQL Database" },
      { name: "MongoDB", level: 82, badge: "NoSQL DB" },
      { name: "AWS Cloud (EC2, S3)", level: 75, badge: "Cloud Computing" }
    ]
  },
  {
    category: "Data & BI Tools",
    icon: "FaChartBar",
    skills: [
      { name: "Power BI", level: 85, badge: "Dashboards & DAX" },
      { name: "Advanced Excel", level: 90, badge: "Data Modeling & Macros" },
      { name: "Git & GitHub", level: 88, badge: "Version Control" },
      { name: "VS Code", level: 95, badge: "Development IDE" },
      { name: "Tesseract OCR", level: 80, badge: "Text Extraction" },
      { name: "D-Wave Ocean SDK", level: 72, badge: "QUBO Optimization" }
    ]
  },
  {
    category: "Core Computer Science",
    icon: "FaCogs",
    skills: [
      { name: "Data Structures & Algorithms", level: 85, badge: "Problem Solving" },
      { name: "Object-Oriented Programming (OOP)", level: 88, badge: "Software Design" },
      { name: "Database Management Systems (DBMS)", level: 86, badge: "Data Modeling" },
      { name: "Operating Systems", level: 80, badge: "System Fundamentals" },
      { name: "Computer Networks", level: 78, badge: "Network Protocols" }
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
    summary: "An AI-powered logistics optimization system for pharmaceutical drug distribution using demand forecasting and quantum-inspired QUBO allocation.",
    highlights: [
      "Built an AI-powered logistics optimization system to optimize pharmaceutical drug distribution across regional healthcare nodes.",
      "Forecasted regional medicine demand using an LSTM network combined with a Self-Attention mechanism for high accuracy.",
      "Implemented QUBO-based optimization utilizing the D-Wave Ocean SDK to maximize allocation efficiency under constraints.",
      "Developed high-performance REST APIs with FastAPI and integrated them into a responsive React.js dashboard."
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
    summary: "An AI document analysis platform that extracts text via Tesseract OCR and generates concise summaries of complex legal and government documents using Llama 3.3.",
    highlights: [
      "Developed an end-to-end AI application to decode and simplify dense government bills and legal contracts for general public understanding.",
      "Extracted raw text from scanned PDF and image documents using Tesseract OCR pipeline.",
      "Integrated Groq API with Llama 3.3 to perform rapid context-aware simplification and clause extraction.",
      "Engineered Flask backend handling file uploads, OCR processing queues, and API response formatting."
    ],
    techStack: ["Python", "Flask", "HTML", "CSS", "JavaScript", "Tesseract OCR", "Groq API", "Llama 3.3"],
    githubUrl: "https://github.com/Harsha0725/BillDecoder-main",
    demoUrl: "#"
  },
  {
    id: "smartshelf",
    title: "SmartShelf – Inventory Management & Optimization System",
    period: "Sep 2025 – Nov 2025",
    category: "Machine Learning & Web App",
    featured: true,
    summary: "Real-time stock tracking and demand-driven inventory optimization dashboard built with Streamlit, XGBoost, and Scikit-learn.",
    highlights: [
      "Developed a real-time inventory monitoring system for stock tracking, automated alerts, and restocking demand prediction.",
      "Designed an interactive Streamlit dashboard featuring live stock visualization, data filtering, and automated report exports.",
      "Utilized Pandas and NumPy for complex data preprocessing, alongside Scikit-learn and XGBoost for demand prediction algorithms.",
      "Applied foundational system design concepts to optimize supply chain inventory flow."
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
    featured: true,
    summary: "An AI-powered maze-solving game using the A* search algorithm with Manhattan distance heuristic, featuring procedural maze generation, shortest-path visualization, and LocalStorage score tracking.",
    highlights: [
      "Built an AI-powered maze-solving game using the A* search algorithm with Manhattan distance heuristic.",
      "Designed responsive gameplay with procedural maze generation and increasing complexity.",
      "Integrated score tracking, shortest-path visualization, and browser-based data storage using LocalStorage."
    ],
    techStack: ["HTML", "CSS", "JavaScript", "A* Algorithm", "LocalStorage"],
    githubUrl: "https://github.com/Harsha0725/AI-Maze-Escape",
    demoUrl: "#"
  },
  {
    id: "file-system-simulator",
    title: "File System Simulator using N-ary Tree",
    period: "Feb 2025",
    category: "Data Structures & Algorithms",
    featured: true,
    summary: "A hierarchical file system simulator built with C++ using an N-ary Tree data structure to represent files/directories and recursive DFS for path-based navigation and node management.",
    highlights: [
      "Developed a hierarchical file system simulator using an N-ary Tree to represent files and directories.",
      "Implemented add, delete, search, and display operations using recursive Depth-First Search (DFS) traversal.",
      "Simulated real-world file organization through path-based directory navigation and dynamic node management."
    ],
    techStack: ["C++", "N-ary Tree", "DFS", "Recursion"],
    githubUrl: "https://github.com/Harsha0725/File-System-Simulator",
    demoUrl: "#"
  },
  {
    id: "stitch-it-up",
    title: "Stitch It Up – Tailor Management System",
    period: "Mar 2025 – Apr 2025",
    category: "Web Application",
    featured: false,
    summary: "A web application enabling custom tailoring order bookings, progress tracking, and persistent customer management.",
    highlights: [
      "Developed a custom web application to manage tailoring measurements, order status, and client communication.",
      "Designed responsive UI with HTML, CSS, and JavaScript, paired with Node.js backend logic.",
      "Integrated MongoDB for flexible, persistent storage of customer measurement profiles and order histories.",
      "Implemented real-time order status tracking and workflow updates for tailors and clients."
    ],
    techStack: ["Node.js", "MongoDB", "HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/Harsha0725/Stitch-it-up-main",
    demoUrl: "#"
  },
  {
    id: "assignment-reminder",
    title: "Assignment Reminder App – Mobile Task Manager",
    period: "May 2026",
    category: "Mobile Application",
    featured: false,
    summary: "An Android mobile task application developed in Kotlin for academic assignment tracking, due date notifications, and deadline scheduling.",
    highlights: [
      "Built an Android mobile application designed to assist students in tracking course assignments and submission deadlines.",
      "Implemented notification channels to deliver automated reminder alerts prior to task due dates.",
      "Designed clean UI views for assignment categorization, due date sorting, and completion tracking.",
      "Utilized Android Jetpack components and Kotlin for efficient mobile lifecycle management."
    ],
    techStack: ["Kotlin", "Android SDK", "SQLite", "XML", "Jetpack"],
    githubUrl: "https://github.com/Harsha0725/AssignmentReminderapp",
    demoUrl: "#"
  }
];

export const educationData = [
  {
    degree: "Bachelor of Technology (B.Tech)",
    field: "Artificial Intelligence & Data Science",
    institution: "K. K. Wagh Institute of Engineering Education and Research (KKWIEER)",
    location: "Nashik, Maharashtra",
    period: "2023 – Present",
    score: "CGPA: 8.22",
    details: "Specializing in Machine Learning, Deep Learning, Data Structures, Database Systems, and Cloud Optimization. Active participant in technical clubs like Phoenix Club and Debugger Club."
  },
  {
    degree: "Higher Secondary Certificate (HSC - 12th)",
    field: "Science",
    institution: "Nutan Vidyamandir",
    location: "Deolali Camp, Nashik (HSC Board)",
    period: "2021 – 2023",
    score: "Percentage: 72.67%",
    details: "Focused on Mathematics, Physics, Chemistry, and Computer Science foundation."
  },
  {
    degree: "Secondary School Certificate (SSC - 10th)",
    field: "General Academics",
    institution: "Vasudeo Athani English Medium School",
    location: "Deolali Camp, Nashik",
    period: "2020",
    score: "Percentage: 93.20%",
    details: "Graduated with distinction and academic excellence award."
  }
];

export const certificatesData = [
  {
    title: "AWS Cloud Quest: Cloud Practitioner",
    issuer: "Amazon Web Services (AWS)",
    date: "28 April 2026",
    skills: ["Cloud Computing", "AWS EC2", "AWS S3", "Cloud Security"],
    color: "from-sky-500 to-blue-600",
    badge: "Cloud Computing",
    image: "/certificates/aws_cloud_quest.png",
    imagePath: "public/certificates/aws_cloud_quest.png"
  },
  {
    title: "Foundations of Prompt Engineering",
    issuer: "Amazon Web Services (AWS)",
    date: "20 July 2026",
    skills: ["AWS Generative AI", "Prompt Engineering", "LLM Fine-Tuning", "Amazon Bedrock"],
    color: "from-blue-600 to-sky-500",
    badge: "Generative AI & AWS",
    image: "/certificates/aws_prompt_engineering.png",
    imagePath: "public/certificates/aws_prompt_engineering.png"
  },
  {
    title: "iLike Certificate in Multi-Platform Digital Marketing Mastery",
    issuer: "MKCL & KKWIEER",
    date: "13 March 2025",
    skills: ["Digital Strategy", "Multi-Platform Analytics", "SEO & Content Marketing", "Social Media Execution"],
    color: "from-cyan-500 to-blue-500",
    badge: "Digital Marketing",
    image: "/certificates/mkcl_digital_marketing.png",
    imagePath: "public/certificates/mkcl_digital_marketing.png"
  },
  {
    title: "iLike Certificate in Excel Essentials",
    issuer: "MKCL & KKWIEER",
    date: "13 March 2025",
    skills: ["Excel Essentials", "Data Modeling & Functions", "Pivot Tables & Charts", "Data Analysis"],
    color: "from-blue-600 to-cyan-500",
    badge: "Advanced Excel",
    image: "/certificates/mkcl_advanced_excel.png",
    imagePath: "public/certificates/mkcl_advanced_excel.png"
  },
  {
    title: "Python Certification",
    issuer: "Kaggle",
    date: "22 September 2025",
    skills: ["Python Fundamentals", "Control Structures", "Functions & Modules", "Data Manipulation"],
    color: "from-cyan-400 to-blue-500",
    badge: "Python & Data Science",
    image: "/certificates/kaggle_python.png",
    imagePath: "public/certificates/kaggle_python.png"
  },
  {
    title: "Power BI for Beginners",
    issuer: "Simplilearn (Powered by Microsoft)",
    date: "22 March 2026",
    skills: ["Data Visualization", "DAX Expressions", "Power Query", "Interactive Dashboards"],
    color: "from-blue-500 to-cyan-500",
    badge: "Data Analytics",
    image: "/certificates/power_bi.png",
    imagePath: "public/certificates/power_bi.png"
  },
  {
    title: "C++ Course: Learn the Essentials",
    issuer: "Scaler Topics / Scaler Academy",
    date: "23 March 2025",
    skills: ["C++ Essentials", "Object-Oriented Programming", "Algorithms", "Coding Challenges"],
    color: "from-indigo-500 to-sky-500",
    badge: "Programming",
    image: "/certificates/scaler_cpp.png",
    imagePath: "public/certificates/scaler_cpp.png"
  },
  {
    title: "DBMS Course: Master Fundamentals & Advanced Concepts",
    issuer: "Scaler Topics / Scaler Academy",
    date: "02 March 2025",
    skills: ["SQL Queries", "Database Design", "Normalization", "Advanced DBMS"],
    color: "from-blue-600 to-teal-400",
    badge: "Databases",
    image: "/certificates/scaler_dbms.png",
    imagePath: "public/certificates/scaler_dbms.png"
  },
  {
    title: "Prompt Quest Competition Certificate",
    issuer: "Phoenix Club, KKWIEER (Celestra 2K25)",
    date: "04 March 2025",
    skills: ["Prompt Engineering", "AI Problem Solving", "LLM Optimization"],
    color: "from-sky-400 to-blue-600",
    badge: "AI Hackathon",
    image: "/certificates/prompt_quest.png",
    imagePath: "public/certificates/prompt_quest.png"
  }
];

export const coCurricularData = [
  {
    title: "Prompt Quest Competition Participant",
    organization: "Phoenix Club (Celestra), AI & DS Department, KKWIEER",
    years: "2024, 2025, 2026",
    description: "Participated in annual AI prompt engineering, LLM optimization, and problem-solving hackathons organized by the AI & DS department."
  },
  {
    title: "Flash AI Participant",
    organization: "Debugger Club, Computer Department, KKWIEER",
    years: "2026",
    description: "Competed in time-bound AI algorithm implementation and debugging challenges."
  },
  {
    title: "Buildathon Hackathon Participant",
    organization: "Guru Gobind Singh College of Engineering & Research Centre",
    years: "2025",
    description: "Collaborated in an intensive hackathon building prototype solutions for real-world municipal and social challenges."
  },
  {
    title: "Essay Writing Competition Participant",
    organization: "IT Department, KKWIEER",
    years: "2026",
    description: "Engaged in technical essay writing on modern artificial intelligence ethics and future computing trends."
  }
];
