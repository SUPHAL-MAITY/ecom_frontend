import React,{useEffect,useState}  from "react";
import {useFormik} from "formik"
import useDebounce from "../../hooks/useDebounce.jsx";
import axios from "axios"

import * as Yup from "yup";


const Signup = () => {
const [firstName,setFirstName]=useState("")
const [lastName,setLastName]=useState("")

const [countryCode,setCountryCode]=useState("")
const [phoneNumber,setPhoneNumber]=useState("")

const [address1,setAddress1]=useState("")
const [address2,setAddress2]=useState("")

const url = import.meta.env.VITE_API_URL;

const  debouncedFirstName=useDebounce(firstName,500)
const debouncedLastName=useDebounce(lastName,500)

const debouncedCountryCode=useDebounce(countryCode,500);
const debouncedPhoneNumber=useDebounce(phoneNumber,500)

const debouncedAddress1=useDebounce(address1,500)
const debouncedAddress2=useDebounce(address2,500)


//  name  ,  email , address , phone ,password,confirm Pasword , profileUrl


function resetInputs(){
  setFirstName("")
  setLastName("")
  setCountryCode("")
  setPhoneNumber("")
  setAddress1("")
  setAddress2("")
}





const formik=useFormik({
initialValues:{
  name:"",
  email:"",
  address:[],
  phone:"",
  password:"",
  confirmPassword:""
  
},

validationSchema:Yup.object({
  name:Yup.string().required("Name is required") ,
  email:Yup.string().email("Invalid email address").required("Email Address is required") ,
  address: Yup.array().of(Yup.string()).required("address is required").min(1,"At least one addresss is reauired"),
  phone:Yup.string()
  .matches(/^\d{10,12}$/, "Phone number must be between 10 and 12 digits")
  .required("Phone number is required"),
  password:Yup.string().matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,"Password must have 6 character which must contain atleast  one uppercase letter and one lower case letter,one number and a special character ").required("password is required"),
  confirmPassword:Yup.string().test("passwords-match","password must match",function(value){
    return this.parent.password===value
  }).required("confirm password is required"),
  
  

}),

onSubmit:async(values,{setSubmitting,resetForm})=>{
  

  try {

    const {data}=await axios.post(`${url}/api/v1/signup`,{values})
    
    resetForm()
    resetInputs()
    
  } catch (error) {
    console.log(error)
    resetForm()
    resetInputs()
    
  }
  
 
}




})


//for combining the first and last name
useEffect(()=>{
  
const combinedName= `${debouncedFirstName} ${debouncedLastName}`.trim()
formik.setFieldValue("name",combinedName)
},[debouncedFirstName,debouncedLastName])


/// for combining the country code and phone number
useEffect(()=>{
  
  const  combinedPhone= `${debouncedCountryCode} ${debouncedPhoneNumber}`
  formik.setFieldValue("phone",combinedPhone)
  },[debouncedCountryCode,debouncedPhoneNumber])



