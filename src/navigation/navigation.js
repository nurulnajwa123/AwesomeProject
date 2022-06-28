import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
 
import Login from '../screens/Login';
import Dashboard from '../screens/Dashboard';
import SignUp from '../screens/SignUp';
import Detail from '../screens/Detail';
import EditProfile from '../screens/EditProfile';
 
const Stack = createStackNavigator();
 
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
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
          name="Dashboard"
          component={Dashboard}
          options={{
          title: "Dashboard", 
          headerStyle: { backgroundColor: "#785a6a"},
          headerTintColor: '#fff', 
          headerTitleStyle: { fontWeight: "bold" },
          }}
        />

        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{
          title: "Register", 
          headerStyle: { backgroundColor: "#785a6a"},
          headerTintColor: '#fff', 
          headerTitleStyle: { fontWeight: "bold" },
          }}
        />

        <Stack.Screen
          name="Detail"
          component={Detail}
          options={{
          title: "User Details", 
          headerStyle: { backgroundColor: "#785a6a"},
          headerTintColor: '#fff', 
          headerTitleStyle: { fontWeight: "bold" },
          }}
        />

        <Stack.Screen
          name="EditProfile"
          component={EditProfile}
          options={{
          title: "Edit Profile", 
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