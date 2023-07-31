import expensetracker from "../assets/expensetracker.png";
import investmentcalculator from "../assets/investmentcalculator.png";
import mapt from "../assets/mapt.png";
import campmyvan from "../assets/campmyvan.png";
import codex from "../assets/codex.png";

export const ProjectList = [
  {
    name: "mApt",
    image: mapt,
    description:
      "This app is designed to help individuals make educated and responsible decisions when it comes to relocating or finding a new place to stay. Whether you're moving to a new city, considering a neighborhood change, or simply looking for a temporary residence.",
    skills: "Ruby on Rails, Stimulus JS, Google Maps API, HTML, Sass CSS",
    gh: "https://github.com/ndy-lopez/mApt",
  },
  {
    name: "Expense Tracker",
    image: expensetracker,
    description:
      "This project is a simple spending tracker built using React and the useState hook. It provides a table to display the list of expenses and a form to add new expenses.",
    skills: "ReactJS",
    gh: "https://github.com/ndy-lopez/react-expense-tracker",
  },
  {
    name: "Investment Calculator",
    image: investmentcalculator,
    description:
    "This calculator allows users in understanding the potential growth of their investments under various scenarios,  such as varying savings amounts, interest rates, and investment durations.",
    skills: "ReactJS",
    gh: "https://github.com/ndy-lopez/react-investment-calculator",
  },
  {
    name: "Codex",
    image: codex,
    description:
    "A ChatGPT clone. OpenAI provides an API for developers to access ChatGPT's capabilities which was integrated into this app.",
    skills: "NodeJS, OpenAI API, HTML, CSS, Vite",
    gh: "https://github.com/ndy-lopez/node_OpenAI_Codex",
  },
  {
    name: "CampMyVan",
    image: campmyvan,
    description:
    "A camper van rental service, inspired by AirBnb.",
    skills: "Ruby on Rails, HTML, Bootstrap CSS",
    gh: "https://github.com/ndy-lopez/CampMyVan",
  },
];

export default ProjectList;
