import { Project } from "@/hooks/data";
import { Card, HStack, Icon, Image } from "@chakra-ui/react";
interface Props {
  project: Project;
}

const ProjectCard = ({ project }: Props) => {
  return (
    <Card.Root>
      <Image src={project.img_url} h="50%"></Image>
      <Card.Body>
        <Card.Title>{project.title}</Card.Title>
        <HStack>
          <Icon size="sm"></Icon>
        </HStack>
      </Card.Body>
    </Card.Root>
  );
};

export default ProjectCard;
