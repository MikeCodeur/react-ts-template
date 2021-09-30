import {Stack as ChakraStack, StackProps} from '@chakra-ui/react'

export const Stack = ({...rest}: StackProps) => {
  return <ChakraStack {...rest}></ChakraStack>
}
export default Stack
