
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './App/store.js';
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
 
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading={<div>Loading...</div>} persistor={persistor}>

            <App />
        </PersistGate>   

      </Provider>
       
    
    </BrowserRouter>
 
 
)
