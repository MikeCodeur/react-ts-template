import * as React from 'react'
import {
  Stack,
  Heading,
  Flex,
  Box,
  Link,
  Button,
  FormInput,
} from '../../components/ui'
import {AiFillLinkedin, AiFillGoogleCircle} from 'react-icons/ai'
import {LinkIcon} from '@chakra-ui/icons'
import {useAuth} from '../../context/AuthContext'
import {useHistory} from 'react-router'

export const LoginForm = () => {
  const history = useHistory()
  const {login, register, logout, authUser} = useAuth()
  console.log('authUser', authUser)
  type FormValues = {
    email: string
    password: string
  }
  const onSubmit = async (formValues?: FormValues) => {
    login({
      username: formValues?.email as string,
      password: formValues?.password as string,
    })
    history.push('/user/dashboard')
  }

  return (
    <Box>
      <Heading variant="h1" size="lg">
        Connectez - vous
      </Heading>
      <Stack direction="row" spacing={12} align="center" mt={5}>
        <Button variant="ghost">
          <AiFillLinkedin />
        </Button>
        <Button variant="ghost">
          <AiFillGoogleCircle />
        </Button>
        <Button variant="ghost">
          <LinkIcon />
        </Button>
      </Stack>
      <Box mt={10}>
        <Box>
          <FormInput
            placeholder="john.doe@email.com"
            type="email"
            label="Email"
            id="test"
          />
        </Box>
        <Box>
          <FormInput type="password" label="Password" id="test" />
        </Box>
        <Flex width={'100%'} justifyContent="center" mt={5}>
          <Button colorScheme="linkedin" variant="link">
            Mot de passe perdu
          </Button>
        </Flex>
        <Flex width={'100%'} justifyContent="center" mt={5}>
          <Button
            onClick={() => {
              onSubmit({email: 'admin', password: ''})
            }}
            variant="solid"
          >
            Connexion Admin
          </Button>
        </Flex>
      </Box>
    </Box>
  )
}
export default LoginForm
