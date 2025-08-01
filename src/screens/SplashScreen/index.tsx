import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { styles } from './style'
import { useTranslation } from 'react-i18next'

const SplashScreen = ({ navigation }: { navigation: any }) => {

    const { t } = useTranslation();

    useEffect(() => {
        moveForward()
    }, [])

    const moveForward = async () => {
        const isLoggedin = await AsyncStorage.getItem('isLoggedin')
        setTimeout(() => {
            if (isLoggedin == 'yes') {
                navigation.replace('home')
            } else {
                navigation.replace('introscreen')
            }
        }, 3000);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{t("str_splash_screen_title")}</Text>
        </View>
    )
}

export default SplashScreen