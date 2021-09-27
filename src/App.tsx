import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {ErrorBoundary} from 'react-error-boundary'
import Error404 from './pages/Error404'
import ErrorFallback from './components/ErrorFallback'
import {AccountPage} from './pages/AccountPage'
import {About} from './pages/public/About'
import {Login} from './pages/public/Login'

function App() {
  const authUser = 'fake'
  //const authUser = null
  return <>{authUser ? <AuthenticatedApp /> : <UnauthenticatedApp />}</>
}

const AuthenticatedApp = () => {
  return (
    <Router>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Switch>
          <Route path="/" exact={true}>
            <AccountPage />
          </Route>
          <Route path="/account">
            <AccountPage />
          </Route>
          <Route path="/setting">
            <AccountPage />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="*">
            <Error404 />
          </Route>
        </Switch>
      </ErrorBoundary>
    </Router>
  )
}

const UnauthenticatedApp = () => {
  return (
    <Router>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Switch>
          <Route path="/" exact={true}>
            <Login />
          </Route>
          <Route path="/about">
            <About />
          </Route>

          <Route path="*">
            <Error404 />
          </Route>
        </Switch>
      </ErrorBoundary>
    </Router>
  )
}

export default App
