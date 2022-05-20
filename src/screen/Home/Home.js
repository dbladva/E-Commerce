import { ActivityIndicator,StyleSheet, SafeAreaView,FlatList, Text, View } from 'react-native';
import React,{useState,useEffect} from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useDispatch, useSelector } from 'react-redux'

const Home = ({navigation}) => {
  const Data = useDispatch()



  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    const resp = await fetch("http://192.168.43.200:8000/products");
    const data = await resp.json();
    setData(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);
  const renderItem = ({ item }) => {
    return (
      <Text>
        {item.name} , {item.location}, {item.price} , 
      </Text>
    );
  };

 
  return (
    <SafeAreaView  style={{ flex: 1, padding: 24 ,justifyContent: 'center',alignItems: 'center'}}>
         <View style={{ flex: 1, padding: 24 ,justifyContent: 'center',alignItems: 'center'}}>
{loading && <ActivityIndicator size="large" color="#00ff00" />}
      <View>
        <Text>Hellllo</Text>
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