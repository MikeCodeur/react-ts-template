import React from 'react'
import {Route, Switch} from 'react-router-dom'
import {ExempleA} from './ExempleA'
import {AuthAppTemplate} from '../../components/templates/AuthAppTemplate'
export const CoachRouter = () => {
  return (
    <AuthAppTemplate>
      <Switch>
        <Route path={'/coach/exemple-A'}>
          <ExempleA />
        </Route>
      </Switch>
    </AuthAppTemplate>
  )
}
