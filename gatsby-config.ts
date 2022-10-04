import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  pathPrefix: "/its-me",
  siteMetadata: {
    sideNav: [
      { name: "It's me", path: "/" },
      { name: "Blog", path: "/blog" },
      { name: "Project", path: "/project" }
    ],
    aboutMe: {
      githubLink: "https://github.com/achtarudin",
      photoProfile: "https://avatars.githubusercontent.com/u/24327891?v=4",
      me: `Hi, I am - Achtarudin, - a Fullstack Web Programmer`,
      about:
        "I am a qualified and professional web programmer with three years of experience as full stack programmer. Strong creative and analytical skills. Team player with an eye for detail. ",
      resumeLink: "https://github.com/achtarudin",
      skills: [
        {
          name: "Laravel",
          icon: "SiLaravel",
          value: "88",
          iconColor: "red.500",
          progressColor: "red"
        },
        {
          name: "Mysql",
          icon: "SiMysql",
          value: "70",
          iconColor: "blue.500",
          progressColor: "blue"
        },
        {
          name: "Vue Js",
          icon: "SiVuedotjs",
          value: "77",
          iconColor: "green.500",
          progressColor: "green"
        },
        {
          name: "Javascript",
          icon: "SiJavascript",
          value: "80",
          iconColor: "yellow.500",
          progressColor: "yellow"
        },
        {
          name: "Tailwind CSS",
          icon: "SiTailwindcss",
          value: "70",
          iconColor: "blue.500",
          progressColor: "blue"
        },
        {
          name: "Rest API",
          icon: "SiPostman",
          value: "80",
          iconColor: "orange.500",
          progressColor: "orange"
        }
      ],
      experiences: [
        {
          companyName: "Izzo Cipta Indonesia",
          date: "(Maret 2020 - September 2022)",
          position: "Fullstack Web Programmer",
          jobDetail: [
            "Manage User Registration, Login, and Logout",
            "Create UI and UX project using templates",
            "Setup and maintain server and database",
            "Manage cron job",
            "Project Koperasi",
            "Project Klinik",
            "Project Babycare",
            "Project Inventory",
            "Developing web application using Laravel, VueJS, Mysql, and other Javascript plugins",
            "Developing Rest API using Laravel and Mysql For Mobile Apps",
            "Customize UI using Tailwind CSS"
          ]
        },
        {
          companyName: "Gandsoft",
          date: "(Jan 2019 - Maret 2019 / Probation)",
          position: "Backend Developer",
          jobDetail: [
            "Testing of web application using PHPUnit",
            "Create documentation using Spreadsheet",
            "Project Work Order",
            "Developing web application using Laravel, Jquery, Postgrees, and other Javascript  plugins"
          ]
        }
      ]
    },
    title: "Gatsby Default Starter",
    siteUrl: `https://www.yourdomain.tld`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    {
      resolve: "@chakra-ui/gatsby-plugin",
      options: {
        /**
         * @property {boolean} [resetCSS=true]
         * if false, this plugin will not use `<CSSReset />
         */
        resetCSS: true,
        /**
         * @property {boolean} [isUsingColorMode=true]
         * if false, this plugin will not use <ColorModeProvider />
         */
        isUsingColorMode: true
      }
    }
  ]
};

export default config;
