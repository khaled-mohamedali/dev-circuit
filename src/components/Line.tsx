import { Box } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";

interface Props {
  width: number;
  color: string;
}

const scaleAnimation = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.5); }
  100% { transform: scale(1); }
`;

const Line = ({ width, color }: Props) => {
  return (
    <Box
      bg={color}
      h={"5px"}
      w={width}
      animation={`${scaleAnimation} 4s ease-in-out infinite`}
    ></Box>
  );
};

export default Line;
