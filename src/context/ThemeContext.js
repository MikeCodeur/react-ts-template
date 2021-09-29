import * as React from 'react'
import {ThemeDefaultProps,ThemeDefault} from '../commons/constantes'

// export type ThemeContextStore = {
//   theme: {};
// };

const ThemeContext = React.createContext/*<ThemeContextStore>*/(/*{theme:{}}*/)


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

// /*: React.PropsWithChildren<{}>*/
const ThemeProvider =  (props) => {
  const [theme, setTheme] = React.useState(ThemeDefault)
  const value = {theme, setTheme}
  //return <ThemeContext.
  return <ThemeContext.Provider value={value} {...props} />
}




export {ThemeContext, useAppTheme, ThemeProvider,useSetTheme}
