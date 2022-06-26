import React, { useState, useEffect, useRef } from "react";
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
    Alert,
    BackHandler
} from 'react-native';

import { avatar, fb, google, logo, menu, search, tw } from '../assets/index';
import Header from "../components/header";
import { DataTable } from 'react-native-paper';
import axios from 'axios';
// import DropShadow from "react-native-drop-shadow";
import { EMAIL } from "../service/constants";
import Loader from "../components/loader";
import res from "../components/responsive";
import DropDownPicker from 'react-native-dropdown-picker';
import { Dropdown } from 'react-native-element-dropdown';

const CourseDetails = ({ navigation }) => {

    const [datas1, setData] = useState([]);
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);

    const [valueStaff, setValueStaff] = useState(null);
    const [isFocusStaff, setIsFocusStaff] = useState(false);

console.log(value,valueStaff);
    const StaffName = useRef(null);
    const Phone = useRef(null);
    const Qualification = useRef(null);
    const Email = useRef(null);
    const [staffName, setStaffName] = useState(null);
    const [qualification, setQualification] = useState(null);
    const [email, setEmail] = useState(null);
    const [phone, setPhone] = useState(null);
    const datas = datas1.map((items) =>
    ({ label: items?.course_name, value: items?.course_name }));
    const dataStaff = datas1.map((items) =>
    ({ label: items?.staff_name, value: items?.staff_name }));
    const [emailIdErr, setEmailErr] = useState(null);
    const [modal, setModal] = useState(false);
    const changeEmail = (e) => {
        if (e != '') {
            setEmail(e);
            if (EMAIL.test(e)) {
                setEmailErr(false);
            } else {
                setEmailErr(true);
            }
        } else {
            setEmail(e);
            setEmailErr(true);
        }

    }
    const onChanges = async (item) => {
        setValue(item.value);
        setIsFocus(false);
    }

    const onChangesStaff = async (item) => {
        setValueStaff(item.value);
        setIsFocusStaff(false);
    }
    const data = () => {
        setModal(true);
        axios.post('https://620502d5161670001741b2f7.mockapi.io/staff/department', {
            course_name:value,
            staff_name: valueStaff,
            qualification: qualification,
            phone: phone,
            email: email
        })
            .then(function (response) {
                console.log(response);
                navigation.goBack()
            })
            .catch(function (error) {
                setModal(false);
                alert(`You have ${error.message} So Please check`);
            });
    }

    const Getdata = () => {
        setModal(true);
        axios.get('https://620502d5161670001741b2f7.mockapi.io/staff/department')
            .then(function (response) {
                console.log(response);
                setModal(false);
                setData(response.data)
            })
            .catch(function (error) {
                setModal(false);
                alert(`You have ${error.message} So Please check`);
            });
    }

    useEffect(()=>{
        Getdata()
    },[])
    const onhandleReset = () => {
        setEmail(null);
        setPhone(null);
        setQualification(null);
        setStaffName(null);
        setEmailErr(false);
        setValueStaff('');
        setValue('');
        Phone.current.clear();
        Qualification.current.clear();
        Email.current.clear();
    }

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
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <View >
                            <Text style={{
                                textAlign: 'center',
                                color: '#53798a',
                                fontSize: res(16),
                                fontWeight: '700',
                            }}>
                                Add Department Details
                            </Text>
                        </View>
                    </View>
                    <View>
                        <View>
                            <Text style={[styles.label]}>
                                Course Name
                            </Text>
                        </View>
                        <View style={{
                        paddingLeft: res(15),
                        borderRadius: 5,
                        width: '100%',
                        borderWidth: 1,
                        // marginLeft: 25,
                        height: res(45),
                        borderColor: '#43404042',
                        padding: 5, 
                        //  marginTop: 40
                    }}>
                        <Dropdown
                        containerStyle={{
                            color:'#000',
                            backgroundColor:'#c5c5c5'
                        }}
                        activeColor='#53798a'
                            placeholderStyle={{ fontSize: res(13), color: '#53798a', }}
                            selectedTextStyle={{ fontSize: res(13), color: '#000' }}
                            data={datas}
                            maxHeight={100}
                            labelField="label"
                            valueField="value"
                            placeholder={!isFocus ? 'Choose' : '...'}
                            value={value}
                            onFocus={() => setIsFocus(true)}
                            onBlur={() => setIsFocus(false)}
                            onChange={item => {
                                onChanges(item)
                            }}
                            
                            dropdownPosition='bottom'
                        />
                    </View>
                    </View>

                    <View>
                        <View>
                            <Text style={[styles.label]}>
                                Staff Name
                            </Text>
                        </View>
                        <View style={{
                        paddingLeft: res(15),
                        borderRadius: 5,
                        width: '100%',
                        borderWidth: 1,
                        // marginLeft: 25,
                        height: res(45),
                        borderColor: '#43404042',
                        padding: 5, 
                        //  marginTop: 40
                    }}>
                        <Dropdown
                        containerStyle={{
                            color:'#000',
                            backgroundColor:'#c5c5c5'
                        }}
                        activeColor='#53798a'
                            placeholderStyle={{ fontSize: res(13), color: '#53798a' }}
                            selectedTextStyle={{ fontSize: res(13), color: 'black' }}
                            data={dataStaff}
                            maxHeight={100}
                            labelField="label"
                            valueField="value"
                            placeholder={!isFocusStaff ? 'Choose' : '...'}
                            value={valueStaff}
                            onFocus={() => setIsFocusStaff(true)}
                            onBlur={() => setIsFocusStaff(false)}
                            onChange={item => {
                                onChangesStaff(item)
                            }}
                            dropdownPosition='bottom'
                            style={{
                                color:'#000'
                            }}
                        />
                    </View>
                    </View>

                    <View>
                        <View>
                            <Text style={[styles.label]}>
                                Qualification
                            </Text>
                        </View>
                        {/* <DropShadow style={styles.shadowProp}> */}
                            <TextInput
                                ref={Qualification}
                                onChangeText={(e) => setQualification(e)}
                                style={[
                                    styles.TextInput
                                ]}
                            />
                        {/* </DropShadow> */}
                    </View>
                    <View>
                        <View>
                            <Text style={[styles.label]}>
                                Email
                            </Text>
                        </View>
                        {/* <DropShadow style={styles.shadowProp}> */}
                            <TextInput
                                ref={Email}
                                onChangeText={(e) => changeEmail(e)}
                                style={[
                                    styles.TextInput
                                ]}
                            />
                        {/* </DropShadow> */}
                        {emailIdErr == true &&
                            <Text style={{ color: 'tomato', }}>
                                Please enter valid Email
                            </Text>
                        }
                    </View>
                    <View>
                        <View>
                            <Text style={[styles.label]}>
                                Phone Number
                            </Text>
                        </View>
                        {/* <DropShadow style={styles.shadowProp}> */}
                            <TextInput
                                ref={Phone}
                                onChangeText={(e) => setPhone(e)}
                                keyboardType='numeric'
                                style={[
                                    styles.TextInput
                                ]}
                            />
                        {/* </DropShadow> */}
                    </View>
                </View>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                    borderRadius: 8,
                    marginBottom:res(20)
                }}>
                    <View style={{
                        backgroundColor: value == '' || value == null || valueStaff ==''|| valueStaff == null|| qualification == '' || qualification == null ||
                            emailIdErr == true || phone == null || phone == '' ? '#08727669' : '#53798a',
                        borderRadius: 5,
                    }}>
                        <TouchableOpacity
                            disabled={value == '' || value == null || valueStaff ==''|| valueStaff == null|| qualification == '' || qualification == null ||
                                emailIdErr == true || phone == null || phone == '' ? true : false}
                            onPress={() => data()}>
                            <Text style={[
                                {
                                    color: '#fff',
                                    paddingHorizontal: res(20),
                                    paddingVertical: res(6),
                                    fontSize: res(14),
                                    fontWeight: '500'
                                }
                            ]}>
                                Submit
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{
                        backgroundColor: '#fff',
                        borderRadius: 5,
                    }}>
                        <TouchableOpacity
                            onPress={() => onhandleReset()}
                        >
                            <Text style={[
                                {
                                    color: '#53798a',
                                    paddingHorizontal: res(20),
                                    paddingVertical: res(6),
                                    fontSize: res(14),
                                    fontWeight: '500'
                                }
                            ]}>
                                Reset
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                {modal && (
                    <Modal transparent={true} visible={modal}>
                        <Loader />
                    </Modal>
                )}
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    label: {
        color: '#53798a',
        fontSize: res(13),
        fontWeight: '800',
        paddingHorizontal: res(10),
        paddingVertical: res(10)
    },
    TextInput: {
        borderColor: '#43404042',
        borderWidth: 1,
        borderRadius: 5,
        fontSize: res(13),
        paddingHorizontal: res(15),
        color: '#000',
        height: res(45)
    },
    shadowProp: {
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0,
        shadowRadius: 1.2,
    },
})

export default CourseDetails;