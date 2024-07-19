import { ADD_TO_CART } from "./constants";
const initilastate=[];

export const reducer=(state=initilastate,action)=>{
  switch(action.type){
    case ADD_TO_CART:
        return[
            ...state,
            action.data
        ]
        default:
            return state
  }
}