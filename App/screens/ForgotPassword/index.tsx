import { View, Text, StyleSheet } from 'react-native'
import React, { useRef, useState } from 'react'
import { CustomTextInput, Button } from '../../components'
import Utils from '../../helper/Utils'
import { useDispatch } from 'react-redux'
import { forgotPasswordAction } from '../../redux/action/authActions'
import LinearGradient from 'react-native-linear-gradient'
import { Colors, Strings } from '../../helper'
import { styles } from './styles'


const LoginScreen = ({ navigation }: { navigation: any }) => {

    const dispatch = useDispatch()

    const [email, setEmail] = useState('')
    const [emailError, setEmailError] = useState<any>(false) 

    const handleForgotPassword = () => {
        let isValid = true;

        if (Utils.isNull(email)) {
            isValid = false
            setEmailError('Please Enter Email Address')
        } else if (!Utils.isEmailValid(email)) {
            isValid = false
            setEmailError('Invalid Email Address')
        }

        if (isValid) {
            const body = { email: email }
            dispatch(forgotPasswordAction(body, navigation))
        }
    }


    return (
        <LinearGradient colors={[Colors.gradiant1, Colors.gradiant2, Colors.gradiant3]} style={styles.container}>

            <Text style={styles.signIn}>{Strings.str_forgot_password_title}</Text>

            <Text style={styles.description}>{Strings.str_description}</Text>

            <CustomTextInput
                border={true}
                placeholder={Strings.str_mail_id}
                enterKeyHint='done'
                onChangeText={(text: any) => { setEmail(text), setEmailError(false) }}
                error={emailError}
                icon='email-outline'
                onSubmitEditing={handleForgotPassword}

            />


            <View style={styles.ButtonView}>
                <Button
                    title={Strings.str_send_email}
                    onPress={handleForgotPassword}
                />
            </View>

        </LinearGradient>
    )
}



export default LoginScreen