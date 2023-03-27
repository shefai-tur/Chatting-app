import React from "react";
import { AiFillHome } from "react-icons/ai";
import { BsCloudUpload } from "react-icons/bs";
import { FiMessageSquare, FiLogOut } from "react-icons/fi";
import { IoMdNotifications, IoMdSettings } from "react-icons/io";
import { getAuth, signOut } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userLoginInfo } from "../slice/userSlice";
const Sidbar = ({active}) => {
  const auth = getAuth();
  let dispatch = useDispatch();
  let navigate = useNavigate();
  let handelLogout = () => {
    signOut(auth).then(() => {
      dispatch(userLoginInfo(null));
      localStorage.removeItem("userInfo");
      navigate("/login");
    });
  };
  return (
    <div className="bg-primary w-full rounded-xl">
      <div>
        <image>
          <img
            className="px-10 pt-8 rounded-full  "
            src="images/profileimg.png"
            alt="profileimg"
            loading="lazy"
          />
          <BsCloudUpload />
        </image>

        <div
          className={`px-16 pt-20 relative z-[1] after:z-[-1]
          ${active == "home"&&" after:bg-white"}after:w-[160px] after:h-[88px] after:absolute 
          after:top-16 after:right-0 after:rounded-tl-lg after:rounded-bl-lg  after:content-['']
           before:w-2.5 before:h-[88px]  before:bg-primary before:absolute before:top-16 
           before:right-0 before:content-[''] before:rounded-tl-lg before:rounded-bl-lg`}
        >
          <Link to="/home">
          <AiFillHome className={`text-5xl ${
              active == "home" ? " text-white" : " text-black"
            }`} />
            </Link>
        </div>
         

        <div className={`px-16 pt-20 relative z-[1] after:z-[-1]
          ${active=="msg"&&" after:bg-white"}after:w-[160px] after:h-[88px] after:absolute 
          after:top-16 after:right-0 after:rounded-tl-lg after:rounded-bl-lg  after:content-['']
           before:w-2.5 before:h-[88px]  before:bg-primary before:absolute before:top-16 
           before:right-0 before:content-[''] before:rounded-tl-lg before:rounded-bl-lg`}>
            <Link to="/message">
          <FiMessageSquare
            className={`text-5xl ${
              active == "msg" ? " text-white" : " text-black"
            }`}
          />
          </Link>
        </div>
       
        <div className="px-16 pt-20 relative z-[1] after:z-[-1]
         after:bg-white after:w-[160px] after:h-[88px] after:absolute 
          after:top-16 after:right-0 after:rounded-tl-lg after:rounded-bl-lg  after:content-['']
           before:w-2.5 before:h-[88px]  before:bg-primary before:absolute before:top-16 
           before:right-0 before:content-[''] before:rounded-tl-lg before:rounded-bl-lg">
        <IoMdNotifications
            className="text-5xl text-black " 
          />
        
         
        </div>
        <div className="px-16 pt-20">
          <IoMdSettings className="text-5xl text-white " />
        </div>
        <div onClick={handelLogout} className="px-16 pt-40 pb-12">
          <FiLogOut className="text-5xl text-white " />
        </div>
      </div>
    </div>
  );
};

export default Sidbar;
