import React, {Component} from 'react';
import {
SafeAreaView,
StyleSheet,
View,
Text,
TextInput,
TouchableOpacity
} from 'react-native';
 
export default class Login extends React.Component {
   
    constructor(props) {
    super(props);
    this.state = {username: '', password:''};
  }
   
  render()
  {
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
            onChangeText={(password) => this.setState({ password })}/>
        </View>

        <TouchableOpacity style={styles.loginButton}
            onPress={() => this.props.navigation.navigate('AfterLogin',{page:this.state.username})}>
            <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
      
      </View>      
    </SafeAreaView>
    );
  };
};
 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    margin:30,
  },
  highlight:{
    fontWeight:"bold",
    fontSize:40,
    color:"#000000",
    marginBottom:20
  },
  inputView:{
    width:"90%",
    backgroundColor:"#cdd0dd",
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },
  inputText:{
    height:50,
    color:"black"
  },
  loginButton:{
    width:"50%",
    backgroundColor:"#785a6a",
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10,
  },
  loginText:{
    color:"white",
    fontWeight: "bold"
  }
  });
