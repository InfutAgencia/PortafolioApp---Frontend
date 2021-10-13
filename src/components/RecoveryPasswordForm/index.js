import React from 'react'
import { View, StyleSheet } from 'react-native'
import { useFormik } from 'formik'
import Button from '../Ui/Button'
import { recoveryPasswordSchema } from './schema'
import Input from '../Ui/Input'
import { WHITE } from '../../theme/colors'

const RecoveryPasswordForm = () => {
  const { handleSubmit, setFieldValue, values, errors } = useFormik({
    initialValues: {
      email: ''
    },
    validationSchema: recoveryPasswordSchema,
    onSubmit: values => {
      console.log({ values })
    }
  })

  return (
    <View style={styles.form}>
      <View style={styles.row}>
        <Input
          placeholder='email'
          name='email'
          onChangeText={setFieldValue}
          value={values.email}
          errorText={errors?.email}
        />
      </View>
      <View style={styles.row}>
        <Button title='Send' onPress={handleSubmit} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  logoText: {
    fontSize: 80,
    color: WHITE
  },
  row: {
    marginBottom: 20
  }
})

export default RecoveryPasswordForm
