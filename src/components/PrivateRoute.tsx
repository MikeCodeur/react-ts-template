import * as React from 'react'
import {Route, Redirect, RouteProps} from 'react-router-dom'
import {useAuth} from '../context/AuthContext'
import {hasRoles} from '../commons/helpers'

interface RouteAppProps extends RouteProps {
  roles: string[]
}
// export const PrivateRoute: React.FC<RouteAppProps> = ({
//   component: Component,
//   roles,
//   ...rest
// }) =>
export const PrivateRoute: React.FC<RouteAppProps & {component: React.FC}> = ({
  component: Component,
  roles,
  ...rest
}) => {
  const {authUser}: any = useAuth()
  console.log('authUser', authUser)
  // console.log('roles', roles)
  // console.log(' checkRoles roles', checkRoles(authUser, roles))
  // console.log('authUser incluse', authUser.roles.includes(roles))

  if (hasRoles(authUser, roles)) {
    return <Route {...rest} render={props => <Component {...props} />} />
  } else {
    return <Redirect to="/restricted" />
  }
}
export default PrivateRoute
