import { link } from "fs";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "TechStack", link: "#techStack" },
  { name: "Contact", link: "#contact" },
  { name: "Download CV", link: "/Ruth_resume.pdf" },
];

 //export const gridItems = [
//   {
//     id: 1,
//     title: "My tech stack",
//     description: "I constantly try to improve",
//     className: "lg:col-span-2 md:col-span-3 md:row-span-2",
//     imgClassName: "",
//     titleClassName: "justify-center",
//     img: "/grid.svg",
//     spareImg: "/b1.svg",
    
//   },
//   {
//     id: 2,
//     title: "I'm very flexible with time zone communications",
//     description: "",
//     className: "lg:col-span-2 md:col-span-3 md:row-span-2",
//     imgClassName: "",
//     titleClassName: "justify-start",
//     img: "",
//     spareImg: "",
//   },
//   {
//     id: 3,
//     title: "Tech enthusiast with a passion for development.",
//     description: "",
//     className: "lg:col-span-2 md:col-span-3 md:row-span-1",
//     imgClassName: "",
//     titleClassName: "justify-start",
//     img: "",
//     spareImg: "/b4.svg",
//   },

//   {
//     id: 4,
//     title: "Currently building my skills in AI",
//     description: "The Inside Scoop",
//     className: "md:col-span-3 md:row-span-2",
//     imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
//     titleClassName: "justify-center md:justify-start lg:justify-center",
//     img: "/b5.svg",
//     spareImg: "/grid.svg",
//   },
//   {
//     id: 5,
//     title: "Do you want to start a project together?",
//     description: "",
//     className: "lg:col-span-2 md:col-span-3 md:row-span-1",
//     imgClassName: "",
//     titleClassName: "justify-center md:max-w-full max-w-60 text-center",
//     img: "",
//     spareImg: "",
//   },
// ];

export const projects = [
  {
    id: 1,
    title: "Amharic conversational agent - AI Chatbot",
    des: "Chatbot deployed on hugging face",
    img: "/amharic_con.png",
    iconLists: ["/huggingface.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://huggingface.co/spaces/ruthtamiru/amharic_con",
  },
  {
    id: 2,
    title: "LRMS - Land registration management system",
    des: "A web application for managing land registration and transactions.",
    img: "/lrms.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/mongo.svg", "/node.svg"],
    link: "https://github.com/ruth22soft/land_management_version1",
  },
  // {
  //   id: 3,
  //   title: "AI Image SaaS - Canva Application",
  //   des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
  //   img: "/p3.svg",
  //   iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
  //   link: "/ui.aiimg.com",
  // },
  // {
  //   id: 4,
  //   title: "Animated Apple Iphone 3D Website",
  //   des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
  //   img: "/p4.svg",
  //   iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
  //   link: "/ui.apple.com",
  // },
];

// export const testimonials = [
//   {
//     quote:
//       "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
//     name: "Michael Johnson",
//     title: "Director of AlphaStream Technologies",
//   },
//   {
//     quote:
//       "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
//     name: "Michael Johnson",
//     title: "Director of AlphaStream Technologies",
//   },
//   {
//     quote:
//       "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
//     name: "Michael Johnson",
//     title: "Director of AlphaStream Technologies",
//   },
//   {
//     quote:
//       "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
//     name: "Michael Johnson",
//     title: "Director of AlphaStream Technologies",
//   },
//   {
//     quote:
//       "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
//     name: "Michael Johnson",
//     title: "Director of AlphaStream Technologies",
//   },
// ];
export const techStack = [
  {title: "Frontend",
    description: "Technologies I use to build stunning user interfaces.",
    logos: [
      { name: "React", img: "/react.svg" },
      { name: "Next.js", img: "/next.svg" },
      { name: "Tailwind CSS", img: "/tail.svg" },
      { name: "Three.js", img: "/three.svg" },
    ],
  },
  {
    title: "Backend",
    description: "Tools I use to build robust and scalable backends.",
    logos: [
      { name: "Node.js", img: "/express.svg" },
      { name: "Express.js", img: "/node.svg" },
      { name: "MongoDB", img: "/mongo.svg" },
      { name: "Flask", img: "/flask.svg" },
      { name: "MySQL", img: "/mysql.svg" },
    ],
  },
  {
    title: "AI",
    description: "Frameworks and tools I use to integrate AI into applications.",
    logos: [
      { name: "TensorFlow", img: "/tensorflow.svg" },
      { name: "PyTorch", img: "/pytorch.svg" },
      { name: "OpenAI API", img: "/openai.svg" },
      { name: "Hugging Face", img: "/huggingface.svg" },
    ],
  },
];

export const companies = [
   {
    id: 1,
    name: "GitHub",
    img: { src: "/githubname.jpg", width: 200, height: 50 },
  },
  {
    id: 2,
    name: "Vercel",
    img: { src: "/vercelName.jpg", width: 200, height: 100 },
  },
  {
    id: 3,
    name: "Netlify",
    img: { src: "/netlifyname.jpg", width: 200, height: 100 },
  },
  {
    id: 4,
    name: "Firebase",
    img: { src: "/firebasename.jpg", width: 200, height: 100 },
  },
  {
    id: 5,
    name: "Docker",
    img: { src: "/docker.svg", width: 200, height: 100 },
  
  },
  
];

export const workExperience = [
  {
    id: 1,
    title: "Amharic conversational agent - AI Chatbot",
    desc: "Deployed on Hugging Face Spaces, enhances human-computer interaction in low-resource languages by understanding and generating Amharic responses. Leveraging transformer-based language models fine-tuned on Amharic datasets, your project supports applications like customer service, digital assistants, and educational tools. It highlights your expertise in AI and NLP while demonstrating practical deployment on modern platforms, showcasing your ability to bridge technological gaps and make AI more accessible.",

    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Full stack developer - AASTU Disciplinary Incident System", 
    desc: "Designed and developed disciplinary incident management system using Node and React.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Back end developer - LRMS",
    desc: "Built a Node.js/MySQL API for property record management, handling CRUD operations and title verification workflows. Designed 15+ REST endpoints connecting to a React frontend, implementing JWT authentication for multi-user access. Streamlined data validation processes that reduced error rates in simulated land transaction scenarios.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "National Payment Gateway - EthSwitch",
    desc: "Assisted in the development and integration of a E-commerce payment gateway nationally in Ethiopia and being able to handle all local bank issues .",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/ruth22soft",
  },
  {
    id: 2,
    img: "/email.jpg",
    link: "mailto:ruthtamiru10@gmail.com",

  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/ruth-tamiru-538b521a8/",
  },
];
