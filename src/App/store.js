import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist';

import storage from 'redux-persist/lib/storage'; 
import cartReducer from "../features/Cart/cart.js";
import toggleReducer from "../features/Toggle/toggle.js";



// Configuration  of  persistence for the cart slice

const cartPersistConfig = {
    key: 'cart',
    storage,
  };

  const togglePersistConfig = {
    key: 'toggle',
    storage,
  };


  // Wrapping the cart reducer with persistReducer
  const persistedCartReducer = persistReducer(cartPersistConfig, cartReducer);
  const persistedToggleReducer = persistReducer(togglePersistConfig, toggleReducer);
  


   const store=configureStore({
    reducer:{
        cart:persistedCartReducer,
        toggle:persistedToggleReducer
    }
  })


  const persistor=persistStore(store)


export { store, persistor };