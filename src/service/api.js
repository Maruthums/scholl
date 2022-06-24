import axios from 'axios';
import React from "react";
import { URL } from './constants.js'
import { Alert, BackHandler } from 'react-native';


export const staff = async (config = {}) => await get(URL.STAFF , config);

const get = async (url, config) => {
    try {
        let res = await axios.get(url, config);
        return prepareResponse(res);
    } catch (err) {
        return handleException(err);
    }

}
const post =
    async (url, data, config) => {
        try {
            let res = await axios.post(url, data, config);
            return prepareResponse(res);
        } catch (err) {
            return handleException(err);
        }
    }
const handleException = (err) => {
    try {
        if (err?.response?.data) {
            let { data, status, statusText, headers, config, request } = err.response;
            if (status == 400) {
                Alert.alert(
                    'Validation Faild',
                    data?.message || 'Unhandle validation occured',
                );
            } else if (status == 401) {
                Alert.alert('UnAuthenticated Access', 'Session Closed Close your app and Reopen', [
                    {
                        text: 'Close',
                        onPress: () => {
                            BackHandler.exitApp();
                        },
                    },
                ],
                    { cancelable: false },
                );

            } else if (status == 404) {
                Alert.alert('Page Not Found', 'This Api could not be find it');
            } else {
                Alert.alert('Status Failed', `server returns ${status} `);
            }
        } else {
            Alert.alert('Information', 'Someting went worng or Check your Internet');
        }
    } catch (error) {
        Alert.alert('Information', 'Someting went worng or Check your Internet', [
            {
                text: 'Ok',
                onPress: () => {
                    BackHandler.exitApp();
                },
            },
        ],
            { cancelable: false },
        );
    }
    return {};
}
const prepareResponse = (res) => {
    if (res?.status) {
        let { status, data = {} } = res;
        if (status >= 200 && status <= 299) {
            if (data.status == 'success') {
                return data;
            } else if (data.status == 'failure') {
                return data;
            } else if (data.status == 'empty') {
                return data;
            } else if (data.status == 'error') {
                Alert.alert('Sorry for the inconvenience', data.message);
            }
        } else {
            Alert.alert('Internal server error', `Status Code : ${status}\nMessage : ${data?.message}`)
        }
    } else {
        Alert.alert('Someting went worng or Check your Internet');
    }
    return {};
}