import { ActivityIndicator, StyleSheet, SafeAreaView, StatusBar, FlatList, Text, View, Image, ScrollView } from 'react-native';
import React, { useState, useEffect } from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import firestore from '@react-native-firebase/firestore';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import { CloudToGetproduct } from '../../redux/action/product.action';


const Home = ({ route,navigation }) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const product = useSelector(state => state.product)
  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(CloudToGetproduct())
  }, [])

  const refreshHandler = () => {
    dispatch(CloudToGetproduct())
  }
   const renderItem = ({ item }) => {
    return (
      <View style={{ elevation: 6, shadowColor: 'black', width: '40%', backgroundColor: 'rgba(238, 223, 230, 1)', marginHorizontal: 10, marginVertical: 10, borderRadius: 10, padding: 10, justifyContent: 'space-around' }}>
        <TouchableOpacity onPress={() => navigation.navigate('Detail',{id:item.id})}>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 8, }}>
          <Ionicons style={{ alignSelf: 'center', marginRight: 3, }} name={'location'} size={15} color={'black'} />
          <Text style={{ color: '#666666', fontWeight: '600', }}>{item.location}</Text>
        </View>
        <Text style={{ color: 'black', fontWeight: '600', }}>{item.name}</Text>
        <Text style={{ color: 'black', fontWeight: '400', marginTop: 5, }}>₹ {item.price}</Text>
        <Image style={{ height: 100, width: 100, alignSelf: 'flex-end', borderRadius: 50, marginTop: 10, }} source={{
          uri: item.productImage
        }} />
        </TouchableOpacity>
      </View>
    )
  }

  return (
   
    <SafeAreaView style={{ flex: 1, backgroundColor: '#ffffff' }}>
       <StatusBar backgroundColor={'#ffffff'} barStyle={'dark-content'} hidden={false} translucent={false}  animated={true}/>
      <View style={{ marginHorizontal: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
        <TouchableOpacity style={{}} onPress={() =>  navigation.goBack()}>
          <Ionicons style={{ backgroundColor: 'rgba(238, 223, 230, 0.35)', padding: 15, borderRadius: 10, height: 50, width: 50, }} name={'chevron-back'} size={20} color={'black'} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => refreshHandler()}>
          <Ionicons style={{ padding: 15, borderRadius: 10, height: 50, width: 50, }} name={'refresh'} size={20} color={'black'} />
        </TouchableOpacity>
      </View>

      <View style={{ marginTop: 32, marginBottom: 15, }}>
        <Text style={{ fontWeight: 'bold', fontSize: 30, color: '#000000', marginHorizontal: 20 }}>Products</Text>
      </View>

      <View style={{ marginHorizontal: 20, flexDirection: 'row', alignItems: 'center', backgroundColor: 'rgba(238, 223, 230, 0.35)', borderRadius: 10, paddingVertical: 7, }}>
        <Ionicons style={{ marginHorizontal: 10, }} name={'search'} size={20} color={'black'} />
        <TextInput style={styles.Searchinput} placeholder="search" placeholderTextColor={'#666666'} />
      </View>


      {/* Itemsssss */}

        {
          product.isLoading === true ? 
           <View >
             <ActivityIndicator size="large" color="#0000000" />
           </View>
           :
             <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', marginTop: 20, flexWrap: 'wrap', width: '100%', marginHorizontal: 20, }}>
           <FlatList
          numColumns={'2'}
          data={product.product}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
        }
        

     
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({

});
