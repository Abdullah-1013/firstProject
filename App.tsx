import React,{useEffect,useState}from "react";
import { Text,View } from "react-native";
const App=()=>{
  const [data,setdata]=useState(undefined);
  const getAPI= async()=>{
    const url="https://jsonplaceholder.typicode.com/posts/1";
    let result=await fetch(url);
    result=await result.json();
    setdata(result);
  }
  useEffect(()=>{
    getAPI();
  },[])

  return(
    <View>
      <Text style={{fontSize:30,fontWeight:"bold"}}>RESTFUL API</Text>
      {
        data ?<View>
          <Text style={{fontSize:30, fontWeight:"bold"}}>Id: {data.id}</Text>
          <Text style={{fontSize:30, fontWeight:"bold"}}>userId: {data.userId}</Text>
          <Text style={{fontSize:30, fontWeight:"bold"}}>Title: {data.title}</Text>
          <Text style={{fontSize:30, fontWeight:"bold"}}>Body: {data.body}</Text>
        </View>:null
      }
    </View>
  );
};
export default App;