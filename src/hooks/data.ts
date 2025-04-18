import { Badge } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { BsCpuFill } from "react-icons/bs";
import { DiPostgresql } from "react-icons/di";
import {
  FaAws,
  FaCss3Alt,
  FaJava,
  FaNodeJs,
  FaPython,
  FaReact,
} from "react-icons/fa";
import { FaC, FaGlobe, FaMobile, FaPhp } from "react-icons/fa6";
import { IoLogoGameControllerB } from "react-icons/io";
import {
  SiDjango,
  SiDocker,
  SiMongodb,
  SiMysql,
  SiPytorch,
  SiTensorflow,
  SiTypescript,
} from "react-icons/si";

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
  git: boolean;
  demo?: boolean;
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
    title: "E-Commerce Platform",
    img_url: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a",
    git: true,
    demo: true,
    type: "mobile",
    list_bagdes: [
      { name: "React", Icon: FaReact },
      { name: "Node.js", Icon: FaNodeJs },
      { name: "MongoDB", Icon: SiMongodb },
      { name: "AWS", Icon: FaAws },
      { name: "Python", Icon: FaPython },
      { name: "TensorFlow", Icon: SiTensorflow },
      { name: "Docker", Icon: SiDocker },
    ],
  },
  {
    id: 2,
    title: "AI Research Dashboard",
    img_url: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485",
    git: false,
    demo: true,
    type: "web",
    list_bagdes: [
      { name: "Python", Icon: FaPython },
      { name: "TensorFlow", Icon: SiTensorflow },
      { name: "Docker", Icon: SiDocker },
    ],
  },
  {
    id: 3,
    title: "Social Media Analytics",
    img_url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    git: true,
    demo: false,
    type: "game",
    list_bagdes: [
      { name: "TypeScript", Icon: SiTypescript },
      { name: "Django", Icon: SiDjango },
      { name: "PostgreSQL", Icon: DiPostgresql },
    ],
  },
  {
    id: 4,
    title: "IoT Monitoring System",
    img_url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    git: false,
    type: "embedded",
    list_bagdes: [
      { name: "React", Icon: FaReact },
      { name: "Node.js", Icon: FaNodeJs },
      { name: "Python", Icon: FaPython },
      { name: "Docker", Icon: SiDocker },
    ],
  },
  {
    id: 5,
    title: "IoT Monitoring System",
    img_url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    git: true,
    type: "mobile",
    list_bagdes: [
      { name: "React", Icon: FaReact },
      { name: "Node.js", Icon: FaNodeJs },
      { name: "Python", Icon: FaPython },
      { name: "Docker", Icon: SiDocker },
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
