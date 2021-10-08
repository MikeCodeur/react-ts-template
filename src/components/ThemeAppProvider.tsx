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
  const customTheme = extendTheme(
    {...theme},
    config,
    withDefaultProps({
      defaultProps: theme,
    }),
  )
  return <ChakraProvider theme={customTheme}>{children}</ChakraProvider>
}
export {ThemeAppProvider}
