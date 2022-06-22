import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { DrawerContent, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useDispatch } from 'react-redux'
import { signoutEmail } from './src/redux/action/auth.action'
import AsyncStorage from '@react-native-community/async-storage';

const CustomDrawer = (props) => {
  const dispatch = useDispatch()

  const LogoutHandler = () => {
    AsyncStorage.clear()
    dispatch(signoutEmail())
  }
  return (
    <View style={{ flex: 1, backgroundColor: '#dbffff' }}>
      <DrawerContentScrollView {...props} >
        <View style={{ margin: 10, flexDirection: 'row', alignItems: 'center', marginBottom: 30, marginTop: 30 }}>
          <Image style={{ height: 80, width: 80, borderRadius: 50 }} source={require('./src/images/user.jpg')} />
          <View style={{ marginLeft: 10, }}>
            <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'black', }}>Dharmesh</Text>
            <Text style={{ fontWeight: 'bold', fontSize: 15, color: 'black', }}>Ladva</Text>
          </View>
        </View>
        <DrawerItemList {...props} />

        <View>

        </View>
        
      </DrawerContentScrollView>
      <View style={styles.LogoutView}>
        <TouchableOpacity style={styles.btn} onPress={() => LogoutHandler()}>
            <MaterialIcons
              name="logout"
              size={25}
              // color={'#d0c2e8'}
              color='red'
            />
          <Text style={styles.LogoutText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default CustomDrawer

const styles = StyleSheet.create({
  LogoutView: {
    bottom: '10%',
    left: '10%',
    position: 'absolute',
    // marginHorizontal: 20,
    // marginVertical: 10,
    // backgroundColor: 'blue'

  },
  btn:{
    flexDirection: 'row',
    alignItems: 'center'
  },
  LogoutText:{
    color: 'red',
    marginLeft: 30,
    fontWeight: '600'
  }
})