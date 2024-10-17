import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate full stack engineer with a knack for crafting robust and scalable web applications. With 2 years of hands-on experience, I have honed my skills in front-end technologies like React and TypeScript, as well as back-end technologies like Golang, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const RESUME_CONTENT = {
  resumeLinkText: "Download Resume",
  resumeLink: "https://docs.google.com/document/d/11D125V-HcmHDMuB3nGMYBVeh2yj_NNS9JNB_nlvYHxE/edit?usp=sharing",
}

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 2 years of professional experience, I have worked with a variety of technologies, including React, TypeScript, Golang, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Full Stack Engineer",
    company: "TodayPay Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Golang. Implemented RESTful APIs and integrated with postgres databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "TypeScript", "Postgres", "Golang", "gRPC", "Kubernetes"],
  },
  {
    year: "2022 - 2023",
    role: "Software Engineer",
    company: "Nupay",
    description: `Designed and developed user interfaces for web applications using TypeScript and React. Worked closely with backend developers to integrate frontend components with Golang APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Golang", "TypeScript", "postgres"],
  },
  {
    year: "2021 - 2022",
    role: "Frontend Developer",
    company: "Pepcoding",
    description: `Developed and maintained web applications using JavaScript, React.js, and Golang. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Golang", "Javascript", "React.js", "Postgres"],
  },
  // {
  //   year: "2020 - 2021",
  //   role: "Software Engineer",
  //   company: "Paypal",
  //   description: `Contributed to the development of web applications using JavaScript, React.js, and Golang. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
  //   technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  // },
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Golang", "MongoDB"],
  },
  {
    title: "Task Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "React", "Bootstrap", "Tailwind"],
  },
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  },
];

export const CONTACT = {
  address: "Arekere, Bangalore, KA 560076 ",
  phoneNo: "+91 8709159632 ",
  email: "aniketkr20012019@gmail.com",
};
