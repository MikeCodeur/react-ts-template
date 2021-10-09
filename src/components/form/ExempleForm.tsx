/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react'
import {Stack, Heading, Flex, Box, Button, FormInput} from '../../components/ui'
import {useFormik, Formik} from 'formik'
import * as Yup from 'yup'

interface Iaddress {
  street: string
  city: string
  postalCode: string
  country: string
}
export interface ExempleFormValues {
  firstName: string
  lastName: string
  email: string
  address: Iaddress
}
type ExempleFormProps = {
  // undefined car le form peut etre vide par default
  initialValues: ExempleFormValues | undefined
  // props qui sort le data du form
  onSubmit: (formValue: ExempleFormValues) => void
}
export const ExempleForm = ({initialValues, onSubmit}: ExempleFormProps) => {
  const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    lastName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
  })

  const formik = useFormik({
    // si initialValues reçu je prend sinon data vide
    initialValues: initialValues || {
      firstName: '',
      lastName: '',
      email: '',
      address: {
        street: '',
        city: '',
        postalCode: '',
        country: '',
      },
    },
    onSubmit: (values: ExempleFormValues) => {
      // ICI TU FAIT SORTIR LA DATA DE TON COMPO TU TRAIRE ENSUITE AILLEURS
      console.log('LES VALUES DU FORM', values?.address)
    },
    validationSchema: SignupSchema,
  })
  // DANS CE LOG TA PLEIN DE DATA QUI VIENT DU HOOK USEFORMIK !!! regarde dedans
  //console.log('formik', formik)
  return (
    <Box
      width="100%"
      display="inline-flex"
      justifyContent="center"
      flexWrap="wrap"
    >
      <Box width="500px" border="1px solid black" p={10}>
        <form onSubmit={formik.handleSubmit}>
          <FormInput
            label="Nom"
            id="firstName"
            name="firstName"
            type="text"
            onChange={formik.handleChange}
            value={formik.values?.firstName}
            errorMessage={formik?.errors?.firstName}
          />
          <FormInput
            label="Prénom"
            id="lastName"
            name="lastName"
            type="text"
            onChange={formik.handleChange}
            value={formik.values?.lastName}
            errorMessage={formik?.errors?.lastName}
          />
          <FormInput
            label="Email"
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values?.email}
            errorMessage={formik?.errors?.email}
          />
          <FormInput
            label="Rue"
            id="address.street"
            name="address.street"
            type="text"
            onChange={formik.handleChange}
            value={formik.values?.address?.street}
            errorMessage={formik?.errors?.address?.street}
          />
          <FormInput
            label="Ville"
            id="address.city"
            name="address.city"
            type="text"
            onChange={formik.handleChange}
            value={formik.values?.address?.city}
            errorMessage={formik?.errors?.address?.city}
          />
          <FormInput
            label="Code postal"
            id="address.postalCode"
            name="address.postalCode"
            type="text"
            onChange={formik.handleChange}
            value={formik.values?.address?.postalCode}
            errorMessage={formik?.errors?.address?.postalCode}
          />
          <FormInput
            label="Pays"
            id="address.country"
            name="address.country"
            type="text"
            onChange={formik.handleChange}
            value={formik.values?.address?.country}
            errorMessage={formik?.errors?.address?.country}
          />
          <Button type="submit">Enregister</Button>
        </form>
      </Box>
    </Box>
  )
}
export default ExempleForm
