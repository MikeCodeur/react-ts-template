import {Link as ChakraLink, LinkProps} from '@chakra-ui/react'
import {Link as DomRouterLink} from 'react-router-dom'
export const Link = ({...rest}: LinkProps & {to?: string}) => {
  if (rest?.to) {
    return (
      <DomRouterLink to={rest?.to}>
        <ChakraLink {...rest}></ChakraLink>
      </DomRouterLink>
    )
  }
  return <ChakraLink {...rest}></ChakraLink>
}
export default Link
