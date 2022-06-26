import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/login';
import Home from '../screens/home';
import Staff from '../screens/staff';
import StaffDetails from '../screens/staffDetails';
import Course from '../screens/course';
import CourseDetails from '../screens/addDepartment';
import Student from '../screens/student';

const Stack = createStackNavigator();

const MyStack =()=> {
  return (
    <Stack.Navigator
    initialRouteName='Student'
    screenOptions={{
      headerShown: false
    }
    }
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Staff" component={Staff} />
      <Stack.Screen name="StaffDetails" component={StaffDetails} />
      <Stack.Screen name="Course" component={Course} />
      <Stack.Screen name="CourseDetails" component={CourseDetails} />
      <Stack.Screen name="Student" component={Student} />
    </Stack.Navigator>
  );
}

export default MyStack;