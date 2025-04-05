import { Avatar, Card } from "@chakra-ui/react";
import experienceLogo from "../assets/coding_icon.svg";
import { Experience } from "@/hooks/data";

interface Props {
  experience: Experience;
}

const ExperienceCard = ({ experience }: Props) => {
  return (
    <Card.Root width={"310px"}>
      <Card.Body>
        <Avatar.Root size="lg" shape="rounded" bgColor={"whiteAlpha.100"}>
          <Avatar.Image src={experienceLogo} />
          <Avatar.Fallback name="Nue Camp" />
        </Avatar.Root>
        <Card.Title mt="2" fontSize={25} fontFamily={"Tektur"}>
          {experience.title}
        </Card.Title>
        <Card.Description>{experience.text}</Card.Description>
      </Card.Body>
    </Card.Root>
  );
};

export default ExperienceCard;
