import React, {useState} from 'react';
import {View,
  Text, 
  Alert, 
  TouchableOpacity,
  TextInput
} from 'react-native';
// import Try from '../component/Try';
import styles from '../styles/styles';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({navigation}) => {
  const [user, setUser] = useState({username: '', password: ''});
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validate = async () => {
    let isValid = true;
    if (!user.username) {
      handleError('Please input username', 'username');
      isValid = false;
    }
    if (!user.password) {
      handleError('Please input password', 'password');
      isValid = false;
    }
    if (isValid) {
      SignIn();
    }
  };

  const SignIn = () => {
    setLoading(true);
    setTimeout(async () => {
      setLoading(false);
      let userData = await AsyncStorage.getItem('userData');
      if (userData) {
        userData = JSON.parse(userData);
        if (
          user.username == userData.username &&
          user.password == userData.password
        ) {
          navigation.navigate('Dashboard');
          AsyncStorage.setItem(
            'userData',
            JSON.stringify({...userData, loggedIn: true}),
          );
        } else {
          Alert.alert('Error', 'Invalid Details');
        }
      } else {
        Alert.alert('Error', 'User does not exist');
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
    <Text style={styles.highlight}>LOGIN</Text>
         
        <View style={styles.inputView}>
        <TextInput
            style={styles.inputText}
            placeholder="Username" 
            textAlign="center"
            placeholderTextColor="#000"
            onChangeText={text => handleOnchange(text, 'username')}
            onFocus={() => handleError(null, 'username')}
            error={errors.username}
          />
        </View>
         
        <View style={styles.inputView}>
        <TextInput
            style={styles.inputText}
            placeholder="Password" 
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
            <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
 
         <TouchableOpacity 
          onPress={() => {navigation.navigate('SignUp')}}> 
        <Text style={styles.SignUpText}>Register</Text>
        </TouchableOpacity>
        
   </View>
     

  );
};

export default Login;