import { StyleSheet } from "react-native";
import { ScaleSize } from "../../helper/ScaleSize";

export const styles = StyleSheet.create({
    container : {
        flex:1,
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection:'row',
        paddingHorizontal:ScaleSize.SPACING_50
    }
})