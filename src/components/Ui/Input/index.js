import React, { useState } from 'react'
import { View, TextInput, StyleSheet, TouchableNativeFeedback, Text } from 'react-native'
import { GRAY_ICONS, INPUT_COLOR, SECONDARY, RED } from '../../../theme/colors'
const Input = ({
  placeholder,
  value,
  onChangeText,
  secureTextEntry,
  keyboardType,
  name,
  errorText = ''
}) => {
  const [show, setShow] = useState(() => secureTextEntry)

  const handelShowPassword = () => setShow(prev => !prev)

  const handleOnChangeText = (value) => {
    onChangeText && onChangeText(name, value)
  }

  return (
    <View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          value={value}
          onChangeText={handleOnChangeText}
          secureTextEntry={show}
          keyboardType={keyboardType}
        />
        {secureTextEntry && (
          <TouchableNativeFeedback onPress={handelShowPassword}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>{show ? 'show' : 'hide'}</Text>
            </View>
          </TouchableNativeFeedback>
        )}
      </View>
      {Boolean(errorText) && <Text style={styles.errorText}>{errorText}</Text>}
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    borderWidth: 1,
    borderColor: SECONDARY,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center'
  },
  input: {
    fontSize: 16,
    flex: 1,
    color: INPUT_COLOR
  },
  button: {
    width: 40,
    marginLeft: 5,
    justifyContent: 'center',
    borderRadius: 10
  },
  buttonText: {
    textAlign: 'center',
    color: GRAY_ICONS
  },
  errorText: {
    color: RED
  }
})

export default Input
