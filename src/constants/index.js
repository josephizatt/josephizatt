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
    iod,
    agilisys,
    wag
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
      title: "Web Developer",
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
      title: "Marketing Intern",
      company_name: "Institute of Directors",
      icon: iod,
      iconBg: "#fff",
      date: "Jun 2015 - Jul 2015",
      points: [
        "Analysed IoD needs, producing engaging content to drive brand awareness across social media.",
        "Coordinated email newsletter campaigns to reach target audiences.",
        "Undertook industry research to shape branding and creative messaging.",
        "Reviewed and proofread creative content, verifying brand compliance across all communication channels.",
      ],
    },
    {
      title: "Communications Assistant",
      company_name: "Agilisys",
      icon: agilisys,
      iconBg: "#E6DEDD",
      date: "Aug 2015 - Jul 2018",
      points: [
        "Supervised marketing content production and consistently met campaign targets.",
        "Networked continuously to grow contacts and increase brand awareness and reputation.",
        "Established strong social media presence to increase brand exposure.",
        "Collaborated with Communications Manager to create innovative strategies for optimised campaign results.",
      ],
    },
    {
      title: "Junior Developer",
      company_name: "WeAG",
      icon: wag,
      iconBg: "#fff",
      date: "Aug 2018 - Oct 2021",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Applied web services and REST API design best practices to deliver stable systems.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Joe proved me wrong.",
      name: "Oscar Moyes",
      designation: "Owner",
      company: "XNet",
      image: "https://main--frabjous-pasca-53371a.netlify.app/_next/image?url=%2Fxnet-logo.png&w=1920&q=75",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Joe does.",
      name: "Tom Goddard",
      designation: "MD",
      company: "WeAG",
      image: "https://cms.weaccelerategrowth.com/sites/default/files/2019-01/Tom.jpeg",
    },
    {
      testimonial:
        "After Joe optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Conner King",
      designation: "Marketing Manager",
      company: "Avado",
      image: "https://media.licdn.com/dms/image/C4E03AQGHUvDq_wtG1Q/profile-displayphoto-shrink_800_800/0/1542367489567?e=2147483647&v=beta&t=sJFdmEve35tCpXV530HFkw0FzEHMtkF0msg98iGOPjU",
    },
  ];
  
  const projects = [
    {
      name: "The Sphere",
      description:
        "Web3 platform that allows users to discover, swap and pool tokens on the blockchain. It also features an NFT marketplace",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "go",
          color: "green-text-gradient",
        },
        {
          name: "solidity",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/TeamSphere/sphere",
    },
    {
      name: "XNet",
      description:
        "An adult streaming platform built ontop of the XRPL",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "nextjs",
          color: "green-text-gradient",
        },
        {
          name: "XRP SDK",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/TeamXNET/xnet",
    },
    {
      name: "Quake",
      description:
        "Website for Lisbon's newest immersive attraction. An earthquake museum where you can learn about the history and science of earthquakes",
      tags: [
        {
          name: "gatsby",
          color: "blue-text-gradient",
        },
        {
          name: "graphql",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://lisbonquake.com/en-GB",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };