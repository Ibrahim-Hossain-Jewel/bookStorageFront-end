import {
    REGISTRATIONDATA
} from "./constant";
import { fromJS } from "immutable";
//react immutable library for state container
const initialState = fromJS({
    isLoading : false,
    //when we are creating action then this automatically contains all each new data 
});

export const RegistrationReducer = (state = initialState, action)=>{
    switch (action.type) {
      default:
        return state;
    }
}