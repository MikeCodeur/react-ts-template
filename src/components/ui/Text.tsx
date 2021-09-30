import React from 'react'
import {Text as ChakraText, TextProps} from '@chakra-ui/react'
import {useTheme, css} from '@emotion/react'
import styled from '@emotion/styled'
import {useAppTheme} from '../../context/ThemeContext'
// Surcharge du Compo Text de Chakra avec @emotion
const CustomText = styled(ChakraText)`
  ${props => {
    const {theme} = useAppTheme()
    const color = props?.color || props?.colorScheme || theme?.colorScheme
    switch (props.variant) {
      case 'h1':
        return css`
          font-size: 25px;
          font-weight: 700;
          color: ${color};
        `
      case 'h2':
        return css`
          font-size: 22px;
          font-weight: 600;
          color: ${color};
        `
      case 'h3':
        return css`
          font-size: 16px;
          font-weight: 600;
          color: ${color};
        `
      case 'disabled':
        return css`
          font-size: 14px;
          color: ${props?.colorScheme || '#819cad'};
        `
      case 'p':
      default:
        return css`
          font-size: 14px;
          color: ${color};
        `
    }
  }}
`
export const Text = ({...rest}: TextProps) => {
  return <CustomText {...rest}></CustomText>
}
export default Text
