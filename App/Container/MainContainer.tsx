import { Dimensions, StyleSheet, View, Text } from 'react-native'
import React from 'react'
import { Loader } from '../components'

const { width, height } = Dimensions.get('window')

function MainContainer(): JSX.Element {
    
    return (
        <View style={styles.container}>
            <Loader />
        </View>
    )
}

export default MainContainer

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'absolute',
        backgroundColor:'red',
        right: 0,
        left: 0,
        width: width,
        zIndex: 9999,
    }
})