import React, { useEffect, useState } from 'react';
import { 
Text,
View,
Image,
TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native'; 
import styles from '../styles/styles';

     const Detail = props => {
        const navigation = useNavigation();
        const id = props.route.params.ID; 
        const [users, setUsers] = useState([]);

              
        useEffect(()=>{
            console.log('print params : ', props.route.params.ID)
            fetchData()
          },[]);

          const fetchData = () => {
            fetch(`http://jsonplaceholder.typicode.com/users/${id}`)
              .then(response => response.json())
              .then(jsonResponse => {setUsers(jsonResponse),
              console.log('response data : ', jsonResponse)})
              .catch(error => console.log(error))
          };

      return (
        <View style={styles.containerDetail}> 
           <View>
           <Image source={{uri: 'https://i.pravatar.cc//'}}
          style={styles.picture}/> 

               <Text style={styles.detailName}>{users?.name}</Text>
               <Text style={styles.text}>Username   : {users?.username}</Text>
               <Text style={styles.text}>Email           : {users?.email}</Text>
               <Text style={styles.text}>Phone          : {users?.phone}</Text>
            </View>
 
         <TouchableOpacity style={styles.button}
            onPress={() => {navigation.navigate('EditProfile',{ID:users.id})}}>
           <Text style={styles.buttonText}>Update</Text>
        </TouchableOpacity>
        </View>
           );
};
export default Detail;