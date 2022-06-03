import React from 'react';
import {
StyleSheet,
View,
FlatList,
Text,
TouchableOpacity
} from "react-native";
 
export default class ApiPage extends React.Component {
  
 constructor(props) {
 super(props);
 this.state = {dataSource:[]};
}

  componentDidMount(){
  fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
  .then((responseJson)=> {
   this.setState({
   dataSource: responseJson})})}

  FlatListItemSeparator = () => {
    return (
      <View style={{
        height:7,
        width:"100%",
        backgroundColor:"rgba(0,0,0,0.5)"}}/>
    );
    }

    renderItem=(data)=>
       <TouchableOpacity style={styles.list}>
          <Text style={styles.lightText}>{data.item.username}</Text>
          <Text style={styles.lightText}>{data.item.email}</Text>
        </TouchableOpacity>

    render(){
      return(
        <View style={styles.container}>
          <FlatList
              data= {this.state.dataSource}
              ItemSeparatorComponent = {this.FlatListItemSeparator}
              renderItem= {item=> this.renderItem(item)}
              keyExtractor= {item=>item.id.toString()} />
        </View>
        )}
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
   },
  list:{
    paddingVertical: 5,
    margin: 10,
   }
});