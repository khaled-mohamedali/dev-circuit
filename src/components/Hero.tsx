import { Box, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";
import image_1 from "../assets/image_1.jpeg";
const Hero = () => {
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} gap={10} alignItems="center">
      <Box>
        <Heading fontFamily="Tektur" size={{ base: "3xl", xl: "4xl" }}>
          Innovative Approaches in Software Development and Robotics
        </Heading>
        <Text fontFamily="Montserrat" fontSize={{ lg: "xl" }}>
          Welcome to my portfolio! As a passionate software developer and AI
          engineer, I specialize in creating intelligent systems and embedded
          solutions that drive innovation.
        </Text>
      </Box>
      <Image src={image_1} borderRadius="20px"></Image>
    </SimpleGrid>
  );
};

export default Hero;
