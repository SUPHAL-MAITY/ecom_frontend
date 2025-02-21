import React ,{useEffect,useState} from 'react'
import axios from "axios"
import { Navigate } from 'react-router-dom'
import Loader from './Loader/Loader.jsx'



const AdminProtectedRoutes = ({children}) => {
    const [auth,setAuth]=useState(false)
    const [loading,setLoading]=useState(true)

  useEffect(()=>{
    fetchAuthStatus()

  },[])

   const fetchAuthStatus=async()=>{
    try {
      const {data}=await axios.get(`http://localhost:3000/api/v1/auth`,{withCredentials:true})
      console.log("auth data",data)
      setAuth(data?.data?.auth)
      setLoading(false)
      
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
     
    }

  if(loading) return (<Loader/>)
  return (
    auth ? children : <Navigate to="/login"/>
  )
}

export default AdminProtectedRoutes
