import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Keyboard,
  ScrollView,
  Alert,
  TouchableOpacity,
} from 'react-native';
import styles from '../styles/styles';

const SignUp = ({navigation}) => {
  const [user, setUser] = useState({
    email: '',
    username: '',
    phone: '',
    password: '',
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
 
  const validate = () => {
    Keyboard.dismiss();
    let isValid = true;

    if (!user.username) {
      handleError('Please enter your username', 'username');
      isValid = false;
    }

    if (!user.email) {
      handleError('Please enter your', 'email');
      isValid = false;
    } else if (!user.email.match(/\S+@\S+\.\S+/)) {
      handleError('Please enter a valid email', 'email');
      isValid = false;
    }

     if (!user.phone) {
      handleError('Please enter your phone number', 'phone');
      isValid = false;
    }

    if (!user.password) {
      handleError('Please enter your password', 'password');
      isValid = false;
    } else if (user.password.length < 5) {
      handleError('Min password length of 5', 'password');
      isValid = false;
    }

    if (isValid) {
      register();
    }
  };

  const register = () => {
    setLoading(true);
    setTimeout(() => {
      try {
        setLoading(false);
        AsyncStorage.setItem('userData', JSON.stringify(user));
        navigation.navigate('Login');
      } catch (error) {
        Alert.alert('Error', 'Something went wrong');
      }
    }, 3000);
  };
 

  const handleOnchange = (text, input) => {
    setUser(prevState => ({...prevState, [input]: text}));
  };
  const handleError = (error, input) => {
    setErrors(prevState => ({...prevState, [input]: error}));
  };

  return (
    <View style={styles.container}>
    <Text style={styles.registerHighlight}>REGISTRATION</Text>

     
      <Text style={styles.SignUpText}>Username:</Text>
      <View style={styles.inputView}>
        <TextInput
            style={styles.inputText}
            textAlign="center"
            placeholderTextColor="#000"
            onChangeText={text => handleOnchange(text, 'username')}
            onFocus={() => handleError(null, 'username')}
            error={errors.username}
          />
        </View>

        <Text style={styles.SignUpText}>Email:</Text>
         <View style={styles.inputView}>
        <TextInput
            style={styles.inputText}
            textAlign="center"
            placeholderTextColor="#000"
            onChangeText={text => handleOnchange(text, 'email')}
            onFocus={() => handleError(null, 'email')}
            error={errors.email}
          />
        </View>
 
        <Text style={styles.SignUpText}>Phone:</Text>
         <View style={styles.inputView}>
        <TextInput
            style={styles.inputText}
            textAlign="center"
            placeholderTextColor="#000"
            onChangeText={text => handleOnchange(text, 'phone')}
            onFocus={() => handleError(null, 'phone')}
            error={errors.phone}
          />
        </View>

        <Text style={styles.SignUpText}>Password:</Text>
         <View style={styles.inputView}>
        <TextInput
            style={styles.inputText}
            textAlign="center"
            placeholderTextColor="#000"
            onChangeText={text => handleOnchange(text, 'password')}
            onFocus={() => handleError(null, 'password')}
            error={errors.password}
            secureTextEntry
          />
        </View>
          
          <TouchableOpacity style={styles.loginButton}
          onPress={validate}>
            <Text style={styles.loginText}>Register</Text>
          </TouchableOpacity>

       
   
    </View>
  );
};

export default SignUp;
