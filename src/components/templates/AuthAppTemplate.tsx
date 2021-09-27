import {AppBar} from '../AppBar'
import {Footer} from '../Footer'

const AuthAppTemplate = (props: any) => {
  const {children} = props
  return (
    <>
      <AppBar isLogged={true}></AppBar>
      {children}
      <Footer></Footer>
    </>
  )
}

export {AuthAppTemplate}
