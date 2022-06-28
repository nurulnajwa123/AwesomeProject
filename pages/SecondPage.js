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
      <Text style ={styles.highlight}>Hello Username: {this.props.route.params.page}</Text>
        
         <TouchableOpacity style={styles.Button}
          onPress={() => this.props.navigation.navigate('ApiPage')}>
          <Text style={styles.ButtonText}>Click Here</Text>
         </TouchableOpacity>

      </View>
    );
  }
}