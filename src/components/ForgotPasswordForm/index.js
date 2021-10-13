import React from 'react'
import { useFormik } from 'formik'
import { View, StyleSheet } from 'react-native'
import Button from '../Ui/Button'
import Input from '../Ui/Input'
import { forgotPassword } from './schema'
import { SECONDARY, WHITE } from '../../theme/colors'

const ForgotPasswordForm = () => {
  const { handleSubmit, setFieldValue, values, errors } = useFormik({
    initialValues: {
      password: '',
      repeatPassword: ''
    },
    validationSchema: forgotPassword,
    onSubmit: values => {
      console.log({ values })
    }
  })

  return (
    <View style={styles.form}>
      <View style={styles.row}>
        <Input
          placeholder='Password'
          name='password'
          onChangeText={setFieldValue}
          value={values.password}
          errorText={errors?.password}
        />
      </View>
      <View style={styles.row}>
        <Input
          secureTextEntry
          placeholder='Confirm Password'
          name='repeatPassword'
          onChangeText={setFieldValue}
          value={values.repeatPassword}
          errorText={errors?.repeatPassword}
        />
      </View>
      <View style={styles.row}>
        <Button title='Forgot Password' onPress={handleSubmit} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  logoContainer: {
    backgroundColor: SECONDARY,
    width: 150,
    height: 150,
    borderRadius: 99999,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logoText: {
    fontSize: 80,
    color: WHITE
  },
  row: {
    marginBottom: 20
  }
})

export default ForgotPasswordForm
