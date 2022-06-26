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
    BackHandler,
    Pressable
} from 'react-native';

import { avatar, cal, fb, google, logo, menu, search, tw } from '../assets/index';
import Header from "../components/header";
import { DataTable } from 'react-native-paper';
import axios from 'axios';
// import DropShadow from "react-native-drop-shadow";
import { EMAIL } from "../service/constants";
import Loader from "../components/loader";
import res from "../components/responsive";
import DropDownPicker from 'react-native-dropdown-picker';
import { Dropdown } from 'react-native-element-dropdown';
import { Table, Row, Rows } from 'react-native-table-component';
import CalendarPicker from 'react-native-calendar-picker';
import moment from "moment";
const Student = ({ navigation }) => {
    const tableHead = ['ID', 'Student Name', 'Father Name'];

    const [datas1, setData] = useState([]);
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);
    const [chekoutModal, setChekoutModal] = useState(false);
    const [seletDatee, setSeletDatee] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);
    const [valueStaff, setValueStaff] = useState(null);
    const [isFocusStaff, setIsFocusStaff] = useState(false);
    const [selectedStartDate, setSelectedStartDate] = useState(null);
    const [selectedEndDate, setSelectedEndDate] = useState(null);
    console.log(seletDatee);
    let today = moment(seletDatee).format('DD-MM-YYYY');
    const StaffName = useRef(null);
    const Aadhar = useRef(null);
    const StdName = useRef(null);
    const Fname = useRef(null);
    const Dat = useRef(null);
    const Address = useRef(null);
    const Email = useRef(null);
    const [studentName, setStdName] = useState(null);
    const [fName, setfName] = useState(null);
    const [staffName, setStaffName] = useState(null);
    const [email, setEmail] = useState(null);
    const [date, setDate] = useState(null);
    const [aadhar, setAadhar] = useState('');
    const [address, setAddress] = useState(null);
    const datas = datas1.map((items) =>
        ({ label: items?.department, value: items?.department }));
    const [emailIdErr, setEmailErr] = useState(null);
    const [aadharErr, setAadharErr] = useState(null);
    const [modal, setModal] = useState(false);
    const tableData = datas1.map((item, index) => [index + 1, item.student_name, item.Father_name]);

    console.log(today);

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

    const aadharErrChage = (e) => {
        setAadhar(e);
        if (e.length == 12) {
            setAadharErr(false);
        }
        else {
            setAadharErr(true);
        }
    }

    const onChanges = async (item) => {
        setValue(item.value);
        setIsFocus(false);
    }

    const data = () => {
        setModal(true);
        let Payload = {
            Father_name: fName,
            staff_name: staffName,
            addharcard_no: aadhar,
            email: email,
            joining_date: today,
            student_name: studentName,
            address: address
        }
        console.log(Payload);
        axios.post('https://620502d5161670001741b2f7.mockapi.io/staff/student', Payload)
            .then(function (response) {
                console.log(response);
                Getdata();
            })
            .catch(function (error) {
                setModal(false);
                alert(`You have ${error.message} So Please check`);
            });
    }

    const Getdata = () => {
        setModal(true);
        axios.get('https://620502d5161670001741b2f7.mockapi.io/staff/student')
            .then(function (response) {
                console.log(response);
                setModal(false);
                setData(response.data);
                onhandleReset();
            })
            .catch(function (error) {
                setModal(false);
                alert(`You have ${error.message} So Please check`);
            });
    }

    useEffect(() => {
        Getdata()
    }, [])
    const onhandleReset = () => {
        setEmail(null);
        setAadhar(null);
        setStaffName(null);
        setAddress(null);
        setfName(null);
        setStdName(null);
        setDate(null);
        setEmailErr(false);
        setValue('');
        setSeletDatee('');
        StdName.current.clear();
        Fname.current.clear();
        Aadhar.current.clear();
        StaffName.current.clear();
        Dat.current.clear();
        Address.current.clear();
        Email.current.clear();
    }

    const onPressDate = date => {
        setSeletDatee(date);
        setModalVisible(!modalVisible);
    };
    const onPressCheckOut = (date) => {
        setChekoutModal(date);
    };

    return (
        <SafeAreaView style={{
            flex: 1
        }}>
            <Header />

            <ScrollView showsVerticalScrollIndicator={false}>

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
                                Add Student Details
                            </Text>
                        </View>
                    </View>

                    <View>
                        <View>
                            <Text style={[styles.label]}>
                                Student Name
                            </Text>
                        </View>
                        {/* <DropShadow style={styles.shadowProp}> */}
                        <TextInput
                            ref={StdName}
                            onChangeText={(e) => setStdName(e)}
                            style={[
                                styles.TextInput
                            ]}
                        />
                        {/* </DropShadow> */}
                    </View>


                    <View>
                        <View>
                            <Text style={[styles.label]}>
                                Father Name
                            </Text>
                        </View>
                        {/* <DropShadow style={styles.shadowProp}> */}
                        <TextInput
                            ref={Fname}
                            onChangeText={(e) => setfName(e)}
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
                                Department
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
                                    color: '#000',
                                    backgroundColor: '#c5c5c5'
                                }}
                                activeColor='#53798a'
                                placeholderStyle={{ fontSize: res(13), color: '#53798a' }}
                                selectedTextStyle={{ fontSize: res(13), color: 'black' }}
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
                                staff Name
                            </Text>
                        </View>
                        {/* <DropShadow style={styles.shadowProp}> */}
                        <TextInput
                            ref={StaffName}
                            onChangeText={(e) => setStaffName(e)}
                            style={[
                                styles.TextInput
                            ]}
                        />
                        {/* </DropShadow> */}
                    </View>

                    <View>
                        <View>
                            <Text style={[styles.label]}>
                                Jioning Date
                            </Text>
                        </View>
                        {/* <DropShadow style={[styles.shadowProp, ]}> */}
                        <Pressable
                            onPress={() => setModalVisible(true)}
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                borderColor: '#43404042',
                                borderWidth: 1,
                                borderRadius: 5,
                                height: res(45)
                            }}>
                            <TextInput
                                ref={Dat}
                                editable={false}
                                inlineImageLeft='search'
                                placeholder={today == null || today == '' || today == 'Invalid date' ? 'dd-mm-yyyy' : today}
                                placeholderTextColor={today == null || today == '' || today == 'Invalid date' ? '#c5c5c5' : '#000'}
                                onChangeText={(e) => setDate(e)}
                                keyboardType='numeric'
                                style={[
                                    {
                                        borderRadius: 5,
                                        fontSize: res(13),
                                        paddingHorizontal: res(15),
                                        color: '#000',
                                        height: res(45)
                                    }
                                ]}
                            />
                            <Image source={cal} style={{
                                width: res(15),
                                height: res(15),
                                resizeMode: 'contain',
                                paddingHorizontal: res(15)
                            }} />
                        </Pressable>
                        {/* </DropShadow> */}
                    </View>

                    <View>
                        <View>
                            <Text style={[styles.label]}>
                                Aadhar card No
                            </Text>
                        </View>
                        {/* <DropShadow style={styles.shadowProp}> */}
                        <TextInput
                            ref={Aadhar}
                            maxLength={12}
                            onChangeText={(e) => aadharErrChage(e)}
                            keyboardType='numeric'
                            style={[
                                styles.TextInput
                            ]}
                        />
                        {/* </DropShadow> */}
                    </View>
                    {aadharErr == true &&
                        <Text style={{ color: 'tomato', }}>
                            Please enter 12 digit Aadhar No
                        </Text>
                    }

                    <View>
                        <View>
                            <Text style={[styles.label]}>
                                Address
                            </Text>
                        </View>
                        {/* <DropShadow style={styles.shadowProp}> */}
                        <TextInput
                            ref={Address}
                            multiline={true}
                            numberOfLines={5}
                            onChangeText={(e) => setAddress(e)}

                            style={[
                                {
                                    textAlign: 'left',
                                    alignItems: "flex-start",
                                    borderColor: '#43404042',
                                    borderWidth: 1,
                                    borderRadius: 5,
                                    fontSize: res(13),
                                    paddingHorizontal: res(15),
                                    color: '#000',
                                }
                            ]}
                        />
                        {/* </DropShadow> */}
                    </View>
                </View>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                    borderRadius: 8,
                    marginBottom: res(20)
                }}>
                    <View style={{
                        backgroundColor: value == '' || value == null || studentName == '' || studentName == null || fName == '' || fName == null ||
                            emailIdErr == true || staffName == null || staffName == '' || Aadhar == null || aadharErr == true || Address == '' || seletDatee == null ? '#08727669' : '#53798a',
                        borderRadius: 5,
                    }}>
                        <TouchableOpacity
                            disabled={value == '' || value == null || studentName == '' || studentName == null || fName == '' || fName == null || seletDatee == null ||
                                emailIdErr == true || staffName == null || staffName == '' || aadharErr == true || Address == '' ? true : false}
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
                <View style={{
                    marginHorizontal: res(20),
                    marginVertical: res(20),

                }}>
                    <View>

                        <Table
                            style={{
                                borderRadius: 30,
                                backgroundColor: '#fff'
                            }}
                            borderStyle={{
                                borderWidth: 1, borderColor: '#c8e1ff',
                                // borderRadius:30,
                            }}>
                            <Row data={tableHead} style={[styles.head, {
                                backgroundColor: '#53798a',
                                borderTopLeftRadius: 30,
                                borderTopRightRadius: 30,
                                borderColor: null,
                            }]}
                                textStyle={styles.header} />
                            <Rows data={tableData} textStyle={styles.child} />
                        </Table>

                        {/* <DataTable>
                            <DataTable.Header style={styles.databeHeader}>
                                <DataTable.Title textStyle={styles.header}>ID</DataTable.Title>
                                <DataTable.Title textStyle={styles.header}>Student Name</DataTable.Title>
                                <DataTable.Title textStyle={styles.header}>Father Name</DataTable.Title>
                            </DataTable.Header>
                            <View style={{
                                 borderBottomLeftRadius: 30,
                                 borderBottomRightRadius: 30,
                                 backgroundColor:'#fff'
                            }}>
                            {datas1.map((item, index) =>
                                <DataTable.Row style={styles.databeBox} key={index}>
                                    <DataTable.Cell textStyle={styles.child}>{item.id}</DataTable.Cell>
                                    <DataTable.Cell textStyle={styles.child}>{item.student_name}</DataTable.Cell>
                                    <DataTable.Cell textStyle={styles.child}>{item.Father_name}</DataTable.Cell>
                                </DataTable.Row>
                            )}
                            </View>
                        </DataTable> */}
                    </View>
                </View>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                        setModalVisible(!modalVisible);
                    }}>
                    <View style={styles.centeredView}>
                        <CalendarPicker
                            previousTitle="<"
                            nextTitle=">"
                            startFromMonday={true}
                            onDateChange={onPressDate}
                            todayBackgroundColor='#53798a'
                            selectedDayColor='#53798a'
                            todayTextStyle="#000"
                            selectedDayTextColor="#fff"
                            textStyle={{
                                fontFamily: 'Nexa Light',
                                color: '#000000',
                            }}
                            previousTitleStyle={{
                                backgroundColor: '#53798a',
                                borderRadius: 50,
                                color: '#fff',
                                paddingHorizontal: 17,
                                fontSize: 25,
                                fontFamily: 'Nexa Bold',
                            }}
                            nextTitleStyle={{
                                backgroundColor: '#53798a',
                                borderRadius: 50,
                                color: '#fff',
                                paddingHorizontal: 17,
                                fontSize: 25,
                                fontFamily: 'Nexa Bold',
                            }}
                        />
                    </View>
                </Modal>
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
    // container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
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
    header: {
        color: '#fff',
        fontSize: res(13),
        fontWeight: '700',
        textAlign: 'center'
    },
    child: {
        color: '#000',
        fontSize: res(13),
        textAlign: 'center',
        margin: res(5)
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
    },
    centeredView: {
        justifyContent: 'center',
        alignItems: 'center',
        // marginTop: 22,
        backgroundColor: '#f5f5f5',
        position: 'absolute',
        bottom: 0,
        paddingVertical: 10,
    },
})

export default Student;