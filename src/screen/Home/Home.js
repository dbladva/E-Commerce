import { ActivityIndicator, StyleSheet, SafeAreaView, FlatList, Text, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useDispatch, useSelector } from 'react-redux'
import { fetchData, fetchProduct } from '../../redux/action/product.action';

const Home = ({ navigation }) => {
  const dispatch = useDispatch()
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    dispatch(fetchProduct());
  }, []);
  
  const renderItem = ({ item }) => {
    return (
      <Text>
        
        {item.name} , {item.location}, {item.price} ,
      </Text>
    );
  };


  return (
    <SafeAreaView style={{ flex: 1, padding: 24, justifyContent: 'center', alignItems: 'center' }}>
      <View style={{ flex: 1, padding: 24, justifyContent: 'center', alignItems: 'center' }}>
        {loading && <ActivityIndicator size="large" color="#00ff00" />}
        <View>
          {data && (
            <FlatList
              data={data}
              renderItem={renderItem}
              keyExtractor={(item) => item.id.toString()}
            />
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
