import styled from '@emotion/styled'
import {sizes} from '../../commons/constantes'
import {Container as ChakaraContainer, ContainerProps} from '@chakra-ui/react'
const headerHeight = '60px'
const footerHeight = '426px'
const minHeight = `calc(100vh - ${footerHeight} - ${headerHeight})`
export const ContainerPage = styled.div`
  max-width: ${sizes?.xl};
  width: 100%;
  margin: 0 auto;
  min-height: ${minHeight};
`

// export const ContainerPage = ({...rest}: ContainerProps) => {
//   return <ChakaraContainer maxWidth={sizes?.xl} {...rest}></ChakaraContainer>
// }
export const Container = ({...rest}: ContainerProps) => {
  return <ChakaraContainer {...rest}></ChakaraContainer>
}
export default Container
