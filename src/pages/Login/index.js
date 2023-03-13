import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className="flex">
      <div className="w-1/2 flex justify-end bg-page pt-56">
        <div>
        <h1 className="text-white text-4xl mr-20  font-nuni font-bold">
          Get started with easily register
        </h1>
        <h1 className="text-white text-4xl mr-20  font-nuni font-bold">
          Get started with easily register
        </h1>
        <h2 className="text-white text-xl mr-20 mt-2.5 font-nuni font-regular">Free register and you can enjoy it</h2>
               
        <div className="relative w-96 border border-primary border-2px rounded-[10px] mt-14">
        <input className="w-full p-[26px] rounded-[10px] text-primary text-xl font-nuni font-semibold  outline-none" type="email" />
        <h3 className="absolute top-[-13px] left-[50px] bg-page h-[13px] px-8 text-[#11175D] text-sm font-nuni font-semibold">Email Addres</h3>
        </div>

        <div className="relative w-96 border border-primary border-2px rounded-[10px] mt-14">
        <input className="w-full p-[26px] rounded-[10px] text-primary text-xl font-nuni font-semibold outline-none" type="password" />
        <h3 className="absolute top-[-13px] left-[50px] bg-page h-[13px] px-8 text-[#11175D] text-sm font-nuni font-semibold ">Password</h3>
        </div>
       <button className="w-96 bg-primary text-white py-6 mt-12 rounded-full text-xl font-nuni font-semibold">Sign up</button>
       <p className="mt-8 ml-20 text-sm font-nuni font-regular text-white">Don’t have an account ?<span className="font-bold text-primary"><Link to="/registration">Sign up</Link></span> </p>
        </div>
      </div>
      <div className="w-1/2">
        <image>
          <img
            className="w-full h-screen object-cover "
            src="images/login.png"
            alt="reg-img"
            loading="lazy"
          />
        </image>
      </div>
    </div>
  )
}

export default Login