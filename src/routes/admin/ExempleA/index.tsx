import React from 'react'
import {Button, Stack} from '../../../components/ui'

import {useSetTheme} from '../../../context/ThemeContext'
import {useColorMode} from '@chakra-ui/react'
import {theme as HyperTheme} from '../../../theme'
import {Button as ChakraButton} from '@chakra-ui/react'
export const ExempleA = () => {
  const setTheme = useSetTheme()
  const {colorMode, toggleColorMode} = useColorMode()
  return (
    <>
      <h1>Page exemple A Routage du Schoolowner </h1>
      <Stack direction="row" spacing={4} align="center" mt={20}>
        <Button onClick={toggleColorMode}>
          Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
        </Button>
        <ChakraButton onClick={() => setTheme(HyperTheme)}>
          Set Theme
        </ChakraButton>
      </Stack>
    </>
  )
}
