import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import { Colors, ScaleFonts, ScaleSize } from '../Helper'
import AsyncStorage from '@react-native-async-storage/async-storage'

const SplashScreen = ({ navigation }: { navigation: any }) => {
    useEffect(() => {
        moveForward()
    }, [])

    const moveForward = async () => {
        const isLoggedin = await AsyncStorage.getItem('isLoggedin')
        setTimeout(() => {
            if(isLoggedin == 'yes'){
                navigation.replace('home')
            }else{
                navigation.replace('introscreen')
            }
        }, 3000);
    }
    
    return (
        <View style={styles.container}>
            <Text style={styles.text}>SplashScreen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.primary
    },
    text: {
        fontSize: ScaleFonts.SIZE_32,
        color: Colors.secondary
    }
})
export default SplashScreen