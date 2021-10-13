import React, { useState } from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'
import { useAuth } from '../../Providers/AuthProvider'
import Button from '../../components/Ui/Button'
import AppToolbar from '../../components/Ui/AppToolbar'
import { ACCENT, RED, WHITE } from '../../theme/colors'
import { TouchableRipple } from 'react-native-paper'

const Connect = () => {
  const { logout } = useAuth()
  const [isActive, setIsActive] = useState(false)
  return (
    <View style={{ flex: 1 }}>
      <AppToolbar title='Connect' />
      <View style={styles.container}>
        <Image style={styles.icon} source={require('../../../assets/logo.jpeg')} />
        <View style={{ marginBottom: 100 }}>
          <TouchableRipple
            borderless
            onPress={() => setIsActive(state => !state)} style={{
              minWidth: 130,
              paddingHorizontal: 20,
              paddingVertical: 10,
              borderRadius: 50,
              backgroundColor: !isActive ? RED : ACCENT
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: '700', color: WHITE, textAlign: 'center' }}>{isActive ? 'Connect' : 'Disconnect'}</Text>
          </TouchableRipple>
        </View>
        <View style={styles.buttons}>
          <Button
            onPress={logout}
            title='Assign trip'
          />
          <Button
            onPress={logout}
            title='Group monitoring'
            mode='outlined'
          />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  },
  icon: {
    width: 180,
    height: 180,
    borderRadius: 999,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%'
  }
})

export default Connect
