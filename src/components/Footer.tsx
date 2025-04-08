import { Container, HStack, Link, Stack } from "@chakra-ui/react";
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
          <Link href="#">
            <DevLogo w={200} h={50} />
          </Link>
          <HStack>
            <Link href="https://www.facebook.com/khaledmohamed.ali.52/">
              <FaFacebookSquare size={30} />
            </Link>
            <Link href="https://github.com/khaled-mohamedali">
              <FaGithub size={30} />
            </Link>
            <Link href="https://www.linkedin.com/in/khaledmohamedali/">
              <FaLinkedin size={30} />
            </Link>
          </HStack>
        </Stack>
      </Stack>
      <Copyright />
    </Container>
  );
};

export default Footer;
