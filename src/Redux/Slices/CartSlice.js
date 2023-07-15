import { createSlice } from "@reduxjs/toolkit";


export const CartSlice = createSlice({
    name:"cart",
    initialState:[],
    reducers:{
        addItem:(state, action)=>{
            state.push(action.payload);
        },

        removeItem:(state, action)=>{

            state = state.splice(action.payload, 1);
        }
    }
});

export const {addItem, removeItem} = CartSlice.actions;
export default CartSlice.reducer;