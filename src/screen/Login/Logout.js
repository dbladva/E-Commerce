import { StyleSheet,SafeAreaView,TouchableOpacity, Text, View } from 'react-native'
import React from 'react'
import { useDispatch } from 'react-redux'
import {signoutEmail } from '../../redux/action/auth.action'

const Logout = () => {
    const dispatch = useDispatch()

    const LogoutHandler = () => {
        dispatch(signoutEmail())
    }
  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.container}>
        <TouchableOpacity style={styles.btn} onPress={() => LogoutHandler()}>
      <Text>Logout</Text>
      </TouchableOpacity>
    </View>
    </SafeAreaView>
  )
}

export default Logout

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btn:{
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: 'white',
        color: 'red',
        borderRadius: 5,
    }
})