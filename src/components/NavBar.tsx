import { Box, HStack, Image, Link } from "@chakra-ui/react";
import Logo from "../assets/logo.svg";

const NavBar = () => {
  return (
    <HStack justify="space-between">
      <Box width="150px">
        <Image src={Logo}></Image>
      </Box>
      <HStack gap="80px" marginRight={5}>
        <Link>Home</Link>
        <Link>Projects</Link>
        <Link>Contact</Link>
      </HStack>
    </HStack>
  );
};

export default NavBar;
