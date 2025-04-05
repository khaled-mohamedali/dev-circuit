import { animate, motion, useMotionValue } from "framer-motion";
import { useEffect } from "react";
import {
  FaCss3,
  FaCss3Alt,
  FaGithub,
  FaJava,
  FaPython,
  FaReact,
} from "react-icons/fa";
import { FaC } from "react-icons/fa6";
import { TbBrandCpp } from "react-icons/tb";
import useMeasure from "react-use-measure";
import SkillComponent from "./Skill";

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
  const [ref, { width }] = useMeasure();
  const xTranslation = useMotionValue(0);

  useEffect(() => {
    let finalPosition = -width / 2;
    let controls = animate(xTranslation, [0, finalPosition], {
      ease: "linear",
      duration: 10,
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 0,
    });
    return controls.stop;
  }, [xTranslation, width]);

  return (
    <motion.div ref={ref} style={{ x: xTranslation }} className="gap-4">
      {[...skillIcons, ...skillIcons].map((skill, index) => (
        <SkillComponent skill={skill}></SkillComponent>
      ))}
    </motion.div>
  );
};

export default AnimatedIcons;
