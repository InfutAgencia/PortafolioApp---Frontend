import React from 'react'
import { Button as NativeButton } from 'react-native-paper'
import { StyleSheet } from 'react-native'

const Button = ({ onPress, title, mode = 'contained', loading = false, disabled = false }) => {
  return (
    <NativeButton
      mode={mode}
      onPress={onPress}
      loading={loading}
      disabled={disabled || loading}
      style={styles.button}
    >
      {title}
    </NativeButton>
  )
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 50,
    elevation: 0
  }
})

export default Button
