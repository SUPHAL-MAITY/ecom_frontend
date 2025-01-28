import React,{useEffect,useState}  from "react";
import "./login.css";

import {useFormik} from "formik"
import useDebounce from "../../hooks/useDebounce.jsx";
import axios from "axios"
import * as Yup from "yup";

const Login = () => {

const formik=useFormik({
    initialValues:{
        email:"",
        password:""
    },
    validationSchema:Yup.object({
        email:Yup.string().email("Invalid email address").required("Email address is required"),
        password:Yup.string().required("password is required")
    }),

    onSubmit: async(values,{resetForm})=>{
        console.log(values)
        try{
            const {data}=await axios.post("http://localhost:3000/api/v1/login",{values},{withCredentials:true})
            console.log(data)
            resetForm()

        }catch(err){
            console.log(err)
            
            resetForm()
            alert("invalid credentials")

        }
    }



})


  return (
    <>
      <div className="panda">
        <div className="ear"></div>
        <div className="face">
          <div className="eye-shade"></div>
          <div className="eye-white">
            <div className="eye-ball"></div>
          </div>
          <div className="eye-shade rgt"></div>
          <div className="eye-white rgt">
            <div className="eye-ball"></div>
          </div>
          <div className="nose"></div>
          <div className="mouth"></div>
        </div>
        <div className="body"> </div>
        <div className="foot">
          <div className="finger"></div>
        </div>
        <div className="foot rgt">
          <div className="finger"></div>
        </div>
      </div>

      <form  onSubmit={formik.handleSubmit}   className="login-form">
        <div className="hand"></div>
        <div className="hand rgt"></div>
        <h1 className="login-heading">Login</h1>
        <div className="form-group">
          <input  name="email" className="form-control"  value={formik.values.email} onChange={formik.handleChange} />
          <label className="form-label">Email </label>
          {formik.errors.email && <p className="text-blue-500">{formik.errors.email}</p>}
        </div>
        <div className="form-group">
          <input
            id="password"
            type="password"
             name="password"           
            className="form-control"
            value={formik.values.password}
            onChange={formik.handleChange}
          />
          <label className="form-label">Password</label>
          {formik.errors.password && <p className="text-blue-500">{formik.errors.password}</p>}
          <p className="alert">Invalid Credentials..!!</p>
          <button className="login-btn">Login </button>
        </div>
        <h1 className="form-or">or</h1>

        <button className="login-btn">Login with google</button>
      </form>
    </>
  );
};

export default Login;
