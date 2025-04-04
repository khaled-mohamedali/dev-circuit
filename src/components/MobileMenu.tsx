import {
  CloseButton,
  Drawer,
  IconButton,
  Link,
  Portal,
  VStack,
} from "@chakra-ui/react";
import { CiMenuBurger } from "react-icons/ci";

const MobileMenu = () => {
  return (
    <Drawer.Root>
      <Drawer.Trigger asChild>
        <IconButton variant="plain">
          <CiMenuBurger />
        </IconButton>
      </Drawer.Trigger>
      <Portal>
        <Drawer.Positioner>
          <Drawer.Content>
            <Drawer.Body>
              <VStack gap={10} align="flex-start" py={10}>
                <Link>Home</Link>
                <Link>Projects</Link>
                <Link>Contact</Link>
              </VStack>
            </Drawer.Body>
            <Drawer.CloseTrigger asChild>
              <CloseButton size="md" />
            </Drawer.CloseTrigger>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  );
};

export default MobileMenu;
