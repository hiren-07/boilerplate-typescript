import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import { AppFonts, Colors, ScaleFonts, ScaleSize } from '../../helper'

const Button = (props:any) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={style.buttonView}>
      <Text style={style.buttonText}>{props.title}</Text>
    </TouchableOpacity>
  )
}

const style=StyleSheet.create({
  buttonView:{
    backgroundColor:Colors.ButtonBackground,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:ScaleSize.SPACING_20
  },
  buttonText:{
    color:Colors.secondary,
    paddingVertical:ScaleSize.SPACING_15,
    fontSize:ScaleFonts.SIZE_16,
    fontFamily:AppFonts.SemiBold
  }
})

export default Button