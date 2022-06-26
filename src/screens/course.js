import React, { useState,useEffect } from "react";
import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    Modal,
    BackHandler,
    Alert
} from 'react-native';

import { avatar, fb, google, logo, menu, search, tw } from '../assets/index';
import Header from "../components/header";
import { DataTable } from 'react-native-paper';
import axios from 'axios';
import { useFocusEffect } from "@react-navigation/native";
import Loader from "../components/loader";
import res from "../components/responsive";
import { Table, Row, Rows } from 'react-native-table-component';

const Course = ({ navigation }) => {
    const tableHead =['ID', 'Course Name', 'No of Section'];
    const [courseData,setcourseData] = useState([]);
    const [modal, setModal] = useState(false);
    
    const tableData= courseData.map((item, index) => [index+1,item.course_name,item.no_section] )
   const data =async()=>{ 
    setModal(true)
    await axios.get('https://620502d5161670001741b2f7.mockapi.io/staff/department')
    .then(function (response) {
      console.log(response);
      setcourseData(response.data);
      setModal(false)
    })
    .catch(function (error) {
        console.log(error.message);
        setModal(false)
        alert(`You have ${error.message} So Please check`);
    });
}

useFocusEffect(
    React.useCallback(() => {
        data(); 
    }, []),
  );


    return (
        <SafeAreaView style={{
            flex: 1
        }}>
            <Header />
            <ScrollView>
                <View style={{
                    marginHorizontal: res(20),
                    marginVertical: res(20)
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
                                fontSize: res(14),
                                fontWeight: '700'
                            }}>
                                Department Details
                            </Text>
                        </View>
                        <View>
                            <TouchableOpacity
                            onPress={()=> navigation.navigate('CourseDetails')}
                            style={{
                                backgroundColor: '#53798a',
                                paddingHorizontal: res(15),
                                paddingVertical: res(5),
                                borderRadius: 5
                            }}>
                                <Text style={{
                                    textAlign: 'center',
                                    color: '#fff',
                                    fontSize: res(14),
                                    fontWeight: '700'
                                }}>
                                    Add
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <Table
                    style={{
                        borderRadius:30,
                        backgroundColor:'#fff',
                        marginVertical:res(15)
                    }}
                    borderStyle={{borderWidth: 1, borderColor: '#c8e1ff',
                    // borderRadius:30,
                }}>
          <Row data={tableHead} style={[styles.head,{
            backgroundColor:'#53798a',
            borderTopLeftRadius:30,
            borderTopRightRadius:30,
            borderColor:null,
          }]}
           textStyle={styles.header}/>
          <Rows data={tableData} textStyle={styles.child} />
        </Table>
                    {/* <View style={styles.mainbox}>
                        <DataTable>
                            <DataTable.Header style={styles.databeHeader}>
                                <DataTable.Title textStyle={styles.header}>ID</DataTable.Title>
                                <DataTable.Title textStyle={styles.header}>course Name</DataTable.Title>
                                <DataTable.Title  textStyle={styles.header}>No of Section</DataTable.Title>
                            </DataTable.Header>
                            {courseData.map((item,index)=>
                            
                            <DataTable.Row style={styles.databeBox} key={index}>
                                <DataTable.Cell textStyle={styles.child}>{item.id}</DataTable.Cell>
                                <DataTable.Cell textStyle={styles.child}>{item.course_name}</DataTable.Cell>
                                <DataTable.Cell textStyle={styles.child}>{item.no_section}</DataTable.Cell>
                            </DataTable.Row>
                            )}
                        </DataTable>
                    </View> */}
                </View>
            </ScrollView>
            {modal && (
        <Modal transparent={true} visible={modal}>
          <Loader />
        </Modal>
      )}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    head: { height: res(45) },
    // text: { margin: 6 },
    container: {
        width: '100%',
        height: 300,
        padding: 16,
        paddingTop: 100,
        backgroundColor: '#fff',
    },
    cell: {
        // borderWidth: 1,
        borderColor: '#ddd',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    header: {
        color: '#fff',
        fontSize: res(13),
        fontWeight: '700',
        textAlign:'center'
    },
    child: {
        color: '#000',
        fontSize: res(13),
        textAlign:'center',
        margin:res(5)
    },
    databeBox: {
        margin: 0,
        textAlign: 'left',
       
    },
    databeHeader: {
        margin: res(0),
        textAlign: 'center',
        backgroundColor: '#53798a',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30
    }
})

export default Course;