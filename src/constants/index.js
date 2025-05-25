import { 
  java,
  c,
  cshap,
  unity, 
  assembly,
  python,
  go,
  angular,
  sql,
  bash,
  kotlin,
} from "../assets";
import {
    profilgit,
    database,
    fullstack,
    gameplay,
    webapp,
    mobileapp,
    mobile,
    backend1,
    frontend,
    code,
    gameicon,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Python Developer",
      icon: code,
    },
    {
      title: "Frontend Developer",
      icon: frontend,
    },
    {
      title: "Backend Developer",
      icon: backend1,
    },
    {
      title: "Game Creator",
      icon: gameicon,
    },
  ];
  
  const technologies = [
    // {
    //   name: "HTML 5",
    //   icon: html,
    // },
    // {
    //   name: "CSS 3",
    //   icon: css,
    // },
    {
      id:1,
      name: "JavaScript",
      icon: javascript,
    },
    {
      id:2,
      name: "TypeScript",
      icon: typescript,
    },
    // {
    //   name: "React JS",
    //   icon: reactjs,
    // },
    
    // {
    //   name: "Node JS",
    //   icon: nodejs,
    // },
    
    // {
    //   name: "Three JS",
    //   icon: threejs,
    // },
    
    {
      id:3,
      name: "java",
      icon: java,
    },
    {
      id:4,
      name: "c",
      icon: c,
    },
    {
      id:5,
      name: "cshap",
      icon: cshap,
    },
    
    {
      id:6,
      name: "python",
      icon: python,
    },
    // {
    //   name: "go",
    //   icon: go,
    // },
    // {
    //   name: "kotlin",
    //   icon: kotlin,
    // },
    // {
    //   name: "angular",
    //   icon: angular,
    // },
    // {
    //   name: "assembly",
    //   icon: assembly,
    // },
    {
      id:7,
      name: "kotlin",
      icon: kotlin,
    },
    {
      id:8,
      name:"bash",
      icon:bash,
    },
     {
      id:9,
      name: "assembly",
      icon: assembly,
    },
    
  ];
  
  const experiences = [
    {
      title: "Recognition Web Application",
      icon: webapp,
      iconBg: "#FFFFFF",
      points: [
        "Developed a full-stack web application capable of recognizing subjects using both image and audio inputs",
        "Used Python for the backend, React for the frontend, and integrated machine learning models for image and voice processing."
      ],
    },
    {
      title: "Real-Time Object Recognition Mobile Application",
      icon: mobileapp,
      iconBg: "#FFFFFF",
      points: [
        "Built a mobile application that performs real-time object recognition using the device's camera.",
        "Utilized a lightweight TensorFlow Lite model for fast and efficient inference on mobile devices.",
        "Developed using Kotlin to ensure seamless Android performance and smooth user experience."
      ],
    },
    {
      title: "Management Web Application",
      icon: database,
      iconBg: "#FFFFFF",
      points: [
      "Designed and implemented a full-stack web application to manage and interact with databases efficiently.",
      "Developed the frontend using HTML, CSS, and JavaScript to create a responsive and intuitive user interface.",
      "Built the backend with Python and Flask, ensuring secure and efficient data handling."
      ],
    },
    {
      title: "2D & 3D Game Development",
      icon: gameplay,
      iconBg: "#FFFFFF",
      points: [
       "Designed and developed several 2D and 3D games with an emphasis on interactive gameplay and engaging user experiences.",
        "Utilized Unity Engine with C# to implement game mechanics, physics systems, audio integration, and design components."
      ],
    },
    {
      title: "Full-Stack Web Development",
      icon: fullstack,
      iconBg: "#FFFFFF",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Technologies used: React JS, AWS, Tailwind CSS, Three.js."
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "GitHub Profile",
      description:
        "All projects are located in my github profile. You can find a variety of projects, including web applications, games, and more. Each project showcases my skills in different programming languages and frameworks.",
      tags: [
        // {
        //   name: "react",
        //   color: "blue-text-gradient",
        // },
        // {
        //   name: "mongodb",
        //   color: "green-text-gradient",
        // },
        {
          name: "github",
          color: "purple-text-gradient",
        },
      ],
      image: profilgit,
      source_code_link: "https://github.com/lea-b02",
    },
  //   {
  //     name: "Job IT",
  //     description:
  //       "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
  //     tags: [
  //       {
  //         name: "react",
  //         color: "blue-text-gradient",
  //       },
  //       {
  //         name: "restapi",
  //         color: "green-text-gradient",
  //       },
  //       {
  //         name: "scss",
  //         color: "pink-text-gradient",
  //       },
  //     ],
  //     image: jobit,
  //     source_code_link: "https://github.com/",
  //   },
  //   {
  //     name: "Trip Guide",
  //     description:
  //       "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
  //     tags: [
  //       {
  //         name: "nextjs",
  //         color: "blue-text-gradient",
  //       },
  //       {
  //         name: "supabase",
  //         color: "green-text-gradient",
  //       },
  //       {
  //         name: "css",
  //         color: "pink-text-gradient",
  //       },
  //     ],
  //     image: tripguide,
  //     source_code_link: "https://github.com/",
  //   },
   ];
  
  export { services, technologies, experiences, testimonials, projects };