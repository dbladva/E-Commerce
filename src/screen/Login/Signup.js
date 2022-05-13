import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Signup = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <View style={{marginLeft: 20, marginTop: 10,}}>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <MaterialIcons
            name={'menu'}
            size={25}
            color={'black'}
          />
          </TouchableOpacity>
        </View>
        <View style={styles.ImageView}>
          <Image
            style={styles.LoginLogo}
            source={require('../../images/Login.png')}
          />
        </View>

        <View>
          <Text style={styles.LoginTitle}> Sign Up</Text>
        </View>
        <View style={styles.InputView}>
          <Ionicons name={'at-circle-outline'} size={25} color={'black'} />
          <TextInput style={styles.Searchinput} placeholder="Email" />
        </View>
        <View style={styles.InputView}>
          <MaterialIcons
            name={'drive-file-rename-outline'}
            size={25}
            color={'black'}
          />
          <TextInput style={styles.Searchinput} placeholder="Full Name" />
        </View>
        <View style={styles.InputView}>
          <Ionicons name={'call-outline'} size={25} color={'black'} />
          <TextInput style={styles.Searchinput} placeholder="Mobile" />
        </View>

        <View style={{alignItems: 'center', margin: 20}}>
          <TouchableOpacity style={styles.ContinueBtn}>
            <Text style={styles.ContinueText}>Continue</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.Login}>
          <Text style={{textAlign: 'center',}}>Joined Us before?</Text>
          <TouchableOpacity>
          <Text style={styles.Loginbtn}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
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
    color: '#ffffff',
  },
  ContinueBtn: {
    padding: 7,
    backgroundColor: '#d0c2e8',
    width: '90%',
    alignItems: 'center',
    borderRadius: 10,
  },
  Loginbtn:{
    textAlign: 'center',
    color: 'blue',
    fontWeight: '500',
    marginLeft: 5,
  },
  Login:{
flexDirection: 'row',
textAlign: 'center',
justifyContent: 'center',
margin: 10,
  },
});
