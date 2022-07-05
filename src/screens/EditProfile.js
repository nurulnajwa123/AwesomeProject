import React, {useState} from 'react';
import{
    SafeAreaView, 
    StyleSheet,
    View,
    Text,
    FlatList,
    Modal,
    TouchableOpacity,
    TextInput
} from 'react-native';
import styles from '../../src/styles/styles';

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


const EditProfile = () => {
    const [data, setData] = useState (DATA)
    const [isRender, setisRender] = useState (false);
    const [isModalVisible, setisModalVisible] = useState (false);
    const [username, setUsername] = useState ();
    const [email, setEmail] = useState ();
    const [phone, setPhone] = useState ();
    const [editItem, seteditItem] = useState ();
 
  const onPressItem=(item)=> {
    setisModalVisible(true);
    setUsername(item.username)
    setEmail(item.email)
    setPhone(item.phone)
    seteditItem(item.id)
  }

    const renderItem = ({item})=> {
        return(
            <TouchableOpacity
           style={styles.item}
           onPress={()=> onPressItem(item)}
            >
            <Text style={styles.text}>{item.username}</Text>
            <Text style={styles.text}>{item.email}</Text>
            <Text style={styles.text}>{item.phone}</Text>
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

    return (
        <SafeAreaView style= {styles.container}>
        <FlatList
        data={data}
        keyExtractor ={(item) => item.id.toString()}
        renderItem= {renderItem}
        extraData = {isRender}
        />

        
    <Modal
        animationType= 'fade'
        visible={isModalVisible}
        onRequestClose={()=> setisModalVisible(false)}
        >
     <View style={styles.modalView}>
        <Text style={styles.hightlight2}> Update Profile </Text>
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
        style= {styles.loginButton}>

        <Text style= {styles.loginText}> Save</Text>
        </TouchableOpacity>
        
     </View>
        </Modal>
        </SafeAreaView>
    );
};

export default EditProfile;



