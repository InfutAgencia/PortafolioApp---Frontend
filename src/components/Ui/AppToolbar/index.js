import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { SECTONDARY_TEXT, WHITE } from '../../../theme/colors'

const AppToolbar = ({ title, picture }) => {
  const { top: paddingTop } = useSafeAreaInsets()
  return (
    <View style={[styles.toolbar, { paddingTop }]}>
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Image
          source={{ uri: 'https://noverbal.es/uploads/blog/rostro-de-un-criminal.jpg' }}
          style={{ width: 50, height: 50, borderRadius: 99999 }}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  toolbar: {
    backgroundColor: WHITE,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4
  },
  content: {
    height: 60,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    textTransform: 'uppercase',
    color: SECTONDARY_TEXT
  }
})

export default AppToolbar
