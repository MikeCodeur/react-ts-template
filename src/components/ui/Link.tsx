import {Link as ChakraLink, LinkProps} from '@chakra-ui/react'
import {Link as DomRouterLink} from 'react-router-dom'
export const Link = ({...rest}: LinkProps & {to?: string}) => {
  if (rest?.to) {
    return (
      <ChakraLink {...rest}>
        <DomRouterLink to={rest?.to}>{rest?.children}</DomRouterLink>
      </ChakraLink>
    )
  }
  return <ChakraLink {...rest}></ChakraLink>
}
export default Link
