import * as React from 'react'
import {Link} from 'react-router-dom'
import {useAuth} from '../context/AuthContext'
import {Flex, Box, Button, Divider} from '../components/ui'
import {MainDrawer} from './MainDrawer'

interface AppBarProps {}

const AppBar: React.FC<AppBarProps> = () => {
  const {login, register, logout, authUser} = useAuth()
  // const { resetAuthStore ,isAuth, roles } = useAuthStore();

  return (
    <Flex width={'100%'} display="inline-flex" flex="flex-wrap">
      <Box p={10}>
        <MainDrawer />
      </Box>

      {authUser && (
        <Box pt={10}>
          <Link to={'/account'}>
            <Button variant="ghost">Account</Button>
          </Link>

          <Link to={'/settings'}>
            <Button variant="ghost">Settings</Button>
          </Link>
          <Link to={'/about'}>
            <Button variant="ghost">About</Button>
          </Link>
          <Button onClick={() => logout()} variant="ghost">
            DECONNEXION
          </Button>
        </Box>
      )}
    </Flex>
  )
}
export {AppBar}
