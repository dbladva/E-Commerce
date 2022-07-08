import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  StatusBar,
} from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
  

const Welcome = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={'#dbffff'} barStyle={'dark-content'}/>
      <View style={{ marginLeft: 20, marginTop: 10, }}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <MaterialIcons
            name={'menu'}
            size={25}
            color={'black'}
          />
        </TouchableOpacity>

      </View>
      <View style={styles.container}>
       
        <View style={styles.AppLogo}>
          <Image style={styles.imagelogo} source={require('../../images/e.png')} />
        </View>

      </View>
    </SafeAreaView>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dbffff',
  },
  imagelogo: {
    height: 200,
    width: 200
  },
  AppLogo: {
    flex: 1,
    justifyContent: 'center', alignItems: 'center',
  }
});
