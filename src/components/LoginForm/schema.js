import * as Yup from 'yup'

export const loginSchema = Yup.object().shape({
  username: Yup.string()
    .email('Username must be a valid email')
    .required('Username is required'),
  password: Yup.string()
    .min(5, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Password is required')
})
