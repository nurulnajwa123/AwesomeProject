import React, { Component } from 'react';
import { 
StyleSheet, 
View, 
Text,
TouchableOpacity
} from 'react-native';

export default class AfterLogin extends React.Component {

  render() 
  {
    return (
      <View style={styles.container}> 
      <Text style ={styles.highlight}>Hello : {this.props.route.params.page}</Text>
        
         <TouchableOpacity style={styles.Button}
          onPress={() => this.props.navigation.navigate('ApiPage')}>
          <Text style={styles.ButtonText}>Click Here</Text>
         </TouchableOpacity>

      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    margin:20,
    alignItems: "center",
    justifyContent: "center",
  },
  highlight:{
    fontWeight:"bold",
    fontSize:20,
    color:"#000000",
    marginBottom:30,
  },
  Button:{
    width:"50%",
    backgroundColor:"#785a6a",
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
  },
  ButtonText:{
    color:"white",
    fontWeight:"bold"
  }
});


