import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import {ErrorBoundary} from 'react-error-boundary'
import ErrorFallback from './components/ErrorFallback'
import {RouterPages} from './routes'
import {AppProviders} from './context/'

export const App = () => {
  return (
    <Router>
      <AppProviders>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <RouterPages />
        </ErrorBoundary>
      </AppProviders>
    </Router>
  )
}

export default App
