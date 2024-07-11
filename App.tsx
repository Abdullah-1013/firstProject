import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
const App=()=>{
    const[Data,setData]=useState([])
    const getAPI=async()=>{
        const url="http://10.0.2.2:3000/User";
        let result=await fetch(url);
        result=await result.json();
        console.warn(result);
        if(result){
            setData(result)
        }
    }
        useEffect(()=>{
            getAPI();
        },[])
    return(
        <View>
            {
                Data.length ?
                Data.map((item)=>
                <View>
                    <Text style={{fontSize:30, color:"red", fontWeight:"bold"}}>{item.name}</Text>
                    <Text style={{fontSize:30, color:"green", fontWeight:"bold"}}>{item.age}</Text>
                    <Text style={{fontSize:30, color:"pink", fontWeight:"bold"}}>{item.email}</Text>

                </View>
                )
                :null
            }
        </View>




    );

}
export default App;