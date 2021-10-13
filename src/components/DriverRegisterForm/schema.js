import * as Yup from 'yup'

export const driverSchema = Yup.object().shape({
  username: Yup.string().required('Username is required'),
  password: Yup.string().required('Password is required'),
  identification: Yup.string().required('Identification is required'),
  lastName: Yup.string().required('LastName is required'),
  email: Yup.string().required('Email is required'),
  phone: Yup.string().required('Phone is required'),
  city: Yup.string().required('City is required'),
  company: Yup.string().required('Company is required'),
  photo: Yup.string().required('Photo is required'),
  driverLicenseFront: Yup.string().required('License Front is required'),
  driverLicenseBack: Yup.string().required('License back is required'),
  criminalRecordCertificate: Yup.string().required('Criminal certificate is required')
})
