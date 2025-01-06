import { createSlice } from "@reduxjs/toolkit";


const initialState={
   
isSidebarOpen :false,
isProfileDropdownOpen:false
   
    
}


export const toggleSlice=createSlice({
    name:"toggle",
    initialState,
    reducers:{
        toggleSidebar:(state)=>{
            state.isSidebarOpen=!state.isSidebarOpen
        },
        toggleDropdown:(state)=>{
            state.isProfileDropdownOpen =!state.isProfileDropdownOpen
        }
    }
})


export const {toggleSidebar,toggleDropdown}=toggleSlice.actions;
export default toggleSlice.reducer;
