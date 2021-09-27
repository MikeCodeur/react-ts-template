import * as React from 'react';
import {
    Route,
    Redirect,
    RouteProps,
  } from 'react-router-dom';
import { useAuthStore } from '../commons/store/authStore';
export const PrivateRoute: React.FC<RouteProps & { component: React.FC }> = ({
    component: Component,
    ...rest
  }) => {

    const { isAuth } = useAuthStore();

    if(isAuth) {
        return <Route {...rest} render={props => <Component {...props} />} />;
    } else {
        return <Redirect to="/login" />;
    }
  }
  export default PrivateRoute;