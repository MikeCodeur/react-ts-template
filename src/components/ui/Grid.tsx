import {Grid as GridChakra} from '@chakra-ui/react'
import {
  Container as ContainerGS,
  ContainerProps,
  Row as RowGS,
  RowProps,
  Col as ColGS,
  ColProps,
  Hidden as HiddenGS,
  HiddenProps,
  Visible as VisibleGS,
  VisibleProps,
} from 'react-grid-system'
//https://sealninja.github.io/react-grid-system/

export const ContainerGrid = ({...rest}: ContainerProps & any) => {
  return <ContainerGS {...rest}></ContainerGS>
}

export const Row = ({...rest}: RowProps & any) => {
  return <RowGS {...rest}></RowGS>
}
type CustomColProps = ColProps &
  any & {
    grid: {
      xs: Number
      sm: Number
      md: Number
      lg: Number
      xl: Number
      xxl: Number
    }
  }
export const Col = ({...rest}: CustomColProps) => {
  return (
    <ColGS
      xs={rest?.grid?.xs}
      sm={rest?.grid?.sm}
      md={rest?.grid?.md}
      lg={rest?.grid?.lg}
      xl={rest?.grid?.xl}
      xxl={rest?.grid?.xxl}
      {...rest}
    ></ColGS>
  )
}
export const Hidden = ({...rest}: HiddenProps & any) => {
  return <HiddenGS {...rest}></HiddenGS>
}
export const Visible = ({...rest}: VisibleProps & any) => {
  return <VisibleGS {...rest}></VisibleGS>
}
export const Grid = ({...rest}) => {
  return <GridChakra {...rest}></GridChakra>
}
export default RowGS
