import { HStack } from "@chakra-ui/react";
import {
  FaCss3,
  FaCss3Alt,
  FaGithub,
  FaJava,
  FaPython,
  FaReact,
} from "react-icons/fa";
import { FaC } from "react-icons/fa6";
import SkillComponent from "./Skill";
import { TbBrandCpp } from "react-icons/tb";

const skillIcons = [
  { id: 1, component: FaJava },
  { id: 2, component: FaPython },
  { id: 3, component: FaCss3Alt },
  { id: 4, component: FaGithub },
  { id: 5, component: FaReact },
  { id: 6, component: FaC },
  { id: 7, component: TbBrandCpp },
  { id: 8, component: FaCss3 },

  // Add more icons as needed
];

const AnimatedIcons = () => {
  return (
    <HStack>
      {[...skillIcons].map((skill, index) => (
        <SkillComponent skill={skill}></SkillComponent>
      ))}
    </HStack>
  );
};

export default AnimatedIcons;
