import * as React from 'react'
import {ChakraProvider, extendTheme, withDefaultProps} from '@chakra-ui/react'
import {useAppTheme} from '../context/ThemeContext'

type ThemeAppProviderTypes = {
  children: React.ReactNode
}
const ThemeAppProvider = ({children}: ThemeAppProviderTypes) => {
  const {theme} = useAppTheme()
  const config = {
    initialColorMode: 'light',
    useSystemColorMode: false,
  }
  // MODIFIE INDIVIDUELLEMENT CHAQUE COMPO
  // const customTheme = extendTheme({...theme, config});

  // MODIFIE LE THEME GENERAL
  const customTheme = extendTheme(
    {...theme},
    config,
    withDefaultProps({
      defaultProps: theme,
    }),
  )
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>
}
export {ThemeAppProvider}
