import { delay, stagger } from "framer-motion";
import { clipPath, title } from "framer-motion/client";
import { transition } from "three/examples/jsm/tsl/display/TransitionNode.js";
import { velocity } from "three/tsl";

//Navbar Section Variants

export const sidebarVariants = {
    open: (height = 1000) => ({
        clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
        transition: {
            type: "spring",
            stiffness: 20,
            restDelta: 2,
        }
    }),

    closed: {
        clipPath: "circle(30px at 40px 40px)",
        transition: {
            delay: 0.5,
            type: "spring",
            stiffness: 400,
            damping: 40,
        }
    }
}

export const menuItemVariants = {
    open: {
        y: 0,
        opacity: 1,
        transition: {
            y: { stiffness: 1000, velocity: -100 },
            duration: 0.1
        }
    },
    closed: {
        y: 30,
        opacity: 0,
        transition: {
            y: { stiffness: 1000 }
        }
    }
}

export const navItems = [
    { id: 1, title: "About Me", href: "#about" },
    { id: 2, title: "Experience", href: "#experience" },
    { id: 3, title: "Projects", href: "#projects" },
    { id: 4, title: "Skills", href: "#skills" },
    { id: 5, title: "Education", href: "#education" },
    { id: 6, title: "Achievements", href: "#achievements" },
    { id: 7, title: "Contact Me", href: "#contact" },
];
export const navVariants = {
    open: {
        transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
        transition: { staggerChildren: 0.05, delayChildren: -1 },
    }
};

// Hero Section Variables
export const randomNumberBetween = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

export const role = "SOFTWARE ENGINEER".split("");
export const description = "a Final-Year Computer Science Student | Passionate About Web Development & Modern Tech | Building performant, scalable web applications. I specialize in creating seamless user experiences using modern technologies like React, Node.js, and FastAPI, turning complex problems into clean, efficient solutions.".split(" ");
export const name = "Hello , I'm".split("");
export const personeName = "Shashwat Rao".split("");

//About Me Variables
export const aboutMeContent = [
    "I am a final-year Computer Science student passionate about Artificial Intelligence and Machine Learning.",
    "I constantly explore cutting-edge AI/ML models and enjoy implementing innovative solutions.",
    "As a Full Stack Developer, I specialize in building performant, scalable, and user-friendly web applications.",
    "I love crafting seamless digital experiences using technologies like React, Node.js, and FastAPI.",
    "To sharpen my problem-solving mindset, I regularly practice Data Structures and Algorithms.",
    "I thrive on tackling complex challenges and transforming them into elegant, efficient solutions.",
    "My workflow emphasizes clean, maintainable code while leveraging modern tools and frameworks.",
    "I am deeply enthusiastic about exploring new trends in web development and AI-powered applications.",
    "Outside the tech world, I find balance through music, fitness training at the gym, and playing a variety of sports.",
    "I am also an automotive enthusiast, fascinated by engineering, performance, and design in the automobile world.",
    "I strive to blend creativity, technology, and passion to build impactful projects that make a difference."
];

//Experience variables
export const experiences = [
    {
        role: "AI/ML Research Intern",
        company: "Defence Research and Development Organisation (DRDO)",
        date: "MAY 2025 – JULY 2025",
        location: "New Delhi, India",
        type: "Internship",
        points: [
            "Built a web-scraping and API integration pipeline to automatically collect and filter news from multiple real-time sources, ensuring accuracy and freshness of content.",
            "Engineered an NLP-based summarization model (using transformers & extractive techniques) to condense lengthy articles into concise, audience-friendly scripts.",
            "Integrated advanced Text-to-Speech (TTS) models to generate natural, human-like voice outputs in multiple languages, enhancing realism and accessibility.",
            "Developed a 3D virtual avatar system using facial animation and lip-sync models, enabling the AI anchor to deliver news with synchronized speech and expressions.",
            "Automated the video generation pipeline by combining audio, avatar animation, and background templates, reducing manual editing effort by 90%.",
            "Optimized the entire pipeline with modular microservices architecture, ensuring scalability, low latency, and real-time adaptability.",
        ],
    },
];

// Projects Variables
export const projects = [
  {
    id:1,
    name: "File Zipper",
    description:
      "Engineered a file compression tool in C++ using the Huffman coding algorithm to achieve efficient file compression, reducing file sizes by 40–60% and compressing files of up to 1 GB with high speed. Implementedmetadata storage for the Huffman tree within the compressed file, ensuring accurate decompression with less than 2% error rate and preserving data integrity across multiple decompression cycles.",
    tags: ["Data Structures And Algorithms","c++"],
    github: null, // "null" means Coming Soon
  },
  {
    id:2,
    name: "Medico Chatico",
    description:
      "Developedanintelligent medical chatbot providing personalized, context-aware health information and basic support to users. Integrated large language models (LLMs) for natural conversation. Built using LangChain for dynamic and modular dialogue flows. Supports multi lingual query handling and empathetic interaction design. Improved accessibility to health-related information, enhancing user trust and engagement.",
    tags: ["Python", "Hugging-Face", "LangChain"],
    github: null,
  },
  {
    id:3,
    name: "AdvancedRAGbased-Chatbot10-k filing financial statement analytics",
    description:
      "DevelopedaLlama-Index-based RAGpipeline and chatbot to extract and process complex financial data from 10-K filings through an LLM, using web scraping with BeautifulSoup and external APIs. Built a full-stack web application using Python, Flask for the backend, and Next.js for the frontend, seamlessly integrating the RAG pipeline to deliver a user-friendly experience.",
    tags: ["Next.js", "Python", "RAG", "FULLSTACK", "LLM"],
    github: null,
  },
];

