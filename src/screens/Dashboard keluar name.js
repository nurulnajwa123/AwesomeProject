import AsyncStorage from '@react-native-async-storage/async-storage';
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
      const [userDetails, setUserDetails] = useState([]);
 
      useEffect(()=>{
        getUserData()
      },[]);
      const getUserData = async () => {
        const userData = await AsyncStorage.getItem('userData');
        if (userData) {
          setUserDetails(JSON.parse(userData));
        }
      };

        useEffect(()=>{
          fetchData()
        },[]);

        const fetchData = () => {
          fetch("http://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(jsonResponse => setUsers(jsonResponse))
            .catch(error => console.log(error))
        };     

          const renderItem = ({item}) => {
            return (
               <TouchableOpacity style={styles.list} 
                 onPress={() => {navigation.navigate('EditProfile', {ID: userDetails.id})}}> 
                <Text style={styles.boxText}>Username : {userDetails.username}</Text>
                <Text style={styles.boxText}>Email: {userDetails.email}</Text>
              </TouchableOpacity>
            )
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

        const ItemDivider =()=>{
          return(
            <View style={{
              height:2,
              width:"100%",
              backgroundColor:"rgba(0,0,0,0.5)"}}/>
          );
          }
       
         return (
            <View style={styles.container}>
              <Text style={styles.hightlight2}> New List </Text>
              <FlatList
                  data={users}
                  keyExtractor={({ id }) => id.toString()}
                  renderItem={renderItem}
                  ItemSeparatorComponent={ItemDivider}/>  

              <Text style={styles.hightlight2}> List </Text>
               <FlatList
                  data={users}
                  keyExtractor={({ id }) => id.toString()}
                  renderItem={renderUser}
                  ItemSeparatorComponent={ItemDivider}/>  
            </View>
            
          )
      }

    export default Dashboard;


