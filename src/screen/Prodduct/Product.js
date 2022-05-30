import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ActivityIndicator,
  TextInput,
  Alert,
  FlatList
} from 'react-native';
import React, { useEffect, useState } from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteProduct,
  fetchData,
  fetchProduct,
  insertProduct,
  loadingProduct,
  updateProduct,
} from '../../redux/action/product.action';

const Product = ({ navigation }) => {
  const [name, setName] = useState('');
  const [detais, setDetails] = useState('');
  const [Price, setPrice] = useState('');
  const [location, setLocation] = useState('');
  const [submit, setSubmit] = useState(0)
  const [id, setId] = useState(0)

  useEffect(() => {
    dispatch(fetchProduct());
  }, []);

  const product = useSelector(state => state.product);
  const dispatch = useDispatch();

  const SubmitHandler = () => {
    if (!(name == '' || detais == '' || Price == '' || location == '')) {
      let pData = {
        name,
        detais,
        Price,
        location,
      };
      // console.log(pData);
      dispatch(insertProduct(pData));
    } else {
      alert('Fillup All Details...');
    }

    
  };

  const handleEdit = (id) => {
    let uData = product.product.filter((p) => p.id === id)
    setName(uData[0].name)
    setDetails(uData[0].detais)
    setLocation(uData[0].location)
    setPrice(uData[0].Price)
    setSubmit(1)
    setId(id)
  }

  const updateHandler = () => {
    let Data = {
      id: id,
      name,
      detais,
      Price,
      location,
    }
    dispatch(updateProduct(Data))
  }

  const renderItem = ({ item }) => {
    return (
      <View
        style={{
          backgroundColor: '#d0c2e8',
          margin: 5,
          padding: 5,
          width: '46%',
          borderRadius: 10,
          justifyContent: 'space-around',
          elevation: 5,
          shadowColor: '#52006A',
        }}>
        <View style={{ flexDirection: 'row', alignSelf: 'flex-end' }}>
          <TouchableOpacity style={styles.OptionsIcon} onPress={() => handleEdit(item.id)}>
            <MaterialIcons name={'edit'} size={20} color={'blue'} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.OptionsIcon} onPress={() => handleDelete(item.id)}>
            <MaterialIcons name={'delete'} size={20} color={'red'} />
          </TouchableOpacity>
        </View>

        <Text style={styles.locationView}>
          <Ionicons name={'location'} size={15} color={'black'} />
          <Text style={styles.DataText}>{item.location}</Text>
        </Text>

        <Text style={styles.ProductText}>{item.name}</Text>
        <Text style={styles.ProductText}>
          <Text style={styles.DataText}>{item.detais}</Text>
        </Text>

        <Text style={styles.PriceView}>
          ₹ <Text style={styles.PriceText}>{item.Price}</Text>
        </Text>
      </View>
    );

  };

  const handleDelete = (id) => {
    Alert.alert(
      "Delete",
      "Are you sure you want to delete this Item",
      [

        {
          text: "Cancel",
          // style: "cancel"
        },
        { text: "OK", onPress: () => dispatch(deleteProduct(id)) }
      ]
    );
  }

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

        <View
          style={{
            backgroundColor: '#d0c2e8',
            marginLeft: 20,
            marginRight: 20,
            borderRadius: 10,
            marginTop: 10,
          }}>
          <View style={styles.ProductData}>
            <View style={styles.productNameView}>
              <Text style={styles.ProductText}>Name</Text>
            </View>
            <View style={styles.ProductTextInput}>
              <TextInput
                value={name}
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
                value={detais}
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
                value={location}
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
                value={Price}
                style={styles.Searchinput}
                placeholder="₹ Prize"
                onChangeText={text => setPrice(text)}
                keyboardType={'number-pad'}
              />
            </View>
          </View>
        </View>

        {
          submit ?
            <View style={{ alignItems: 'center', marginTop: 20, marginBottom: 10 }}>
              <TouchableOpacity
                style={styles.ContinueBtn}
                onPress={() => updateHandler()}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Text style={styles.ContinueText}>Update</Text>
                  <AntDesign name={'arrowright'} size={20} color={'black'} />
                </View>
              </TouchableOpacity>
            </View>
            :
            <View style={{ alignItems: 'center', marginTop: 20, marginBottom: 10 }}>
              <TouchableOpacity
                style={styles.ContinueBtn}
                onPress={() => SubmitHandler()}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Text style={styles.ContinueText}>Submit</Text>
                  <AntDesign name={'arrowright'} size={20} color={'black'} />
                </View>
              </TouchableOpacity>
            </View>
        }



        <View style={{ margin: 10, padding: 10, flex: 1 }}>
          <FlatList
            style={{ borderRadius: 10 }}
            data={product.product}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            columnWrapperStyle={{ justifyContent: 'space-between' }}
            numColumns="2"
            sp
          />
        </View>


      </View>

    </SafeAreaView>
  );
};

export default Product;

const styles = StyleSheet.create({
  OptionsIcon: {
    backgroundColor: '#dbffff',
    flexDirection: 'row',
    alignSelf: 'flex-end',
    borderRadius: 50,
    padding: 4,
    margin: 3,
  },
  DataText: {
    color: 'gray',
    fontSize: 12,
    fontWeight: '600',
  },
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
    padding: 3,
    borderRadius: 10,
    backgroundColor: '#d0c2e8',
    marginLeft: 16,
    marginTop: 4,
    marginBottom: 2,
    marginRight: 16,
  },
  ProductTextInput: {},
  ProductText: {
    marginLeft: 3,
    fontWeight: 'bold',
    fontSize: 15,
    color: 'black',
    margin: 5,
  },
  Searchinput: {
    // marginTop: 5,
    paddingLeft: 5,
    paddingBottom: 5,
    fontSize: 15,
    color: 'black',
    width: '90%',
    height: 40,
    borderBottomWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
  },
  ContinueBtn: {
    elevation: 10,
    shadowColor: '#52006A',
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
  PriceText: {
    color: 'black',
    fontSize: 20,
    fontWeight: '400',
  },
  PriceView: {
    marginLeft: 3,
    fontWeight: '500',
    fontSize: 12,
    color: 'red',
    margin: 5,
  },
  locationView: {},
});
