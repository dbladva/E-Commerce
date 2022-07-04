import AsyncStorage from '@react-native-community/async-storage';
import auth, { firebase } from '@react-native-firebase/auth';
import * as ActionType from '../ActionType'
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import firestore from '@react-native-firebase/firestore';


export const createUserWithEmail = (data) => async (dispatch) => {
    dispatch(Loading())
    auth()
        .createUserWithEmailAndPassword(data.email, data.password)
        .then(() => {
            auth()
                .onAuthStateChanged((user) => {
                    user.sendEmailVerification()
                        .then(() => {
                            console.log(1);
                            firestore()
                                .collection('Users')
                                .add({
                                    email: data.email,
                                    name: data.name,
                                    phone: data.phone
                                })
                                .then(() => {
                                    console.log('User added!');
                                })
                                .catch((error) => {
                                    dispatch({ type: ActionType.AUTH_ERROR, payload: error.code })
                                })
                            dispatch({ type: ActionType.USER_EMAIL, payload: "Please verify email id." })
                        })
                        .catch((error) => {
                            console.log(2);
                            dispatch({ type: ActionType.AUTH_ERROR, payload: error.code })
                        })
                })
        })
        .catch(error => {
            if (error.code === 'auth/email-already-in-use') {
                dispatch({ type: ActionType.AUTH_ERROR, payload: "That email address is already in use!" })
            }

            if (error.code === 'auth/invalid-email') {
                dispatch({ type: ActionType.AUTH_ERROR, payload: "That email address is invalid!" })
            }
        });
}

export const signinUserEmail = (data) => async (dispatch) => {
    dispatch(Loading())
    auth()
        .signInWithEmailAndPassword(data.email, data.password)
        .then((user) => {
            if (user.user.emailVerified) {
                AsyncStorage.setItem("user", user.user.uid);

                dispatch({ type: ActionType.SIGNIN_SUCCESS, payload: user.user })
            } else {
                console.log("2", user);
                dispatch({ type: ActionType.USER_EMAIL, payload: "Please verify your email id." })
            }

        })
        .catch((error) => {
            console.log("3");
            dispatch({ type: ActionType.AUTH_ERROR, payload: error.code })
        })
}

export const signoutEmail = () => async (dispatch) => {
    
    try {
        dispatch(Loading())
        auth()
            .signOut()
            .then(() => {
                AsyncStorage.clear()
                dispatch({ type: ActionType.SIGNOUT_USER, payload: "Signout successfully." })
                dispatch(userData())
            });
    } catch (e) {
        dispatch({ type: ActionType.AUTH_ERROR, payload: error.code })
    }
}

export const resetPasswordEmail = (email) => (dispatch) => {
    dispatch(Loading())
    try {
        auth()
            .sendPasswordResetEmail(email)
            .then(() => {
                dispatch({ type: ActionType.RESET_PASSWORD, payload: "Reset password link sent to your email address." })
            })
    } catch (e) {
        dispatch({ type: ActionType.AUTH_ERROR, payload: error.code })
    }
}

export const loginWithPhone = (PhoneNumber) => async (dispatch) => {
    dispatch(Loading())
    console.log(PhoneNumber);
    try {
        auth()
            .signInWithPhoneNumber(PhoneNumber)
            .then((confirmation) => {
                console.log('confirmationnnnnnnnnn', confirmation.confirm);
                console.log('ccccccccccccccccccccc', confirmation);
                dispatch({ type: ActionType.OTP, payload: confirmation })
            })
            .catch((e) => {
                dispatch({ type: ActionType.AUTH_ERROR, payload: error.code })
            })

    } catch (e) {
        dispatch({ type: ActionType.AUTH_ERROR, payload: error.code })
    }
}

export const verifyOtp = (otp, confirm) => async (dispatch) => {
    dispatch(Loading())
    try {
        await confirm.confirm(otp)
            .then((user) => {
                AsyncStorage.setItem("user", user.user.uid)
                console.log("ijuijmmijmiko,,k,ko", user.user.uid);
                dispatch({ type: ActionType.SIGNIN_SUCCESS, payload: user })
            })
            .catch((e) => {
                dispatch({ type: ActionType.AUTH_ERROR, payload: error.code })
            })
    } catch (error) {
        dispatch({ type: ActionType.AUTH_ERROR, payload: error.code })
    }
}

export const Loading = () => (dispatch) => {
    dispatch({ type: ActionType.LOADING_AUTH })
}


GoogleSignin.configure({
    webClientId: '591138143160-u0s4h0llus88m7se3h9ps2sm6gp754dp.apps.googleusercontent.com',
});

export const SigninWithGoogle = () => async (dispatch) => {
    try {
        const { idToken } = await GoogleSignin.signIn();
        const credential = auth.GoogleAuthProvider.credential(
            idToken,
        );
        const result = await auth().signInWithCredential(credential)
        // AsyncStorage.setItem('user', result.user.uid)
        AsyncStorage.setItem('user', result.user.email)
        dispatch({ type: ActionType.SIGNIN_SUCCESS, payload: idToken })
        // console.log('result',result.user.email);
    } catch (error) {
        dispatch({ type: ActionType.AUTH_ERROR, payload: error.code })
    }

}

export const userData = () => async (dispatch) => {
        try {
            dispatch(Loading())
            const value = await AsyncStorage.getItem('user');
                console.log('valueeeeeeeeeeeeee',value);
                dispatch({ type: ActionType.USER_DATA, payload: value})
        } catch (e) {
            dispatch({ type: ActionType.AUTH_ERROR, payload: error.code })
        }

}