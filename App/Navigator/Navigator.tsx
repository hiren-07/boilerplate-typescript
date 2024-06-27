import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screens/SplashScreen';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import ForgotPassword from '../screens/ForgotPassword';
import IntroScreen from '../screens/IntroSlider';
import HomeScreen from '../screens/HomeScreen';
import TextInputsDemo from '../screens/TextInputsDemo';
import ModalDemo from '../screens/ModalDemo';
import DataRenderingDemo from '../screens/DataRenderingDemo';

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
            <Stack.Screen name='dataRendering' component={DataRenderingDemo} />

        </Stack.Navigator>
    )
}

export default Navigator