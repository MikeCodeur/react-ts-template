import {Link as ChakraLink, LinkProps} from '@chakra-ui/react'

export const Link = ({...rest}: LinkProps) => {
  return <ChakraLink {...rest}></ChakraLink>
}
export default Link
