import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import {ErrorBoundary} from 'react-error-boundary'
import ErrorFallback from './components/ErrorFallback'
import { RouterPages } from './pages';
import { ChakraProvider } from "@chakra-ui/react"
import { Theme } from './styles';
import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({ Theme })
// 3. Pass the `theme` prop to the `ChakraProvider`
function App() {
  return (
    <Router>
      <ChakraProvider theme={theme}>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <RouterPages/>
        </ErrorBoundary>
      </ChakraProvider>
    </Router>
  )
}

export default App
