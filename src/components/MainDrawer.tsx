import * as React from 'react'
import {useAuth} from '../context/AuthContext'
import {useDisclosure} from '@chakra-ui/react'
import {HamburgerIcon} from '@chakra-ui/icons'
import {
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
} from '../components/ui'
interface AppBarProps {}

const MainDrawer: React.FC<AppBarProps> = () => {
  const {login, register, logout, authUser} = useAuth()
  // const { resetAuthStore ,isAuth, roles } = useAuthStore();
  const {isOpen, onOpen, onClose} = useDisclosure()
  return (
    <>
      <Button variant="ghost" onClick={onOpen}>
        <HamburgerIcon />
      </Button>
      <Drawer placement={'left'} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">
            Menu de : {authUser?.username}
          </DrawerHeader>
          <DrawerBody>
            <p>Ici en fonction du mec on gère le sont menu</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}
export {MainDrawer}
