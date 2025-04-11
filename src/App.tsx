import {
  Box,
  Button,
  Grid,
  GridItem,
  Heading,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import "./App.css";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import ExperienceGrid from "./components/ExperienceGrid";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import InfiniteCarousel from "./components/InfiniteCarousel";
import Line from "./components/Line";
import NavBar from "./components/NavBar";
import ProjectGrid from "./components/ProjectGrid";
import { useColorMode } from "./components/ui/color-mode";
import { buttons } from "./hooks/data";

function App() {
  const [type, setType] = useState("");
  const { colorMode } = useColorMode();
  return (
    <Grid
      templateAreas={{
        base: `"nav"
                  "hero"
                  "aboutme"
                  "experience"
                  "projects"
                  "skills"
                  "contact"
                  "footer"`,
        lg: `"nav"
                "hero hero"
                "aboutme"
                "experience"
                "projects"
                "skills"
                "contact contact"
                "footer"`,
      }}
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
      {/* Experience Section  */}
      <GridItem area="experience">
        <VStack p={5} gap={5}>
          <Heading fontFamily={"Tektur"} fontSize={"2xl"} textAlign={"center"}>
            My Journey So Far as Software Dev
          </Heading>
          <Line width={200} color="purple.400" />
        </VStack>
        <ExperienceGrid />
      </GridItem>
      {/* Projects Section   */}
      <GridItem area="projects">
        <Box id="projects">
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
            <HStack flexWrap="wrap">
              {buttons.map((button) => (
                <Button
                  variant={"outline"}
                  borderRadius={"full"}
                  onClick={() => setType(button.type)}
                >
                  {button.iconRender ? (
                    colorMode == "dark" ? (
                      <button.iconRender darkMode={true} />
                    ) : (
                      <button.iconRender darkMode={false} />
                    )
                  ) : (
                    button.icon && <button.icon />
                  )}
                  {button.label}
                </Button>
              ))}
            </HStack>
          </VStack>
          <ProjectGrid type={type} />
        </Box>
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
      </GridItem>
      <GridItem area="contact">
        <Box paddingBottom={20}>
          <Heading fontFamily={"Tektur"} fontSize={"2xl"}>
            {" "}
            Get In Touch
          </Heading>
          <Text fontFamily={"Montserrat"} fontSize={"lg"} fontWeight={"bold"}>
            I’d love to hear about your project ideas!
          </Text>
        </Box>
        <Box id="contact">
          <Contact />
        </Box>
      </GridItem>
      <GridItem area="footer">
        <Footer />
      </GridItem>
    </Grid>
  );
}

export default App;
