import React, { useEffect, useState } from 'react'
import { useFormik } from 'formik'
import { View, StyleSheet, Image, Platform, ScrollView, Text } from 'react-native'
import Button from '../Ui/Button'
import Input from '../Ui/Input'
import { vehicleSchema } from './schema'
import { ACCENT, INPUT_COLOR, SECONDARY, WHITE } from '../../theme/colors'
import { TouchableRipple } from 'react-native-paper'
import * as ImagePicker from 'expo-image-picker'
import { FontAwesome } from '@expo/vector-icons'
import { useNotification } from '../../Providers/NotificationProvider'
import { auth } from '../../services/auth'
import LinkButton from '../Ui/LinkButton'
import { useNavigation } from '@react-navigation/core'
const DriverRegisterForm = () => {
  const [loading, setLoading] = useState(false)
  const { notify } = useNotification()
  const navigation = useNavigation()

  const register = async () => {
    try {
      const payload = new FormData()
      Object.entries(values).forEach(([key, value]) => {
        payload.append(key, value)
      })
      setLoading(true)
      await auth.register(payload)
      setLoading(false)
    } catch (error) {
      setLoading(false)
      notify({ type: 'success', message: 'Vehicle register successfull' })
      setTimeout(() => {
        navigation.navigate('thanks')
      }, 3000)
    }
  }

  const { handleSubmit, setFieldValue, values, errors, touched } = useFormik({
    initialValues: {
      brand: '',
      model: '',
      year: '',
      plate: '',
      color: '',
      isActive: true,
      identification: '',
      photo: '',
      driver: '6162271896a0f60508581615'
    },
    validationSchema: vehicleSchema,
    onSubmit: register
  })

  console.log({ errors })

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync()
        if (status !== 'granted') {
          console.log('Sorry, we need camera roll permissions to make this work!')
        }
      }
    })()
  }, [])

  const handleChangeImage = (name) => async () => {
    const { base64, cancelled } = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      base64: true
    })

    if (!cancelled) setFieldValue(name, base64)
  }

  return (
    <ScrollView
      style={{
        backgroundColor: WHITE,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        flex: 1
      }}
      contentContainerStyle={{
        paddingHorizontal: 20,

        paddingVertical: 40

      }}
    >
      <View style={{ alignItems: 'center', marginBottom: 20 }}>
        <TouchableRipple onPress={handleChangeImage('photo')} style={{ borderRadius: 9999 }} borderless>
          <View style={{ borderWidth: 3, borderRadius: 9999, borderColor: SECONDARY, padding: 3 }}>
            {values.photo
              ? (<Image source={{ uri: `data:image/png;base64,${values.photo}` }} style={styles.picture} />)
              : (
                <View style={[styles.picture, styles.placeholder]}>
                  <FontAwesome name='picture-o' size={40} color={SECONDARY} />
                </View>
                )}
          </View>
        </TouchableRipple>
      </View>
      <View style={styles.row}>
        <Input
          placeholder='Card brand'
          name='brand'
          onChangeText={setFieldValue}
          value={values.brand}
          errorText={touched?.brand && errors?.brand ? errors?.brand : ''}
        />
      </View>
      <View style={styles.row}>
        <Input
          placeholder='Model'
          name='model'
          onChangeText={setFieldValue}
          value={values.model}
          errorText={touched?.model && errors?.model ? errors?.model : ''}
        />
      </View>
      <View style={styles.row}>
        <Input
          placeholder='Year'
          name='year'
          onChangeText={setFieldValue}
          value={values.year}
          errorText={touched?.year && errors?.year ? errors?.year : ''}
        />
      </View>
      <View style={styles.row}>
        <Input
          placeholder='Plate'
          name='plate'
          onChangeText={setFieldValue}
          value={values.plate}
          errorText={touched?.plate && errors?.plate ? errors?.plate : ''}
        />
      </View>
      <View style={styles.row}>
        <Input
          placeholder='Color'
          name='color'
          onChangeText={setFieldValue}
          value={values.color}
          errorText={touched?.color && errors?.color ? errors?.color : ''}
        />
      </View>
      <View style={styles.row}>
        <Text>Upload Files</Text>
        <View style={{ marginBottom: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <LinkButton
            title='Identification card:'
            onPress={handleChangeImage('identification')}
          />
          {Boolean(values.identification) && <FontAwesome name='check' size={16} color={ACCENT} />}
        </View>
      </View>
      <View style={styles.row}>
        <Button loading={loading} title='Register' onPress={handleSubmit} />
      </View>
    </ScrollView>
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
  },
  picture: {
    width: 100,
    height: 100,
    borderRadius: 999
  },
  placeholder: {
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: INPUT_COLOR,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default DriverRegisterForm
