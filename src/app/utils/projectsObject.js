import { IoLogoJavascript } from "react-icons/io5";
import { FaJava, FaReact, FaCss3Alt, FaHtml5, FaSass } from "react-icons/fa";
import {
  RiNextjsFill,
  RiTailwindCssFill,
  RiJavascriptFill,
} from "react-icons/ri";
import { randomUUID } from "crypto";
import uuid from "uuid";

const relativePathProjects = "/images/projects";
const relativeLinkGithub = "https://github.com/LeonardoSchmittK";
const iconSize = 50;

const projects = [
  {
    title: "Termorever",
    description: "Imagine a wordle, but you play forever...",
    stack: ["nextjs", "tailwindcss"],
    image: `${relativePathProjects}/termorever.png`,
    gitHub: `${relativeLinkGithub}/termo`,
    icons: [
      <RiNextjsFill size={iconSize} key={uuid()} />,
      <RiTailwindCssFill size={iconSize} key={uuid()} />,
    ],
    link: "https://termorever.vercel.app/",
  },
  {
    title: "Twenty One Pilots",
    description: "A website for Twenty One Pilots fans",
    stack: ["javascript", "css", "html"],
    image: `${relativePathProjects}/twentyOnePilots.png`,
    gitHub: `${relativeLinkGithub}/twenty-one-pilots`,
    icons: [
      <RiJavascriptFill size={iconSize} key={uuid()} />,
      <FaCss3Alt size={iconSize} key={uuid()} />,
      <FaHtml5 size={iconSize} key={uuid()} />,
    ],
    link: "https://twenty-one-pilots-6upy.vercel.app/",
  },
  {
    title: "Shopping List",
    description: "A well-designed shopping list :)",
    stack: ["javascript", "css", "html"],
    image: `${relativePathProjects}/shoppingList.png`,
    gitHub: `${relativeLinkGithub}/shopping-list-futuro-dev`,
    icons: [
      <RiJavascriptFill size={iconSize} key={uuid()} />,
      <FaCss3Alt size={iconSize} key={uuid()} />,
      <FaHtml5 size={iconSize} key={uuid()} />,
    ],
  },
  {
    title: "pomodoroTimer",
    description: "A web app for setting timers in the style of pomodoro",
    stack: ["javascript", "css", "html"],
    image: `${relativePathProjects}/pomodoroTimer.png`,
    gitHub: `${relativeLinkGithub}/pomodoroTimer`,
    icons: [
      <RiJavascriptFill size={iconSize} key={uuid()} />,
      <FaCss3Alt size={iconSize} key={uuid()} />,
      <FaHtml5 size={iconSize} key={uuid()} />,
    ],
  },
  {
    title: "movieResearcher",
    description:
      "A web app for search info and list your favorite movies and tv-shows",
    stack: ["javascript", "css", "html"],
    image: `${relativePathProjects}/movieResearcher.png`,
    gitHub: `${relativeLinkGithub}/movieResearcher`,
    icons: [
      <RiJavascriptFill size={iconSize} key={uuid()} />,
      <FaCss3Alt size={iconSize} key={uuid()} />,
      <FaHtml5 size={iconSize} key={uuid()} />,
    ],
  },
  {
    title: "Enem do dia",
    description:
      "An random Enem question per day - so you can test your knowledge for the test and track your progress",
    stack: ["nextjs", "tailwindcss"],
    image: `${relativePathProjects}/enemDoDia.png`,
    gitHub: `${relativeLinkGithub}/enemDoDia-front`,
    icons: [
      <RiNextjsFill size={iconSize} key={uuid()} />,
      <RiTailwindCssFill size={iconSize} key={uuid()} />,
    ],
    link: "https://enem-do-dia.onrender.com/",
  },
  {
    title: "Dvd animation",
    description: "Why not? I just thought if I could do it on my own. I did :)",
    stack: ["javascript", "css", "html"],
    image: `${relativePathProjects}/dvdAnimation.png`,
    gitHub: `${relativeLinkGithub}/enemDoDia-front`,
    icons: [
      <RiJavascriptFill size={iconSize} key={uuid()} />,
      <FaCss3Alt size={iconSize} key={uuid()} />,
      <FaHtml5 size={iconSize} key={uuid()} />,
    ],
    link: "https://leonardoschmittk.github.io/dvd/",
  },
  {
    title: "Classroom management",
    description: "A CRUD for manage a classroom",
    stack: ["java"],
    image: `${relativePathProjects}/cadastroAlunos.jpg`,
    gitHub: `${relativeLinkGithub}/CadastroAlunos`,
    icons: [<FaJava size={iconSize} key={uuid()} />],
  },
];

export default projects;
