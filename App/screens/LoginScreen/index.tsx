import { View, Text, TouchableOpacity } from 'react-native';
import React, { useRef, useState } from 'react';
import { Colors, Strings } from '../../helper';
import { CustomTextInput, Button } from '../../components';
import Utils from '../../helper/Utils';
import { useDispatch } from 'react-redux';
import { authLoginAction } from '../../redux/action/authActions';
import LinearGradient from 'react-native-linear-gradient';
import { styles } from './style';

const LoginScreen = ({ navigation }: { navigation: any }) => {

  const dispatch = useDispatch()

  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const nameRef = useRef<any>(null);
  const passwordRef = useRef<any>(null);
  const [userError, setUserError] = useState<any>(false);
  const [passError, setPassError] = useState<any>(false);
  const goToForgotPassword = () => {
    navigation.navigate('forgotpassword');
  };

  const goToSignup = () => {
    navigation.navigate('signup');
  };

  const handleLogin = () => {
    let isValid = true;

    if (Utils.isNull(username)) {
      isValid = false
      setUserError('Please Enter Username')
    }

    if (Utils.isNull(password)) {
      isValid = false;
      setPassError('Please Enter Password')
    }

    if (isValid) {
      const body = { username: username, password: password }
      dispatch(authLoginAction(body, navigation))
    }
  };

  return (
    <LinearGradient colors={[Colors.gradiant1, Colors.gradiant2, Colors.gradiant3]} style={styles.container}>
      <Text style={styles.signIn}>{Strings.str_sign_in}</Text>

      <CustomTextInput
        border={true}
        placeholder={Strings.str_username}
        enterKeyHint='next'
        onChangeText={(text: string) => {
          setUsername(text)
          setUserError(false)
        }}
        error={userError}
        leftIcon='account'
        ref={nameRef}
        onSubmitEditing={() => passwordRef.current.focus()}
      />

      <CustomTextInput
        border={true}
        placeholder={Strings.str_password}
        enterKeyHint='done'
        secureTextEntry={true}
        onChangeText={(text: string) => {
          setPassword(text);
          setPassError(false);
        }}
        error={passError}
        leftIcon='lock'
        ref={passwordRef}
        ispassword={true}
        onSubmitEditing={handleLogin}
      />

      <TouchableOpacity onPress={goToForgotPassword}>
        <Text style={styles.forgotPassword}>{Strings.str_forgot_password}</Text>
      </TouchableOpacity>

      <View style={styles.ButtonView}>
        <Button title={Strings.str_sign_in} onPress={handleLogin} />
      </View>

      <Text style={styles.dontHaveAcc}>
        {Strings.str_dont_have_account}
        <Text style={styles.signUp} onPress={goToSignup}> {Strings.str_signup}
        </Text>
      </Text>
    </LinearGradient>
  );
};


export default LoginScreen;