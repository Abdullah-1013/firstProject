import React from "react";
import {ScrollView,Text, View } from "react-native";
import Headers from "./Components/Headers";
import Product from "./Components/redux/Product";
const App=()=>{
    const product=[
        {
            productid:"A32",
            name:"Samsung",
            price:300,
            Image:"https://www.pexels.com/photo/selective-focus-photography-of-person-holding-turned-on-smartphone-"
       },
       {
        productid:"Nokia3310",
        name:"Nokia",
        price:150,
        Image:"https://www.pexels.com/photo/selective-focus-photography-of-person-holding-turned-on-smartphone-"
   },
   {
    productid:"V13",
    name:"Redmi",
    price:100,
    Image:'file:///C:/Users/ab/Downloads/mobile-phone-2636.png'
}
    ]
    return(
        <ScrollView>
            <Headers/>
            {
                product.map((item)=><Product item={item}/>)
            }
        </ScrollView>
    );
};
export default App;