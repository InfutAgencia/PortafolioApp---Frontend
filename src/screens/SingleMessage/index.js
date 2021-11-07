import { AntDesign, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons'
import React, { useState } from 'react'
import { View, Text, TouchableNativeFeedback, StyleSheet, Image, TextInput } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { GRAY, INPUT_BG, PRIMARY, PRIMARY_TEXT, SECONDARY_TEXT } from '../../theme/colors'

const RESPONSES = [
  'Hola, Como estas?',
  'Este es el boot de pruebas',
  'En que podemos ayudarte'
]

const MessageLeft = ({ id, avatar, message }) => {
  return (
    <View style={{ flexDirection: 'row', marginBottom: 10 }}>
      <Image
        source={{ uri: avatar }}
        style={{ width: 30, height: 30, borderRadius: 9999, marginRight: 10 }}
      />
      <View style={{ paddingVertical: 5, backgroundColor: SECONDARY_TEXT, paddingHorizontal: 10 }}>
        <Text style={{ color: PRIMARY }}>{message}</Text>
      </View>
    </View>
  )
}

const MessageRight = ({ id, avatar, message }) => {
  return (
    <View style={{ paddingHorizontal: 10, paddingVertical: 5, backgroundColor: INPUT_BG, marginBottom: 10, alignSelf: 'flex-end' }}>
      <Text style={{ color: PRIMARY_TEXT }}>{message}</Text>
    </View>
  )
}

const SingleMessage = ({ route }) => {
  const { top: paddingTop } = useSafeAreaInsets()
  const [message, setMessage] = useState()
  const [counter, setCounter] = useState(0)

  const [messages, setMessages] = useState([])
  const { params } = route
  const { id, avatar, name } = params

  const handleSetMessage = () => {
    setMessages(prevMessages => [...prevMessages, { message, id: 20234 }])
    setMessage('')
    setTimeout(() => {
      setMessages(prevMessages => [...prevMessages, { message: RESPONSES[counter], id, avatar }])
      setCounter(prev => prev + 1)
    }, 1000)
  }

  return (
    <View style={[styles.container, { paddingTop: paddingTop + 10 }]}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <TouchableNativeFeedback onPress={() => {}}>
          <View style={styles.button}>
            <MaterialIcons name='keyboard-arrow-left' size={24} color={GRAY} />
          </View>
        </TouchableNativeFeedback>
        <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1, marginLeft: 10 }}>
          <Image
            source={{ uri: avatar }}
            style={{ width: 30, height: 30, borderRadius: 9999 }}
          />
          <Text style={{ color: PRIMARY_TEXT, marginLeft: 8, fontWeight: '700' }}>{name}</Text>
        </View>

        <TouchableNativeFeedback onPress={() => {}}>
          <View style={styles.button}>
            <AntDesign name='info' size={16} color={GRAY} />
          </View>
        </TouchableNativeFeedback>
      </View>
      <View style={{ flex: 1, paddingTop: 10 }}>
        <View style={{ flex: 1 }}>
          {messages.map((messsage, index) => {
            const left = messsage.id === id
            return (
              left ? <MessageLeft key={index} {...messsage} /> : <MessageRight key={index} {...messsage} />
            )
          })}
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <TextInput
            placeholderTextColor={GRAY}
            placeholder='Enviar un mensaje'
            style={styles.input}
            value={message}
            onChangeText={value => setMessage(value)}
          />
          <TouchableNativeFeedback onPress={handleSetMessage}>
            <MaterialCommunityIcons name='send' size={30} color={SECONDARY_TEXT} />
          </TouchableNativeFeedback>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: PRIMARY,
    paddingHorizontal: 20,
    paddingBottom: 20
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
    marginRight: 5,
    flex: 1
  },
  button: {
    borderWidth: 1,
    borderColor: GRAY,
    borderRadius: 9999,
    width: 25,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default SingleMessage
