import * as React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {roleAdmin, roleUser} from '../commons/constantes'
import {AdminRouter} from './admin/AdminRouter'
import {UserRouter} from './users/UsersRouter'
import {About} from './public/About'
import {Restricted} from './public/Restricted'
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
        <Route path="/restricted">
          <Restricted />
        </Route>
        <PrivateRoute
          roles={[roleAdmin]}
          path="/admin"
          component={AdminRouter}
        />
        <PrivateRoute
          roles={[roleAdmin, roleUser]}
          path="/user"
          component={UserRouter}
        />
        <Route path="*">
          <Error404 />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}
