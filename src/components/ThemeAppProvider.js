import * as React from 'react'
import {ChakraProvider, extendTheme} from '@chakra-ui/react'
import {useAppTheme} from '../context/ThemeContext'

const ThemeAppProvider = ({children}) => {
  const {theme} = useAppTheme()
  const config = {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  }
  const customTheme = extendTheme({...theme, config})
  return <ChakraProvider theme={customTheme}>{children}</ChakraProvider>
}
export {ThemeAppProvider}
