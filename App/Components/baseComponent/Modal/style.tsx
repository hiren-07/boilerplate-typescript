import { StyleSheet } from 'react-native';
import { AppFonts, Colors, ScaleFonts, ScaleSize } from '../../../helper';

export const styles = StyleSheet.create({
    modalOverlay: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0,0,0,0.5)'
    },
    modalContainer: {
      width: '80%',
      padding: ScaleSize.SPACING_20,
      backgroundColor: Colors.primary,
      borderRadius: ScaleSize.SPACING_10,
      alignItems: 'center',
    },
    headerText: {
      fontSize: ScaleFonts.SIZE_20,
      color: Colors.secondary,
      fontFamily:AppFonts.Bold,
      marginBottom: ScaleSize.SPACING_10
    },
    title: {
      fontSize: ScaleFonts.SIZE_18,
      color: Colors.secondary,
      fontFamily:AppFonts.SemiBold,
      marginBottom: ScaleSize.SPACING_10,
    },
    description: {
      fontSize: ScaleFonts.SIZE_16,
      color: Colors.secondary,
      marginBottom: 20
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent:'flex-end',
      width:'100%'
    },
    button: {
      // flex: 1,
      padding: 10,
      alignItems:'flex-end',
      marginHorizontal: 5,
      borderRadius: 5,
      // alignItems: 'center'
    },
    buttonText: {
      fontSize:ScaleFonts.SIZE_16,
      color: Colors.secondary,
      fontWeight: 'bold'
    }
  });
  