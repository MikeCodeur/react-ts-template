import * as React from 'react'
import {ChakraProvider, extendTheme, withDefaultProps} from '@chakra-ui/react'
import {useAppTheme} from '../context/ThemeContext'

const ThemeAppProvider = ({children}) => {
  const {theme} = useAppTheme()
  const config = {
    initialColorMode: 'light',
    useSystemColorMode: false,
  }
  // MODIFIE INDIVIDUELLEMENT CHAQUE COMPO
  //const customTheme = extendTheme({...theme, config});

  // MODIFIE LE THEME GENERAL 
  const customTheme = extendTheme(
    withDefaultProps({
      defaultProps:theme,
    },
     config
    ),
  )
  return <ChakraProvider theme={customTheme}>{children}</ChakraProvider>
}
export {ThemeAppProvider}
