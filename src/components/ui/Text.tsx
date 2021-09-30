import { Text as ChakraText } from "@chakra-ui/react"
import {useTheme, css } from '@emotion/react'
import styled from '@emotion/styled';
import {useAppTheme} from '../../context/ThemeContext'
// Surcharge du Compo Text de Chakra avec @emotion
const CustomText = styled(ChakraText)`
${props => {
   const {theme} = useAppTheme()
    switch (props.variant) {
      case 'h1':
        return css`
          font-size: 25px;
          font-weight: 700;
          color: ${props?.colorScheme || theme?.colorScheme};
        `;
      case 'h2':
        return css`
          font-size: 22px;
          font-weight: 600;
          color: ${props?.colorScheme || theme?.colorScheme};
        `;
      case 'h3':
        return css`
          font-size: 16px;
          font-weight: 600;
          color: ${props?.colorScheme || theme?.colorScheme};
        `;
      case 'disabled':
        return css`
          font-size: 14px;
          color: ${props?.colorScheme || "#819cad"};
        `;
      case 'p':
      default:
        return css`
          font-size: 14px;
          color: ${props?.colorScheme || theme?.colorScheme};
        `;
    }
  }}

`
export const Text = ({
  ...rest
}) => {
  
  return(
    <CustomText   {...rest}>

    </CustomText>
  )

}
export default Text;