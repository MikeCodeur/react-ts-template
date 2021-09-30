import * as React from 'react'
import { Link } from 'react-router-dom'
import {useAuth} from '../context/AuthContext'
import {Flex, Box , Text } from '../components/ui';
interface AppBarProps {
  
}

const AppBar: React.FC<AppBarProps> = () => {
  const {login, register, logout, authUser} = useAuth()
 // const { resetAuthStore ,isAuth, roles } = useAuthStore();

  return (
    <Flex mt={20} width={1/1} display="inline-flex" flex="flex-wrap" >
        <Box p={10}>
          <Link to={'/'}>home</Link>
        </Box>
        {authUser && (
          <>
            {authUser.roles.includes('COACH') &&  
                <Box p={10}>
                  <Link to={'/coach/exemple-A'}>Page COACH</Link>
                </Box>
            }
            {authUser.roles.includes('STUDENT') &&  
                <Box p={10}>
                  <Link to={'/student/exemple-B'}>Page STUDENT</Link>
                </Box>
            }
            <Box p={10}>
              <Link to={'/account'}>Account</Link>
            </Box>
            <Box p={10}>
              <Link to={'/setting'}>Settings</Link>
            </Box>
            <Box p={10}>
              <Link to={'/about'}>About</Link>
            </Box>
            <Box p={10} onClick={()=> logout({})}>
              <Link to={'/login'}>DECONNEXION</Link>
            </Box>
            <Flex>
              <Text variant="p">Vos roles : {authUser.roles?.map((role:any)=><Flex display="inline-flex" flex="flex-wrap" p={10}>{role}</Flex> )}</Text>
            </Flex>
          </>
        )}
    </Flex>
  )
}
export {AppBar}
