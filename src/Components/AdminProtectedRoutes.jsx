import React ,{useEffect,useState} from 'react'
import axios from "axios"
import { Navigate,useLocation } from 'react-router-dom'
import Loader from './Loader/Loader.jsx'



const AdminProtectedRoutes = ({children}) => {
    const [auth,setAuth]=useState(null)
    const [loading,setLoading]=useState(true)
    const location=useLocation()

  useEffect(()=>{
    fetchAuthStatus()

  },[location.pathname])

   const fetchAuthStatus=async()=>{
    try {
     
      const {data}=await axios.get(`http://localhost:3000/api/v1/admin-auth`,{withCredentials:true})
      console.log("auth data",data)
      setAuth(data?.data?.auth)
      setLoading(false)
      
    } catch (error) {
      setLoading(false)
      setAuth(false)
      console.log(error)
    }finally{
      setLoading(false)
    }
     
    }

  if(loading) return (<Loader/>)

  
  return auth ? children : <Navigate to="/login"/>
    
  
}

export default AdminProtectedRoutes
