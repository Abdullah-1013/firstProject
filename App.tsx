import React, { useEffect, useState } from "react";
import { Button, Text, View } from "react-native";
const App=()=>{
    const[data,Setdata]=useState([]);
    const getAPI=async()=>{
        const url='http://10.0.2.2:3000/User';
        let result=await fetch(url);
        result=await result.json();
        if(result){
            Setdata(result);
            
        }


    }

    useEffect(()=>{
        getAPI();
    },[])
    return(
        <View>
            {
                data.length?
                data.map((item)=><View>
                    <View style><Text style={{fontSize:30}}>{item.age}</Text></View>
                    <View><Button title="Delete"></Button></View>

                </View>)
                :null                    
        
                
            }
        </View>
    )
}
export default App;