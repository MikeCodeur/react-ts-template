import * as React from 'react'
import {Route, Redirect, RouteProps} from 'react-router-dom'
import {useAuth} from '../context/AuthContext'
import {hasRoles} from '../commons/helpers'

interface RouteAppProps extends RouteProps {
  roles: string[]
}

export const PrivateRoute: React.FC<RouteAppProps & {component: React.FC}> = ({
  component: Component,
  roles,
  ...rest
}) => {
  const {authUser}: any = useAuth()

  if (hasRoles(authUser, roles)) {
    return <Route {...rest} render={props => <Component {...props} />} />
  } else {
    return <Redirect to="/restricted" />
  }
}
export default PrivateRoute
