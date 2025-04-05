import {
  Button,
  Grid,
  GridItem,
  Heading,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { BsCpuFill } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";
import { FaMobile } from "react-icons/fa6";
import { IoLogoGameControllerB } from "react-icons/io";
import "./App.css";
import Ai from "./components/Ai";
import ExperienceGrid from "./components/ExperienceGrid";
import Hero from "./components/Hero";
import InfiniteCarousel from "./components/InfiniteCarousel";
import Line from "./components/Line";
import NavBar from "./components/NavBar";
import ProjectGrid from "./components/ProjectGrid";
import AboutMe from "./components/TextWithImage";

function App() {
  return (
    <Grid
      templateAreas={`"nav"
                  "hero"
                  "aboutme"
                  "experience"
                  "projects"
                  "skills"
                  "contact"
                  "footer"`}
      gridTemplateRows={"auto auto auto auto auto auto auto"}
      gridTemplateColumns={"1fr"}
      gap={10}
      py={3}
      mx={{ base: "20px", xl: "350px" }}
    >
      {/* Header */}
      <GridItem area="nav">
        <NavBar />
      </GridItem>

      {/* Hero Section */}
      <GridItem area="hero">
        <Hero></Hero>
      </GridItem>

      {/* Skills Section */}
      <GridItem area="aboutme">
        <AboutMe />
      </GridItem>

      {/* Experience Section */}
      <GridItem area="experience">
        <VStack p={5} gap={5}>
          <Heading fontFamily={"Tektur"} fontSize={"2xl"} textAlign={"center"}>
            My Journey So Far as Software Dev
          </Heading>
          <Line width={200} color="purple.400" />
        </VStack>
        <ExperienceGrid />
      </GridItem>

      {/* Projects Section */}
      <GridItem area="projects">
        <VStack p={5} gap={5}>
          <Heading fontFamily={"Tektur"} fontSize={"2xl"}>
            Featured Projects
          </Heading>
          <Line width={200} color="green.500" />
          <Text fontFamily={"Montserrat"} fontSize={"lg"}>
            Where clean code meets innovative architecture - each project
            represents a leap in my problem-solving abilities and technical
            mastery
          </Text>
          <HStack>
            <Button
              variant={"outline"}
              borderRadius={"full"}
              colorPalette={"green"}
            >
              {" "}
              All Projects
            </Button>
            <Button variant={"outline"} borderRadius={"full"}>
              {" "}
              <FaMobile />
              Mobile App
            </Button>
            <Button variant={"outline"} borderRadius={"full"}>
              {" "}
              <FaGlobe /> Web App
            </Button>
            <Button variant={"outline"} borderRadius={"full"}>
              {" "}
              <BsCpuFill />
              Embedded Systems
            </Button>
            <Button variant={"outline"} borderRadius={"full"}>
              {" "}
              <IoLogoGameControllerB />
              Games
            </Button>
            <Button variant={"outline"} borderRadius={"full"}>
              {" "}
              <Ai />
              AI
            </Button>
          </HStack>
        </VStack>
        <ProjectGrid />
      </GridItem>

      {/* Skills Section */}
      <GridItem area="skills">
        <VStack p={5} gap={5}>
          <Heading fontFamily={"Tektur"} fontSize={"2xl"} textAlign={"center"}>
            Technical Expertise
          </Heading>
          <Line width={200} color="cyan.400" />
        </VStack>
        <InfiniteCarousel />
        {/* Infinite scroll carousel */}
      </GridItem>

      {/* Contact Section */}
      <GridItem area="contact">Contact</GridItem>

      {/* Footer */}
      <GridItem area="footer" bg="gray.800" color="white">
        Footer
      </GridItem>
    </Grid>
  );
}

export default App;
