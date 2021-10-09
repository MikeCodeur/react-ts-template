import React from 'react'
import {
  Input as InputChakra,
  InputProps,
  FormControl as FormControlChakra,
  FormControlProps,
  FormLabel as FormLabelChakara,
  FormLabelProps,
  FormHelperText as FormHelpersTextChakara,
  HelpTextProps,
} from '@chakra-ui/react'

// ;<FormControl id="email">
//   <FormLabel>Email address</FormLabel>
//   <Input type="email" />
//   <FormHelperText>We'll never share your email.</FormHelperText>
// </FormControl>

export const Input = ({...rest}: InputProps) => {
  return <InputChakra {...rest}></InputChakra>
}
export const FormControl = ({...rest}: FormControlProps) => {
  return <FormControlChakra {...rest}></FormControlChakra>
}
export const FormLabel = ({...rest}: FormLabelProps) => {
  return <FormLabelChakara {...rest}></FormLabelChakara>
}
export const FormHelperText = ({...rest}: HelpTextProps) => {
  return <FormHelpersTextChakara {...rest}></FormHelpersTextChakara>
}
export type FormInputProps = InputProps &
  HelpTextProps &
  FormControlProps &
  HelpTextProps & {
    text?: string
    errorMessage?: string
  }
export const FormInput = ({...props}: FormInputProps) => {
  return (
    <FormControl id={props?.id}>
      <FormLabel>{props?.label}</FormLabel>
      <Input
        placeholder={props?.placeholder}
        type={props?.type}
        value={props?.value}
        {...props}
      />
      <FormHelperText>{props?.text}</FormHelperText>
      <FormHelperText color="red.500">{props?.errorMessage}</FormHelperText>
    </FormControl>
  )
}
export default Input
