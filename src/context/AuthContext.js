import * as React from 'react'

const AuthContext = React.createContext()

const useAuth = () => {
  const context = React.useContext(AuthContext)
  if (!context) {
    throw new Error("useAuth() s'utilise avec <AuthContext.provider>")
  }
  return context
}

async function getUserByToken() {
  let user = null
  user = {username: 'Fake', token: 'FakeToken', roles: ['admin', 'user']}
  // const token = await authNetflix.getToken()
  // if (token) {
  //   const data = await clientAuth('me', {token})
  //   user = data.data.user
  // }
  return user
}

const AuthProvider = props => {
  const [authUser, setAuthUser] = React.useState()
  const fakeUser = {token:'fake',roles:['COACH','STUDENT']}
  const login = React.useCallback( data => setAuthUser({...fakeUser,username:data.username}),[setAuthUser])
  const register = React.useCallback( data => setAuthUser({...fakeUser,username:data.username}),[setAuthUser])
  const logout = React.useCallback( () => setAuthUser(null),[setAuthUser])
  const value = {authUser, login, register, logout}
  return <AuthContext.Provider value={value} {...props} />
}


export {AuthContext, useAuth, AuthProvider}
