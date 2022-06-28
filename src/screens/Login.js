//login b
import React, {useState} from 'react';
import {
View,
Text,
TextInput,
TouchableOpacity,
} from 'react-native';
import styles from '../styles/styles';


  export default function  Login ({navigation}){
   const [username, setUsername] = useState('')
   const [password, setPassword] = useState('')
  
    return (
    
    <View style={styles.container}>
        <Text style={styles.highlight}>LOGIN</Text>
        
        <View style={styles.inputView}>
          <TextInput  
            style={styles.inputText}
            placeholder="Username" 
            textAlign="center"
            placeholderTextColor="#000"
            value={username}
            onChangeText={(value) => setUsername({value})}/>
        </View>

        <View style={styles.inputView}>
          <TextInput  
            style={styles.inputText}
            placeholder="Password"
            secureTextEntry
            textAlign="center"
            placeholderTextColor="#000"
            value={password}
            onChangeText={(value) => setPassword({value})}/>
        </View>

        <TouchableOpacity style={styles.loginButton}
            onPress={() => {navigation.navigate('Dashboard')}}>
            <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>{navigation.navigate('SignUp')}}> 
        <Text style={styles.SignUpText}>Register</Text>
      </TouchableOpacity>
      
      </View>      

    );
  };
 