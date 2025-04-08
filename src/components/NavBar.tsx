import { Box, HStack, useBreakpointValue } from "@chakra-ui/react";
import { DevLogo } from "./Logo";
import MobileMenu from "./MobileMenu";
import NavLinks from "./NavLinks";

const NavBar = () => {
  const logoWidth = useBreakpointValue({ base: 150, md: 250 });
  return (
    <HStack justify="space-between">
      {}

      <DevLogo w={logoWidth ?? 100} h={50} />
      <NavLinks />
      <Box display={{ base: "flex", md: "none" }}>
        <MobileMenu />
      </Box>
    </HStack>
  );
};

export default NavBar;
