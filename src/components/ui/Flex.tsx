import React from 'react'
import {Flex as ChakraFlex, FlexProps} from '@chakra-ui/react'

export const Flex = ({...rest}: FlexProps) => {
  return <ChakraFlex {...rest}></ChakraFlex>
}
export default Flex
