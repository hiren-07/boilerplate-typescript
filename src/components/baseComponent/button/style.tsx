import { StyleSheet } from "react-native";
import { Colors } from "../../../helper/Colors";
import { ScaleSize } from "../../../helper/ScaleSize";
import { ScaleFonts } from "../../../helper/ScaleFonts";
import { AppFonts } from "../../../helper/AppFonts";

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