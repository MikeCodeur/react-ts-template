import * as React from 'react'
import {
  Heading,
  Text,
  ContainerPage,
  Box,
  Row,
  Col,
  Hidden,
  Flex,
} from '../components/ui'
import {useTheme, useColorMode} from '@chakra-ui/system'
import {LoginForm} from '../components/form/LoginForm'
import SplitScreen from '../components/form/SplitScreen'
import SimpleCard from '../components/form/SimpleLoginCard'
import {Exemple} from '../pages/Exemple'
const grid_left = {
  xs: 12,
  sm: 12,
  md: 5,
  lg: 5,
  xl: 5,
  xxl: 5,
}
const grid_right = {
  xs: 12,
  sm: 12,
  md: 8,
  lg: 7,
  xl: 7,
  xxl: 7,
}

export const Login = () => {
  const theme = useTheme()
  //return <Exemple />
  const {colorMode, toggleColorMode} = useColorMode()
  return (
    <ContainerPage>
      <Flex h={'100vh'} justifyContent="center">
        <Row
          style={{height: '100%', width: '1024px'}}
          align="center"
          justify="center"
          direction="row"
          gutterWidth={0}
        >
          <Hidden sm xs md>
            <Col grid={grid_left}>
              <Box
                boxShadow="xl"
                mr={-1}
                h={600}
                p={10}
                bg={theme?.colorScheme}
                justifyContent="center"
                alignContent="center"
                alignItems="center"
                borderWidth={colorMode === 'dark' ? '0px' : '1px'}
                borderLeftRadius="lg"
              >
                <Heading
                  textAlign="center"
                  mt={40}
                  variant="h1"
                  colorScheme="white"
                  size="lg"
                >
                  Welcome Back
                </Heading>
                <Text
                  textAlign="center"
                  mt={20}
                  variant="p"
                  colorScheme="white"
                >
                  Hébergez un nombre illimité de fichiers et de vidéos, proposez
                  des plans de paiement, des ventes incitatives, des quiz, du
                  contenu au goutte-à-goutte et des commentaires d’étudiants.
                </Text>
              </Box>
            </Col>
          </Hidden>
          <Col grid={grid_right}>
            <Flex
              boxShadow={colorMode === 'dark' ? 'none' : 'xs'}
              borderTopWidth="1px"
              borderBottomWidth="1px"
              borderRightWidth="1px"
              borderRightRadius="lg"
              h={600}
              alignItems="center"
              justifyContent="center"
            >
              <SimpleCard />
              {/* <LoginForm /> */}
            </Flex>
          </Col>
        </Row>
      </Flex>
    </ContainerPage>
  )
}
export default Login
