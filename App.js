import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
 
import Login from './pages/FirstPage';
import AfterLogin from './pages/SecondPage';
import ApiPage from './pages/ThirdPage';
 
const Stack = createStackNavigator();
 
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
          title: "Login Page", 
          headerStyle: { backgroundColor: "#785a6a"},
          headerTintColor: "#fff",
          headerTitleStyle: { fontWeight: "bold",},
          }}
        />
        <Stack.Screen
          name="AfterLogin"
          component={AfterLogin}
          options={{
          title: "After Login Page",
          headerStyle: { backgroundColor: "#785a6a"},
          headerTintColor: "#fff", 
          headerTitleStyle: { fontWeight: "bold" },
          }}
        />
        <Stack.Screen
          name="ApiPage"
          component={ApiPage}
          options={{
          title: "Testing App", 
          headerStyle: { backgroundColor: "#785a6a"},
          headerTintColor: '#fff', 
          headerTitleStyle: { fontWeight: "bold" },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
 
export default App;
