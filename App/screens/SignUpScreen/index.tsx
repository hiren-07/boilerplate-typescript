import { View, Text } from 'react-native'
import React, { useRef, useState } from 'react'
import { Colors, Strings } from '../../helper'
import { CustomTextInput, Button } from '../../components'
import Utils from '../../helper/Utils'
import { useDispatch } from 'react-redux'
import { authSignupAction } from '../../redux/action/authActions'
import LinearGradient from 'react-native-linear-gradient'
import { styles } from './style'


const LoginScreen = ({ navigation }: { navigation: any }) => {

  const dispatch = useDispatch()

  interface renfrence{
    ref : any
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
      setUserError('Please Enter Username')
    }

    if (Utils.isNull(email)) {
      isValid = false
      setEmailError('Please Enter Email Address')
    } else if (!Utils.isEmailValid(email)) {
      isValid = false
      setEmailError('Invalid Email Address')
    }

    if (Utils.isNull(mobile)) {
      isValid = false
      setMobileError('Please Enter Mobile Number')
    } else if (!Utils.isPhoneNumberValid(mobile)) {
      isValid = false
      setMobileError('Invalid Mobile Number')
    }

    if (Utils.isNull(password)) {
      isValid = false;
      setPassError('Please Enter Password')
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

      <Text style={styles.signIn}>{Strings.str_signup}</Text>

      <CustomTextInput
        border={true}
        placeholder={Strings.str_username}
        enterKeyHint='next'
        onChangeText={(text: any) => { setUsername(text), setUserError(false) }}
        error={userError}
        leftIcon='account'
        ref={nameRef}
        onSubmitEditing={() => emailRef.current.focus()}

      />

      <CustomTextInput
        border={true}
        placeholder={Strings.str_mail_id}
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
        placeholder={Strings.str_mobile_number}
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
        placeholder={Strings.str_password}
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
          title={Strings.str_sign_in}
          onPress={handleLogin}
        />
      </View>

      <Text style={styles.dontHaveAcc}>{Strings.str_dont_have_account}
        <Text style={styles.signUp} onPress={goToSignin}>  {Strings.str_signup}</Text>
      </Text>


    </LinearGradient>
  )
}



export default LoginScreen