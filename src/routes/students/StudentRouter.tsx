import React from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import {ExempleB} from './ExempleB'
import {AuthAppTemplate} from '../../components/templates/AuthAppTemplate'

export const StudentRouter = () => {
  return (
    <AuthAppTemplate>
      <Switch>
        <Route component={ExempleB} path={'/student/exemple-B'} />
      </Switch>
    </AuthAppTemplate>
  )
}
