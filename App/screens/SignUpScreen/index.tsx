import { View, Text } from 'react-native'
import React, { useRef, useState } from 'react'
import { Colors } from '../../helper'
import { CustomTextInput, Button } from '../../components'
import Utils from '../../helper/Utils'
import { useDispatch } from 'react-redux'
import { authSignupAction } from '../../redux/action/authActions'
import LinearGradient from 'react-native-linear-gradient'
import { styles } from './style'
import { useTranslation } from 'react-i18next'


const LoginScreen = ({ navigation }: { navigation: any }) => {

  const dispatch = useDispatch()

  const { t } = useTranslation()

  interface renfrence {
    ref: any
  }

  const [username, setUsername] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [mobile, setMobile] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const nameRef = useRef<renfrence>(null)
  const emailRef = useRef<renfrence>(null)
  const mobileRef = useRef<renfrence>(null)
  const passwordRef = useRef<renfrence>(null)

  const [userError, setUserError] = useState<string | boolean>(false)
  const [emailError, setEmailError] = useState<string | boolean>(false)
  const [mobileError, setMobileError] = useState<string | boolean>(false)
  const [passError, setPassError] = useState<string | boolean>(false)

  const goToSignin = () => {
    navigation.navigate('login')
  }

  const handleLogin = () => {

    let isValid = true;

    if (Utils.isNull(username)) {
      isValid = false
      setUserError(t('str_please_enter_username'))
    }

    if (Utils.isNull(email)) {
      isValid = false
      setEmailError(t('str_please_enter_email'))
    } else if (!Utils.isEmailValid(email)) {
      isValid = false
      setEmailError(t('str_invalid_email'))
    }

    if (Utils.isNull(mobile)) {
      isValid = false
      setMobileError(t('str_please_enter_mobile'))
    } else if (!Utils.isPhoneNumberValid(mobile)) {
      isValid = false
      setMobileError(t('str_invalid_mobile_number'))
    }

    if (Utils.isNull(password)) {
      isValid = false;
      setPassError(t('str_please_enter_password'))
    }

    if (isValid) {
      const body = {
        username: username.trim(),
        email: email.trim(),
        mobile: mobile.trim(),
        password: password.trim()
      }
      dispatch(authSignupAction(body, navigation))
    }

  }


  return (
    <LinearGradient colors={[Colors.gradiant1, Colors.gradiant2, Colors.gradiant3]} style={styles.container}>

      <Text style={styles.signIn}>{t('str_signup')}</Text>

      <CustomTextInput
        border={true}
        placeholder={t('str_username')}
        enterKeyHint='next'
        onChangeText={(text: any) => { setUsername(text), setUserError(false) }}
        error={userError}
        leftIcon='account'
        ref={nameRef}
        onSubmitEditing={() => emailRef.current.focus()}

      />

      <CustomTextInput
        border={true}
        placeholder={t('str_mail_id')}
        keyboardType='email-address'
        enterKeyHint='next'
        onChangeText={(text: any) => { setEmail(text), setEmailError(false) }}
        error={emailError}
        leftIcon='email-outline'
        ref={emailRef}
        onSubmitEditing={() => mobileRef.current.focus()}


      />

      <CustomTextInput
        border={true}
        placeholder={t('str_mobile_number')}
        keyboardType='number-pad'
        enterKeyHint='next'
        onChangeText={(text: any) => { setMobile(text), setMobileError(false) }}
        error={mobileError}
        leftIcon='phone'
        ref={mobileRef}
        onSubmitEditing={() => passwordRef.current.focus()}


      />

      <CustomTextInput
        border={true}
        placeholder={t('str_password')}
        enterKeyHint='done'
        secureTextEntry={true}
        onChangeText={(text: any) => { setPassword(text), setPassError(false) }}
        error={passError}
        leftIcon='lock'
        ref={passwordRef}
        onSubmitEditing={() => handleLogin()}
        ispassword={true}
      />


      <View style={styles.ButtonView}>
        <Button
          title={t('str_sign_in')}
          onPress={handleLogin}
        />
      </View>

      <Text style={styles.dontHaveAcc}>{t('str_dont_have_account')}
        <Text style={styles.signUp} onPress={goToSignin}>  {t('str_signup')}</Text>
      </Text>


    </LinearGradient>
  )
}



export default LoginScreen