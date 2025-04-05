import { Project } from "@/hooks/data";
import { Badge, Button, Card, Flex, Image } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa6";

// interface Props {
//   project: Project;
// }

interface Props {
  project: Project;
}

const ProjectCard = ({ project }: Props) => {
  const colorPalette = [
    "gray",
    "red",
    "pink",
    "purple",
    "cyan",
    "blue",
    "teal",
    "green",
    "yellow",
    "orange",
  ];
  return (
    <Card.Root
      boxShadow="lg"
      _hover={{ boxShadow: "2xl", transform: "translateY(-2px)" }}
      transition="all 0.2s ease"
    >
      <Image src={project.img_url} h="200px"></Image>
      <Card.Body gap="3">
        <Card.Title>{project.title}</Card.Title>
        <Flex wrap="wrap" gap={2}>
          {project.list_bagdes.map((b) => (
            <Badge
              key={b.name}
              colorPalette={
                colorPalette[Math.floor(Math.random() * colorPalette.length)]
              }
              borderRadius="full"
              fontSize="xs"
            >
              <b.Icon></b.Icon>
              {b.name}
            </Badge>
          ))}
        </Flex>
      </Card.Body>
      <Card.Footer justifyContent="space-between">
        {project.git && (
          <Button variant="ghost" borderRadius="full" size={"xs"}>
            <FaGithub /> View Source
          </Button>
        )}
        {project.demo && (
          <Button
            variant="plain"
            borderRadius="full"
            size={"xs"}
            colorPalette={"cyan"}
          >
            <FaGlobe />
            Demo
          </Button>
        )}
      </Card.Footer>
    </Card.Root>
  );
};

export default ProjectCard;
