import {AppBar} from '../AppBar'
import {Footer} from '../Footer'
import { Container } from '../ui';

export const AuthAppTemplate = (props: any) => {
  const {children} = props
  return (
    <>
      <AppBar/>
        <Container>
          {children}
        </Container>
      <Footer/>
    </>
  )
}

export default AuthAppTemplate;