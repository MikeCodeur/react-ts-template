import * as React from 'react'
import {AuthAppTemplate} from '../components/templates/AuthAppTemplate'
import { HelloWorld } from '../components/HelloWorld'
const AccountPage = () => {
  return (
    <AuthAppTemplate>
      <HelloWorld/>
    </AuthAppTemplate>
  )
}
export {AccountPage}
