import * as React from 'react'
import {MdCall} from 'react-icons/md'
import {
  Container,
  Grid,
  GridItem,
  Text,
  Box,
  Button,
  Stack,
  Col,
  Row,
} from '../components/ui'
import {BlockPicker} from 'react-color'
import {useAppTheme, useSetTheme} from '../context/ThemeContext'
import {useAuth} from '../context/AuthContext'
import {useColorMode} from '@chakra-ui/react'
import {
  ThemeUserMike,
  ThemeUseKevin,
  grid1,
  grid2,
  grid4,
  grid6,
} from '../commons/constantes'
import {theme as HyperTheme} from '../theme'
const wrapColorsChakra = {
  '#3182CE': 'blue',
  '#E53E3E': 'red',
  '#38A169': 'green',
  '#D53F8C': 'pink',
}
const wrapColorsPicker = {
  blue: '#3182CE',
  red: '#E53E3E',
  green: '#38A169',
  pink: '#D53F8C',
}

export const Exemple = () => {
  //const { theme, updateThemeStore } = useThemeStore();
  const {theme, setTheme: updateThemeStore} = useAppTheme()
  const setTheme = useSetTheme()
  const {colorMode, toggleColorMode} = useColorMode()
  const {login, register, logout, authUser} = useAuth()
  const [editColors, setEditColors] = React.useState(false)
  return (
    <Container>
      <Button onClick={() => login({username: 'mike'})}>Se connecter</Button>
      <Button onClick={() => logout()}>Se deconnecter</Button>
      {authUser ? (
        <Box mt={20}>Salut {authUser.username} </Box>
      ) : (
        <Box mt={20}>Tes pas connecté</Box>
      )}
      <Box mt={20}>
        <Row>
          <Col grid={grid6}>
            <Box w={'100%'} bg="red">
              A
            </Box>
          </Col>
          <Col grid={grid6}>
            <Box w={'100%'} bg="green">
              B
            </Box>
          </Col>
          <Col grid={grid6}>
            <Box w={'100%'} bg="blue">
              C
            </Box>
          </Col>
          <Col grid={grid6}>
            <Box w={'100%'} bg="pink">
              D
            </Box>
          </Col>
          <Col grid={grid6}>
            <Box w={'100%'} bg="yellow">
              E
            </Box>
          </Col>
          <Col grid={grid6}>
            <Box w={'100%'} bg="purple">
              F
            </Box>
          </Col>
        </Row>
      </Box>
      <Box mt={20}>
        <Row>
          <Col grid={grid4}>
            <Box w={'100%'} bg="red">
              A
            </Box>
          </Col>
          <Col grid={grid4}>
            <Box w={'100%'} bg="green">
              B
            </Box>
          </Col>
          <Col grid={grid4}>
            <Box w={'100%'} bg="blue">
              C
            </Box>
          </Col>
          <Col grid={grid4}>
            <Box w={'100%'} bg="pink">
              D
            </Box>
          </Col>
        </Row>
      </Box>
      <Box mt={20}>
        <Row>
          <Col grid={grid2}>
            <Box w={'100%'} bg="red">
              A
            </Box>
          </Col>
          <Col grid={grid2}>
            <Box w={'100%'} bg="green">
              B
            </Box>
          </Col>
          <Col grid={grid2}>
            <Box w={'100%'} bg="blue">
              C
            </Box>
          </Col>
          <Col grid={grid2}>
            <Box w={'100%'} bg="pink">
              D
            </Box>
          </Col>
        </Row>
      </Box>
      <Box mt={20}>
        <Row>
          <Col grid={grid1}>
            <Box w={'100%'} bg="red">
              A
            </Box>
          </Col>
          <Col grid={grid1}>
            <Box w={'100%'} bg="green">
              B
            </Box>
          </Col>
          <Col grid={grid1}>
            <Box w={'100%'} bg="blue">
              C
            </Box>
          </Col>
          <Col grid={grid1}>
            <Box w={'100%'} bg="pink">
              D
            </Box>
          </Col>
        </Row>
      </Box>
      <Box>
        <Text variant="h1">Les grid inline</Text>
        <Grid templateColumns="repeat(5, 1fr)" gap={6}>
          <Box w="100%" h="10" bg="blue.500" />
          <Box w="100%" h="10" bg="blue.500" />
          <Box w="100%" h="10" bg="blue.500" />
          <Box w="100%" h="10" bg="blue.500" />
          <Box w="100%" h="10" bg="blue.500" />
        </Grid>
      </Box>
      <Box mt={20}>
        <Text variant="h1">Les grid Item</Text>
        <Grid
          h="200px"
          templateRows="repeat(2, 1fr)"
          templateColumns="repeat(5, 1fr)"
          gap={4}
        >
          <GridItem rowSpan={2} colSpan={1} bg="tomato" />
          <GridItem colSpan={2} bg="papayawhip" />
          <GridItem colSpan={2} bg="papayawhip" />
          <GridItem colSpan={4} bg="tomato" />
        </Grid>
      </Box>
      <Box height={200} mt={20}>
        <Button onClick={() => setEditColors(editColors ? false : true)}>
          {editColors ? 'Fermer' : 'Ouvrir'} La pallette de couleur
        </Button>
        {editColors && (
          <BlockPicker
            colors={['#3182CE', '#E53E3E', '#38A169', '#D53F8C']}
            //@ts-ignore
            color={wrapColorsPicker[theme?.colorScheme]}
            onChangeComplete={color =>
              updateThemeStore({
                ...theme,
                //@ts-ignore
                colorScheme: wrapColorsChakra[color.hex.toUpperCase()],
                //    colors:{
                //    brand: {
                //             //@ts-ignore
                //             "100":color.hex,
                //             //@ts-ignore
                //             "900":color.hex,
                //         },
                //     },
                color: color.hex,
              })
            }
          />
        )}
      </Box>
      <Box mt={20}>
        <Text variant="h1">Le H1</Text>
        <Text variant="h2">Le H2</Text>
        <Text variant="h2" colorScheme="red">
          Le H2 Surchargé IL SUIT PLUS LE THEME ATTENTION
        </Text>
        <Text variant="h3">le H3</Text>
        <Text variant="p">le p</Text>
        <Text variant="disabled">le disabled</Text>
      </Box>

      <Stack direction="row" spacing={4} align="center" mt={20}>
        <Button onClick={toggleColorMode}>
          Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
        </Button>
        <Button onClick={() => setTheme(ThemeUseKevin)}>Theme Kevin</Button>
        <Button onClick={() => setTheme(HyperTheme)}>Theme Mike</Button>

        <Button>Par default</Button>
        <Button variant="solid">solid</Button>
        <Button variant="outline">outline</Button>
        <Button variant="ghost">ghost</Button>
        <Button variant="link">link</Button>
      </Stack>
      <Box></Box>
      <Stack direction="row" spacing={4} align="center" mt={20}>
        <Button rightIcon={<MdCall />}>Call us</Button>
        <Button leftIcon={<MdCall />} variant="solid">
          Call us
        </Button>
        <Button isLoading loadingText="Loading..." variant="link">
          Submit
        </Button>
      </Stack>
    </Container>
  )
}
export default Exemple
