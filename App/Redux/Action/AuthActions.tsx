import { Alert } from "react-native";
import { FORGOT_PASSWORD_FAILURE, FORGOT_PASSWORD_RQUEST, FORGOT_PASSWORD_SUCCESS, LOGIN_FAILURE, LOGIN_REQUST, LOGIN_SUCCESS, SIGN_UP_FAILURE, SIGN_UP_REQUEST, SIGN_UP_SUCCESS } from "../Constant"
import { loader } from "./loaderAction";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CommonActions } from '@react-navigation/native';


export const authLoginAction = (body: any, navigation: any) => {
    return (dispatch: (arg0: { type: string; }) => void) => {
        dispatch({ type: LOGIN_REQUST })
        loader(dispatch, true)

        setTimeout(async () => {
            if (body.username == "dhruv007" && body.password == "123456") {
                await AsyncStorage.setItem('isLoggedin', "yes").then(() => {

                    dispatch({ type: LOGIN_SUCCESS })
                    navigation.dispatch(
                        CommonActions.reset({
                            index: 1,
                            routes: [{ name: 'home' }],
                        })
                    );
                    loader(dispatch, false)
                })
            } else {
                dispatch({ type: LOGIN_FAILURE })
                loader(dispatch, false)
                alert("Invalid Username Or Password")
            }
        }, 3000);

    }
}

export const authSignupAction = (body: any, navigation: any) => {
    return (dispatch: (arg0: { type: string; }) => void) => {
        dispatch({ type: SIGN_UP_REQUEST })
        loader(dispatch, true)

        const success = true
        setTimeout(async () => {

            if (success) {
                await AsyncStorage.setItem('isLoggedin', "yes").then(() => {
                    dispatch({ type: SIGN_UP_SUCCESS })
                    navigation.dispatch(
                        CommonActions.reset({
                            index: 1,
                            routes: [{ name: 'home' }],
                        })
                    );
                    loader(dispatch, false)
                })
            } else {
                dispatch({ type: SIGN_UP_FAILURE })
                loader(dispatch, false)
            }
        }, 3000);
    }
}

export const forgotPasswordAction = (body: any, navigation: any) => {
    return (dispatch: (arg0: { type: string; }) => void) => {
        dispatch({ type: FORGOT_PASSWORD_RQUEST })
        loader(dispatch, true)

        const success = true
        setTimeout(() => {
            if (success) {
                dispatch({ type: FORGOT_PASSWORD_SUCCESS })
                loader(dispatch, false)
                Alert.alert('Forgot Password', 'Password sent to your mail account', [
                    { text: 'OK', onPress: () => navigation.goBack() },
                ]);
            } else {
                dispatch({ type: FORGOT_PASSWORD_FAILURE })
                loader(dispatch, false)
            }
        }, 3000);
    }

}