import { Box, HStack, Image } from "@chakra-ui/react";
import Logo from "../assets/logo.svg";
import MobileMenu from "./MobileMenu";
import NavLinks from "./NavLinks";

const NavBar = () => {
  return (
    <HStack justify="space-between">
      <Box width="150px">
        <Image src={Logo}></Image>
      </Box>
      <NavLinks />
      <Box display={{ base: "flex", md: "none" }}>
        <MobileMenu />
      </Box>
    </HStack>
  );
};

export default NavBar;
