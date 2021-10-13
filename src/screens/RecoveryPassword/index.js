import React from 'react'
import { View, StyleSheet } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { PRIMARY, WHITE } from '../../theme/colors'
import RecoveryPasswordForm from '../../components/RecoveryPasswordForm'
import AuthAside from '../../components/Ui/AuthAside'
const RecoveryPassword = ({ navigation }) => {
  const { top: paddingTop, bottom: paddingBottom } = useSafeAreaInsets()
  return (
    <View style={[styles.container, { paddingTop, paddingBottom }]}>
      <AuthAside title='Recovery Password' navigateTo={() => navigation.navigate('login')} />
      <View style={{ paddingHorizontal: 20, backgroundColor: WHITE, paddingVertical: 40, borderTopLeftRadius: 20, borderTopRightRadius: 20, flex: 1 }}>
        <RecoveryPasswordForm />
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

export default RecoveryPassword
