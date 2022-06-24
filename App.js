/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import {
   SafeAreaView,
   ScrollView,
   StyleSheet,
   Text,
   useColorScheme,
   View,
 } from 'react-native';
 import MyStack from './src/route/stackNav';
 import {
   NavigationContainer,
 } from '@react-navigation/native';
 import 'react-native-gesture-handler';
 
 const App =() => {
 
   return (
     <NavigationContainer>
     <MyStack />
   </NavigationContainer>
   );
 };
 
 
 export default App;
 