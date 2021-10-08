import React from 'react'
import {Route, Switch} from 'react-router-dom'
import {ExempleA} from './ExempleA'
import {AuthAppTemplate} from '../../components/templates/AuthAppTemplate'
import {Dashboard} from './Dashboard'
export const AdminRouter = () => {
  return (
    <AuthAppTemplate>
      <Switch>
        <Route path={'/admin/dashboard'}>
          <Dashboard />
        </Route>
        <Route path={'/admin/exemple-A'}>
          <ExempleA />
        </Route>
      </Switch>
    </AuthAppTemplate>
  )
}
