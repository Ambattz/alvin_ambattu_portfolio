import { SkillCategory, ExperienceItem, ProjectItem, EducationItem, SocialLink } from './types';

export const RESUME_SUMMARY = `Dynamic and results-driven Frontend Tech Lead with over 5 years of professional experience in MERN stack development, specializing in React.js and Google Cloud Platform (GCP). Proven expertise in leading cross-functional teams, modernizing enterprise applications, and delivering scalable, high-performance frontend solutions. Adept at managing client relationships, driving innovation, and ensuring timely project delivery in fast-paced environments.`;

export const CONTACT_INFO = {
  name: "Alvin George Ambattu",
  role: "Frontend Tech Lead | React.js & GCP Specialist",
  email: "alvingeorge30@gmail.com",
  phone: "+52 (33) XXXX-XX40",
  location: "Jalisco, Mexico",
};

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: "LinkedIn", url: "https://www.linkedin.com/in/ambattu/", icon: "linkedin" },
  { platform: "Email", url: "mailto:alvingeorge30@gmail.com", icon: "mail" },
  { platform: "Credly", url: "https://www.credly.com/users/ambattu/badges#credly", icon: "https://cdn.simpleicons.org/credly/FF6B00" }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Top Skills",
    skills: ["React.js", "TypeScript", "Node.js", "Google Cloud (GCP)","GKE",  "Micro Frontends", "Ant Design", "AG Grid", "Cypress", "GitHub Actions", "GitHub Copilot"]
  },
  {
    title: "Frontend Development",
    skills: ["React.js", "TypeScript", "Next.js", "Redux", "React Query", "HTML5 & CSS3", "Micro Frontends", "Module Federation", "Ant Design", "AG Grid", "Tailwind/Bootstrap", "Storybook", "Cypress", "Jest", "Zustand", "WebSockets"]
  },
  {
    title: "Cloud & DevOps",
    skills: ["Google Cloud (GCP)", "GKE", "Cloud Run", "Cloud Functions", "BigQuery", "Docker", "Spinnaker", "Vite", "Webpack", "GitHub Actions", "GitHub Advanced Security"]
  },
  {
    title: "Backend & DB",
    skills: ["Node.js", "Express.js", "Spring Boot", "Microservices", "RESTful APIs", "SQL", "MongoDB", "Google BigQuery", "Oracle DB", "Firebase", "PostgreSQL"]
  },
  {
    title: "AI & Emerging Tech",
    skills: ["Gen AI (Apps & Agents)", "Vertex AI", "GitHub Copilot", "Agentic AI", "MCP Protocol"]
  },
  {
    title: "Languages",
    skills: ["JavaScript (ES6+)", "Python", "Java", "C/C++", "COBOL"]
  }
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    company: "Tata Consultancy Services / The Home Depot",
    role: "Frontend Lead | Delivery Manager",
    grade: "IT Analyst",
    period: "Dec 2024 - Present",
    location: "Guadalajara, Jalisco, Mexico · On-site",
    types: ["management", "technical"],
    highlights: [
      "Secured a dry promotion, leading a 12-member nearshore team for the merchandising portfolio, ensuring strong client relationships and on-time delivery.",
      "Achieved 10% business growth YoY through strategic engagement, financial projects, and business reviews.",
      "Spearheading Google Gen AI-based transformation initiatives and drove cross/upskilling, achieving 100% AI certification within the portfolio.",
      "Recognized with 'Star of the Quarter' award across the entire retail account in Q1 FY25–26.",
      "Leading major Proof of Concepts (POCs) for new feature epics, acting as SME in Module Federation to drive architectural enhancements."
    ]
  },
  {
    company: "Tata Consultancy Services / The Home Depot",
    role: "Frontend Lead | Delivery Manager",
    grade: "Systems Engineer",
    period: "Mar 2024 - Nov 2024",
    location: "Guadalajara, Jalisco, Mexico · Hybrid",
    types: ["management", "technical"],
    highlights: [
      "Managed 4+ teams across the SKU price change lifecycle, supporting 20+ applications.",
      "Modernized legacy systems, transitioning from a monolithic repository to Micro Frontends using module federation.",
      "Migrated apps from PCF to GCP for enhanced scalability and upgraded React.js v14 to v17.",
      "Integrated Ant Design framework and AG Grid to deliver insightful business intelligence solutions.",
      "Leveraged Vite and Rollup for efficient application bundling, and implemented robust CI/CD pipelines.",
      "Provided team leadership, mentorship, and actively engaged in higher stakeholder meetings for strategic planning."
    ]
  },
  {
    company: "Tata Consultancy Services / The Home Depot",
    role: "Frontend Lead",
    grade: "System Engineer",
    period: "Oct 2022 - Feb 2024",
    location: "Guadalajara, Jalisco, Mexico · On-site",
    types: ["technical"],
    highlights: [
      "Relocated to Mexico to lead the development of the Pacman Dashboard Portal for the Pricing Engine.",
      "Created a unified portal for pricing tools, significantly reducing merchant planner friction.",
      "Built over 5+ UI apps from scratch including Liquidation, Clearance, and Disaster Management.",
      "Implemented Workload Identity for Google Cloud Platform (GCP) security compliance.",
      "Developed an AI-driven SKU price impact prediction dashboard using AG Grid and Vertex AI.",
      "Effectively collaborated cross-functionally back-to-back to enable data-driven decisions during peak hours."
    ]
  },
  {
    company: "Tata Consultancy Services / The Home Depot",
    role: "Java React Full Stack Developer",
    grade: "Assistant Systems Engineer",
    period: "Jul 2022 - Sep 2022",
    location: "Kochi, Kerala, India · Hybrid",
    types: ["technical"],
    highlights: [
      "Maintained and developed the Pacman application to replace the legacy Direct Write system.",
      "Streamlined retail pricing processes and enhanced operational efficiency for internal staff.",
      "Focused on making the application run smoothly, implementing regular updates, and gathering cross-functional feedback."
    ]
  },
  {
    company: "Tata Consultancy Services / The Home Depot",
    role: "Java React Full Stack Developer",
    grade: "Assistant Systems Engineer Trainee",
    period: "Jul 2021 - Jun 2022",
    location: "Kochi, Kerala, India · Hybrid",
    types: ["technical"],
    highlights: [
      "Successfully scaled from legacy systems like COBOL and mainframe environments to contemporary MERN stack (MongoDB, Express.js, React, Node.js).",
      "Honed problem-solving skills working on foundational aspects of software development within legacy technologies.",
      "Embraced modern frameworks to create dynamic, user-centric applications, effectively bridging the gap between old and new tech stacks."
    ]
  }
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    name: "Pricing (Price/Cost System)",
    tech: ["ReactJS", "Spring Boot", "GCP", "BigQuery", "PostgreSQL", "Vite", "Micro-frontend"],
    description: [
      "Developed and maintained 20+ UI applications integrated with backend services.",
      "Enabled seamless data loading into UI from Big Query, DB2, and PostgreSQL.",
      "Focused on frontend performance optimization and smooth API integration."
    ]
  },
  {
    name: "ML (Prediction/Recommendation)",
    tech: ["ReactJS", "TypeScript", "Python", "GKE", "GCP", "BigQuery", "Vite", "Micro-frontend"],
    description: [
      "Contributed to a prediction application with orchestration logic in Python.",
      "Enhanced React UI by modifying API response objects and writing new APIs.",
      "Gained hands-on exposure to Python orchestration and Java metrics services."
    ]
  },
  {
    name: "Agentic AI with MCP Protocol",
    tech: ["Google Agentic AI", "MCP Protocol", "React", "Gen AI", "Google Cloud (GCP)", "GKE"],
    description: [
      "Built a proof-of-concept where users interact with the app using natural language.",
      "Integrated agentic AI models with MCP protocol to synchronize tools and dynamically adjust pricing.",
      "Explored cutting-edge AI integration with frontend applications."
    ]
  }
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    degree: "Bachelor of Computer Science",
    institution: "APJ Abdul Kalam Technological University, India",
    date: "July 2021",
    details: [
      "Distinguished student at IHRD College of Engineering",
      "Placement Team Lead, Sports Secretary, Senate Member",
      "Projects: Health Portal (State Level Hackathon), Semester Enrollment Portal"
    ]
  },
  {
    degree: "Secondary Education in Computer Science",
    institution: "Central Board of Secondary Education",
    date: "July 2017",
    details: [
      "Computer science subject topper",
      "Distinguished Student, Red House Captain",
      "Projects: Voting System"
    ]
  }
];

export const CERTIFICATIONS = [
  "5x GitHub Certified",
  "3x Google Cloud Certified",
  "3x Hacker Rank Certified",
  "Gen AI (Apps and Agents)"
];
