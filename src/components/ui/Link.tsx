import {Link as ChakraLink, LinkProps} from '@chakra-ui/react'
//import {Link as DomRouterLink} from 'react-router-dom'
export const Link = ({...rest}: LinkProps & {to?: string}) => {
  return <ChakraLink {...rest}></ChakraLink>
}
export default Link
