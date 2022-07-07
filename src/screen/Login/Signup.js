import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
  StatusBar
} from 'react-native';
import React, { useEffect, useState } from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useDispatch,useSelector } from 'react-redux';
import { userAction } from '../../redux/action/userAction';
import auth from '@react-native-firebase/auth';
import { createUserWithEmail } from '../../redux/action/auth.action';


const Signup = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [show, setShow] = useState(true)


  const dispatch = useDispatch();
const auth = useSelector(state => state.auth)

  const userHandler = () => {

    if(!(email === '' && password === '' && name ===  '' && phone === '')){

    let data = {
      name,
      email,
      password,  
      phone,
    }
    dispatch(createUserWithEmail(data))
    setName('')
    setEmail('')
    setPassword('')
    setPhone('')
  }else{
    alert('please Enter All details...')
  }
  }


  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
      <View style={styles.container}>
        {/* <View style={{ marginLeft: 20, marginTop: 10, }}>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <MaterialIcons
              name={'menu'}
              size={25}
              color={'black'}
            />
          </TouchableOpacity>
        </View> */}
        <View style={styles.ImageView}>
          <Image
            style={styles.LoginLogo}
            source={require('../../images/Login.png')}
          />
        </View>

        <View>
          <Text style={styles.LoginTitle}>Sign Up</Text>
        </View>
        <View style={styles.InputView}>
          <Ionicons name={'at-circle-outline'} size={25} color={'black'} />
          <TextInput style={styles.Searchinput} value={email} placeholder="Email" keyboardType='default' onChangeText={(text) => setEmail(text)} />
        </View>
        <View style={styles.InputView}>
          <MaterialIcons
            name={'drive-file-rename-outline'}
            size={25}
            color={'black'}
          />
          <TextInput style={styles.Searchinput} value={name} placeholder="Full Name" onChangeText={(text) => setName(text)} />
        </View>
        <View style={styles.InputView}>
          <Ionicons name={'call-outline'} size={25} color={'black'} />
          <TextInput style={styles.Searchinput} value={phone} placeholder="Mobile" keyboardType='phone-pad' maxLength={10} onChangeText={(text) => setPhone(text)} />
        </View>

        <View style={styles.InputView}>
          <MaterialIcons
            name={'lock'}
            size={25}
            color={'black'}
          />
          <TextInput style={styles.Searchinput} placeholder="Password" value={password} secureTextEntry={show ? true : false} onChangeText={(text) => setPassword(text)} />
          <TouchableOpacity style={{ right: 30, }}  onPress={() => setShow(!show)}>
            <Ionicons
              name={show ? 'eye-off' : 'eye'}
              size={25}
              color={'black'}
            />
          </TouchableOpacity>

        </View>

        <View style={{ alignItems: 'center', margin: 20 }}>
          <TouchableOpacity style={styles.ContinueBtn} onPress={userHandler}>
            <Text style={styles.ContinueText}>{auth.isLoading === true ? <ActivityIndicator size="small" color="#0000ff" /> : 'Continue'}</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.Login}>
          <Text style={{ textAlign: 'center', }}>Joined Us before?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.Loginbtn}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
      </ScrollView>
      <StatusBar backgroundColor={'#dbffff'} barStyle={'dark-content'}/>
    </SafeAreaView>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dbffff',
    // backgroundColor: 'white',
    justifyContent: 'space-evenly',
  },
  ImageView: {},
  LoginLogo: {
    height: 300,
    width: '100%',
  },
  LoginTitle: {
    margin: 20,
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
  },
  Searchinput: {
    marginTop: 10,
    paddingLeft: 10,
    paddingBottom: 15,
    color: 'black',
    width: '90%',
    height: 40,
    borderBottomWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
  },
  InputView: {
    marginLeft: 30,
    marginRight: 30,
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  ContinueText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#000000',
  },
  ContinueBtn: {
    padding: 7,
    backgroundColor: '#d0c2e8',
    width: '90%',
    alignItems: 'center',
    borderRadius: 10,
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
});
