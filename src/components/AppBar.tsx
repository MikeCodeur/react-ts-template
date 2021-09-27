import * as React from 'react'
import {Link} from 'react-router-dom'

interface AppBarProps {
  isLogged: boolean,
}

const AppBar: React.FC<AppBarProps> = ({isLogged}) => {
  return (
    <div>
      <ul>
        <li>
          <Link to={'/'}>home</Link>
        </li>
        {isLogged && (
          <>
            <li>
              <Link to={'/account'}>Account</Link>
            </li>
            <li>
              <Link to={'/setting'}>Settings</Link>
            </li>
            <li>
              <Link to={'/about'}>About</Link>
            </li>{' '}
          </>
        )}
      </ul>
    </div>
  )
}
export {AppBar}
