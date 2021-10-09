import {
  Drawer as ChakraDrawer,
  DrawerProps,
  DrawerOverlay as ChakraDrawerOverlay,
  ModalOverlayProps,
  DrawerContent as ChakraDrawerContent,
  DrawerContentProps,
  DrawerHeader as ChakraDrawerHeader,
  ModalHeaderProps,
  DrawerBody as ChakraDrawerBody,
  ModalBodyProps,
} from '@chakra-ui/react'

export const Drawer = ({...rest}: DrawerProps) => {
  return <ChakraDrawer {...rest}></ChakraDrawer>
}
export const DrawerOverlay = ({...rest}: ModalOverlayProps) => {
  return <ChakraDrawerOverlay {...rest}></ChakraDrawerOverlay>
}
export const DrawerContent = ({...rest}: DrawerContentProps) => {
  return <ChakraDrawerContent {...rest}></ChakraDrawerContent>
}
export const DrawerHeader = ({...rest}: ModalHeaderProps) => {
  return <ChakraDrawerHeader {...rest}></ChakraDrawerHeader>
}
export const DrawerBody = ({...rest}: ModalBodyProps) => {
  return <ChakraDrawerBody {...rest}></ChakraDrawerBody>
}
export default Drawer
