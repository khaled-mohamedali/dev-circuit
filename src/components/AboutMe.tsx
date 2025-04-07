import {
  Badge,
  Box,
  Button,
  Flex,
  GridItem,
  Heading,
  HStack,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FaRegHourglass } from "react-icons/fa";
import { GoProjectRoadmap } from "react-icons/go";
import { PiMagnifyingGlassPlusDuotone } from "react-icons/pi";

function AboutMe() {
  return (
    <>
      <Heading fontFamily="Tektur" fontSize={"2xl"}>
        About me
      </Heading>

      <Text fontFamily="Montserrat" fontSize={{ lg: "xl" }}>
        Hey, I’m Khaled 👋🏿 — a passionate developer focused on building
        innovative solutions across mobile 📱, web 🌍, and embedded systems ⚙️.
        From coding real-time microcontroller apps to experimenting with AI 🤖,
        I love bridging the gap between software and hardware.
        <br />
        Currently, I’m expanding my portfolio 🚧 and leveling up my skills with
        hands-on projects and collaborations. When I’m not coding, you’ll
        probably find me exploring robotics tech, tuning embedded timers, or
        reading about next-gen systems.
      </Text>

      <HStack gap={10} justifyContent={"flex-end"}>
        <Button variant={"plain"} bgColor={"cyan.100"} borderRadius={25}>
          <FaRegHourglass size={25} />
          5+ Years experience
        </Button>

        <Button variant={"plain"} bgColor={"cyan.100"} borderRadius={25}>
          <GoProjectRoadmap size={25} />
          25+ Projects
        </Button>

        <Button variant={"plain"} bgColor={"cyan.100"} borderRadius={25}>
          <PiMagnifyingGlassPlusDuotone /> Building Portfolio & Networking
        </Button>
      </HStack>
    </>
  );
}

export default AboutMe;
