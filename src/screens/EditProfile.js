import React, {useEffect, useState} from 'react';
import {
View,
Text,
TextInput,
TouchableOpacity,
Image
} from 'react-native';
import {useNavigation} from '@react-navigation/native'; 
// import { AsyncStorage } from '@react-native-community/async-storage';
import styles from '../styles/styles';


  const EditProfile = props => {
    const navigation = useNavigation();
    const id = props.route.params.ID; 
    const [users, setUsers] = useState([]);
    const[username, setUsername]= useState([])
    const[email, setEmail]= useState([])
    const[phone, setPhone]= useState([])
    const imageUrl = 'https://i.pravatar.cc/';
  

  useEffect(()=>{
      console.log('print params : ', props.route.params.ID)
      fetchData()
    },[]);

    const fetchData = () => {
      fetch(`http://jsonplaceholder.typicode.com/users/${id}`)
        .then(response => response.json())
        .then(jsonResponse => {setUsers(jsonResponse),
        console.log('print : ', jsonResponse)})
        .catch(error => console.log(error))
    };
 
    return (
    <View style={styles.register}>
          <Image source={{uri: imageUrl}}
          style={styles.picture}/> 
         <Text style={styles.detailName}>{users.name}</Text>
        
        <Text style={styles.text}> Username: </Text>
        <View style={styles.inputView}>
          <TextInput 
            style={styles.inputText}
            defaultValue={users?.username}
            onChangeText={(text) => setUsername({text})}
          />
        </View>

        <Text style={styles.text}>Email: </Text>
        <View style={styles.inputView}>
          <TextInput 
            style={styles.inputText} 
            defaultValue={users?.email}
            onChangeText={(text) => setEmail({text})}
             />
        </View>

        <Text style={styles.text}>Phone: </Text>
        <View style={styles.inputView}>
          <TextInput  
            style={styles.inputText}
            defaultValue={users?.phone}
            onChangeText={(text) => setPhone({text})}
             />
        </View>

         <TouchableOpacity style={styles.loginButton}
            onPress={() =>  {navigation.navigate('Dashboard',{ID:users.id})}}>
            <Text style={styles.loginText}>Save</Text>
         </TouchableOpacity>

        </View> 
        );



        
      };
export default EditProfile;