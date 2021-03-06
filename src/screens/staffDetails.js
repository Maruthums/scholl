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

const StaffDetails = ({ navigation }) => {

    const StaffName = useRef(null);
    const Phone = useRef(null);
    const Qualification = useRef(null);
    const Email = useRef(null);
    const [staffName, setStaffName] = useState(null);
    const [qualification, setQualification] = useState(null);
    const [email, setEmail] = useState(null);
    const [phone, setPhone] = useState(null);

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

    const data = () => {
        setModal(true);
        axios.post('https://620502d5161670001741b2f7.mockapi.io/staff/staff', {
            staff_name: staffName,
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

    const onhandleReset = () => {
        setEmail(null);
        setPhone(null);
        setQualification(null);
        setStaffName(null);
        setEmailErr(false);
        StaffName.current.clear();
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
                }}>
                    <View style={{
                        backgroundColor:staffName == '' || staffName == null || qualification == '' || qualification == null ||
                        emailIdErr == true || phone == null || phone == '' ? '#08727669': '#53798a',
                        borderRadius: 5,
                    }}>
                        <TouchableOpacity
                        disabled={staffName == '' || staffName == null || qualification == '' || qualification == null ||
                    emailIdErr == true || phone == null || phone == '' ? true:false}
                        onPress={()=> data()}>
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
        fontSize:res(13),
        paddingHorizontal:res(15),
        color:'#000',
        height:res(45)
    },
    shadowProp: {
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 1.2,
    },
})

export default StaffDetails;