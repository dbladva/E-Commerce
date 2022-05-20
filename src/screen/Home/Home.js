import { ActivityIndicator,StyleSheet, SafeAreaView,FlatList, Text, View } from 'react-native';
import React,{useState,useEffect} from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useDispatch, useSelector } from 'react-redux'

const Home = ({navigation}) => {
  const Data = useDispatch()
 
  return (
    <SafeAreaView  style={{ flex: 1, padding: 24 ,justifyContent: 'center',alignItems: 'center'}}>
         <View style={{ flex: 1, padding: 24 ,justifyContent: 'center',alignItems: 'center'}}>

      <View>
        <Text>Hellllo</Text>
      </View>
    </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});

// import { View, Text } from 'react-native'
// import React from 'react'

// const Home = () => {
//   return (
//     <View>
//       <Text>Home</Text>
//     </View>
//   )
// }

// export default Home