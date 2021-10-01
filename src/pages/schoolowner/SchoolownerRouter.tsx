import React from 'react'
import {Route, Switch} from 'react-router-dom'
import {ExempleA} from './ExempleA'
import {AuthAppTemplate} from '../../components/templates/AuthAppTemplate'
import {Dashboard} from '../schoolowner/Dashboard'
export const SchoolownerRouter = () => {
  return (
    <AuthAppTemplate>
      <Switch>
        <Route path={'/schoolowner/dashboard'}>
          <Dashboard />
        </Route>
        <Route path={'/schoolowner/exemple-A'}>
          <ExempleA />
        </Route>
      </Switch>
    </AuthAppTemplate>
  )
}
