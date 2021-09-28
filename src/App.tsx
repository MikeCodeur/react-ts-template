import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import {ErrorBoundary} from 'react-error-boundary'
import ErrorFallback from './components/ErrorFallback'
import { RouterPages } from './pages';
//import { ThemeProvider } from 'styled-components';
import { ThemeProvider, withTheme } from '@emotion/react'
import { Theme } from './styles';
function App() {
  return (
    <Router>
      <ThemeProvider theme={Theme}>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
        <RouterPages/>
        </ErrorBoundary>
      </ThemeProvider>
    </Router>
  )
}

export default App
