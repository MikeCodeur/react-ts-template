import * as React from 'react'
import {Route, Redirect, RouteProps} from 'react-router-dom'
import {useAuth} from '../context/AuthContext'
//import { useAuthStore } from '../commons/store/authStore';
export const PrivateRoute: React.FC<RouteProps & {component: React.FC}> = ({
  component: Component,
  ...rest
}) => {
  const {authUser}: any = useAuth()
  console.log('authUser', authUser)
  if (authUser) {
    return <Route {...rest} render={props => <Component {...props} />} />
  } else {
    return <Redirect to="/login" />
  }
}
export default PrivateRoute
