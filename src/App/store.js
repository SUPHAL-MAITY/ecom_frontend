import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist';

import storage from 'redux-persist/lib/storage'; 
import cartReducer from "../features/Cart/cart.js";



// Configuration  of  persistence for the cart slice

const persistConfig = {
    key: 'cart',
    storage,
  };



  // Wrappin the cart reducer with persistReducer
  const persistedCartReducer = persistReducer(persistConfig, cartReducer);
  


   const store=configureStore({
    reducer:{
        cart:persistedCartReducer,
    }
  })


  const persistor=persistStore(store)


export { store, persistor };