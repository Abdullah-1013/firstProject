import React from "react";
import { Button, Image, ScrollView, Text, View } from "react-native";
import {useDispatch} from 'react-redux';
import { addtocart } from "./Actions";
const Product=(props)=>{
    const item=props.item
    const dispatch=useDispatch();
     const handleaddtocart=(item)=>{
        dispatch("Added to the cart",item)
     }
    return(
        <View>
            <Text style={{fontSize:20, margin:5, textAlign:"center"}}>{item.productid}</Text>
            <Text style={{fontSize:20, margin:5, textAlign:"center"}}>{item.name}</Text>
            <Text style={{fontSize:20, margin:5, textAlign:"center"}}>{item.price}</Text>
            <Image style={{width:200, height:200 }} source={{uri:item.Image}}></Image>
            <Button title="Add to Cart" onPress={()=>handleaddtocart(item)}></Button>
        </View>
    );
    
 
};
export default Product;