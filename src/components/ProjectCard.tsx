import { Project } from "@/hooks/data";
import { Badge, Card, Flex, Image } from "@chakra-ui/react";

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
    <Card.Root>
      <Image src={project.img_url} h="200px"></Image>
      <Card.Body>
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
    </Card.Root>
  );
};

export default ProjectCard;
