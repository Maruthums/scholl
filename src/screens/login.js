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

import { fb, google, logo, tw } from '../assets/index';
import res from "../components/responsive";
import { EMAIL } from "../service/constants";
const Login = ({ navigation }) => {

    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    const [passwordErr, setPasswordErr] = useState(null);
    const [emailIdErr, setEmailErr] = useState(null);
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

    const sign = () => {
        navigation.navigate('Home');
    }

    return (
        <SafeAreaView>
            <ScrollView>
                <View style={{
                    alignItems: 'center',
                    marginTop: res(30)
                }}>
                    <Image source={logo} style={{
                        resizeMode: 'contain',
                        width: '100%',
                        height: 100
                    }} />
                </View>
                <View style={{
                    marginHorizontal: res(20),
                    marginTop: res(30)
                }}>
                    <View style={{
                        paddingVertical: res(10)
                    }}>
                        <Text style={{
                            fontSize: res(16),
                            fontWeight: '800',
                            color: '#000'
                        }}>
                            Login to your Account
                        </Text>
                    </View>
                    <View style={{
                        marginTop: res(25)
                    }}>
                        <TextInput
                            placeholder="Email"
                            placeholderTextColor={'#000'}
                            onChangeText={(e) => changeEmail(e)}
                            style={{
                                backgroundColor: '#fff',
                                borderRadius: 10,
                                paddingHorizontal: res(10),
                                fontSize: res(13),
                                color:'#000',
                                height:res(50)
                            }} />
                    </View>
                     {emailIdErr == true &&
              <Text style={{ color: 'tomato', }}>
                Please enter valid Email
              </Text>
            }
                    <View style={{
                        marginTop: res(25)
                    }}>
                        <TextInput
                            onChangeText={(e) => setPassword(e)}
                            placeholder="Password"
                            placeholderTextColor={'#000'}
                            style={{
                                backgroundColor: '#fff',
                                borderRadius: 10,
                                paddingHorizontal: res(10),
                                fontSize: res(13),
                                color:'#000',
                                height:res(50)
                            }} />
                    </View>
                    <View style={{
                        marginTop: res(40)
                    }}>
                        <TouchableOpacity
                            disabled={emailIdErr == true || password == null ? true : false}
                            onPress={sign}
                            style={{
                                backgroundColor:emailIdErr == true || password == null || password == '' ? '#ADD8E6' :'#000075',
                                alignItems: 'center',
                                paddingVertical: res(15),
                                borderRadius: 10
                            }}>
                            <Text style={{
                                fontSize: res(15),
                                fontWeight: '600',
                                color: '#fff',
                            }}>
                                Sign in
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{
                        marginTop: res(50),
                        marginBottom: res(25)
                    }}>
                        <Text style={{
                            fontSize: res(13),
                            fontWeight: '600',
                            color: '#000',
                            textAlign: 'center',
                        }}>
                            - Or Sign in with -
                        </Text>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-evenly',
                        alignItems: 'center'
                    }}>
                        <TouchableOpacity style={[styles.backIcon]} >
                            <Image source={google} style={[styles.social]} />
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.backIcon]}>
                            <Image source={fb} style={[styles.social, , {
                                tintColor: '#000075'
                            }]} />
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.backIcon]}>
                            <Image source={tw} style={[styles.social]} />
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    social: {
        width: res(30),
        height: res(30),
        resizeMode: 'contain',
        borderRadius: 50
    },
    backIcon: {
        backgroundColor: '#fff',
        padding: res(5),
        paddingHorizontal:res(20),
        borderRadius: 5
    }
})

export default Login;