import React, { useState } from "react";
import { Alert, Button, TextInput, View } from "react-native";
const App=()=>{
    const[name,setname]=useState('');
    const[age,setage]=useState('');
    const[email,setemail]=useState('');

    const savedata=async()=>{
        if(!name||!age||!email)
        {
            Alert.alert("Please fill all the fields");
            return;
        }
        const url="http://10.0.2.2:3000/User";
        let result=fetch(url,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"

            },
            body:JSON.stringify({name,age,email})

        });
        result=(await result).json();
        if(result){
            console.warn("Data is saved successfully");
        }

    }
    return(
        <View>
            <TextInput value={name} onChangeText={(text)=>setname(text)} placeholder="Enter the name"></TextInput>
            <TextInput value={age} onChangeText={(text)=>setage(text)} placeholder="Enter the age"></TextInput>
            <TextInput value={email} onChangeText={(text)=>setemail(text)} placeholder="Enter the email"></TextInput>
            <Button title="Save Data" onPress={savedata}></Button>

        </View>




    );


}
export default App;