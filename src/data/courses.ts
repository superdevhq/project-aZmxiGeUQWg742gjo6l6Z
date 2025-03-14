
export interface Course {
  id: string;
  title: string;
  slug: string;
  description: string;
  longDescription?: string;
  instructor: {
    id: string;
    name: string;
    avatar: string;
  };
  rating: number;
  reviewCount: number;
  studentCount: number;
  duration: string;
  level: "Beginner" | "Intermediate" | "Advanced" | "All Levels";
  price: number;
  discountPrice?: number;
  image: string;
  category: string;
  tags: string[];
  aiEnhanced: boolean;
  featured?: boolean;
  lastUpdated: string;
  language: string;
  curriculum?: {
    sections: {
      title: string;
      lectures: {
        title: string;
        duration: string;
        type: "video" | "quiz" | "assignment" | "text";
        preview?: boolean;
      }[];
    }[];
  };
  requirements?: string[];
  objectives?: string[];
}

export const courses: Course[] = [
  {
    id: "1",
    title: "Machine Learning Fundamentals",
    slug: "machine-learning-fundamentals",
    description: "Learn the core concepts of machine learning and build your first models.",
    longDescription: "This comprehensive course covers all the fundamentals of machine learning, from basic algorithms to practical implementation. You'll learn about supervised and unsupervised learning, neural networks, and how to build and evaluate models using Python and popular libraries like scikit-learn and TensorFlow.",
    instructor: {
      id: "101",
      name: "Dr. Sarah Chen",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    rating: 4.9,
    reviewCount: 1247,
    studentCount: 12453,
    duration: "24 hours",
    level: "Beginner",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1581092921461-7d65ca45393a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    category: "Data Science",
    tags: ["Machine Learning", "Python", "Data Science", "AI"],
    aiEnhanced: true,
    featured: true,
    lastUpdated: "2023-11-15",
    language: "English",
    curriculum: {
      sections: [
        {
          title: "Introduction to Machine Learning",
          lectures: [
            { title: "What is Machine Learning?", duration: "10:23", type: "video", preview: true },
            { title: "Types of Machine Learning", duration: "15:45", type: "video" },
            { title: "Setting Up Your Environment", duration: "12:18", type: "video" },
            { title: "Introduction Quiz", duration: "10 questions", type: "quiz" }
          ]
        },
        {
          title: "Supervised Learning",
          lectures: [
            { title: "Linear Regression", duration: "18:32", type: "video" },
            { title: "Logistic Regression", duration: "20:15", type: "video" },
            { title: "Decision Trees", duration: "22:47", type: "video" },
            { title: "Support Vector Machines", duration: "25:10", type: "video" },
            { title: "Supervised Learning Assignment", duration: "1 hour", type: "assignment" }
          ]
        }
      ]
    },
    requirements: [
      "Basic Python programming knowledge",
      "Understanding of basic statistics",
      "No prior machine learning experience required"
    ],
    objectives: [
      "Understand core machine learning concepts and algorithms",
      "Build and train machine learning models using Python",
      "Evaluate model performance and improve results",
      "Apply machine learning to real-world problems"
    ]
  },
  {
    id: "2",
    title: "Full-Stack Web Development",
    slug: "full-stack-web-development",
    description: "Master modern web development with React, Node.js, and MongoDB.",
    longDescription: "Become a proficient full-stack developer with this comprehensive course. You'll learn front-end development with React, back-end with Node.js and Express, and database management with MongoDB. By the end, you'll be able to build complete, production-ready web applications from scratch.",
    instructor: {
      id: "102",
      name: "Michael Johnson",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    rating: 4.8,
    reviewCount: 987,
    studentCount: 8765,
    duration: "36 hours",
    level: "Intermediate",
    price: 94.99,
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
    category: "Web Development",
    tags: ["React", "Node.js", "MongoDB", "JavaScript", "Full-Stack"],
    aiEnhanced: true,
    featured: true,
    lastUpdated: "2023-12-01",
    language: "English",
    curriculum: {
      sections: [
        {
          title: "Front-End Development with React",
          lectures: [
            { title: "React Fundamentals", duration: "22:15", type: "video", preview: true },
            { title: "Components and Props", duration: "18:30", type: "video" },
            { title: "State and Lifecycle", duration: "25:12", type: "video" },
            { title: "React Hooks", duration: "30:45", type: "video" },
            { title: "Building a React App", duration: "2 hours", type: "assignment" }
          ]
        },
        {
          title: "Back-End Development with Node.js",
          lectures: [
            { title: "Node.js Basics", duration: "20:18", type: "video" },
            { title: "Express Framework", duration: "24:32", type: "video" },
            { title: "RESTful API Design", duration: "28:15", type: "video" },
            { title: "Authentication with JWT", duration: "32:47", type: "video" },
            { title: "Back-End Project", duration: "3 hours", type: "assignment" }
          ]
        }
      ]
    },
    requirements: [
      "Basic HTML, CSS, and JavaScript knowledge",
      "Understanding of web development concepts",
      "No prior React or Node.js experience required"
    ],
    objectives: [
      "Build modern, responsive front-ends with React",
      "Create robust back-end services with Node.js and Express",
      "Design and implement MongoDB databases",
      "Deploy full-stack applications to production"
    ]
  },
  {
    id: "3",
    title: "Digital Marketing Mastery",
    slug: "digital-marketing-mastery",
    description: "Learn to create and execute effective digital marketing campaigns.",
    longDescription: "This comprehensive digital marketing course covers all essential aspects of online marketing. From SEO and content marketing to social media strategies and paid advertising, you'll learn how to create integrated campaigns that drive traffic, generate leads, and increase conversions.",
    instructor: {
      id: "103",
      name: "Emma Rodriguez",
      avatar: "https://randomuser.me/api/portraits/women/63.jpg"
    },
    rating: 4.7,
    reviewCount: 756,
    studentCount: 6542,
    duration: "18 hours",
    level: "All Levels",
    price: 74.99,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1415&q=80",
    category: "Marketing",
    tags: ["Digital Marketing", "SEO", "Social Media", "Content Marketing"],
    aiEnhanced: false,
    lastUpdated: "2023-10-20",
    language: "English",
    curriculum: {
      sections: [
        {
          title: "Digital Marketing Fundamentals",
          lectures: [
            { title: "Introduction to Digital Marketing", duration: "15:20", type: "video", preview: true },
            { title: "Building a Marketing Strategy", duration: "22:45", type: "video" },
            { title: "Understanding Your Audience", duration: "18:30", type: "video" },
            { title: "Marketing Funnel Basics", duration: "20:15", type: "video" }
          ]
        },
        {
          title: "Search Engine Optimization (SEO)",
          lectures: [
            { title: "SEO Fundamentals", duration: "25:18", type: "video" },
            { title: "Keyword Research", duration: "28:32", type: "video" },
            { title: "On-Page SEO Techniques", duration: "22:45", type: "video" },
            { title: "Off-Page SEO Strategies", duration: "24:10", type: "video" },
            { title: "SEO Audit Project", duration: "2 hours", type: "assignment" }
          ]
        }
      ]
    },
    requirements: [
      "No prior marketing experience required",
      "Basic computer skills",
      "Interest in digital marketing"
    ],
    objectives: [
      "Create comprehensive digital marketing strategies",
      "Implement effective SEO techniques to improve search rankings",
      "Develop engaging content marketing campaigns",
      "Manage social media marketing effectively",
      "Analyze marketing performance and optimize campaigns"
    ]
  },
  {
    id: "4",
    title: "UX/UI Design Principles",
    slug: "ux-ui-design-principles",
    description: "Master the fundamentals of user experience and interface design.",
    longDescription: "Learn the essential principles and practices of UX/UI design in this comprehensive course. You'll discover how to create intuitive, user-centered designs that solve real problems. From research and wireframing to prototyping and testing, this course covers the entire UX/UI design process.",
    instructor: {
      id: "104",
      name: "Alex Kim",
      avatar: "https://randomuser.me/api/portraits/men/11.jpg"
    },
    rating: 4.9,
    reviewCount: 632,
    studentCount: 5321,
    duration: "22 hours",
    level: "Beginner",
    price: 84.99,
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    category: "Design",
    tags: ["UX Design", "UI Design", "Figma", "User Research"],
    aiEnhanced: true,
    featured: true,
    lastUpdated: "2023-11-28",
    language: "English",
    curriculum: {
      sections: [
        {
          title: "Introduction to UX/UI Design",
          lectures: [
            { title: "What is UX/UI Design?", duration: "12:30", type: "video", preview: true },
            { title: "The Design Process", duration: "18:45", type: "video" },
            { title: "User-Centered Design Principles", duration: "20:15", type: "video" },
            { title: "Design Thinking Framework", duration: "22:30", type: "video" }
          ]
        },
        {
          title: "User Research and Personas",
          lectures: [
            { title: "User Research Methods", duration: "25:18", type: "video" },
            { title: "Creating User Personas", duration: "20:32", type: "video" },
            { title: "User Journey Mapping", duration: "22:45", type: "video" },
            { title: "Research Analysis Techniques", duration: "18:10", type: "video" },
            { title: "User Research Project", duration: "2 hours", type: "assignment" }
          ]
        }
      ]
    },
    requirements: [
      "No prior design experience required",
      "Basic computer skills",
      "Access to Figma (free version is sufficient)"
    ],
    objectives: [
      "Understand core UX/UI design principles and methodologies",
      "Conduct effective user research and create personas",
      "Design intuitive information architecture and user flows",
      "Create wireframes and interactive prototypes",
      "Test designs with users and iterate based on feedback"
    ]
  },
  {
    id: "5",
    title: "Python for Data Science",
    slug: "python-for-data-science",
    description: "Learn Python programming specifically for data analysis and visualization.",
    longDescription: "This course teaches Python programming with a focus on data science applications. You'll learn how to use libraries like NumPy, Pandas, and Matplotlib to analyze and visualize data effectively. By the end of the course, you'll be able to work with real-world datasets and extract meaningful insights.",
    instructor: {
      id: "105",
      name: "David Wilson",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    rating: 4.8,
    reviewCount: 845,
    studentCount: 7823,
    duration: "28 hours",
    level: "Intermediate",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    category: "Data Science",
    tags: ["Python", "Data Analysis", "Data Visualization", "Pandas", "NumPy"],
    aiEnhanced: true,
    lastUpdated: "2023-09-15",
    language: "English"
  },
  {
    id: "6",
    title: "Advanced JavaScript Concepts",
    slug: "advanced-javascript-concepts",
    description: "Deep dive into advanced JavaScript patterns, concepts, and best practices.",
    longDescription: "Take your JavaScript skills to the next level with this advanced course. You'll explore complex topics like closures, prototypes, async patterns, and functional programming. This course is perfect for developers who want to truly master JavaScript and write more efficient, maintainable code.",
    instructor: {
      id: "106",
      name: "James Rodriguez",
      avatar: "https://randomuser.me/api/portraits/men/67.jpg"
    },
    rating: 4.9,
    reviewCount: 723,
    studentCount: 5932,
    duration: "26 hours",
    level: "Advanced",
    price: 94.99,
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    category: "Web Development",
    tags: ["JavaScript", "ES6", "Functional Programming", "Design Patterns"],
    aiEnhanced: false,
    lastUpdated: "2023-10-10",
    language: "English"
  },
  {
    id: "7",
    title: "Social Media Marketing Strategy",
    slug: "social-media-marketing-strategy",
    description: "Learn to create effective social media strategies for business growth.",
    longDescription: "This course teaches you how to develop and implement successful social media marketing strategies. You'll learn platform-specific tactics for Facebook, Instagram, Twitter, LinkedIn, and TikTok, as well as how to create engaging content, grow your audience, and measure your results.",
    instructor: {
      id: "107",
      name: "Sophia Martinez",
      avatar: "https://randomuser.me/api/portraits/women/45.jpg"
    },
    rating: 4.7,
    reviewCount: 612,
    studentCount: 4823,
    duration: "16 hours",
    level: "All Levels",
    price: 69.99,
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
    category: "Marketing",
    tags: ["Social Media", "Marketing Strategy", "Content Creation", "Community Building"],
    aiEnhanced: true,
    lastUpdated: "2023-11-05",
    language: "English"
  },
  {
    id: "8",
    title: "Mobile App Development with Flutter",
    slug: "mobile-app-development-with-flutter",
    description: "Build cross-platform mobile apps for iOS and Android with Flutter.",
    longDescription: "Learn to create beautiful, high-performance mobile applications for both iOS and Android using Flutter. This course covers everything from Flutter basics to advanced state management and API integration. By the end, you'll be able to build and deploy complete mobile apps from scratch.",
    instructor: {
      id: "108",
      name: "Ryan Chen",
      avatar: "https://randomuser.me/api/portraits/men/15.jpg"
    },
    rating: 4.8,
    reviewCount: 578,
    studentCount: 4215,
    duration: "30 hours",
    level: "Intermediate",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
    category: "Mobile Development",
    tags: ["Flutter", "Dart", "iOS", "Android", "Mobile Apps"],
    aiEnhanced: true,
    lastUpdated: "2023-12-05",
    language: "English"
  },
  {
    id: "9",
    title: "Financial Modeling and Valuation",
    slug: "financial-modeling-and-valuation",
    description: "Learn to build financial models and value companies like an investment banker.",
    longDescription: "This comprehensive course teaches you how to build sophisticated financial models and perform company valuations using Excel. You'll learn industry-standard techniques used by investment bankers, equity research analysts, and finance professionals to analyze companies and make investment decisions.",
    instructor: {
      id: "109",
      name: "Robert Johnson",
      avatar: "https://randomuser.me/api/portraits/men/42.jpg"
    },
    rating: 4.9,
    reviewCount: 492,
    studentCount: 3845,
    duration: "24 hours",
    level: "Intermediate",
    price: 99.99,
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    category: "Finance",
    tags: ["Financial Modeling", "Valuation", "Excel", "Investment Banking"],
    aiEnhanced: false,
    lastUpdated: "2023-08-20",
    language: "English"
  },
  {
    id: "10",
    title: "Graphic Design Fundamentals",
    slug: "graphic-design-fundamentals",
    description: "Master the core principles of graphic design and visual communication.",
    longDescription: "This course provides a solid foundation in graphic design principles and practices. You'll learn about typography, color theory, composition, and visual hierarchy. Through hands-on projects, you'll develop the skills to create effective visual designs for print and digital media.",
    instructor: {
      id: "110",
      name: "Lisa Wong",
      avatar: "https://randomuser.me/api/portraits/women/23.jpg"
    },
    rating: 4.7,
    reviewCount: 687,
    studentCount: 5932,
    duration: "20 hours",
    level: "Beginner",
    price: 74.99,
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
    category: "Design",
    tags: ["Graphic Design", "Typography", "Color Theory", "Adobe Creative Suite"],
    aiEnhanced: true,
    lastUpdated: "2023-09-28",
    language: "English"
  },
  {
    id: "11",
    title: "Artificial Intelligence: Deep Learning",
    slug: "artificial-intelligence-deep-learning",
    description: "Master deep learning techniques and neural network architectures.",
    longDescription: "This advanced course covers the theory and practice of deep learning. You'll learn about neural network architectures, convolutional and recurrent networks, generative models, and more. Through hands-on projects, you'll implement deep learning solutions for image recognition, natural language processing, and other AI applications.",
    instructor: {
      id: "111",
      name: "Dr. Alan Zhang",
      avatar: "https://randomuser.me/api/portraits/men/52.jpg"
    },
    rating: 4.9,
    reviewCount: 423,
    studentCount: 3254,
    duration: "32 hours",
    level: "Advanced",
    price: 109.99,
    image: "https://images.unsplash.com/photo-1677442135136-760c813a743d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80",
    category: "Data Science",
    tags: ["Deep Learning", "Neural Networks", "TensorFlow", "PyTorch", "AI"],
    aiEnhanced: true,
    lastUpdated: "2023-11-15",
    language: "English"
  },
  {
    id: "12",
    title: "Project Management Professional (PMP) Certification",
    slug: "project-management-professional-certification",
    description: "Complete preparation for the PMP certification exam.",
    longDescription: "This comprehensive course prepares you for the Project Management Professional (PMP) certification exam. You'll learn all the knowledge areas and process groups in the PMBOK Guide, along with exam strategies and hundreds of practice questions. This course satisfies the 35 contact hours required for the PMP application.",
    instructor: {
      id: "112",
      name: "Jennifer Adams",
      avatar: "https://randomuser.me/api/portraits/women/33.jpg"
    },
    rating: 4.8,
    reviewCount: 912,
    studentCount: 7845,
    duration: "35 hours",
    level: "Intermediate",
    price: 119.99,
    image: "https://images.unsplash.com/photo-1572177812156-58036aae439c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    category: "Business",
    tags: ["Project Management", "PMP", "Certification", "PMBOK"],
    aiEnhanced: false,
    lastUpdated: "2023-10-05",
    language: "English"
  }
];

export const getCoursesForInstructor = (instructorId: string): Course[] => {
  return courses.filter(course => course.instructor.id === instructorId);
};

export const getCourseBySlug = (slug: string): Course | undefined => {
  return courses.find(course => course.slug === slug);
};

export const getCoursesByCategory = (category: string): Course[] => {
  return courses.filter(course => course.category === category);
};

export const getFeaturedCourses = (): Course[] => {
  return courses.filter(course => course.featured);
};

export const getAIEnhancedCourses = (): Course[] => {
  return courses.filter(course => course.aiEnhanced);
};

export const searchCourses = (query: string): Course[] => {
  const lowercaseQuery = query.toLowerCase();
  return courses.filter(course => 
    course.title.toLowerCase().includes(lowercaseQuery) ||
    course.description.toLowerCase().includes(lowercaseQuery) ||
    course.category.toLowerCase().includes(lowercaseQuery) ||
    course.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  );
};
