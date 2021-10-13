import React, { useEffect, useState } from 'react'
import { useFormik } from 'formik'
import { View, StyleSheet, Image, Platform, ScrollView, Text } from 'react-native'
import Button from '../Ui/Button'
import Input from '../Ui/Input'
import { driverSchema } from './schema'
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
      notify({ type: 'success', message: 'User register successfull' })
      setTimeout(() => {
        navigation.navigate('vehicleRegister')
      }, 3000)
    }
  }

  const { handleSubmit, setFieldValue, values, errors, touched } = useFormik({
    initialValues: {
      username: '',
      password: '',
      isActive: true,
      role: 'DRIVER',
      identification: '',
      name: '',
      lastName: '',
      email: '',
      phone: '',
      city: '',
      company: '',
      photo: '',
      driverLicenseFront: '',
      driverLicenseBack: '',
      criminalRecordCertificate: ''
    },
    validationSchema: driverSchema,
    onSubmit: register
  })

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
          placeholder='Name'
          name='username'
          onChangeText={setFieldValue}
          value={values.username}
          errorText={touched?.username && errors?.username ? errors?.username : ''}
        />
      </View>
      <View style={styles.row}>
        <Input
          placeholder='Last Name'
          name='lastName'
          onChangeText={setFieldValue}
          value={values.lastName}
          errorText={touched?.lastName && errors?.lastName ? errors?.lastName : ''}
        />
      </View>
      <View style={styles.row}>
        <Input
          placeholder='ID'
          name='identification'
          onChangeText={setFieldValue}
          value={values.identification}
          errorText={touched?.identification && errors?.identification ? errors?.identification : ''}
        />
      </View>
      <View style={styles.row}>
        <Input
          placeholder='Email'
          name='email'
          onChangeText={setFieldValue}
          value={values.email}
          errorText={touched?.email && errors?.email ? errors?.email : ''}
        />
      </View>
      <View style={styles.row}>
        <Input
          placeholder='Phone'
          name='phone'
          onChangeText={setFieldValue}
          value={values.phone}
          errorText={touched?.phone && errors?.phone ? errors?.phone : ''}
        />
      </View>
      <View style={styles.row}>
        <Input
          placeholder='City'
          name='city'
          onChangeText={setFieldValue}
          value={values.city}
          errorText={touched?.city && errors?.city ? errors?.city : ''}
        />
      </View>
      <View style={styles.row}>
        <Input
          placeholder='Company'
          name='company'
          onChangeText={setFieldValue}
          value={values.company}
          errorText={touched?.company && errors?.company ? errors?.company : ''}
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
        <Text>Upload Files</Text>
        <View style={{ marginBottom: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <LinkButton
            title='License Front:'
            onPress={handleChangeImage('driverLicenseFront')}
          />
          {Boolean(values.driverLicenseFront) && <FontAwesome name='check' size={16} color={ACCENT} />}
        </View>
        <View style={{ marginBottom: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <LinkButton
            title='License Back:'
            onPress={handleChangeImage('driverLicenseBack')}
          />
          {Boolean(values.driverLicenseBack) && <FontAwesome name='check' size={16} color={ACCENT} />}
        </View>
        <View style={{ marginBottom: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <LinkButton
            title='Criminal certificate:'
            onPress={handleChangeImage('criminalRecordCertificate')}
          />
          {Boolean(values.criminalRecordCertificate) && <FontAwesome name='check' size={16} color={ACCENT} />}
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
