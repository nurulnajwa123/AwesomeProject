import React from "react";

export const AddUser = ({ onAdd }) => {
  const handleOnSubmit = (add) => {
    add.preventDefault();
    onAdd(add.target.name.value, add.target.email.value);
    add.target.name.value = "";
    add.target.email.value = "";
  };

  return (
    <ScrollView style={styles.scrollView}>
    <Text style={styles.registerHighlight}>REGISTRATION</Text>
          
          <Text style={styles.SignUpText}>Username:</Text>
          <View style={styles.inputView}>
            <TextInput 
              style={styles.inputText}
              placeholderTextColor="#000"
              value={username}
              onChangeText={(value) => setUsername({value})}/>
              <TouchableOpacity style={styles.closeButton}
                onPress={()=>setUsername ('')}>
              <Image style={styles.closeIcon}
                source={require('../asset/img/closeIcon.png')}/>
              </TouchableOpacity> 
          </View>
  
          <Text style={styles.SignUpText}>Email:</Text>
          <View style={styles.inputView}>
            <TextInput  
              style={styles.inputText}
              placeholderTextColor="#000"
              value={email}
              onChangeText={(value) => setEmail({value})}/>
              <TouchableOpacity style={styles.closeButton}
                onPress={()=>setEmail ('')}>
              <Image style={styles.closeIcon}
                source={require('../asset/img/closeIcon.png')}/>
              </TouchableOpacity> 
          </View>
  
          <Text style={styles.SignUpText}>Password:</Text>
          <View style={styles.inputView}>
            <TextInput  
              style={styles.inputText}
              secureTextEntry
              placeholderTextColor="#000"
              value={password} 
              onChangeText={(value) => setPassword({value})}/>
              <TouchableOpacity style={styles.closeButton}
                onPress={()=>setPassword ('')}>
                <Image style={styles.closeIcon}
                source={require('../asset/img/closeIcon.png')}/>
              </TouchableOpacity>  
          </View>

          <TouchableOpacity style={styles.loginButton}
          onPress={handleOnSubmit}>
             <Text style={styles.loginText}>Submit</Text>
      </TouchableOpacity>
         
    </ScrollView>
  );
};
