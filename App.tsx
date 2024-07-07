import React from 'react';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Button, Text,StyleSheet, View} from 'react-native';
const stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name="Login" component={Login} options={{title:"User Login", headerStyle:{
          backgroundColor:"red"
        },
        headerTitleStyle:{
          fontSize:30,
          fontWeight:"bold"
        }
        
        
        
        
        
        }}></stack.Screen>
        <stack.Screen name="Home" component={Home}></stack.Screen>
      </stack.Navigator>
    </NavigationContainer>
  );
};
const Home = () => {
  return (
    <View>
      <Text>Hello</Text>
    </View>
  );
};
const Login = props => {
  return (
    <View style={{fontSize:30, textAlign:"center", justifyContent:"center", color:"red"}}>
      <Text>Bye</Text>
      <Button
        title=" Go To Login Page"
        onPress={() => props.navigation.navigate('Home')}></Button>
    </View>
  );
};
export default App;
