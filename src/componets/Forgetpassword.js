import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Forgetpassword = () => {
    let [email,setEmail] = useState('')
    let navigate = useNavigate()
    const auth = getAuth();

    let handelupdate =()=>{
      sendPasswordResetEmail(auth, email)
  .then(() => {
    toast("Go to Email Reset your Password");
    setTimeout(()=>{
      navigate("/login")
    },4000)
    
  })
  .catch((error) => {
    const errorCode = error.code;
    if (errorCode.includes("auth/user-not-found")) {
      toast("Email Not Registar");
    }
  });
    }
  return (
    <div className="bg-primary w-full h-screen flex justify-center items-center ">
      <ToastContainer />
      <div className="bg-page h-72 w-96 mx-auto">
        <h1 className="text-white text-2xl font-bold font-pop ml-16 pt-10">
          Forget Your Password
        </h1>
        <input
        onChange={(e)=>setEmail(e.target.value)}
          className="mt-16 w-64 ml-16 p-2  rounded-lg border border-primary"
          type="email"
          placeholder="Enter Your Email !"
        />
        <div className="pt-10 ml-16">
          <button onClick={handelupdate} className="bg-primary hover:bg-white hover:text-primary duration-75 px-2.5 py-1.5 rounded-md text-white text-lg font-bold ">
            Update
          </button>
          <button className="bg-primary hover:bg-white hover:text-primary px-2.5 py-1.5 rounded-md text-white text-lg font-bold  ml-5">
            <Link to="/login">Back to Login</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Forgetpassword;
