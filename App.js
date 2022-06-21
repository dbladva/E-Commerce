import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import 'react-native-gesture-handler';
import { Provider, useSelector } from 'react-redux';
import { configStore } from './src/redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import SplashScreen from 'react-native-splash-screen'
import Main from './src/Main';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  },[])
    
  const { store, persistor } = configStore();
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Main />
      </PersistGate>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
