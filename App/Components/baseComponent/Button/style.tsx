import { StyleSheet } from "react-native";
import { AppFonts, Colors, ScaleFonts, ScaleSize } from '../../../helper'

export const style=StyleSheet.create({
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