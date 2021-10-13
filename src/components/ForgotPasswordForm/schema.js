import * as Yup from 'yup'

export const forgotPassword = Yup.object()
  .shape({
    password: Yup.string()
      .required('Required'),
    repeatPassword: Yup.string()
      .required('Required')
  })
