import { createSlice } from "@reduxjs/toolkit";

const initialState={

    cartItems:[],
    totalAmount:0,
    totalItems:0,
    

    
}


export const cartSlice=createSlice({
    name:"cart",
    initialState,
    reducers:{
        addItem:(state,action)=>{
            const newItem=action.payload;
            const existingItem=state.cartItems.find(item=>item.id==newItem.id)


            if(existingItem){
                existingItem.quantity++;
                existingItem.totalPrice +=newItem.price ;
               
                state.totalAmount +=newItem.price  ;
                state.totalItems += 1;
                
            }else{
                state.cartItems.push({
                    ...newItem,
                    quantity:1,
                    totalPrice: newItem.price ,


            })
            state.totalAmount +=newItem.price  ;
            state.totalItems += 1;
            

            }

        },
        removeItem:(state,action)=>{
            const id=action.payload;
            const existingItem=state.cartItems.find(item=>item.id==id)

            if(existingItem.quantity===1){
                state.cartItems=state.cartItems.filter(item=>item.id!==id)
                state.totalAmount -=existingItem.price  ;
                state.totalItems -= 1;

            }else{
                existingItem.quantity--;
                existingItem.totalPrice -=existingItem.price ;
                state.totalAmount -=existingItem.price  ;
                state.totalItems -= 1;

            }
        },
        clearCart:()=>{},

    }

})


export const {addItem,removeItem,clearCart}=cartSlice.actions;

export default cartSlice.reducer;





