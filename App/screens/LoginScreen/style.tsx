import { StyleSheet } from "react-native";
import { Colors, AppFonts, Strings, ScaleFonts, ScaleSize } from '../../helper';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      overflow: 'hidden',
      justifyContent: 'center',
      backgroundColor: Colors.primary,
      paddingHorizontal: ScaleSize.SPACING_50,
    },
    signIn: {
      fontSize: ScaleFonts.SIZE_24,
      fontFamily: AppFonts.Bold,
      color: Colors.secondary,
      marginBottom: ScaleSize.SPACING_40,
    },
    forgotPassword: {
      fontSize: ScaleFonts.SIZE_14,
      fontFamily: AppFonts.SemiBold,
      color: Colors.secondary,
      marginVertical: ScaleSize.SPACING_15,
    },
    ButtonView: {
      marginTop: ScaleSize.SPACING_25,
      marginBottom: ScaleSize.SPACING_100,
    },
    dontHaveAcc: {
      color: Colors.secondary,
      textAlign: 'center',
      fontFamily: AppFonts.Regular,
      fontSize: ScaleFonts.SIZE_14,
    },
    signUp: {
      color: Colors.ButtonBackground,
      fontFamily: AppFonts.Bold,
    },
  });