import { IoLogoJavascript } from "react-icons/io5";
import { FaJava, FaReact, FaCss3Alt, FaHtml5, FaSass } from "react-icons/fa";
import {
  RiNextjsFill,
  RiTailwindCssFill,
  RiJavascriptFill,
} from "react-icons/ri";
import { v4 as uuidv4 } from "uuid";

const relativePathProjects = "/images/projects";
const relativeLinkGithub = "https://github.com/LeonardoSchmittK";
const iconSize = 50;

const projects = [
  {
    title: "Termorever",
    description: "Imagine a wordle, but you play forever...",
    stack: ["nextjs", "tailwindcss"],
    image: `${relativePathProjects}/termorever.png`,
    gitHub: {
      pathname: `${relativeLinkGithub}/termo`,
    },
    icons: [
      <RiNextjsFill size={iconSize} key={uuidv4()} />,
      <RiTailwindCssFill size={iconSize} key={uuidv4()} />,
    ],
    link: {
      pathname: "https://termorever.vercel.app/",
    },
  },
  {
    title: "Twenty One Pilots",
    description: "A website for Twenty One Pilots fans",
    stack: ["javascript", "css", "html"],
    image: `${relativePathProjects}/twentyOnePilots.png`,
    gitHub: {
      pathname: `${relativeLinkGithub}/twenty-one-pilots`,
    },
    icons: [
      <RiJavascriptFill size={iconSize} key={uuidv4()} />,
      <FaCss3Alt size={iconSize} key={uuidv4()} />,
      <FaHtml5 size={iconSize} key={uuidv4()} />,
    ],
    link: {
      pathname: "https://twenty-one-pilots-6upy.vercel.app/",
    },
  },
  {
    title: "Enem do dia",
    description:
      "An random Enem question per day - so you can test your knowledge for the test and track your progress",
    stack: ["nextjs", "tailwindcss"],
    image: `${relativePathProjects}/enemDoDia.png`,
    icons: [
      <RiNextjsFill size={iconSize} key={uuidv4()} />,
      <RiTailwindCssFill size={iconSize} key={uuidv4()} />,
    ],
    gitHub: {
      pathname: `${relativeLinkGithub}/enemDoDia-front`,
    },
    link: {
      pathname: "https://enem-do-dia.onrender.com/",
    },
  },
  {
    title: "Shopping List",
    description: "A well-designed shopping list :)",
    stack: ["javascript", "css", "html"],
    image: `${relativePathProjects}/shoppingList.png`,
    gitHub: {
      pathname: `${relativeLinkGithub}/shopping-list-futuro-dev `,
    },
    icons: [
      <RiJavascriptFill size={iconSize} key={uuidv4()} />,
      <FaCss3Alt size={iconSize} key={uuidv4()} />,
      <FaHtml5 size={iconSize} key={uuidv4()} />,
    ],
  },
  {
    title: "pomodoroTimer",
    description: "A web app for setting timers in the style of pomodoro",
    stack: ["javascript", "sass", "html"],
    image: `${relativePathProjects}/pomodoroTimer.png`,
    gitHub: {
      pathname: `${relativeLinkGithub}/pomodoroTimer`,
    },
    icons: [
      <RiJavascriptFill size={iconSize} key={uuidv4()} />,
      <FaSass size={iconSize} key={uuidv4()} />,
      <FaHtml5 size={iconSize} key={uuidv4()} />,
    ],
  },
  {
    title: "movieResearcher",
    description:
      "A web app for search info and list your favorite movies and tv-shows",
    stack: ["javascript", "css", "html"],
    image: `${relativePathProjects}/movieResearcher.png`,
    gitHub: {
      pathname: `${relativeLinkGithub}/movieResearcher`,
    },
    icons: [
      <RiJavascriptFill size={iconSize} key={uuidv4()} />,
      <FaCss3Alt size={iconSize} key={uuidv4()} />,
      <FaHtml5 size={iconSize} key={uuidv4()} />,
    ],
  },
  
  {
    title: "Dvd animation",
    description: "Why not? I just thought if I could do it on my own. I did :)",
    stack: ["javascript", "css", "html"],
    image: `${relativePathProjects}/dvdAnimation.png`,
    icons: [
      <RiJavascriptFill size={iconSize} key={uuidv4()} />,
      <FaCss3Alt size={iconSize} key={uuidv4()} />,
      <FaHtml5 size={iconSize} key={uuidv4()} />,
    ],
    gitHub: {
      pathname: `${relativeLinkGithub}/enemDoDia-front`,
    },
    link: {
      pathname: "https://leonardoschmittk.github.io/dvd/",
    },
  },
  {
    title: "Classroom management",
    description: "A CRUD for manage a classroom",
    stack: ["java"],
    image: `${relativePathProjects}/cadastroAlunos.jpg`,
    gitHub: {
      pathname: `${relativeLinkGithub}/CadastroAlunos`,
    },
    icons: [<FaJava size={iconSize} key={uuidv4()} />],
  },
];

export default projects;
