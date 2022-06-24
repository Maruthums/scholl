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

const Header = ({ navigation }) => {

    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    return (
            <View style={{
                flexDirection: 'row',
                paddingHorizontal: 20,
                paddingVertical: 20,
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
                    borderRadius: 5
                }}>
                    <View>
                        <Image source={search} style={[styles.search]} />
                    </View>
                    <View>
                        <TextInput
                            placeholder="Search"
                            style={{
                                width: 200
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

export default Header;