import {
    mobile,
    backend,
    creator,
    web,
    typescript,
    reactjs,
    redux,
    git,
    docker,
    mysql,
    nextjs,
    php,
    magento,
    graphql,
    upwork,
    scandiweb,
    cloudStorage,
    mongodb,
    blogMern,
    webchat,
    sneakers,
    ecommerceApp,
    mealsToGo
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
      title: "Frontend Developer",
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
      title: "Mentor",
      icon: creator,
    },
  ];

  const technologies = [
    {
      name: "Next JS",
      icon: nextjs,
    },
    {
      name: "PHP",
      icon: php,
    },
    {
      name: "MySql",
      icon: mysql,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Magento",
      icon: magento,
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
      name: "git",
      icon: git,
    },
    {
      name: "graphql",
      icon: graphql,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];

  const experiences = [
    {
      title: "React.js Developer",
      company_name: "Freelance",
      icon: upwork,
      iconBg: "#FFFFFF",
      date: "March 2021 - November 2021",
      points: [
        "Creating simple landing pages for local companies using HTML, CSS and JS",
        "Linking the Frontend with WordPress CMS platform",
        "Creating simple apps for customer loyalty system"
      ],
    },
    {
      title: "ReactJS Developer",
      company_name: "scandiweb",
      icon: scandiweb,
      iconBg: "#cf0b0c",
      date: "February 2022 - September 2022",
      points: [
        "Maintaining ScandiPWA theme for Magento 2",
        "Fixing bugs in ScandiPWA",
        "ScandiPWA migration for Magento 2.4.4 version ",
      ],
    },
    {
      title: "Fullstack Developer",
      company_name: "scandiweb",
      icon: scandiweb,
      iconBg: "#cf0b0c",
      date: "September 2022 - Present",
      points: [
        "Creating modules for Magento 2 in order to make extensions compatible with ScandiPWA",
        "Creating PWA solutions for Amasty, Mageplaza Adobe vendors",
        "Creating extensions and plugins for ScandiPWA",
        "Creating the website app for Panhomestores company using ScandiPWA and Magento 2 <a href='https://www.panhomestores.com/' target='blank'>www.panhomestores.com</a>, creating custom modules for CRM solution and Loyalty system",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Team Lead/Mentor",
      company_name: "scandiweb",
      icon: scandiweb,
      iconBg: "#cf0b0c",
      date: "January 2023 - April 2023",
      points: [
        "Leading a small team of 4 developers, helping with some blockers, delegating new tasks",
        "Mentoring newcomers",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];

  const projects = [
    {
      name: "Meals App (WIP)",
      description:
        "WIP. React Native app with restaurants and cafes locations and descriptions, ability to pay with stripe payments.",
      tags: [
        {
          name: "react native",
          color: "blue-text-gradient",
        },
        {
          name: "stripe",
          color: "green-text-gradient",
        },
        {
          name: "google maps",
          color: "pink-text-gradient",
        },
      ],
      image: mealsToGo,
      source_code_link: "https://github.com/AzizKHAN030/MealsToGo",
    },
    {
      name: "Cloud Storage",
      description:
        "Web application that allows the user to store files in cloud. Ability to register users, login, moving the files to cart and etc.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "postgres sql",
          color: "green-text-gradient",
        },
        {
          name: "nestjs",
          color: "pink-text-gradient",
        },
      ],
      image: cloudStorage,
      source_code_link: "https://github.com/AzizKHAN030/cloud-storage",
    },
    {
      name: "Blog App",
      description:
        "Web application that allows users to post posts and articles, shows CRUD functionality using MERN stack. Besides that authentication and authorization also is made",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "express",
          color: "pink-text-gradient",
        },
      ],
      image: blogMern,
      source_code_link: "https://github.com/AzizKHAN030/blog-mern",
    },
    {
      name: "Web chat app",
      description:
        "A real-time web chat for sending messages to the room members.",
      tags: [
        {
          name: "express",
          color: "blue-text-gradient",
        },
        {
          name: "react",
          color: "pink-text-gradient",
        },
        {
          name: "socket.io",
          color: "green-text-gradient",
        },
      ],
      image: webchat,
      source_code_link: "https://github.com/AzizKHAN030/webchat-react-socketio",
    },
    {
      name: "React sneakers app",
      description:
        "A simple ecommerce plp app with ability to add items to cart and wishlist",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mockapi",
          color: "pink-text-gradient",
        },
      ],
      image: sneakers,
      source_code_link: "https://github.com/AzizKHAN030/React-Sneakers",
    },
    {
      name: "Ecommerce app",
      description:
        "Ecommerce app with PDP and PLP implementation, with ability to change the configurations, currency and etc",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "graphql",
          color: "pink-text-gradient",
        },
        {
          name: "redux",
          color: "green-text-gradient",
        },
      ],
      image: ecommerceApp,
      source_code_link: "https://github.com/AzizKHAN030/EcommerceApp",
    },
    {
      name: "Ecommerce app",
      description:
        "Ecommerce app with PDP and PLP implementation, with ability to change the configurations, currency and etc",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "graphql",
          color: "pink-text-gradient",
        },
        {
          name: "redux",
          color: "green-text-gradient",
        },
      ],
      image: ecommerceApp,
      source_code_link: "https://github.com/AzizKHAN030/EcommerceApp",
    },
  ];

  export { services, technologies, experiences, projects };