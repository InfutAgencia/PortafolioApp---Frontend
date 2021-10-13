import React from 'react'
import { useFormik } from 'formik'
import { View, StyleSheet } from 'react-native'
import Button from '../Ui/Button'
import Input from '../Ui/Input'
import { loginSchema } from './schema'
import { SECONDARY, WHITE } from '../../theme/colors'
import { useAuth } from '../../Providers/AuthProvider'

const LoginForm = () => {
  const { login, loading } = useAuth()
  const { handleSubmit, setFieldValue, values, errors, touched } = useFormik({
    initialValues: {
      username: '',
      password: ''
    },
    validationSchema: loginSchema,
    onSubmit: login
  })
  return (
    <View style={styles.form}>
      <View style={styles.row}>
        <Input
          placeholder='Username'
          name='username'
          onChangeText={setFieldValue}
          value={values.username}
          errorText={touched?.username && errors?.username ? errors?.username : ''}
        />
      </View>
      <View style={styles.row}>
        <Input
          secureTextEntry
          placeholder='Password'
          name='password'
          onChangeText={setFieldValue}
          value={values.password}
          errorText={touched?.password && errors?.password ? errors?.password : ''}
        />
      </View>
      <View style={styles.row}>
        <Button title='Login' onPress={handleSubmit} loading={loading} />
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

export default LoginForm
