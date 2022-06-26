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
import res from "./responsive";

const Header = ({ navigation }) => {

    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    return (
            <View style={{
                flexDirection: 'row',
                paddingHorizontal: res(20),
                paddingVertical: res(20),
                alignItems: 'center',
                backgroundColor: '#53798a',
                justifyContent: 'space-between'
            }}>
                <TouchableOpacity>
                    <Image source={menu} style={[styles.icon, {
                        tintColor: '#fff'
                    }]} />
                </TouchableOpacity>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    backgroundColor: '#fff',
                    width: '70%',
                    borderRadius: 5,
                    height:res(30)
                }}>
                    <View>
                        <Image source={search} style={[styles.search]} />
                    </View>
                    <View>
                        <TextInput
                            placeholder="Search"
                            style={{
                                width: 180,
                                height:res(100),
                                color:'#000',
                            }} />
                    </View>
                </View>
                <View>
                    <Image source={avatar} style={[styles.user]} />
                </View>
            </View>
    )
}

const styles = StyleSheet.create({
    icon: {
        width: res(20),
        height: res(20),
        resizeMode: 'contain',
    },
    search: {
        width: res(15),
        height: res(15),
        resizeMode: 'contain',
        paddingHorizontal: res(15)
    },
    user: {
        width: res(45),
        height: res(45),
        resizeMode: 'contain',
    },
    btn:{
        backgroundColor:'#53798a',
        height:res(40),
        width:res(120),
        borderRadius:5,
        marginVertical:8,
        alignItems:'center',
        justifyContent:'center'
    },
    text:{
        color:'#fff',
        fontSize:res(16),
        fontWeight:'700'
    }
})

export default Header;