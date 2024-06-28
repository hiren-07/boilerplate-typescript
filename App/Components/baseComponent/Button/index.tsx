import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { style } from './style'
import { iButton } from './IButton'

const Button = (props:iButton) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={style.buttonView}>
      <Text style={style.buttonText}>{props.title}</Text>
    </TouchableOpacity>
  )
}

export default Button