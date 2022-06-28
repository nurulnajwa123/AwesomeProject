import React, {Component} from 'react';
import {
SafeAreaView,
StyleSheet,
View,
Text,
TextInput,
TouchableOpacity
}from 'react-native';
import Styles from './src/styles/styles';
 
 
export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
   
    return (
    <SafeAreaView style={{flex: 5}}>
    <View style={styles.container}>
        <Text style={styles.highlight}>LOGIN</Text>
        
        <View style={styles.inputView}>
          <TextInput  
            style={styles.inputText}
            placeholder="Username" 
            textAlign="center"
            placeholderTextColor="#000"
            onChangeText={(username) => this.setState({ username })}/>
        </View>

        <View style={styles.inputView}>
          <TextInput  
            style={styles.inputText}
            placeholder="Password"
            textAlign="center"
            placeholderTextColor="#000"
            secureTextEntry={true}
            onChangeText={(password) => this.setState({ password })}/>
        </View>

        <TouchableOpacity style={styles.loginButton}
            onPress={() => this.props.navigation.navigate('AfterLogin')}>
            <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>


      
      </View>      
    </SafeAreaView>
    );
  };