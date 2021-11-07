import React from 'react'
import { View, StyleSheet, Image, Text, TextInput, TouchableNativeFeedback } from 'react-native'
import { BLACK, GRAY, INPUT_BG, PRIMARY, PRIMARY_TEXT, SECONDARY_TEXT } from '../../theme/colors'
import { Ionicons } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'
import { useAuth } from '../../Providers/AuthProvider'

const Login = () => {
  const { login } = useAuth()
  return (
    <LinearGradient
      style={styles.container}
      colors={[BLACK, PRIMARY]}
    >
      <Image
        source={require('../../../assets/logo.png')}
        style={styles.logo}
      />
      <Text
        style={styles.title}
      >
        Te damos la bienvenida
      </Text>
      <Ionicons
        name='chatbox-ellipses-outline'
        size={160} color='#d5bb7845' style={{ marginBottom: 30 }}
      />
      <View style={{ width: '100%' }}>
        <TextInput
          placeholderTextColor={GRAY}
          placeholder='Username'
          style={styles.input}
        />
        <TextInput
          placeholderTextColor={GRAY}
          placeholder='Password'
          style={styles.input}
        />
        <TouchableNativeFeedback onPress={() => login({ user: 'diego', password: 'test1234' })}>
          <View style={styles.button}>
            <Text style={{ color: PRIMARY_TEXT, fontSize: 16, textAlign: 'center' }}>Sign in</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 100,
    alignItems: 'center'
  },
  logo: {
    width: 80,
    height: 80,
    borderRadius: 5,
    marginBottom: 12
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: PRIMARY_TEXT,
    marginBottom: 30
  },
  input: {
    backgroundColor: INPUT_BG,
    fontSize: 16,
    color: SECONDARY_TEXT,
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 8,
    marginBottom: 12
  },
  button: {
    borderWidth: 1,
    borderColor: GRAY,
    borderRadius: 8,
    paddingHorizontal: 20,
    paddingVertical: 10
  }
})

export default Login