// skills variable
export const skills = [
  {
    title: "Programming Languages",
    items: [
      { name: "Python", level: 92 },
      { name: "C/C++", level: 95 },
      { name: "JavaScript", level: 80 },
      { name: "SQL", level: 85 },
    ],
  },
  {
    title: "Frameworks & Libraries",
    items: [
      { name: "TensorFlow", level: 90 },
      { name: "PyTorch", level: 85 },
      { name: "React.js", level: 88 },
      { name: "Node.js", level: 75 },
      { name: "FastAPI", level: 85 },
    ],
  },
  {
    title: "Machine Learning & AI",
    items: [
      { name: "Deep Learning", level: 92 },
      { name: "Generative AI", level: 85 },
      { name: "Signal Processing", level: 90 },
    ],
  },
  {
    title: "Tools & Technologies",
    items: [
      { name: "Git", level: 85 },
      { name: "chromaDB", level: 75 },
      { name: "MongoDB", level: 82 },
    ],
  },
];

// Education Variables 
export const education = [
  {
    id: 1,
    degree: "Bachelor of Technology in Computer Science",
    institution: "Delhi Technological University",
    year: "CGPA : 7.64",
    description:[
      "Focused on software engineering, machine learning, Artificial Intelligence, Data structures and Algorithms , Object oriented Programming , Database & Management Systems and full-stack web development.",
      "Achieved professional-level proficiency in Data Structures and Algorithms through rigorous practice and competitive programming, solving complex problems efficiently." 
     ]
  },
  {
    id: 2,
    degree: "Class 12 (CBSE)",
    institution: "Senior Secondary School",
    year: "Percentage : 86.2%",
    description:[
      "Studied Science stream with Mathematics, Physics, and Computer Science. Graduated with distinction.",
      "Ranked in the top 2 percentile among over 900,000 candidates in JEE Main 2022",
      "Demonstrated leadership and responsibility as School Vice-Captain (11th Grade).",
    ]
  },
  {
    id: 3,
    degree: "Class 10 (CBSE)",
    institution: "High School",
    year: "Percentage : 87.6",
    description:[
      "Completed secondary education with a focus on foundational sciences and mathematics.",
      "Lead School Badminton team for three Consecutive years in District Level Championship",
      "Actively participated in a diverse range of extracurricular activities, fostering teamwork, leadership, and a well-rounded skill set."
    ]
  },
];

export const certifications = [
  {
    id: 1,
    name: "DRDO Intership Certificate",
     issuer: "SSPL Lab, DRDO",
  },
  {
    id: 2,
    name: "The Joy Of Computing Using Python",
    issuer: "IIT Madras",
  },
  {
    id: 3,
    name: "Internet Of Things",
    issuer: "IIT Kharagpur",
  },
];

//achievements variables 
// constants/constants.js
import { FaTrophy, FaCode, FaMedal, FaFootballBall, FaUserTie, FaMicrochip } from "react-icons/fa";

export const achievementsData = [
  {
    title: "Academic Excellence",
    description: "Ranked in the top 2 percentile among over 900,000 candidates in JEE Main 2022.",
    icon: FaTrophy,
  },
  {
    title: "District-level Athlete",
    description: "Led School team for three consecutive years in district-level Badminton tournaments.",
    icon: FaFootballBall,
  },
  {
    title: "NPTEL Silver Medalist",
    description: "Silver medalist in Programming certifications by IIT.",
    icon: FaMedal,
  },
  {
    title: "Coding Proficiency",
    description: "Solved 100+ problems on platforms like TUF",
    icon: FaCode,
  },
  {
    title: "School Vice Captain",
    description: "Led student council and organized major events.",
    icon: FaUserTie,
  },
  {
    title: "Tech Geek",
    description: "Enthusiast in hardware, software, and AI tech.",
    icon: FaMicrochip,
  },
];

// Contact Me variable 
// constants.js (extend existing content)
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";

export const contactInfo = [
  {
    icon: FaMapMarkerAlt,
    label: "Location",
    value: "Noida, India",
  },
  {
    icon: FaEnvelope,
    label: "Email",
    value: "shashwatrao10@gmail.com",
    link: "mailto:shashwatrao10@gmail.com",
  },
  {
    icon: FaPhone,
    label: "Phone",
    value: "+91-8076946416",
    link: "tel:+918076946416",
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    value: "linkedin.com/shashwat-rao",
    link: "https://linkedin.com/in/shashwat-rao-2208a11a3?",
  },
  {
    icon: FaWhatsapp,
    label: "WhatsApp",
    value: "+91-8076946416",
    link: null,
  },
];





