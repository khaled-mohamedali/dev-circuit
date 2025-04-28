import { Badge } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { BsCpuFill } from "react-icons/bs";
import { DiPostgresql } from "react-icons/di";
import {
  FaAws,
  FaCss3Alt,
  FaDesktop,
  FaJava,
  FaNodeJs,
  FaPython,
  FaReact,
} from "react-icons/fa";
import {
  FaAndroid,
  FaC,
  FaCss3,
  FaGlobe,
  FaHtml5,
  FaJs,
  FaMobile,
  FaPhp,
} from "react-icons/fa6";
import { IoLogoGameControllerB } from "react-icons/io";
import {
  SiAndroid,
  SiDjango,
  SiDocker,
  SiFirebase,
  SiGamemaker,
  SiMongodb,
  SiMysql,
  SiPytorch,
  SiTensorflow,
  SiTypescript,
} from "react-icons/si";
import img_1 from "../assets/projects_images/princess_hero.png";
import img_2 from "../assets/projects_images/game-hub.png";
import img_3 from "../assets/projects_images/lafiya_care.jpeg";

import Ai from "@/components/Ai";
import { TbBrandCpp } from "react-icons/tb";
export interface Experience {
  id: number;
  title: string;
  text: string;
}
export interface Project {
  id: number;
  title: string;
  img_url: string;
  git: string;
  demo?: string;
  type: string;
  list_bagdes: Badge[];
}
interface Badge {
  name: string;
  Icon: IconType;
}
export interface Skill {
  id: number;
  component: IconType;
}
export const experiences: Experience[] = [
  {
    id: 1,
    title: `Graduate Teacher Assistant @ UNC Charlotte (Mobile App Dev)`,
    text: `As a Graduate Teacher Assistant at UNC Charlotte, I supported undergraduate students in mastering mobile app 
development concepts, including Android and iOS platforms. I conducted hands-on coding workshops, provided one-on-one mentorship, and assisted in grading
assignments and projects. This role honed my ability to communicate complextechnical concepts effectively while
fostering a collaborative learning
environment.`,
  },
  {
    id: 2,
    title: `Software Dev Intern @ Appzly (Embedded Software Engineer)`,
    text: `During my internship at Appzly, I designed
and implemented embedded software
solutions for IoT devices, leveraging C/C++
and real-time operating systems (RTOS). I
collaborated with cross-functional teams
to develop firmware for microcontrollers,
optimize system performance, and ensure
seamless hardware-software integration.`,
  },
  {
    id: 3,
    title: `Research Assistant @ USC Columbia (Web App Dev)`,
    text: `Developed and maintained web
applications for academic research using
PHP (Propel ORM) for back-end
development and JavaScript frameworks
like D3.js for data visualization. Utilized
MongoDB for database management,
enabling efficient storage and retrieval of
large datasets. Collaborated with
researchers to build scalable and
interactive tools for data analysis.`,
  },
];
export const projects: Project[] = [
  {
    id: 1,
    title: "Princess Hero",
    img_url: img_1,
    git: "https://github.com/khaled-mohamedali/Princesse_hero",
    type: "game",
    list_bagdes: [
      { name: "Game Maker", Icon: SiGamemaker },
      { name: "Physics", Icon: FaReact },
      { name: "Destop", Icon: FaDesktop },
    ],
  },
  {
    id: 2,
    title: "Game Hub",
    img_url: img_2,
    git: "https://github.com/khaled-mohamedali/game-hub",
    demo: "https://game-hub-rho-vert.vercel.app/",
    type: "web",
    list_bagdes: [
      { name: "React", Icon: FaReact },
      { name: "Java", Icon: FaJava },
      { name: "HMTL", Icon: FaHtml5 },
      { name: "CSS", Icon: FaCss3 },
      { name: "JS", Icon: FaJs },
    ],
  },
  {
    id: 3,
    title: "Lafiya Care",
    img_url: img_3,
    git: "https://github.com/khaled-mohamedali/Lafiya_Care/",
    demo: "",
    type: "mobile",
    list_bagdes: [
      { name: "Java", Icon: FaJava },
      { name: "FireBase", Icon: SiFirebase },
      { name: "Android", Icon: SiAndroid },
    ],
  },
];
export const colorPalette = [
  "gray",
  "red",
  "pink",
  "purple",
  "cyan",
  "blue",
  "teal",
  "green",
  "yellow",
  "orange",
];
export const skills = [
  { id: 1, component: FaJava },
  { id: 2, component: FaPython },
  { id: 3, component: FaCss3Alt },
  { id: 4, component: SiPytorch },
  { id: 5, component: FaC },
  { id: 6, component: TbBrandCpp },
  { id: 7, component: FaPhp },
  { id: 8, component: FaReact },
  { id: 9, component: SiTensorflow },
  { id: 10, component: SiMysql },
  { id: 11, component: SiMongodb },
  { id: 11, component: SiTypescript },
];

export const buttons = [
  { label: "All", icon: null, type: "" },
  { label: "Web App", icon: FaGlobe, type: "web" },
  { label: "Mobile App", icon: FaMobile, type: "mobile" },
  { label: "Embedded Systems", icon: BsCpuFill, type: "embedded" },
  { label: "Games", icon: IoLogoGameControllerB, type: "game" },
  { label: "AI", type: "ai", iconRender: Ai },
];
