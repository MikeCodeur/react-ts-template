import React from 'react'
import {Heading as HeadingChakra, HeadingProps} from '@chakra-ui/react'
import {css} from '@emotion/react'
import styled from '@emotion/styled'
import {useAppTheme} from '../../context/ThemeContext'
// Surcharge du Compo Text de Chakra avec @emotion
const CustomHeading = styled(HeadingChakra)`
  ${props => {
    const {theme} = useAppTheme()
    const color = props?.color || props?.colorScheme || theme?.colorScheme
    return css`
      color: ${color};
    `
  }}
`
export const Heading = ({...rest}: HeadingProps) => {
  return <CustomHeading {...rest}></CustomHeading>
}
export default Heading
