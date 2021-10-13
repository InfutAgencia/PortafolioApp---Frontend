import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Button from '../../components/Ui/Button'
import { PRIMARY, WHITE } from '../../theme/colors'
const Thanks = ({ navigation }) => {
  const { top: paddingTop, bottom: paddingBottom } = useSafeAreaInsets()
  return (
    <View style={[styles.container, { paddingTop, paddingBottom }]}>

      <View style={{ paddingHorizontal: 20, paddingVertical: 100, borderRadius: 20, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ color: PRIMARY, fontSize: 40, textTransform: 'uppercase', textAlign: 'center', marginBottom: 20, fontWeight: 'bold' }}>Thansk for registering</Text>
        <Button mode='outlined' title='Go to login' onPress={() => navigation.navigate('login')} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE
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

export default Thanks
