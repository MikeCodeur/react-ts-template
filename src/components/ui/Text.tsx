import { Text as ChakraText } from "@chakra-ui/react"
import { css } from '@emotion/react'
import styled from '@emotion/styled';


// Surcharge du Compo Text de Chakra avec @emotion
const CustomText = styled(ChakraText)`
${props => {
    switch (props.variant) {
      case 'h1':
        return css`
          font-size: 25px;
          font-weight: 700;
          color: red;
        `;
      case 'h2':
        return css`
          font-size: 22px;
          font-weight: 600;
          color: blue;
        `;
      case 'h3':
        return css`
          font-size: 16px;
          font-weight: 600;
          color: green;
        `;
      case 'disabled':
        return css`
          font-size: 14px;
          color: #819cad;
        `;
      case 'p':
      default:
        return css`
          font-size: 14px;
        `;
    }
  }}

`
export const Text = ({
  ...rest
}) => {
  
  return(
    <CustomText {...rest}>

    </CustomText>
  )

}
export default Text;