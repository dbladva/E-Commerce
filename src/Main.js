import { Button, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import Welcome from './screen/Welcome/Welcome';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screen/Home/Home';
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Signup from './screen/Login/Signup';
import Login from './screen/Login/Login';
import Product from './screen/Prodduct/Product';
import { Provider, useDispatch, useSelector } from 'react-redux';
import Counter from './screen/Counter';
import { configStore } from './src/redux/store';
import CustomDrawer from '../CustomDrawer';
import { PersistGate } from 'redux-persist/integration/react';
import SplashScreen from 'react-native-splash-screen'
import AsyncStorage from '@react-native-community/async-storage';
import ForgotEmail from './screen/Forgot Password/Forgot.Email'
import Logout from './screen/Login/Logout';
import { Loading, signoutEmail } from './redux/action/auth.action';
import SigninWithPhone from './screen/Login/SignInWithPhone';
import Otp from './screen/Login/Otp';
// import Promises from './screen/promises';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const HomeScreenHandler = () => {
    // const [uid, setUid] = useState('')
    // const getData = async () => {
    //     try {
    //         const value = await AsyncStorage.getItem('user')
    //         if (value !== null) {
    //             setUid(value)
    //         }
    //     } catch (e) {
    //         console.log(e);
    //     }
    // }
    // getData()
    // console.log('uidddddddd', uid);
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
                        return <AntDesign name={'star'} size={22} color={focused ? '#7cc' : 'black'} />;
                    } else if (route.name === 'Home') {
                        return <Entypo name={'home'} size={20} color={focused ? '#7cc' : 'black'} />;
                    } else if (route.name === 'Sign') {
                        return <AntDesign name={'login'} size={20} color={focused ? '#7cc' : 'black'} />;
                    } else if (route.name === 'Forgot') {
                        return <AntDesign name={'login'} size={20} color={focused ? '#7cc' : 'black'} />;
                    }

                },
                tabBarActiveTintColor: 'red',

                tabBarInactiveTintColor: 'blue',
                headerShown: false,
                // tabBarActiveBackgroundColor: '#d0c2e8',
                // tabBarInactiveBackgroundColor: '#d0c2e8',
            })}>

            <Tab.Screen name="Welc" component={Welcome} />
            <Tab.Screen name="Home" component={Home} />
            {/* <Tab.Screen name="Sign" component={Login} /> */}
            {/* <Tab.Screen name="Forgot" component={ForgotEmail} /> */}
        </Tab.Navigator>
    );
};

export default function Main() {
    const [uid, setUid] = useState('')
    useEffect(
        () => {
            getData();
        },[])

    const getData = async () => {
        try {
            const value = await AsyncStorage.getItem('user');
            if (value !== null) {
                setUid(value)
            }
        } catch (e) {
            console.log(e);
        }

    }


    let auth = useSelector(state => state.auth);
    console.log("aaaaaaaaaaaaa", auth.user + '  uidddddd',uid); 
    let dispatch = useDispatch()
    return (
        
         auth.user !== null || uid  ?
            <NavigationContainer>
                <Drawer.Navigator
                    drawerContent={props => <CustomDrawer {...props} />}
                    screenOptions={{ headerShown: false }}
                    initialRouteName="Home">
                    <Drawer.Screen
                        name="Homee"
                        options={{
                            drawerIcon: ({ focused, size }) => (
                                <Ionicons
                                    name="home"
                                    size={size}
                                    color={focused ? '#7cc' : '#d0c2e8'}
                                />
                            ),
                        }}
                        component={HomeScreenHandler}
                    />
                    <Drawer.Screen
                        name="Product"
                        options={{
                            title: 'Product',
                            drawerIcon: ({ focused, size }) => (
                                <MaterialIcons
                                    name="local-grocery-store"
                                    size={size}
                                    color={focused ? '#7cc' : '#d0c2e8'}
                                />
                            ),
                        }}
                        component={Product}
                    />
                    <Drawer.Screen
                        name="Welcome"
                        options={{
                            title: 'Welcome',
                            drawerIcon: ({ focused, size }) => (
                                <MaterialIcons
                                    name="star-border"
                                    size={size}
                                    color={focused ? '#7cc' : '#d0c2e8'}
                                />
                            ),
                        }}
                        component={Welcome}
                    />
                    <Drawer.Screen
                        name="counter"
                        options={{
                            title: 'counter',
                            drawerIcon: ({ focused, size }) => (
                                <MaterialIcons
                                    name="star-border"
                                    size={size}
                                    color={focused ? '#7cc' : '#d0c2e8'}
                                    
                                />
                            ),
                        }}
                        component={Counter}
                    />
                 
                </Drawer.Navigator>
            </NavigationContainer>
            :
            <NavigationContainer>
                <Stack.Navigator screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="Login" component={Login} />
                    <Stack.Screen name="Signup" component={Signup} />
                    <Stack.Screen name="ForgotEmail" component={ForgotEmail} />
                    <Stack.Screen name="SigninWithPhone" component={SigninWithPhone} />
                    <Stack.Screen name="Otp" component={Otp} />
                </Stack.Navigator>
            </NavigationContainer>
    )
}