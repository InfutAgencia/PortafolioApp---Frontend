import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { TouchableRipple } from 'react-native-paper'
import { PRIMARY } from '../../../theme/colors'

const LinkButton = ({ onPress, title, type = 'primary' }) => {
  return (
    <TouchableRipple
      style={styles.button}
      onPress={onPress}
      borderless
    >
      <Text style={styles[type]}>{title}</Text>
    </TouchableRipple>

  )
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 99,
    elevation: 0,
    paddingHorizontal: 8
  },
  primary: {
    color: PRIMARY,
    borderRadius: 99
  }
})

export default LinkButton
