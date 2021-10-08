import React from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import {ExempleB} from './ExempleB'
import {UserDashboard} from './UserDashboard'
import {AuthAppTemplate} from '../../components/templates/AuthAppTemplate'

export const UserRouter = () => {
  return (
    <AuthAppTemplate>
      <Switch>
        <Route component={ExempleB} path={'/user/exemple-B'} />
        <Route component={UserDashboard} path={'/user/dashboard'} />
      </Switch>
    </AuthAppTemplate>
  )
}
