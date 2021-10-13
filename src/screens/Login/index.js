import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { PRIMARY, WHITE } from '../../theme/colors'
import LoginForm from '../../components/LoginForm'
import LinkButton from '../../components/Ui/LinkButton'
const Login = ({ navigation }) => {
  const { top, bottom: paddingBottom } = useSafeAreaInsets()
  const paddingTop = top + 50

  return (
    <View style={[styles.container]}>
      <View style={[{ height: '40%', paddingTop, paddingBottom }]}>
        <View style={styles.logoSection}>
          <View style={styles.logoContainer}>
            <Text style={styles.logoText}>AD</Text>
          </View>
        </View>
      </View>
      <View style={{ paddingHorizontal: 20, backgroundColor: WHITE, paddingVertical: 40, borderTopLeftRadius: 20, borderTopRightRadius: 20, height: '60%' }}>
        <LoginForm />
        <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginBottom: 40 }}>
          <LinkButton
            title='Recovery password'
            onPress={() => navigation.navigate('recoveryPassword')}
          />
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ marginRight: 5 }}>
            Don't have an account ?
          </Text>
          <LinkButton
            title='Sign in'
            onPress={() => navigation.navigate('register')}
          />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: PRIMARY
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
