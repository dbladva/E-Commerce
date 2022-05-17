import { ActivityIndicator,StyleSheet, SafeAreaView,FlatList, Text, View } from 'react-native';
import React,{useState,useEffect} from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useDispatch, useSelector } from 'react-redux'



const Home = ({navigation}) => {
  const Data = useDispatch()
  const count = useSelector(state => state.counter)
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  

  const getMovies = async () => {
     try {
      const response = await fetch('http://localhost:3004/MedicineData');
      const json = await response.json();
      setData(json.MedicineData);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <SafeAreaView  style={{ flex: 1, padding: 24 ,justifyContent: 'center',alignItems: 'center'}}>
         <View style={{ flex: 1, padding: 24 ,justifyContent: 'center',alignItems: 'center'}}>
      {isLoading ? <ActivityIndicator size={50}/> : (
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <Text>{item.name}, {item.price}</Text>
          )}
        />
      )}

      <View>
        <Text style={{fontWeight: 'bold'}}>Count :{count.count1}</Text>
      </View>
    </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
