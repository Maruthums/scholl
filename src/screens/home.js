import React, { useState } from "react";
import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity
} from 'react-native';

import { avatar, fb, google, logo, menu, search, tw } from '../assets/index';
import Header from "../components/header";

const Home = ({ navigation }) => {

    return (
        <SafeAreaView style={{
            flex: 1
        }}>
           <Header />
            <View style={{
                flex:1,
                alignItems:'center',
                justifyContent:'center'
            }}>
                <View style={[
                    styles.btn
                ]}>
                    <TouchableOpacity 
                    onPress={()=> navigation.navigate('Staff')}>
                        <Text style={[
                            styles.text
                        ]}>
                            Staff
                            </Text>
                    </TouchableOpacity>
                </View>
                <View style={[
                    styles.btn
                ]}>
                    <TouchableOpacity onPress={()=>navigation.navigate('Course')}>
                        <Text style={[
                            styles.text
                        ]}>
                            Courses
                            </Text>
                    </TouchableOpacity>
                </View>
                <View style={[
                    styles.btn
                ]}>
                    <TouchableOpacity onPress={()=> navigation.navigate('Student')}>
                        <Text style={[
                            styles.text
                        ]}>
                            Students
                            </Text>
                    </TouchableOpacity>
                </View>
                </View>
        </SafeAreaView>)
}

const styles = StyleSheet.create({
    icon: {
        width: 30,
        height: 30,
        resizeMode: 'contain',
    },
    search: {
        width: 20,
        height: 20,
        resizeMode: 'contain',
        paddingHorizontal: 20
    },
    user: {
        width: 60,
        height: 60,
        resizeMode: 'contain',
    },
    btn:{
        backgroundColor:'#53798a',
        height:40,
        width:120,
        borderRadius:5,
        marginVertical:8,
        alignItems:'center',
        justifyContent:'center'
    },
    text:{
        color:'#fff',
        fontSize:16,
        fontWeight:'700'
    }
})

export default Home;