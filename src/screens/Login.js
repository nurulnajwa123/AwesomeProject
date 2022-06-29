//login b
import React, {useState, useEffect} from 'react';
import {
View,
Text,
TextInput,
TouchableOpacity,
Image,
Alert
} from 'react-native';
import styles from '../styles/styles';
import ModalView from '../component/ModalView';


const url = 'http://jsonplaceholder.typicode.com/users'

const headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
};

  export default function  Login ({navigation}){
   const [users, setUsers] = useState([]);
   const [data, setData] = useState([]);
   const [username, setUsername] = useState('')
   const [password, setPassword] = useState('')
   const [email, setEmail] = useState('')
   const [visible, setVisible] = useState(false);
   const [loading, setLoading] = useState(false);


    const getPosts = async () => {
      setLoading(true)
      await fetch('http://jsonplaceholder.typicode.com/users')
        .then((res) => res.json())
        .then((res) => {
          setData(res);
        })
        .catch(e => console.log(e))
      setLoading(false)
    }
  
    const addPost = (username, email, password) => {
      fetch('http://jsonplaceholder.typicode.com/users', {
        method: "POST",
        headers,
        body: JSON.stringify({
          "username": username,
          "email": email,
          "password": password,
        })
      }).then((response) => response.json())
        .then(jsonResponse => {setUsers(jsonResponse),
         console.log('Registered:', jsonResponse)})
        .catch(error => { console.log(error) })
    }

     useEffect(() => {
        getPosts();
      }, [])

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
      

        <TouchableOpacity onPress={() => setVisible(true)}>
        <Text style={styles.SignUpText}>Register</Text>
      </TouchableOpacity>

        <ModalView
        visible={visible}
        onDismiss={() => {setVisible(false)}}
        onSubmit={() => {addPost(username, email, password) }}
        cancelable 
      >

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
            
       </ModalView>
   
      
      </View>      

    );
  };
 