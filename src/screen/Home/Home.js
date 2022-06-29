import { ActivityIndicator, StyleSheet, SafeAreaView, StatusBar, FlatList, Text, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import firestore from '@react-native-firebase/firestore';


const Home = ({ navigation }) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  
  return (
    <SafeAreaView style={{ flex: 1, padding: 24, justifyContent: 'center', alignItems: 'center' }}>
      <View style={{ flex: 1, padding: 24, justifyContent: 'center', alignItems: 'center' }}>
        {/* <FlatList
        data={users.docs}

        /> */}

      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
