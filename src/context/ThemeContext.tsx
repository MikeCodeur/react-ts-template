import * as React from 'react'
import {ThemeDefault} from '../commons/constantes'

export type ThemeContextStore = {
  theme: any
  setTheme: (theme: any) => void
}

const ThemeContext = React.createContext<ThemeContextStore>({
  theme: {},
  setTheme: () => {}, // To be implemented in provider
})

const useAppTheme = () => {
  const context = React.useContext(ThemeContext)
  if (!context) {
    throw new Error("useTheme() s'utilise avec <AuthContext.provider>")
  }
  return context
}

const useSetTheme = () => {
  const {setTheme} = useAppTheme()
  return setTheme
}

const ThemeProvider = (props: React.PropsWithChildren<{}>) => {
  const [theme, setTheme] = React.useState(ThemeDefault)
  const value = {theme, setTheme}
  return <ThemeContext.Provider value={value} {...props} />
}

export {ThemeContext, useAppTheme, ThemeProvider, useSetTheme}
