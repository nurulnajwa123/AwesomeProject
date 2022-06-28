// login
import React, { useState, useEffect } from 'react';
import {
    View,
    StyleSheet,
    Text,
    TextInput,
    Alert,
    TouchableOpacity,
    Image
} from 'react-native';
import styles from '../styles/styles';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function SignUp({ navigation }) {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        try {
            AsyncStorage.getItem('UserData')
                .then(value => {
                    if (value != null) {
                        navigation.navigate('SignUp');
                    }
                })
        } catch (error) {
            console.log(error);
        }
    }

    const setData = async () => {
        if (username.length == 0 || email.length == 0 || password.length == 0) {
            Alert.alert('Please complete your registration.')
        } else {
            try {
                var user = {
                    username: username,
                    email: email,
                    password: password
                }
                await AsyncStorage.setItem('UserData', JSON.stringify(user));
                Alert.alert ('Successfully Registered');
                navigation.navigate('Login');
            } catch (error) {
                console.log(error);
            }
        }
    }

    

    return (
        <View style={styles.register}>
            <Text style={styles.registerHighlight}>REGISTRATION</Text>
            
            <Text style={styles.SignUpText}>Username:</Text>
            <View style={styles.inputView}>
              <TextInput 
                style={styles.inputText}
                placeholderTextColor="#000"
                value={username}
                onChangeText={(value) => setUsername({value})}/>
                <TouchableOpacity style={styles.closeButton}
                  onPress={()=>setUsername ('')}>
                <Image style={styles.closeIcon}
                  source={require('../asset/img/closeIcon.png')}/>
                </TouchableOpacity> 
            </View>
    
            <Text style={styles.SignUpText}>Email:</Text>
            <View style={styles.inputView}>
              <TextInput  
                style={styles.inputText}
                placeholderTextColor="#000"
                value={email}
                onChangeText={(value) => setEmail({value})}/>
                <TouchableOpacity style={styles.closeButton}
                  onPress={()=>setEmail ('')}>
                <Image style={styles.closeIcon}
                  source={require('../asset/img/closeIcon.png')}/>
                </TouchableOpacity> 
            </View>
    
            <Text style={styles.SignUpText}>Password:</Text>
            <View style={styles.inputView}>
              <TextInput  
                style={styles.inputText}
                secureTextEntry
                placeholderTextColor="#000"
                value={password} 
                onChangeText={(value) => setPassword({value})}/>
                <TouchableOpacity style={styles.closeButton}
                  onPress={()=>setPassword ('')}>
                  <Image style={styles.closeIcon}
                  source={require('../asset/img/closeIcon.png')}/>
                </TouchableOpacity>  
            </View>
         <View style={{ flexDirection:"row" }}>
            <TouchableOpacity style={styles.button}
            onPress={setData}>
            <Text style={styles.loginText}>Submit</Text>
            </TouchableOpacity>
        </View> 

        </View>
    )
}

