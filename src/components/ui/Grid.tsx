import {Grid as GridChakra} from '@chakra-ui/react'
import {
  Container as ContainerGS,
  Row as RowGS,
  Col as ColGS,
  Hidden as HiddenGS,
  Visible as VisibleGS,
} from 'react-grid-system'

export const ContainerGrid = ({...rest}) => {
  return <ContainerGS {...rest}></ContainerGS>
}

export const Row = ({...rest}) => {
  return <RowGS {...rest}></RowGS>
}
export const Col = ({...rest}) => {
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
export const Hidden = ({...rest}) => {
  return <HiddenGS {...rest}></HiddenGS>
}
export const Visible = ({...rest}) => {
  return <VisibleGS {...rest}></VisibleGS>
}
export const Grid = ({...rest}) => {
  return <GridChakra {...rest}></GridChakra>
}
export default RowGS
