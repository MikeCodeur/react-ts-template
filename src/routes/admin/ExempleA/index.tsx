import React from 'react'
import {Button, Stack, Heading, Box} from '../../../components/ui'

import {useSetTheme} from '../../../context/ThemeContext'
import {useColorMode} from '@chakra-ui/react'
import {theme as HyperTheme} from '../../../theme'
import {Button as ChakraButton} from '@chakra-ui/react'
import {
  ExempleForm,
  ExempleFormValues,
} from '../../../components/form/ExempleForm'

export const ExempleA = () => {
  const fakeDataUserApi = {
    firstName: 'Steven',
    lastName: 'Sigal',
    email: 'initialValues@test.com',
    address: {
      street: '1 rue du test',
      city: 'Paris',
      postalCode: '75000',
      country: 'France',
    },
  }
  const setTheme = useSetTheme()
  const {colorMode, toggleColorMode} = useColorMode()
  const onSubmitApi = (formValues: ExempleFormValues) => {
    // ici tu fait ce que tu veux des data du form
    console.log('formValues Extérieur compo', formValues)
  }
  const onSubmitOuTuVeux = (formValues: ExempleFormValues) => {
    // ici tu fait ce que tu veux des data du form
    console.log('formValues Extérieur compo', formValues)
  }
  return (
    <>
      <Heading textAlign="center" width="100%" size="lg">
        FORMIK EXEMPLE
      </Heading>
      <p>Fichier de la route : src/routes/admin/ExempleA/index.tsx</p>
      <p>Fichier du form : src/components/form/ExempleForm.tsx</p>
      <Box>
        <Heading textAlign="center" width="100%" size="md">
          Formulaire prérempli
        </Heading>
        <ExempleForm onSubmit={onSubmitApi} initialValues={fakeDataUserApi} />
      </Box>
      <Box mt={20}>
        <Heading textAlign="center" width="100%" size="md">
          Formulaire vide
        </Heading>
        <ExempleForm onSubmit={onSubmitOuTuVeux} initialValues={undefined} />
      </Box>
      {/* TRUC DU THEME  */}
      {/* <Stack direction="row" spacing={4} align="center" mt={20}>
        <Button onClick={toggleColorMode}>
          Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
        </Button>
        <ChakraButton onClick={() => setTheme(HyperTheme)}>
          Set Theme
        </ChakraButton>
      </Stack> */}
    </>
  )
}
