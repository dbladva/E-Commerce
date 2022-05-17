import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { DrawerContent, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'

const CustomDrawer = (props) => {
  return (
    <View style={{flex: 1,backgroundColor: '#dbffff'}}>
        <DrawerContentScrollView {...props} >
        <View style={{margin: 10,flexDirection: 'row',alignItems: 'center',marginBottom: 30,marginTop: 30}}> 
                <Image style={{height: 100,width: 100,borderRadius: 50}} source={require('./src/images/user.jpg')}/> 
                <View style={{marginLeft: 10,}}>
                    <Text style={{fontWeight: 'bold',fontSize: 20,color: 'black',}}>Dharmesh</Text>
                    <Text style={{fontWeight: 'bold',fontSize: 15,color: 'black',}}>Ladva</Text>
                </View>
            </View> 
            <DrawerItemList {...props} />
            
        </DrawerContentScrollView>
    </View> 
  )
}

export default CustomDrawer

const styles = StyleSheet.create({})