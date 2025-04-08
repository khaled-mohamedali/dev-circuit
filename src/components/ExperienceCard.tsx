import { Avatar, Card } from "@chakra-ui/react";
import experienceLogoWhite from "../assets/coding_icon_white.svg";
import experienceLogoBlack from "../assets/coding_icon_black.svg";
import { Experience } from "@/hooks/data";
import { useColorMode } from "./ui/color-mode";

interface Props {
  experience: Experience;
}

const ExperienceCard = ({ experience }: Props) => {
  const { colorMode } = useColorMode();
  return (
    <Card.Root>
      <Card.Body gap="3">
        <Avatar.Root size="lg" shape="rounded" bgColor={"whiteAlpha.100"}>
          {colorMode == "dark" ? (
            <Avatar.Image src={experienceLogoWhite} />
          ) : (
            <Avatar.Image src={experienceLogoBlack} />
          )}

          <Avatar.Fallback />
        </Avatar.Root>
        <Card.Title mt="2" fontSize={"2xl"} fontFamily={"Tektur"}>
          {experience.title}
        </Card.Title>
        <Card.Description fontSize={"xl"} fontFamily={"Montserrat"}>
          {experience.text}
        </Card.Description>
      </Card.Body>
    </Card.Root>
  );
};

export default ExperienceCard;
