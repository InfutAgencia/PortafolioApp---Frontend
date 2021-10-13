import * as Yup from 'yup'

export const vehicleSchema = Yup.object().shape({
  brand: Yup.string().required('Brand is required'),
  model: Yup.string().required('Model is required'),
  year: Yup.string().required('Year is required'),
  plate: Yup.string().required('Plate is required'),
  color: Yup.string().required('Color is required'),
  identification: Yup.string().required('Identification is required'),
  photo: Yup.string().required('Photo is required'),
  driver: Yup.string().required('Driver is required')
})
