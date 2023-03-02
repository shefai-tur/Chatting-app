import React, { useState } from "react";
import { Link } from "react-router-dom";
import {BsFillEyeFill,BsFillEyeSlashFill} from 'react-icons/bs'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const Ragistration = () => {
  const auth = getAuth();
  let [email,setEmail] = useState ("");
  let [erremail,setErremail] = useState ("");
  let [name,setName] = useState ("");
  let [errname,setErrname] = useState ("");
  let [password, setPassword] = useState ("");
  let [errpassword, setErrpassword] = useState ("");
  let [eay, setEay] = useState (true);

  let handelEmail = (e) => {
    setEmail(e.target.value);
    setErremail("")
    
  };

  let handelName = (e) => {
    setName(e.target.value);
    setErrname("")
  };

  let handelPassword = (e) => {
    setPassword(e.target.value);
    setErrpassword("")
  };
  let handelSubmit =()=>{
    if(!email){
      setErremail("Email is requard")
    }else{
      if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(email)){
        setErremail("Invalid Emali!!")
      
      }
     
    }
    if(!name){
      setErrname("Name is requard")
    }
     if(!password){
      setErrpassword("Password is requard")
    }

    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
 console.log("registration Sucsses")
    
  })
  .catch((error) => {
    const errorCode = error.code;   
    const errorMessage = error.message;
    // ..
  });
   
  }

  let handelEay =()=>{
    if(eay){
      setEay(false)
    }else{
      setEay(true)
    }
  }

  return (
    <div className="flex">
      <div className="w-1/2 flex justify-end bg-page pt-48">
        <div>
          <h1 className="text-white text-4xl mr-20  font-nuni font-bold">
            Get started with easily register
          </h1>
          <h2 className="text-white text-xl mr-20 mt-2.5 font-nuni font-regular">
            Free register and you can enjoy it
          </h2>
    
          <div className="relative w-96 border border-primary border-2px rounded-[10px] mt-14">
            <input
              onChange={handelEmail}
              className="w-full p-[26px] rounded-[10px] text-primary text-xl font-nuni font-semibold  outline-none"
              type="email"
            />
            <h3 className="absolute top-[-13px] left-[50px] bg-page h-[13px] px-8 text-[#11175D] text-sm font-nuni font-semibold">
              Email Addres
            </h3>
            
          </div>
          <h1 className="w-96 bg-red-400 text-white text-sm font-nuni font-semibold rounded-[10px] mt-1 text-center">{erremail}</h1>

          <div className="relative w-96 border border-primary border-2px rounded-[10px] mt-14">
            <input
              onChange={handelName}
              className="w-full p-[26px] rounded-[10px] text-primary text-xl font-nuni font-semibold outline-none"
              type="text"
            />
            <h3 className="absolute top-[-13px] left-[50px] bg-page h-[13px] px-8 text-[#11175D] text-sm font-nuni font-semibold">
              Full Name
            </h3>
          </div>
          <h1 className="w-96 bg-red-400 text-white text-sm font-nuni font-semibold rounded-[10px] mt-1 text-center">{errname}</h1>

          <div className="relative w-96 border border-primary border-2px rounded-[10px] mt-14">
            <input
            onChange={handelPassword}
              className="w-full p-[26px] rounded-[10px] text-primary text-xl font-nuni font-semibold outline-none"
             
                type={eay?"password":"text"}
               
              
            />
            <h3 className="absolute top-[-13px] left-[50px] bg-page h-[13px] px-8 text-[#11175D] text-sm font-nuni font-semibold ">
              Password
            </h3>
            <div onClick={handelEay} className="absolute top-[30px] right-[20px]">
              {eay
              ?
              <BsFillEyeSlashFill/>
              :
              <BsFillEyeFill/>
              }
              
             
            </div>
          </div>
          <h1 className="w-96 bg-red-400 text-white text-sm font-nuni font-semibold rounded-[10px] mt-1 text-center">{errpassword}</h1>
          <button onClick={handelSubmit} className="w-96 bg-primary text-white py-6 mt-12 rounded-full text-xl font-nuni font-semibold">
            Sign up
          </button>
          <p className="mt-8 ml-20 text-sm font-nuni font-regular text-white">
            Already have an account ?
            <span className="font-bold text-primary">
              <Link to="/login">Sign In</Link>
            </span>{" "}
          </p>
        </div>
      </div>
      <div className="w-1/2">
        <image>
          <img
            className="w-full h-screen object-cover "
            src="images/reg-img.png"
            alt="reg-img"
            loading="lazy"
          />
        </image>
      </div>
    </div>
  );
};
export default Ragistration;
