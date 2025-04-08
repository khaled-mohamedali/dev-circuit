import { Container, HStack, Stack } from "@chakra-ui/react";
import { FaFacebookSquare, FaGithub, FaLinkedin } from "react-icons/fa";
import Copyright from "./Copyright";
import { DevLogo } from "./Logo";

const Footer = () => {
  return (
    <Container
      as="footer"
      display={{ base: "flex", md: "block" }} // flex on mobile, block on tablet+
      flexDirection={{ base: "column", md: "row" }}
      alignItems={{ base: "center", md: "flex-start" }}
      justifyContent={{ base: "center", md: "space-between" }}
    >
      <Stack gap={6} padding={5}>
        <Stack
          direction={{ base: "column", md: "row" }}
          justifyContent="space-between"
          alignItems={{ base: "center" }}
        >
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
