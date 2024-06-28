import { StyleSheet } from "react-native";
import { AppFonts, Colors, ScaleFonts, ScaleSize } from '../../helper';

export const styles = StyleSheet.create({
    slide: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.primary,
        paddingHorizontal: ScaleSize.SPACING_50,
    },
    text: {
        color: Colors.secondary,
        textAlign: 'center',
        fontFamily: AppFonts.Regular,
    },
    title: {
        fontSize: ScaleFonts.SIZE_22,
        color: Colors.secondary,
        textAlign: 'center',
        fontFamily: AppFonts.Regular,
    },
    buttonText: {
        fontSize: ScaleFonts.SIZE_16,
        color: Colors.secondary,
        fontFamily: AppFonts.Medium,
    },
    button: {
        padding: ScaleSize.SPACING_10,
    },
});