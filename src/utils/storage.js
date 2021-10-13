import AsyncStorage from '@react-native-async-storage/async-storage'

export const getStore = async (key) => {
  try {
    const store = await AsyncStorage.getItem(key)
    return store ? JSON.stringify(store) : undefined
  } catch (e) {
    return undefined
  }
}

export const setStore = async (key, value) => {
  try {
    const store = JSON.parse(value)
    await AsyncStorage.setItem(key, store)
  } catch (e) {
    // saving error
  }
}

export const clearStore = async () => {
  try {
    await AsyncStorage.clear()
  } catch (e) {
    // saving error
  }
}
