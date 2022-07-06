import { StyleSheet, Text, View, Pressable, Image, Modal, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { useState, useEffect } from 'react'
import { DrawerContent, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useDispatch, useSelector } from 'react-redux'
import { signoutEmail } from './src/redux/action/auth.action'
import AsyncStorage from '@react-native-community/async-storage';
import ImagePicker from 'react-native-image-crop-picker';
import storage from '@react-native-firebase/storage';


const CustomDrawer = (props) => {
  const dispatch = useDispatch()
  const auth = useSelector(state => state.auth)
  const LogoutHandler = () => {
    dispatch(signoutEmail())
  }

  const [modalVisible, setModalVisible] = useState(false);
  const [image, setImage] = useState('https://cdn-icons-png.flaticon.com/512/1053/1053244.png?w=360');

  const GallaryHandler = async () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true
    }).then(async image => {
      let a = image.path.split("/")
      let fileName = a[a.length - 1];

      // dispatch(uploadProfilePic(image, uid))
      const reference = storage().ref('/user/' + fileName);
      
      await reference.putFile(image.path);

      const url = await storage().ref('/user/'+ fileName).getDownloadURL();

      // update

      console.log(url);

      setImage(image.path)
      setModalVisible(false)
    });
  }

  const cameraHandler = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      setImage(image.path)
      setModalVisible(false)
    });
  }

  const [data, setData] = useState('')

  useEffect(
    () => {
      getData();
    }, [])

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('user');
      if (value !== null) {
        setData(value)
      }
    } catch (e) {
      console.log(e);
    }
  }

  console.log(data);
  return (
    <View style={{ flex: 1, backgroundColor: '#dbffff' }}>
      <DrawerContentScrollView {...props} >
        <View style={{ margin: 10, flexDirection: 'row', alignItems: 'center', marginBottom: 30, marginTop: 30 }}>
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <Image style={{ height: 80, width: 80, borderRadius: 50 }} source={{
              uri: image
            }} />
          </TouchableOpacity>
          <View style={{ marginLeft: 10, }}>
            <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'black', }}>Dharmesh</Text>
            <Text style={{ fontWeight: 'bold', fontSize: 15, color: 'black', }}>{data}</Text>
          </View>
        </View>
        <DrawerItemList {...props} />

        <View>

        </View>

      </DrawerContentScrollView>
      <View style={styles.LogoutView}>
        <TouchableOpacity style={styles.btn} onPress={() => LogoutHandler()}>
          <MaterialIcons
            name="logout"
            size={25}
            // color={'#d0c2e8'}
            color='red'
          />
          <Text style={styles.LogoutText}>{auth.isLoading === true ? <ActivityIndicator size="small" color="#0000ff" /> : 'Logout'}</Text>
        </TouchableOpacity>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }} >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              onPress={() => cameraHandler()}
            >
              <Text style={styles.textStyle}>Take to camera</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              onPress={() => GallaryHandler()}
            >
              <Text style={styles.textStyle}>Select Image from Gallary</Text>
            </TouchableOpacity>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={[styles.textStyle, styles.red]}>Cancel</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

    </View>
  )
}

export default CustomDrawer

const styles = StyleSheet.create({
  LogoutView: {
    bottom: '10%',
    left: '10%',
    position: 'absolute',
    // marginHorizontal: 20,
    // marginVertical: 10,
    // backgroundColor: 'blue'

  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  LogoutText: {
    color: 'red',
    marginLeft: 30,
    fontWeight: '600'
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
    margin: 7,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  red: {
    color: 'red',
  }
})