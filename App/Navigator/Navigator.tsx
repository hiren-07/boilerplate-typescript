import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../Screens/SplashScreen';
import LoginScreen from '../Screens/LoginScreen';
import SignUpScreen from '../Screens/SignUpScreen';
import ForgotPassword from '../Screens/ForgotPassword';
import IntroScreen from '../Screens/IntroSlider';
import HomeScreen from '../Screens/HomeScreen';
import TextInputsDemo from '../Screens/TextInputsDemo';
import ModalDemo from '../Screens/ModalDemo';

const Stack = createNativeStackNavigator()
const Navigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Splash' component={SplashScreen} />
            <Stack.Screen name='introscreen' component={IntroScreen} />
            <Stack.Screen name='login' component={LoginScreen} />
            <Stack.Screen name='signup' component={SignUpScreen} />
            <Stack.Screen name='forgotpassword' component={ForgotPassword} />
            <Stack.Screen name='home' component={HomeScreen} />
            <Stack.Screen name='textinput' component={TextInputsDemo} />
            <Stack.Screen name='modals' component={ModalDemo} />
        </Stack.Navigator>
    )
}

export default Navigator