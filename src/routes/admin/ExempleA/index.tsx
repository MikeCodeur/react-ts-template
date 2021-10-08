import React from 'react'
import {Button, Stack} from '../../../components/ui'

import {useAppTheme, useSetTheme} from '../../../context/ThemeContext'
import {useAuth} from '../../../context/AuthContext'
import {useColorMode} from '@chakra-ui/react'
import {theme as HyperTheme} from '../../../theme'
import {Button as ChakraButton, ButtonProps} from '@chakra-ui/react'
export const ExempleA = () => {
  const {theme, setTheme: updateThemeStore} = useAppTheme()
  const setTheme = useSetTheme()
  const {colorMode, toggleColorMode} = useColorMode()
  const {login, register, logout, authUser} = useAuth()
  const [editColors, setEditColors] = React.useState(false)
  return (
    <>
      <h1>Page exemple A Routage du Schoolowner </h1>
      <Stack direction="row" spacing={4} align="center" mt={20}>
        <Button onClick={toggleColorMode}>
          Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
        </Button>
        <Button onClick={() => setTheme(null)}>Theme Par default</Button>
        <Button onClick={() => setTheme(null)}>Theme Kevin</Button>
        <ChakraButton onClick={() => setTheme(HyperTheme)}>
          Theme Mike
        </ChakraButton>
      </Stack>
    </>
  )
}
