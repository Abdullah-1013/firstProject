import React from "react";
import { NavigationContainer} from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Button, Text, View } from "react-native";
const tabs=createMaterialTopTabNavigator();
const App=()=>{
  return(
    <NavigationContainer>
     <tabs.Navigator>
      <tabs.Screen name="Home" component={Home}></tabs.Screen>

      <tabs.Screen name="Login" component={Login}></tabs.Screen>


     </tabs.Navigator>
      
      
    </NavigationContainer>
  );
    
};
const Home=()=>{
  return(
    <View>
      <Text>Hello</Text>
    </View>
  )
}
const Login=(props)=>{
  return(
    <View>
      <Text>Bye</Text>
      <Button title=" Go To Login Page" onPress={()=>props.navigation.navigate("Home")}></Button>
    </View>
  )
}
export default App;