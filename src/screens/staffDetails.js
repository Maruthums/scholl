import React, { useState,useEffect } from "react";
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
import { DataTable } from 'react-native-paper';
import axios from 'axios';

const StaffDetails = ({ navigation }) => {

    const [staffName,setStaffName] = useState(null);
    const [qualification,setQualification] = useState(null);
    const [email,setEmail] = useState(null);
    const [phone,setPhone] = useState(null);

   const data =()=>{ 
    axios.post('/user', {
        staff_name: staffName,
        qualification: qualification,
        phone:phone,
        email:email
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
}


    return (
        <SafeAreaView style={{
            flex: 1
        }}>
            <Header />
            <ScrollView>
                <View style={{
                    marginHorizontal: 20,
                    marginVertical: 20
                }}>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <View >
                            <Text style={{
                                textAlign: 'center',
                                color: '#53798a',
                                fontSize: 18,
                                fontWeight: '700'
                            }}>
                                Add Staff Details
                            </Text>
                        </View>
                    </View>
                    <View>
                        <View>
                            <Text style={[styles.label]}>
                                Staff Name
                            </Text>
                        </View>
                        <View>
                            <TextInput 
                            onChangeText={(e)=>setStaffName(e)}
                            style={[
                               { shadowColor: "#000000",
                               shadowOffset: {
                                 width: 0,
                                 height: 2.7,
                               },
                               shadowOpacity:  0.16,
                               shadowRadius: 1.51,
                               elevation: 2,
                               fontSize:16,}
                              ]}/>
                        </View>
                    </View>

                    <View>
                        <View>
                            <Text style={[styles.label]}>
                                Qualification
                            </Text>
                        </View>
                        <View>
                            <TextInput 
                            onChangeText={(e)=>setQualification(e)}
                            style={[
                               { shadowColor: "#000000",
                               shadowOffset: {
                                 width: 0,
                                 height: 2.7,
                               },
                               shadowOpacity:  0.16,
                               shadowRadius: 1.51,
                               elevation: 2,fontSize:16,
                            paddingVertical:20
                        }
                              ]}/>
                        </View>
                    </View>
                    <View>
                        <View>
                            <Text style={[styles.label]}>
                               Email
                            </Text>
                        </View>
                        <View>
                            <TextInput 
                            onChangeText={(e)=>setEmail(e)}
                            style={[
                               { shadowColor: "#000000",
                               shadowOffset: {
                                 width: 0,
                                 height: 2.7,
                               },
                               shadowOpacity:  0.16,
                               shadowRadius: 1.51,
                               elevation: 2,fontSize:16,
                               paddingVertical:20}
                              ]}/>
                        </View>
                    </View>
                    <View>
                        <View>
                            <Text style={[styles.label]}>
                              Phone Number
                            </Text>
                        </View>
                        <View>
                            <TextInput 
                            onChangeText={(e)=>setPhone(e)}
                            keyboardType='number-pad'
                            style={[
                               { shadowColor: "#000000",
                               shadowOffset: {
                                 width: 0,
                                 height: 2.7,
                               },
                               shadowOpacity:  0.16,
                               shadowRadius: 1.51,
                               elevation: 2,
                               fontSize:16,
                               paddingVertical:20}
                              ]}/>
                        </View>
                    </View>
                </View>
                <View style={{
                    flexDirection:'row',
                    justifyContent:'space-evenly',
                    borderRadius:8,
                }}>
                    <View style={{
                        backgroundColor:'#53798a',
                        borderRadius:5,
                    }}>
                        <TouchableOpacity>
                            <Text  style={[
                                {
                                    color:'#fff',
                                    paddingHorizontal:20,
                                    paddingVertical:6,
                                    fontSize:16,
                                    fontWeight:'500'
                                }
                            ]}>
                                Submit
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{
                        backgroundColor:'#fff',
                        borderRadius:5,
                    }}>
                        <TouchableOpacity>
                            <Text style={[
                                {
                                    color:'#53798a',
                                    paddingHorizontal:20,
                                    paddingVertical:6,
                                    fontSize:16,
                                    fontWeight:'500'
                                }
                            ]}>
                                Reset
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    label:{
        color:'#53798a',
        fontSize:16,
        fontWeight:'800',
        paddingHorizontal:10,
        paddingVertical:10
    },
    TextInput:{
       borderColor:'#53798a',
    }
})

export default StaffDetails;