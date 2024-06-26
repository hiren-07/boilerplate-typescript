import { View, Text, StyleSheet, Modal, ActivityIndicator } from 'react-native'
import React from 'react'
import { Colors, ScaleSize } from '../../Helper'
import { useSelector } from 'react-redux'

const Loader = (props:any) => {
    const values = useSelector((state:any)=>state.loader)

    return (
        <Modal visible={values} transparent={true}> 
            <View style={styles.container}>
                <ActivityIndicator size={ScaleSize.SPACING_40} color={Colors.secondary} />
            </View>
        </Modal>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
})

export default Loader