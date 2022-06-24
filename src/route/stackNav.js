import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/login';
import Home from '../screens/home';
import Staff from '../screens/staff';
import StaffDetails from '../screens/staffDetails';

const Stack = createStackNavigator();

const MyStack =()=> {
  return (
    <Stack.Navigator
    headerMode="none"
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Staff" component={Staff} />
      <Stack.Screen name="StaffDetails" component={StaffDetails} />
    </Stack.Navigator>
  );
}

export default MyStack;