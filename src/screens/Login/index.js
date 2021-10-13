import React from 'react'
import { View, StyleSheet, Image } from 'react-native'
import { PRIMARY, WHITE } from '../../theme/colors'
import LoginForm from '../../components/LoginForm'
const Login = ({ navigation }) => {
  return (
    <View style={[styles.container]}>

      <Image
        source={require('../../../assets/logo.png')} style={{
          width: 150,
          height: 150,
          borderRadius: 999
        }}
      />
      <View style={{ width: '100%' }}>
        <LoginForm />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: PRIMARY,
    paddingHorizontal: 20,
    paddingVertical: 70,
    alignItems: 'center'
  },
  logoSection: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  logoContainer: {
    backgroundColor: WHITE,
    width: 150,
    height: 150,
    borderRadius: 99999,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logoText: {
    fontSize: 80,
    color: PRIMARY
  },
  form: {
    flex: 1,
    width: '90%',
    marginLeft: '5%'
  },
  row: {
    marginBottom: 20
  }
})

export default Login
