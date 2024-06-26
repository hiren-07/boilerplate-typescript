import { View, Text, StyleSheet } from 'react-native'
import React, { useRef, useState } from 'react'
import { Colors, AppFonts, Strings, ScaleFonts, ScaleSize } from '../helper'
import { CustomTextInput, Button } from '../components'
import Utils from '../helper/Utils'
import { useDispatch } from 'react-redux'
import { forgotPasswordAction } from '../redux/Action/AuthActions'
import LinearGradient from 'react-native-linear-gradient'


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

        if(isValid){
            const body = {email:email}
            dispatch(forgotPasswordAction(body,navigation))
        }
    }


    return (
        <LinearGradient colors={[Colors.gradiant1, Colors.gradiant2,Colors.gradiant3 ]} style={styles.container}>

            <Text style={styles.signIn}>{Strings.str_forgot_password_title}</Text>

            <Text style={styles.description}>{Strings.str_description}</Text>

            <CustomTextInput
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: ScaleSize.SPACING_50,
        backgroundColor: Colors.primary
    },
    signIn: {
        fontSize: ScaleFonts.SIZE_24,
        fontFamily: AppFonts.Bold,
        color: Colors.secondary,
        marginBottom: ScaleSize.SPACING_40
    },
    inputAll: {
        paddingVertical: ScaleSize.SPACING_10,
        backgroundColor: Colors.textInputBackground,
        width: '100%',
        fontSize: ScaleFonts.SIZE_16,
        color: Colors.secondary,
        marginVertical: ScaleSize.SPACING_15,
        fontFamily: AppFonts.Medium,
        paddingLeft: ScaleSize.SPACING_15
    },
    forgotPassword: {
        fontSize: ScaleFonts.SIZE_14,
        fontFamily: AppFonts.SemiBold,
        color: Colors.secondary,
        marginVertical: ScaleSize.SPACING_15
    },
    ButtonView: {
        marginTop: ScaleSize.SPACING_50,
        marginBottom: ScaleSize.SPACING_100
    },
    dontHaveAcc: {
        color: Colors.secondary,
        textAlign: 'center',
        fontFamily: AppFonts.Regular,
        fontSize: ScaleFonts.SIZE_14
    },
    signUp: {
        color: Colors.ButtonBackground,
        fontFamily: AppFonts.Bold
    },
    description: {
        color: Colors.secondary
    }


})

export default LoginScreen