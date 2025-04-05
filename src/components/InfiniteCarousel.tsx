import { Box, HStack } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import SkillComponent from "./SkillComponent";
import { skills } from "@/hooks/data";

const scroll = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-100%); }
`;

const InfiniteCarousel = () => {
  const animation = `${scroll} 120s linear infinite`;

  return (
    <Box
      width="100%"
      maxW="100%"
      overflow="hidden"
      position="relative"
      height="80px" // You can adjust this
    >
      <Box
        display="flex"
        width="fit-content"
        animation={animation}
        position="absolute"
        top={0}
        left={0}
      >
        <HStack gap={5}>
          {[...skills, ...skills].map((skill) => (
            <SkillComponent skill={skill}></SkillComponent>
          ))}
        </HStack>
      </Box>
    </Box>
  );
};

export default InfiniteCarousel;
