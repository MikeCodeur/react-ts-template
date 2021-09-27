import {AppBar} from '../AppBar'
import {Footer} from '../Footer'

const AppTemplate = (props: any) => {
  const {children} = props
  return (
    <>
      <AppBar isLogged={false}></AppBar>
      {children}
      <Footer></Footer>
    </>
  )
}

export {AppTemplate}
