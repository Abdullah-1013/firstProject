import { ADD_TO_CART } from "./constants";
export function addtocart(item){
    return{
        type:ADD_TO_CART,
        data:item
    }
}