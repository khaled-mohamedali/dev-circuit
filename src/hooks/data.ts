import img from "../assets/taskM.jpeg";
export interface Experience {
  id: number;
  title: string;
  text: string;
}

export interface Project {
  id: number;
  title: string;
  img_url: string;
  list_bagdes: string[];
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
    title: "Smart Home",
    img_url: img,
    list_bagdes: ["React", "TypeScript"],
  },
];
