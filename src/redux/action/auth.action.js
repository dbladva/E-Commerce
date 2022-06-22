import AsyncStorage from '@react-native-community/async-storage';
import auth from '@react-native-firebase/auth';
import * as ActionType from '../ActionType'

export const createUserWithEmail = (data) => async (dispatch) => {
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
    try {
        auth()
            .signOut()
            .then(() => {
                 AsyncStorage.clear();
                dispatch({type: ActionType.SIGNOUT_USER, payload: "Signout successfully."})
            });
    } catch (e) {
        dispatch({ type: ActionType.AUTH_ERROR, payload: error.code })
    }
}

export const resetPasswordEmail = (email) => (dispatch) => {
    try {
        auth()
            .sendPasswordResetEmail(email)
            .then(() => {
                dispatch({type: ActionType.RESET_PASSWORD, payload: "Reset password link sent to your email address."})
            })
    } catch (e) {
        dispatch({ type: ActionType.AUTH_ERROR, payload: error.code })
    }
}

export const loginWithPhone = (PhoneNumber,navigation) => async (dispatch) => {
    console.log(PhoneNumber);
try {
    auth()
            .signInWithPhoneNumber(PhoneNumber)
            .then((confirmation) => {
                console.log('confirmationnnnnnnnnn',confirmation.confirm);
                navigation.navigate('Otp')
                console.log('successfully send otp');
                // dispatch({ type: ActionType.SIGNIN_SUCCESS, payload: user.user })
            })
            .then(() => {
                try {
                     confirm.confirm(123456);
                  } catch (error) {
                    console.log('Invalid code.');
                  };
            })
           
} catch (e) {
    dispatch({ type: ActionType.AUTH_ERROR, payload: error.code })
}
}

