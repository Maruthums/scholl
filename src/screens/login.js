import React,{useState}from "react";
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

const Login = ({navigation}) => {

    const [email,setEmail] = useState(null);
    const [password,setPassword] = useState(null);

    const sign =()=>{
    navigation.navigate('Home');
    }

    return (
        <SafeAreaView>
            <ScrollView>
                <View style={{
                    alignItems: 'center',
                    marginTop: 30
                }}>
                    <Image source={logo} style={{
                        resizeMode: 'contain',
                        width: '100%',
                        height: 100
                    }} />
                </View>
                <View style={{
                    marginHorizontal: 20,
                    marginTop: 50
                }}>
                    <View style={{
                        paddingVertical: 20
                    }}>
                        <Text style={{
                            fontSize: 18,
                            fontWeight: '800',
                            color: '#000'
                        }}>
                            Login to your Account
                        </Text>
                    </View>
                    <View style={{
                        marginTop: 25
                    }}>
                        <TextInput
                            placeholder="Email"
                            placeholderTextColor={'#000'}
                            onChangeText={(e)=>setEmail(e)}
                            style={{
                                backgroundColor: '#fff',
                                borderRadius: 10,
                                paddingHorizontal: 10,
                                fontSize: 16
                            }} />
                    </View>
                    <View style={{
                        marginTop: 25
                    }}>
                        <TextInput
                        onChangeText={(e)=>setPassword(e)}
                            placeholder="Password"
                            placeholderTextColor={'#000'}
                            style={{
                                backgroundColor: '#fff',
                                borderRadius: 10,
                                paddingHorizontal: 10,
                                fontSize: 16
                            }} />
                    </View>
                    <View style={{
                        marginTop: 40
                    }}>
                        <TouchableOpacity
                        disabled={email == '' || email == null && password == null ||password == null? true : false}
                        onPress={sign}
                        style={{
                            backgroundColor: '#000075',
                            alignItems: 'center',
                            paddingVertical: 15,
                            borderRadius: 10
                        }}>
                            <Text style={{
                                fontSize: 16,
                                fontWeight: '600',
                                color: '#fff'
                            }}>
                                Sign in
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{
                        marginTop: 70,
                        marginBottom: 40
                    }}>
                        <Text style={{
                            fontSize: 16,
                            fontWeight: '600',
                            color: '#000',
                            textAlign: 'center'
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
        width: 50,
        height: 50,
        resizeMode: 'contain',
        borderRadius: 50
    },
    backIcon: {
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        borderRadius: 5
    }
})

export default Login;