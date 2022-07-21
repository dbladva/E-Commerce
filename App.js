import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import 'react-native-gesture-handler';
import { Provider, useSelector } from 'react-redux';
import { configStore } from './src/redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import SplashScreen from 'react-native-splash-screen'
import Main from './src/Main';
import PushNotification, {Importance} from 'react-native-push-notification';
import { StripeProvider } from '@stripe/stripe-react-native'; 
import Detail from './src/screen/Home/Detail';

const App = () => {
  
  useEffect(() => {
    SplashScreen.hide();
    PushNotification.createChannel(
      {
        channelId: "channel-id", // (required)
        channelName: "My channel", // (required)
        channelDescription: "A channel to categorise your notifications", // (optional) default: undefined.
        playSound: false, // (optional) default: true
        soundName: "default", // (optional) See `soundName` parameter of `localNotification` function
        importance: Importance.HIGH, // (optional) default: Importance.HIGH. Int value of the Android notification importance
        vibrate: true, // (optional) default: true. Creates the default vibration pattern if true.
      },
      (created) => console.log(`createChannel returned '${created}'`) // (optional) callback returns whether the channel was created, false means it already existed.
    );
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
