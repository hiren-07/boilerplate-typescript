import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { styles } from './style'

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

export default SplashScreen