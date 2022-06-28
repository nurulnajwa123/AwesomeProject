import React, { useEffect, useState } from "react";
import {
  View,
  Text, 
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from "@react-navigation/native"; 
import styles from '../styles/styles';
 
  const Dashboard = props => {
    const id = props.route.params;   
    const navigation = useNavigation();
      const [users,setUsers] = useState([]);
   
        useEffect(()=>{
          fetchData()
        },[]);

        const fetchData = () => {
          fetch("http://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(jsonResponse => setUsers(jsonResponse))
            .catch(error => console.log(error))
        };

        const ItemDivider =()=>{
          return(
            <View style={{
              height:2,
              width:"100%",
              backgroundColor:"rgba(0,0,0,0.5)"}}/>
          );
          }
           const renderUser = ({item}) => {
          return (
             <TouchableOpacity style={styles.list} 
               onPress={() => {navigation.navigate('EditProfile', {ID: item.id})}}> 
              <Text style={styles.boxText}>Username : {item.username}</Text>
              <Text style={styles.boxText}>Email: {item.email}</Text>
            </TouchableOpacity>
          )
        }
       
         return (
           
            <View style={styles.container}>
              <Text style={styles.hightlight2}> List </Text>
              <Text>{users.username}</Text>
               <FlatList
                  data={users}
                  keyExtractor={({ id }) => id.toString()}
                  renderItem={renderUser}
                  ItemSeparatorComponent={ItemDivider}/>  
            </View>
            
          )
      }
    export default Dashboard;


