import React from 'react'
import { View, Text } from 'react-native'
import { PRIMARY, WHITE_OPACITY } from '../../theme/colors'

const More = () => {
  return (
    <View style={{ flex: 1, backgroundColor: PRIMARY, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ color: WHITE_OPACITY, fontSize: 20 }}>More</Text>
    </View>
  )
}

export default More
