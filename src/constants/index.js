import {
  mobile,
  backend,
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
    title: "Script bash",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Medical Agenda",
    company_name: "Final Project",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Sep 2020 - Dec 2020",
    points: [
      "User authentication was implemented to verify the identity of users before allowing them to access the medical agenda.",
      "Encryption was used to protect sensitive data stored in the database, such as users' medical records.",
      "Input validation techniques were implemented to ensure that users cannot send malicious or corrupt information to the database.",
      "An access control system was established to ensure that only authorized users can access the information in the medical agenda.",
    ],
  },
  {
    title: "Courses page",
    company_name: "MP",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Sep 2021 - Dec 2021",
    points: [
      "User authentication was implemented to verify the identity of users before allowing them to access online courses.",
      "Encryption was used to protect sensitive data stored in the database, such as users' personal and financial data.",
      "Input validation techniques were implemented to ensure that users cannot send malicious or corrupt information to the database.",
      "Regular software updates were performed and proactive security measures were implemented to ensure that the web project remained secure at all times.",
    ],
  },
  {
    title: "Wifi network security",
    company_name: "Conalep ",
    icon: shopify,
    iconBg: "#383E56",
    date: "Mar 2023 - Present",
    points: [
      "Implementation of robust security measures to prevent unauthorized access to the Wi-Fi network.",
      "Use of advanced security protocols such as WPA2 and configuration of a firewall to limit unwanted traffic.",
      "Establishment of security and privacy policies for network users.",
      "Realización de pruebas de penetración y auditorías de seguridad para identificar y corregir vulnerabilidades potenciales en la red.",
    ],
  },/*
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  */
];

const testimonials = [
  /*
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
   */
];

const projects = [
  {
    name: "Encryption",
    description:
      "Application to perform a Caesar encryption to a selected file and then add a password to it.",
    tags: [
      {
        name: "Bash",
        color: "blue-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/felixlestaal1/cifrado",
  },
  {
    name: "HTB",
    description:
      "HTB machine list shot with different filtering that can be applied to it",
    tags: [
      {
        name: "Bash",
        color: "blue-text-gradient",
      },
      {
        name: "Javascript",
        color: "green-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/felixlestaal1/Bashhtb",
  },
  {
    name: "Trip Guide",
    description:
      "We simulated a roulette in which you select odd or even, you have only 2 possible techniques to simulate that it is not good to be a gambler and as a bash practice is fine.",
    tags: [
      {
        name: "Bash",
        color: "blue-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/felixlestaal1/BashRuleta",
  },
];

export { services, technologies, experiences, testimonials, projects };
