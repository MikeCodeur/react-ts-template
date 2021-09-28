import React from 'react'
import { ThemeDefaultProps } from './commons/constantes';
import {BrowserRouter as Router} from 'react-router-dom'
import {ErrorBoundary} from 'react-error-boundary'
import ErrorFallback from './components/ErrorFallback'
import { RouterPages } from './pages';
import { useThemeStore } from './commons/store';
import { 
  ChakraProvider,
  extendTheme, 
  withDefaultProps,
} from "@chakra-ui/react"






function App() {
  // Je simule un theme chargé en BDD 
  const { theme } = useThemeStore();
  const customTheme = extendTheme(
    withDefaultProps({
      defaultProps:theme,
    }),
  )
  return (
    <Router>  
      <ChakraProvider theme={customTheme}  >
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <RouterPages/>
        </ErrorBoundary>
      </ChakraProvider>
    </Router>
  )
}

export default App
