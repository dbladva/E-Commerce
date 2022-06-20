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
                            dispatch({ type: ActionType.USER_EMAIL, payload: "Please verify email id." })
                        })
                     
                        .catch((error) => {
                            dispatch({ type: ActionType.AUTH_ERROR, payload: error.code})
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

export const signinUserEmail = (data,navigation) => async (dispatch) => {
    auth()
        .signInWithEmailAndPassword(data.email, data.password)
        .then((user) => {
            if (user.emailVerified) {
                AsyncStorage.setItem("user",user.user.uid);
                console.log("1");
                dispatch({type: ActionType.SIGNIN_SUCCESS, payload: user})
            } else {
                console.log("2", user);
                dispatch({type: ActionType.USER_EMAIL, payload: "Please verify your email id."})
            }
               
        })
        .catch((error) => {
            console.log("3");
            dispatch({ type: ActionType.AUTH_ERROR, payload: error.code})
        }) 
}

//signout

//reset password
