import {AppBar} from '../AppBar'
import {Footer} from '../Footer'
//import {Container} from '../ui'

export const AuthAppTemplate = (props: any) => {
  const {children} = props
  return (
    <>
      <AppBar />
      <>{children}</>
      <Footer />
    </>
  )
}

export default AuthAppTemplate
