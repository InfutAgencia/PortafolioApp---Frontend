import React from 'react'
import { View, Text, StyleSheet, TouchableNativeFeedback, FlatList, Image } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { GRAY, INPUT_BG, PRIMARY, PRIMARY_TEXT, SECONDARY_TEXT } from '../../theme/colors'
import { Entypo } from '@expo/vector-icons'

const CHATS = [{
  id: 1,
  avatar: 'https://i.pravatar.cc/100',
  name: 'Diego',
  lastMessage: 'is simply dummy text of the printing and  ...',
  date: '2d'
},
{
  id: 2,
  avatar: 'https://i.pravatar.cc/100',
  name: 'Nicolas',
  lastMessage: 'only five centuries, but also the ...',
  date: '4d'
},
{
  id: 3,
  avatar: 'https://i.pravatar.cc/100',
  name: 'Brayan',
  lastMessage: 'years old. Richard McClintock, a Latin ...',
  date: '5d'
},
{
  id: 4,
  avatar: 'https://i.pravatar.cc/100',
  name: 'Boot',
  lastMessage: 'Lorem Ipsum used since the ...',
  date: '1d'
}]

const Messages = ({ navigation }) => {
  const { top: paddingTop } = useSafeAreaInsets()
  return (
    <View style={[styles.container, { paddingTop: paddingTop + 10 }]}>
      <View style={{ alignItems: 'flex-end' }}>
        <TouchableNativeFeedback onPress={() => {}}>
          <View style={styles.button}>
            <Entypo name='dots-three-horizontal' size={16} color={GRAY} />
          </View>
        </TouchableNativeFeedback>
      </View>
      <View>
        <Text style={{ color: PRIMARY_TEXT, fontSize: 24, fontWeight: '700', marginBottom: 15 }}>Mensajes</Text>
        <FlatList
          data={CHATS}
          renderItem={({ item }) => (
            <TouchableNativeFeedback onPress={() => navigation.navigate('message', item)}>
              <View style={{ flexDirection: 'row', marginBottom: 20, alignItems: 'center' }}>
                <Image source={{ uri: item.avatar }} style={{ width: 40, height: 40, borderRadius: 9999, marginRight: 10 }} />
                <View style={{ flex: 1 }}>
                  <Text style={{ color: PRIMARY_TEXT, fontSize: 15, fontWeight: '700' }}>{item.name}</Text>
                  <Text style={{ color: SECONDARY_TEXT, fontSize: 13, fontStyle: 'italic' }}>{item.lastMessage}</Text>
                </View>
                <Text style={{ color: SECONDARY_TEXT, fontSize: 13 }}>{item.date}</Text>
              </View>
            </TouchableNativeFeedback>
          )}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: PRIMARY,
    padding: 20
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
    marginBottom: 12
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

export default Messages
