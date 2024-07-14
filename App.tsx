import React, { useEffect, useState } from "react";
import { Button, Modal, Text, View } from "react-native";
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
    const Deleteuser=async(id)=>{
        const url="http://10.0.2.2:3000/User";
        let result = await fetch(`${url}/${id}`, {
            method: "DELETE"
        });
        result=await result.json();
        if(result){
            console.warn("User is deleted successfully.")
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
                    <View><Text style={{fontSize:30}}>{item.id}</Text></View>
                    <View><Button title="Delete" onPress={()=>Deleteuser(item.id)}></Button></View>
                    <View><Button title="Update"></Button></View>


                </View>)
                :null                    
            }
            <Modal visible={true} transparent={true}>
                <View>
                    <View>
                        <Text>Dummy Data</Text>
                        <Button title="Close"></Button>
                    </View>
                </View>

            </Modal>
        </View>
    )
}
export default App;