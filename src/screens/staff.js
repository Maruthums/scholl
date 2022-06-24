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

const Staff = ({ navigation }) => {

    const [staffData,setStaffData] = useState([]);

   const data =()=>{ 
    axios.get('https://620502d5161670001741b2f7.mockapi.io/staff/staff ')
    .then(function (response) {
      console.log(response);
      setStaffData(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
}

useEffect(()=>{
    data();  
},[])

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
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}>
                        <View />
                        <View >
                            <Text style={{
                                textAlign: 'center',
                                color: '#53798a',
                                fontSize: 16,
                                fontWeight: '700'
                            }}>
                                Staff Details
                            </Text>
                        </View>
                        <View>
                            <TouchableOpacity
                            onPress={()=> navigation.navigate('StaffDetails')}
                            style={{
                                backgroundColor: '#53798a',
                                paddingHorizontal: 15,
                                paddingVertical: 5,
                                borderRadius: 5
                            }}>
                                <Text style={{
                                    textAlign: 'center',
                                    color: '#fff',
                                    fontSize: 16,
                                    fontWeight: '700'
                                }}>
                                    Add
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.mainbox}>
                        <DataTable>
                            <DataTable.Header style={styles.databeHeader}>
                                <DataTable.Title  textStyle={styles.header}>ID</DataTable.Title>
                                <DataTable.Title  textStyle={styles.header}>Staff Name</DataTable.Title>
                                <DataTable.Title  textStyle={styles.header}>Qualification</DataTable.Title>
                            </DataTable.Header>
                            {staffData.map((item,index)=>
                            
                            <DataTable.Row style={styles.databeBox} key={index}>
                                <DataTable.Cell textStyle={styles.child}>{item.id}</DataTable.Cell>
                                <DataTable.Cell textStyle={styles.child}>{item.staff_name}</DataTable.Cell>
                                <DataTable.Cell textStyle={styles.child}>{item.qualification}</DataTable.Cell>
                            </DataTable.Row>
                            )}
                        </DataTable>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    header:{
        color:'#fff',
        fontSize:14,
        fontWeight:'700'
    },
    child:{
        color:'#000',
        fontSize:15,
        borderRadius:30
    },
      mainbox:{
        textAlign:'center',
        // margin: 15,
        flex: 1,
        justifyContent: 'space-between',
      },
      databeBox:{
        margin: 0,
        textAlign: 'center',
      },
      databeHeader:{
        margin: 10,
        textAlign: 'left', 
        backgroundColor:'#53798a',
        borderTopLeftRadius:30,
        borderTopRightRadius:30
      }
})

export default Staff;