import { Box } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";

interface Props {
  width: number;
  color: string;
  animate?: boolean;
}

const scaleAnimation = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.5); }
  100% { transform: scale(1); }
`;

const Line = ({ width, color, animate = true }: Props) => {
  return (
    <Box
      bg={color}
      h={"5px"}
      w={width}
      animation={
        animate ? `${scaleAnimation} 4s ease-in-out infinite` : undefined
      }
    ></Box>
  );
};

export default Line;
