import * as React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {SchoolownerRouter} from './schoolowner/SchoolownerRouter'
import {StudentRouter} from './students/StudentRouter'
import {About} from './public/About'
import {Error404} from './Error404'
import {PrivateRoute} from '../components/PrivateRoute'
import {AccountPage} from './AccountPage'
import {Login} from './Login'
export const RouterPages: React.FunctionComponent<{}> = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route path="/account" exact>
          <AccountPage />
        </Route>
        <Route path="/" exact>
          <Login />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        {/*  ZONE PRIVÉ  SOUS-ROUTER  */}
        <PrivateRoute path="/schoolowner" component={SchoolownerRouter} />
        <PrivateRoute path="/student" component={StudentRouter} />
        <Route path="*">
          <Error404 />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}
