import { Project } from "@/hooks/data";
import { Badge, Button, Card, Flex, Image, Link } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa6";
import { colorPalette } from "@/hooks/data";

// interface Props {
//   project: Project;
// }

interface Props {
  project: Project;
}

const ProjectCard = ({ project }: Props) => {
  return (
    <Card.Root
      boxShadow="lg"
      _hover={{ boxShadow: "2xl", transform: "translateY(-2px)" }}
      transition="all 0.2s ease"
    >
      <Image src={project.img_url} h="200px"></Image>
      <Card.Body gap="3">
        <Card.Title fontFamily={"Tektur"} fontSize={"xl"}>
          {project.title}
        </Card.Title>
        <Flex wrap="wrap" gap={2}>
          {project.list_bagdes.map((b) => (
            <Badge
              fontFamily={"Montserrat"}
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
      <Card.Footer justifyContent="space-between" fontFamily={"Montserrat"}>
        {project.git && (
          <Button variant="ghost" borderRadius="full" size={"xs"}>
            <Link href={project.git} variant={"plain"}>
              {" "}
              <FaGithub /> View Source{" "}
            </Link>
          </Button>
        )}
        {project.demo && (
          <Button
            variant="plain"
            borderRadius="full"
            size={"xs"}
            colorPalette={"cyan"}
          >
            <Link href={project.demo} variant={"plain"}>
              {" "}
              <FaGlobe /> Demo{" "}
            </Link>
          </Button>
        )}
      </Card.Footer>
    </Card.Root>
  );
};

export default ProjectCard;
