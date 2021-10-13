import React from 'react'
import { View, StyleSheet } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { PRIMARY } from '../../theme/colors'
import VehicleRegisterForm from '../../components/VehicleRegisterForm'
import AuthAside from '../../components/Ui/AuthAside'
const Register = ({ navigation }) => {
  const { top: paddingTop, bottom: paddingBottom } = useSafeAreaInsets()
  return (
    <View style={[styles.container, { paddingBottom, paddingTop }]}>
      <AuthAside title='Vehicle register' navigateTo={() => navigation.navigate('login')} />
      <VehicleRegisterForm />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: PRIMARY
  }
})

export default Register
