import AsyncStorage from '@react-native-community/async-storage';
import auth from '@react-native-firebase/auth';
import * as ActionType from '../ActionType'
import { GoogleSignin } from '@react-native-google-signin/google-signin';

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

export const signoutEmail = () => (dispatch) => {
    dispatch(Loading())
    try {
        auth()
            .signOut()
            .then(() => {
                AsyncStorage.clear();
                dispatch({ type: ActionType.SIGNOUT_USER, payload: "Signout successfully." })
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
                AsyncStorage.setItem("user",user.user.uid)
                console.log("ijuijmmijmiko,,k,ko", user.user.uid);
                dispatch({type: ActionType.SIGNIN_SUCCESS, payload: user})
            })
            .catch((e) => {
                dispatch({ type: ActionType.AUTH_ERROR, payload: error.code })
            })
    } catch (error) {
        dispatch({ type: ActionType.AUTH_ERROR, payload: error.code })
    }
}

export const Loading = () => (dispatch) => {
    dispatch({type: ActionType.LOADING_PRODUCT})
}



export const SigninWithGoogle = () => async (dispatch) => {
    // const { idToken } = await GoogleSignin.signIn();
    // const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    // return auth().signInWithCredential(googleCredential)

    // dispatch({type: ActionType.SIGNIN_SUCCESS,payload: id})
    GoogleSignin.configure({
        webClientId: '591138143160-c840t6463skfbehilvd5f96t5m7rent2.apps.googleusercontent.com',
      });


try { 
    const { idToken } = await GoogleSignin.signIn()
    .then(() => {
        googleCredential = auth.GoogleAuthProvider.credential(idToken);
    })
    .then((user) => {
        auth().signInWithCredential(googleCredential)
        dispatch({type: ActionType.SIGNIN_SUCCESS,payload: user})
    })
} catch(e){
console.log(e);
}
}