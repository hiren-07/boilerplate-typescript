import { StyleSheet } from "react-native";
import { AppFonts, Colors, ScaleFonts, ScaleSize } from '../../helper';

export const styles = StyleSheet.create({
    buttonView: {
      paddingVertical: ScaleSize.SPACING_25 / 2,
      backgroundColor: Colors.textInputBackground,
      width: '100%',
      alignItems: 'center'
    },
    text: {
      fontSize: ScaleFonts.SIZE_16,
      color: Colors.secondary,
      fontFamily: AppFonts.Medium,
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: ScaleSize.SPACING_60
    },
  })