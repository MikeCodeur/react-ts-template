/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react'
import {IUser} from '../types/auth'

export type AuthContextStore = {
  authUser: any
  login: (data: IUser) => void
  register: (data: IUser) => void
  logout: () => void
}
const AuthContext = React.createContext<AuthContextStore>({
  authUser: {},
  login: () => {}, // To be implemented in provider
  register: () => {}, // To be implemented in provider
  logout: () => {}, // To be implemented in provider
})

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
  // Your auth implementation here
  // exempla
  // const token = await provider.getToken()
  // if (token) {
  //   const data = await clientAuth('me', {token})
  //   user = data.data.user
  // }
  return user
}

const AuthProvider = (props: React.PropsWithChildren<{}>) => {
  const [authUser, setAuthUser] = React.useState<IUser | null>()
  // mock : simple user and admin for roles
  const fakeUser = {token: 'fake', roles: ['ADMIN', 'USER']}
  const login = React.useCallback(
    data =>
      setAuthUser({
        ...fakeUser,
        username: data.username,
        roles: data.username === 'admin' ? ['ADMIN', 'USER'] : ['USER'],
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [setAuthUser],
  )
  const register = React.useCallback(
    data =>
      setAuthUser({
        ...fakeUser,
        username: data.username,
        roles: data.username === 'admin' ? ['ADMIN', 'USER'] : ['USER'],
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [setAuthUser],
  )
  const logout = React.useCallback(() => setAuthUser(null), [setAuthUser])
  const value = {authUser, login, register, logout}
  return <AuthContext.Provider value={value} {...props} />
}

export {AuthContext, useAuth, AuthProvider}
