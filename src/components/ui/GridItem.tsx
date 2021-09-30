import {GridItem as ChakraGridItem, GridItemProps} from '@chakra-ui/react'

export const GridItem = ({...rest}: GridItemProps) => {
  return <ChakraGridItem {...rest}></ChakraGridItem>
}
export default GridItem
