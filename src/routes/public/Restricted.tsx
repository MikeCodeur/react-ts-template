import * as React from 'react'
import {AppTemplate} from '../../components/templates/AppTemplate'
import { Link } from 'react-router-dom'
const Restricted = () => {
  return (
    <AppTemplate>
      <h1>Accès non authorisé</h1>
      <Link to='/' >Home</Link>
    </AppTemplate>
  )
}
export {Restricted}
