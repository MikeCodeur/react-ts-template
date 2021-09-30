import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import {ErrorBoundary} from 'react-error-boundary'
import ErrorFallback from './components/ErrorFallback'
import {RouterPages} from './pages'
import {AppProviders} from './context/'

export const App = () => {
  console.log('TOTO')
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
