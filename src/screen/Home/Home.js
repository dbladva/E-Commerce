import { ActivityIndicator, StyleSheet, SafeAreaView, StatusBar,FlatList, Text, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


const Home = ({ navigation }) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getMovies = async () => {
    try {
     const response = await fetch('http://192.168.43.200:8000/products');
     const json = await response.json();
     setData(json);
   } catch (error) {
     console.error(error);
   } finally {
     setLoading(false);
   }
 }

 useEffect(() => {
   getMovies();
 }, []);


 const renderItem = ({item}) => {
   console.log(item.name);
return (
  <View>
    <Text>{item.name}</Text>
  </View>
)
 }

  return (
    <SafeAreaView style={{ flex: 1, padding: 24, justifyContent: 'center', alignItems: 'center' }}>
      <View style={{ flex: 1, padding: 24, justifyContent: 'center', alignItems: 'center' }}>
        {isLoading == true ? <ActivityIndicator size={30} color={"red"}/>  :
      <FlatList 
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      />
  }
      </View>
      
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
