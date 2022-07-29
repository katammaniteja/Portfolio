import {
  DiPython,
  DiJavascript,
  DiReact,
  DiVisualstudio,
  DiMysql,
} from "react-icons/di";
import { SiDjango, SiPostman } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";

const languages = [
  {
    id: 1,
    icon: <DiPython />,
    name: "Python",
    level: "80",
  },
  {
    id: 2,
    icon: <DiJavascript />,
    name: "Javascript",
    level: "70",
  },
  {
    id: 3,
    icon: <SiDjango />,
    name: "Django",
    level: "80",
  },
  {
    id: 4,
    icon: <DiReact />,
    name: "Reactjs",
    level: "65",
  },
  {
    id: 5,
    icon: <DiMysql />,
    name: "MySQL",
    level: "50",
  },
];

const tools = [
  {
    id: 1,
    icon: <DiVisualstudio />,
    name: "Visual Studio",
    level: "74",
  },
  {
    id: 2,
    icon: <SiPostman />,
    name: "Postman",
    level: "67",
  },
  {
    id: 3,
    icon: <FaGitAlt />,
    name: "Git",
    level: "70",
  },
];

const education = [
  {
    id: 1,
    title: "NIT Agartala(2020-2024)",
    name: "Computer Science Engineering",
    details: "",
  },
  {
    id: 2,
    title: "Tirumala Junior College(2018-2020)",
    name: "Intermediate(MPC)",
    details: "",
  },
];

const experience = [
  {
    id: 1,
    title: "Shiksha Sopan-IIT Kanpur",
    name: "Backend Developer Intern(Feb 2022-Present)",
    details:
      "Working as a back-end developer in the core team of Prof H.C Verma sir where we built Discussion Forum and NAEST Examination Portal which is an annual online competition which assesses and nurtures keen observational skills, experimental skills, and analytical skills of a student in physics.",
  },
];

export { languages, tools, education, experience };
