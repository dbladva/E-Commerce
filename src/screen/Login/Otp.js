import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    Image,
    TextInput,
    TouchableOpacity,
  } from 'react-native';
  import React, { useState } from 'react';
  import AntDesign from 'react-native-vector-icons/AntDesign';
  import Ionicons from 'react-native-vector-icons/Ionicons';
  import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
  import { useDispatch, useSelector } from 'react-redux';
  import { login } from '../../redux/action/userAction';
  import { loginWithPhone, signinUserEmail } from '../../redux/action/auth.action';
  import {OTP} from 'react-native-otp-form';

  
  const Otp = ({ navigation }) => {
    const [email, setEmail] = useState('');
  
    const dispatch = useDispatch();
    const user = useSelector(state => state.users);

    const loginHandler = () => {
      dispatch(loginWithPhone(email))
    }
  
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
    
          <View style={styles.ImageView}>
            <Image
              style={styles.LoginLogo}
              source={require('../../images/Login.png')}
            />
          </View>
  
          <View>
            <Text style={styles.LoginTitle}>OTP</Text>
          </View>
          <View style={styles.InputView}>
          <OTP
        codeCount={4}
        containerStyle={{marginTop: 0}}
        otpStyles={{backgroundColor: '#eee'}}
        accessibilityLiveRegion={'polite'}
    />
          </View>

          <View style={{ alignItems: 'center', margin: 20 }}>
            <TouchableOpacity style={styles.ContinueBtn} onPress={() => loginHandler()}>
              <Text style={styles.ContinueText}>Verify otp</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.Login}>
            <Text style={{ textAlign: 'center', }}>You don't have an account ?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
              <Text style={styles.Loginbtn}>Sign up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  };
  
  export default Otp;
  
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
      textAlign: 'center'
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
      justifyContent: 'center',
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
  