import React from 'react'
import { View, StyleSheet } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { PRIMARY } from '../../theme/colors'
import DriverRegisterForm from '../../components/DriverRegisterForm'
import AuthAside from '../../components/Ui/AuthAside'
const Register = ({ navigation }) => {
  const { top: paddingTop, bottom: paddingBottom } = useSafeAreaInsets()
  return (
    <View style={[styles.container, { paddingBottom, paddingTop }]}>
      <AuthAside title='Driver register' navigateTo={() => navigation.navigate('login')} />
      <DriverRegisterForm />
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
