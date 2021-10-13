import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { TouchableRipple } from 'react-native-paper'
import { FontAwesome } from '@expo/vector-icons'
import { WHITE_OPACITY } from '../../../theme/colors'
const AuthAside = ({ navigateTo, title }) => {
  return (
    <View style={styles.aside}>
      <TouchableRipple onPress={navigateTo} style={styles.button} borderless>
        <FontAwesome name='angle-left' size={30} color={WHITE_OPACITY} style />
      </TouchableRipple>
      <Text style={styles.text}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  aside: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
    paddingHorizontal: 10
  },
  button: {
    width: 35,
    height: 35,
    borderRadius: 9999,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10
  },
  text: {
    fontSize: 20,
    color: WHITE_OPACITY,
    textTransform: 'uppercase'
  }
})

export default AuthAside
