import { Box, Heading, Image, VStack, Text } from "@chakra-ui/react";
import bg_image from "../assets/bg_image.png";

function TextWithImage() {
  return (
    <Box position="relative" width="100%" aspectRatio="16/9">
      {" "}
      {/* Maintain aspect ratio (adjust as needed) */}
      <Image
        src={bg_image}
        alt="Background"
        objectFit="cover" // Ensures image covers the Box without stretching
        display={{ base: "none", lg: "flex" }}
      />
      <VStack
        position="absolute"
        top="0"
        left="0"
        w="100%"
        h="100%"
        align="center" // Horizontally center content
        gap={4} // Better than gap for Chakra VStack
        p={4} // Padding for better text visibility
        borderRadius="20px"
      >
        <Heading
          color="black"
          textShadow="2px 2px 4px white" // Improve readability
          textAlign="center"
          fontFamily="Tektur"
          fontSize={"2xl"}
        >
          Who Am I
        </Heading>
        <Text
          //   textShadow="2px 2px 4px white"
          fontFamily={"Montserrat"}
          fontSize={"md"}
          fontWeight={"bold"}
          px={4}
          py={2}
          textAlign="center"
        >
          I was awarded a full scholarship to Algeria, where I earned a
          bachelor's degree in computer science. More recently, I graduated from
          the University of North Carolina at Charlotte with a Master of
          Science, specializing in software development, machine learning,
          robotics, and embedded systems. With this strong academic foundation,
          I have developed expertise in software development, AI, and robotics
          engineering, with a focus on embedded software development and
          creating innovative solutions across various platforms.
        </Text>
      </VStack>
    </Box>
  );
}

export default TextWithImage;
