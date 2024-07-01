import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screens/SplashScreen';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import ForgotPassword from '../screens/ForgotPassword';
import IntroScreen from '../screens/IntroSlider';
import TextInputsDemo from '../screens/TextInputDemo';
import ModalDemo from '../screens/ModalDemo';
import DataRenderingDemo from '../screens/DataRenderingDemo';
import HomeScreen from '../screens/HomeScreen';
import SettingScreen from '../screens/SettingScreen';

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
            <Stack.Screen name='settings' component={SettingScreen} />
        </Stack.Navigator>
    )
}

export default Navigator