import {Button as ChakraButton, ButtonProps} from '@chakra-ui/react'

export const Button = ({...rest}: ButtonProps) => {
  return <ChakraButton {...rest}></ChakraButton>
}
export default Button
