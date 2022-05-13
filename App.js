import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Welcome from './src/screen/Welcome/Welcome'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screen/Home/Home';
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Entypo from 'react-native-vector-icons/Entypo'
import Signup from './src/screen/Login/Signup';
import Login from './src/screen/Login/Login';
import Product from './src/screen/Prodduct/Product';
import { store } from './src/redux/store';
import { Provider } from 'react-redux';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const HomeScreenHandler = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? 'ios-information-circle'
              : 'ios-information-circle-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'ios-list-box' : 'ios-list';
          }


          if (route.name === 'Welc') {
            return <AntDesign name={'star'} size={22} color={'black'} />
          } else if (route.name === 'home') {
            return <Entypo name={'home'} size={20} color={'black'} />
          } else if (route.name === 'Sign') {
            return <AntDesign name={'login'} size={20} color={'black'} />
          }

          // You can return any component that you like here!
          // return <AntDesign name={'home'} size={20} color={'blue'} />;
        },
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'red',
        headerShown: false,
        tabBarActiveBackgroundColor: '#d0c2e8',
        tabBarInactiveBackgroundColor: '#d0c2e8',


      })}
    >
      <Tab.Screen name="Welc" component={Welcome} />
      <Tab.Screen name="home" component={Home} />
      <Tab.Screen name="Sign" component={Login} />
    </Tab.Navigator>

  )
}


const App = () => {
  return (
    <Provider store={store}>
    <NavigationContainer >
      <Drawer.Navigator screenOptions={{ headerShown: false, }} initialRouteName="Home">
        <Drawer.Screen name="Home" options={{
          title: 'Home',
          drawerIcon: ({ focused, size }) => (
            <Ionicons
              name="home"
              size={size}
              color={focused ? '#7cc' : '#ccc'}
            />
          ),
        }} component={HomeScreenHandler} />
        <Drawer.Screen name="Product" options={{
           title: 'Product',
           drawerIcon: ({focused, size}) => (
              <MaterialIcons
                 name="local-grocery-store"
                 size={size}
                 color={focused ? '#7cc' : '#ccc'}
              />
           ),
        }} component={Product} />
        <Drawer.Screen name="Welcome" options={{
           title: 'Welcome',
           drawerIcon: ({focused, size}) => (
              <MaterialIcons
                 name="star-border"
                 size={size}
                 color={focused ? '#7cc' : '#ccc'}
              />
           ),
        }} component={Welcome} />
        <Drawer.Screen name="Login" options={{
           title: 'Login',
           drawerIcon: ({focused, size}) => (
              <MaterialIcons
                 name="login"
                 size={size}
                 color={focused ? '#7cc' : '#ccc'}
              />
           ),
        }} component={Login} />

        <Drawer.Screen name="Signup" options={{
           title: 'Sign up',
           drawerIcon: ({focused, size}) => (
              <MaterialIcons
                 name="logout"
                 size={size}
                 color={focused ? '#7cc' : '#ccc'}
              />
           ),
        }} component={Signup} />
      </Drawer.Navigator>
    </NavigationContainer>
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({})