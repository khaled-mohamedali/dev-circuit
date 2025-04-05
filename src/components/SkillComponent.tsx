import { Skill } from "@/hooks/data";
import { Badge } from "@chakra-ui/react";
import { colorPalette } from "@/hooks/data";

interface SkillProps {
  skill: Skill;
}
const SkillComponent = ({ skill }: SkillProps) => {
  const SkillIcon = skill.component;

  return (
    <Badge
      margin={2}
      colorPalette={
        colorPalette[Math.floor(Math.random() * colorPalette.length)]
      }
    >
      {" "}
      <SkillIcon size={60} />
    </Badge>
  );
};

export default SkillComponent;
