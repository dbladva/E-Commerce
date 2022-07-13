import { Image, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { RotateInUpLeft } from 'react-native-reanimated'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { productDetails } from '../../redux/action/product.action'
import AntDesign from 'react-native-vector-icons/AntDesign';
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useState } from 'react'

const Detail = ({ route, navigation }) => {
  const { id } = route.params;


  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(productDetails(id))
  }, [])

  const product = useSelector(state => state.product)

  const [favorite,setFavorite] = useState(0)

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainView}>
        <TouchableOpacity style={styles.backArrow} onPress={() => navigation.navigate('Home')}>
          <AntDesign size={30} color='#000000' name='arrowleft' />
        </TouchableOpacity>
        <View style={styles.imageBox}>
          <Image style={styles.itemImage} source={{
              uri: product.product.productImage}} />
        </View>

        <View style={styles.itemName}>
          <Text style={styles.nameText}>{product.product.name}</Text>
        </View>


        <View style={styles.description}>
          <View style={styles.ItemDescription}>
            <Text style={styles.descriptionText}>Desription</Text>
            <AntDesign size={30} color='#000000' name='minus' />
          </View>
          <Text style={styles.descriptionData}>
           {product.product.details}
          </Text>
        </View>

        <View style={styles.bottomBar}>
          <View style={styles.priceView}>
            <Text style={styles.priceTitle}>
              Price
            </Text>
            <Text style={styles.priceValue}>
              ${product.product.price}
            </Text>
          </View>

{
  favorite === 0 ? 
  <TouchableOpacity style={styles.addToFavorite} onPress={() => setFavorite(1)}>
  <AntDesign size={15} color='#656565' name='heart' />
</TouchableOpacity>
: 
<TouchableOpacity style={styles.addToFavorite} onPress={() => setFavorite(0)}>
<AntDesign size={15} color='red' name='heart' />
</TouchableOpacity>
}
          

          <View style={styles.cartBtn}>
            <TouchableOpacity>
              <Text style={styles.cartAddBtnText}>ADD TO CART</Text>
            </TouchableOpacity>
          </View>
        </View>

      </View>
      <StatusBar backgroundColor={'#DBDBDB'} barStyle={'dark-content'} />
    </SafeAreaView>
  )
}

export default Detail

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DBDBDB',
  },
  mainView: {
    flex: 1,
    marginHorizontal: 16,

  },
  backArrow: {
    marginTop: 14,
  },
  imageBox: {
    marginTop: 30,
    // marginHorizontal: 25,
    alignSelf: 'center',
    height: 300,
    width: 250,
    elevation: 6,
    backgroundColor: '#4c4c4c',
    borderRadius: 10,
  },
  itemImage: {
    alignSelf: 'center',
    height: 300,
    borderRadius: 10,
    width: 250
  },
  itemName: {
    marginTop: 30,
  },
  nameText: {
    textTransform: 'uppercase',
    fontSize: 25,
    fontWeight: 'bold',
    color: '#000000'
  },
  description: {
    marginTop: 20,
  },
  ItemDescription: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  descriptionText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000'
  },
  descriptionData: {
    lineHeight: 25,
    fontWeight: '500',
    color: '#rgba(0, 0, 0, 0.41)'
  },
  bottomBar: {
    flexDirection: 'row',
    borderTopColor: '#rgba(185, 195, 208, 0.60)',
    borderTopWidth: 1,
    position: 'absolute',
    bottom: 0,
    height: 80,
    width: '100%',
    // backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center'

  },
  priceView: {
    position: 'absolute',
    left: 0
  },
  priceTitle: {
    color: '#rgba(0, 0, 0, 0.41)',
    fontSize: 18,
    fontWeight: '600',
  },
  priceValue: {
    color: '#000000',
    fontSize: 22,
    fontWeight: '600'
  },
  addToFavorite: {
    justifyContent: 'center',
    height: 50,
    width: 50,
    borderRadius: 100,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    elevation: 8,
    shadowColor: '#000000'
  },
  cartBtn: {
    position: 'absolute',
    right: 0,
    // height: 50,
    // width: 120,
    backgroundColor: '#rgba(25, 24, 24, 0.88)',
    borderRadius: 100,
  },
  cartAddBtnText: {
    fontWeight: '600',
    padding: 16,
    fontSize: 18,
    color: '#ffffff',
  }

})