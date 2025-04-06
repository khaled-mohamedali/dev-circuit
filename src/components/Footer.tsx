import { Container, HStack, Stack } from "@chakra-ui/react";
import { FaFacebookSquare, FaGithub, FaLinkedin } from "react-icons/fa";
import Copyright from "./Copyright";
import { DevLogo } from "./Logo";

const Footer = () => {
  return (
    <Container as="footer">
      <Stack gap={6}>
        <Stack direction="row" justifyContent="space-between">
          <DevLogo w={200} h={50} />
          <HStack>
            <FaFacebookSquare size={30} />
            <FaGithub size={30} />
            <FaLinkedin size={30} />
          </HStack>
        </Stack>
      </Stack>
      <Copyright />
    </Container>
  );
};

export default Footer;
