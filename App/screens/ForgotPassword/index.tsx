import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useDispatch } from 'react-redux';
import { Button, CustomTextInput } from '../../Components';
import Utils from '../../Helper/Utils';
import { forgotPasswordAction } from '../../Redux/Action/authActions';
import { styles } from './styles';
import { Colors } from '../../Helper';


const LoginScreen = ({ navigation }: { navigation: any }) => {

    const dispatch = useDispatch();

    const { t } = useTranslation();

    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState<any>(false);

    const handleForgotPassword = () => {
        let isValid = true;

        if (Utils.isNull(email)) {
            isValid = false;
            setEmailError(t('str_please_enter_email'));
        } else if (!Utils.isEmailValid(email)) {
            isValid = false;
            setEmailError(t('str_invalid_email'));
        }

        if (isValid) {
            const body = { email: email };
            dispatch(forgotPasswordAction(body, navigation));
        }
    };


    return (
        <LinearGradient colors={[Colors.gradiant1, Colors.gradiant2, Colors.gradiant3]} style={styles.container}>

            <Text style={styles.signIn}>{t('str_forgot_password_title')}</Text>

            <Text style={styles.description}>{t('str_description')}</Text>

            <CustomTextInput
                border={true}
                placeholder={t('str_mail_id')}
                enterKeyHint="done"
                onChangeText={(text: any) => { setEmail(text), setEmailError(false); }}
                error={emailError}
                leftIcon="email-outline"
                onSubmitEditing={handleForgotPassword}

            />


            <View style={styles.ButtonView}>
                <Button
                    title={t('str_send_email')}
                    onPress={handleForgotPassword}
                />
            </View>

        </LinearGradient>
    );
};



export default LoginScreen;
