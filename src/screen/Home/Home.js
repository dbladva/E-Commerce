import { StyleSheet, Text, View,TouchableOpacity,SafeAreaView } from 'react-native'
import React from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Home = ({navigation}) => {
  return (
    <SafeAreaView>
    <View >
     <View style={{marginLeft: 20, marginTop: 10,}}>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <MaterialIcons
            name={'menu'}
            size={25}
            color={'black'}
          />
          </TouchableOpacity>
        </View>
    </View>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({})