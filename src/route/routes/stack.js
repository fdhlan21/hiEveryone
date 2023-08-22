// In App.js in a new project

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';

import SplashScreen from '../../pages/Splash/splash';
import Login from '../../pages/login/login';
import RegisterScreen from '../../pages/register/register';


const Stack = createNativeStackNavigator();

function MyStack() {
  return (
   
      <Stack.Navigator initialRouteName='SplashScreen'>
        <Stack.Screen name="SplashScreen" component={SplashScreen} options={{headerShown:false,}} />
        <Stack.Screen name="LoginScreen" component={Login} options={{headerShown:false,}} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} options={{headerShown:false,}} />
      </Stack.Navigator>
    
  );
}

export default MyStack;