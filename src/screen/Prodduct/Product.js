import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData, fetchProduct, insertProduct } from '../../redux/action/product.action';
import { FlatList } from 'react-native-gesture-handler';

const Product = ({ navigation }) => {
  const [name, setName] = useState('');
  const [detais, setDetails] = useState('');
  const [Price, setPrice] = useState('');
  const [location, setLocation] = useState('');


  const product = useSelector(state => state.product);
  const dispatch = useDispatch();
  const SubmitHandler = () => {
    let pData = {
      name,
      detais,
      Price,
      location
    };

    dispatch(insertProduct(pData));
    console.log(pData);
  };



  const renderItem = ({ item }) => {
    return (
      <View style={{ backgroundColor: '#d0c2e8' }}>
        <Text>{item.name} </Text>
      </View>
    )
  };

  useEffect(
    () => {
      dispatch(fetchProduct())
    },
    [])

  console.log(product);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <View
          style={{
            backgroundColor: '#d0c2e8',
            flexDirection: 'row',
            alignItems: 'center',
            borderBottomWidth: 0.5,
            borderBottomColor: 'gray',
          }}>
          <TouchableOpacity
            style={{ marginLeft: 20, marginBottom: 10, marginTop: 10 }}
            onPress={() => navigation.openDrawer()}>
            <MaterialIcons name={'menu'} size={25} color={'black'} />
          </TouchableOpacity>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 23,
              marginLeft: 30,
              fontWeight: '500',
              color: 'black',
            }}>
            Product
          </Text>
        </View>

        <View>
          <Text style={{ textAlign: 'center', color: 'red', padding: 10 }}>
            Add Your Product Detail Below{' '}
          </Text>
        </View>

        <View
          style={{
            backgroundColor: '#d0c2e8',
            marginLeft: 16,
            marginRight: 16,
            borderRadius: 10,
          }}>
          <View style={styles.ProductData}>
            <View style={styles.productNameView}>
              <Text style={styles.ProductText}>Item Name</Text>
            </View>
            <View style={styles.ProductTextInput}>
              <TextInput
                style={styles.Searchinput}
                placeholder="Product Name..."
                onChangeText={text => setName(text)}
              />
            </View>
          </View>

          <View style={styles.ProductData}>
            <View style={styles.productNameView}>
              <Text style={styles.ProductText}>Description</Text>
            </View>
            <View style={styles.ProductTextInput}>
              <TextInput
                style={styles.Searchinput}
                placeholder="Add Your product Description..."
                onChangeText={text => setDetails(text)}
              />
            </View>
          </View>

          <View style={styles.ProductData}>
            <View style={styles.productNameView}>
              <Text style={styles.ProductText}>Location</Text>
            </View>
            <View style={styles.ProductTextInput}>
              <TextInput
                style={styles.Searchinput}
                placeholder="Add Your Area Location..."
                onChangeText={text => setLocation(text)}
              />
            </View>
          </View>

          <View style={styles.ProductData}>
            <View style={styles.productNameView}>
              <Text style={styles.ProductText}>Price</Text>
            </View>
            <View style={styles.ProductTextInput}>
              <TextInput
                style={styles.Searchinput}
                placeholder="₹ Prize"
                onChangeText={text => setPrice(text)}
              />
            </View>
          </View>
        </View>

        <View style={{ alignItems: 'center', marginTop: 20, marginBottom: 10, }}>
          <TouchableOpacity
            style={styles.ContinueBtn}
            onPress={() => SubmitHandler()}>
            <View style={{ flexDirection: 'row' }}>
              <Text style={styles.ContinueText}>Submit </Text>
              <AntDesign name={'arrowright'} size={20} color={'black'} />
            </View>
          </TouchableOpacity>
        </View>
        <View style={{ margin: 10, padding: 10 }}>
          <FlatList style={{ borderRadius: 10 }}
            data={product.product}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </View>

      </View>
    </SafeAreaView>
  );
};

export default Product;

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 16,
    // color: 'black'
  },
  container: {
    flex: 1,
    backgroundColor: '#dbffff',
  },
  productNameView: {},
  ProductData: {
    padding: 5,
    borderRadius: 10,
    backgroundColor: '#d0c2e8',
    marginLeft: 16,
    marginTop: 4,
    marginBottom: 4,
    marginRight: 16,
  },
  ProductTextInput: {},
  ProductText: {
    marginLeft: 3,
    fontWeight: 'bold',
    fontSize: 20,
    color: 'black',
  },
  Searchinput: {
    marginTop: 5,
    paddingLeft: 5,
    paddingBottom: 10,
    fontSize: 18,
    color: 'black',
    width: '90%',
    height: 40,
    borderBottomWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
  },
  ContinueBtn: {
    padding: 7,
    backgroundColor: '#d0c2e8',
    width: '50%',
    alignItems: 'center',
    borderRadius: 50,
  },
  Loginbtn: {
    textAlign: 'center',
    color: 'blue',
    fontWeight: '500',
    marginLeft: 5,
  },
  Login: {
    flexDirection: 'row',
    textAlign: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  ContinueText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#000000',
  },
});
