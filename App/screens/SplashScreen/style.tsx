import { StyleSheet } from "react-native";
import { AppFonts, Colors, ScaleFonts } from "../../helper";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.primary
    },
    text: {
        fontSize: ScaleFonts.SIZE_32,
        color: Colors.secondary,
        fontFamily:AppFonts.SemiBold
    }
})