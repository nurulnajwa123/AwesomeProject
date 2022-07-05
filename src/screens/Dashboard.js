import React, { useEffect, useState } from "react";
import {
  View,
  Text, 
  FlatList,
  TouchableOpacity,
  ScrollView,
  SafeAreaView, 
  StyleSheet,
  Modal,
  TextInput

} from 'react-native';
import {useNavigation} from "@react-navigation/native"; 
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../styles/styles';


const DATA= [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    "phone": "1-770-736-8031 x56442",
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    phone: "010-692-6593 x09125",
  },
  {
    id: 3,
    name: "Clementine Bauch",
    username: "Samantha",
    email: "Nathan@yesenia.net",
    phone: "1-463-123-4447",
  },
  {
    id: 4,
    name: "Patricia Lebsack",
    username: "Karianne",
    email: "Julianne.OConner@kory.org",
    phone: "493-170-9623 x156",
  },
  {
    id: 5,
    name: "Chelsey Dietrich",
    username: "Kamren",
    email: "Lucio_Hettinger@annie.ca",
    phone: "(254)954-1289",
  },
  {
    id: 6,
    name: "Mrs. Dennis Schulist",
    username: "Leopoldo_Corkery",
    email: "Karley_Dach@jasper.info",
    phone: "1-477-935-8478 x6430",
  },
  {
    id: 7,
    name: "Kurtis Weissnat",
    username: "Elwyn.Skiles",
    email: "Telly.Hoeger@billy.biz",
    phone: "210.067.6132",
  },
  {
    id: 8,
    name: "Nicholas Runolfsdottir V",
    username: "Maxime_Nienow",
    email: "Sherwood@rosamond.me",
    phone: "586.493.6943 x140",
  },
  {
    id: 9,
    name: "Glenna Reichert",
    username: "Delphine",
    email: "Chaim_McDermott@dana.io",
    phone: "(775)976-6794 x41206",
  },
  {
    id: 10,
    name: "Clementina DuBuque",
    username: "Moriah.Stanton",
    email: "Rey.Padberg@karina.biz",
    phone: "024-648-3804",
  }
]


  const Dashboard = props => {
    const id = props.route.params;   
    const navigation = useNavigation();
      const [users,setUsers] = useState([]);
      const [userDetails, setUserDetails] = useState();
      const [data, setData] = useState (DATA)
      const [isRender, setisRender] = useState (false);
      const [isModalVisible, setisModalVisible] = useState (false);
      const [username, setUsername] = useState ();
      const [email, setEmail] = useState ();
      const [phone, setPhone] = useState ();
      const [editItem, seteditItem] = useState ();


////////profile for edit//////////////////

const onPressItem=(item)=> {
  navigation.navigate('EditProfile');
  setUsername(item.username)
  setEmail(item.email)
  setPhone(item.phone)
  seteditItem(item.id)
}

  const renderItem = ({item})=> {
      return(
          <TouchableOpacity
         style={styles.list}
         onPress={()=> onPressItem(item)}>
          <Text style={styles.boxText}>{item.username}</Text>
          <Text style={styles.boxText}>{item.email}</Text>
          </TouchableOpacity>
      )
  }
  const handleEditItem=(editItem)=>{

    const newData= data.map(item=> {
  if (item.id==editItem) {
    item.username= username;
    item.email= email;
    item.phone= phone;
    return item;
  }
  return item;
    })
    setData(newData);
    setisRender(!isRender)
  }
  
   const onPressSaveEdit=() => {
  handleEditItem(editItem);
  setisModalVisible(false);
      }
  
 
/// user register////////////////////////////////////

      useEffect(() => {
        getUserData();
      }, []);
    
      const getUserData = async () => {
        const userData = await AsyncStorage.getItem('userData');
        if (userData) {
          setUserDetails(JSON.parse(userData));
        }
      };

///////////////////////////////////////////////////////////////////////////////
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
              <Text style={styles.hightlight2}> User Register  </Text>
            <ScrollView>
              <View>
                {users.map((users) => {
                  return (
                    <View>
                      <Text style={styles.item}>{userDetails.username}</Text>
                      <Text style={styles.item}>{userDetails.email}</Text>
                    </View>
                  );
                })}
              </View>
            </ScrollView>
             

             <Text style={styles.hightlight2}> For Edit </Text>
              <FlatList
                data={data}
                keyExtractor ={(item) => item.id.toString()}
                renderItem= {renderItem}
                extraData = {isRender}
                ItemSeparatorComponent={ItemDivider}/> 


              <Text style={styles.hightlight2}> JSON List </Text>
               <FlatList
                  data={users}
                  keyExtractor={({ id }) => id.toString()}
                  renderItem={renderUser}
                  ItemSeparatorComponent={ItemDivider}/> 

<Modal
        animationType= 'fade'
        visible={isModalVisible}
        onRequestClose={()=> setisModalVisible(false)}
        >
     <View style={styles.modalView}>
        <Text style={styles.text}> Update Profile</Text>
        <TextInput style={styles.textInput}
        onChangeText={(username)=>setUsername(username)}
        defaultValue= {(username)}
        editable={true}
        multiline ={false}
        />

        <TextInput style={styles.textInput}
        onChangeText={(email)=>setEmail(email)}
        defaultValue= {(email)}
        editable={true}
        multiline ={false}
        />

      <TextInput style={styles.textInput}
        onChangeText={(phone)=>setPhone(phone)}
        defaultValue= {(phone)}
        editable={true}
        multiline ={false}
        />

        <TouchableOpacity onPress={()=> onPressSaveEdit()}
        style= {styles.touchableSave}>

        <Text style= {styles.text}> Save</Text>
        </TouchableOpacity>
        
     </View>
        </Modal>
     
            </View>
            
          )
      }
    export default Dashboard;

