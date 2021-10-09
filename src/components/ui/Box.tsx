import {Box as ChakraBox, BoxProps} from '@chakra-ui/react'

export const Box = ({...rest}: BoxProps) => {
  return <ChakraBox {...rest}></ChakraBox>
}
export default Box
