import React from 'react'

import {BrowserRouter as Router} from 'react-router-dom'
import {ErrorBoundary} from 'react-error-boundary'
import ErrorFallback from './components/ErrorFallback'
import {RouterPages} from './pages'
import {ThemeProvider} from './context/ThemeContext'
import {ThemeAppProvider} from './components/ThemeAppProvider'

function App() {

  return (
    <Router>
      <ThemeProvider>
        <ThemeAppProvider>
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <RouterPages />
          </ErrorBoundary>
        </ThemeAppProvider>
      </ThemeProvider>
    </Router>
  )
}

export default App