/// for combining the address 1 and address 2
useEffect(()=>{

  let  combinedAddress=[];
  if(debouncedAddress1){
    combinedAddress.push(debouncedAddress1)
  }
  if(debouncedAddress2){
    combinedAddress.push(debouncedAddress2)
  }

  formik.setFieldValue("address",combinedAddress)


},[debouncedAddress1,debouncedAddress2])





  return (
    <div className="  flex flex-col  sm:flex-row  font-serif">

      <div className="w-full   hidden  sm:flex  justify-center items-center  sm:w-1/2   ">
        <img
          className="w-1/2 h-[50vh]   rounded-2xl ring-2  ring-gray-300   hover:scale-110 ease-in-out duration-500  shadow-[0_0_20px_4px] shadow-slate-700"
          src="elegant.png"
          alt=""
        />
      </div>

     {/* right portion of page */}

      <div className="w-full drop-shadow-2xl min-h-screen border-l-2  sm:w-1/2 flex justify-center items-center  ">
        <div className="w-full sm:w-2/3 my-4  h-fit flex justify-center   mx-4 bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
          <form  onSubmit={formik.handleSubmit} className="w-full p-4 h-auto flex  flex-col  ">
            
            {/* first name and address block */}
            
            <div className="grid mt-4  gap-1 2xl:gap-6   mb-1  md:grid-cols-2">
              <div>
                <label
                  htmlFor="first_name"
                  className="block mb-1 text-sm font-medium text-gray-900 "
                >
                  First name
                </label>
                <input
                  type="text"
                  id="first_name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 "
                  placeholder="John"
                  value={firstName}
                  onChange={(e)=>setFirstName(e.target.value)}
                 
                  onBlur={formik.handleBlur}
                />
               {formik.touched.name && formik.errors.name &&  <p className="text-red-500"> {formik.errors.name}</p>}
              </div>
              <div>
                <label
                  htmlFor="last_name"
                  className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Last name
                </label>
                <input
                  type="text"
                  id="last_name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 "
                  placeholder="Doe"
                  value={lastName}
                  onChange={(e)=>setLastName(e.target.value)}
                  
                 
                />
              </div>
             
          
              
              <div>
                <label
                  htmlFor="address1"
                  className="block mb-1 text-sm font-medium text-gray-900 "
                >
                  Address 1
                </label>
                <input
                  type="text"
                  id="address1"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 "
                  placeholder=""
                  value={address1}
                  onChange={(e)=>setAddress1(e.target.value)}
                  onBlur={formik.handleBlur}
                  
                />
                 {formik.touched.address && formik.errors.address &&  <p className="text-red-500"> {formik.errors.address}</p>}
              </div>
              <div>
                <label
                  htmlFor="address2"
                  className="block mb-1 text-sm font-medium text-gray-900 "
                >
                  Address 2
                </label>
                <input
                  type="text"
                  id="address2"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2  "
                  placeholder=""
                  value={address2}
                  onChange={(e)=>setAddress2(e.target.value)}
                  onBlur={formik.handleBlur}
                  
                />
               
              </div>
            </div>
           



           
              
              <div >
                <label
                  htmlFor="phone"
                  className="block mb-1 2xl:mt-6 2xl:mb-4  text-sm font-medium text-gray-900 "
                >
                  Phone number
                </label>
                <input
                  type="number"
                  id="phone"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 "
                  placeholder="985124****"
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  
                />

                {formik.touched.phone && formik.errors.phone &&  <p className="text-red-500"> {formik.errors.phone}</p>}
              </div>


            <div className="">
              <label
                htmlFor="email"
                className="block mt-1 mb-1 2xl:mt-6 2xl:mb-4 text-sm font-medium text-gray-900 "
              >
                Email address
              </label>
              <input
                type="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 "
                placeholder="john.doe@company.com"
                
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
               {formik.touched.email && formik.errors.email &&  <p className="text-red-500"> {formik.errors.email}</p>}
            </div>

            {/* password */}

            <div className="">
              <label
                htmlFor="password"
                className="block mb-1 2xl:mt-6 2xl:mb-4 text-sm font-medium text-gray-900 "
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2   "
                placeholder="•••••••••"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.password && formik.errors.password &&  <p className="text-red-500"> {formik.errors.password}</p>}
            </div>

            {/* confirm password */}

            <div className="">
              <label
                htmlFor="confirmPassword"
                className="block mb-2  2xl:mt-6 2xl:mb-4 text-sm font-medium text-gray-900 "
              >
               Confirm  Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                className= {`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                  focus:ring-blue-500 focus:border-blue-500 block w-full p-2 
                  dark:bg-gray-700 dark:border-gray-600 
                  ${formik.touched.confirmPassword && formik.errors.confirmPassword ? "" : " mb-4 2xl:mb-10"}`}
                placeholder="•••••••••"
                
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.confirmPassword && formik.errors.confirmPassword &&  <p className="text-red-500 mb-4 2xl:mb-10"> {formik.errors.confirmPassword}</p>}
            </div>

       


            <button
              type="submit"
              className="text-white mb-4 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
            >
             {formik.isSubmitting ? "submitting":"submit"} 
            </button>

           
          </form>
        </div>
      </div>


    </div>
  );
};

export default Signup;
