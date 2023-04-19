import React from "react";
import { AiFillHome } from "react-icons/ai";
import { BsCloudUpload } from "react-icons/bs";
import { FiMessageSquare, FiLogOut } from "react-icons/fi";
import { IoMdNotifications, IoMdSettings } from "react-icons/io";
import { getAuth, signOut } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userLoginInfo } from "../slice/userSlice";
const Sidbar = ({ active }) => {
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
        <div className="relative ">
        <image>
          <img
            className="px-10 pt-8 rounded-full  "
            src="images/profileimg.png"
            alt="profileimg"
            loading="lazy"
          />
        </image>
        <BsCloudUpload className="absolute top-[72px] right-[80px] text-3xl" />
        <Link to="/profileImgUpload">
        <div className="w-24 h-24 hover:bg-[rgba(143,133,133,0.3)] rounded-full absolute top-[34px] left-[41px]"></div>
        </Link>
        </div>
        
        <div
          className={`${
            active == "home" &&
            "relative my-20 z-10 after:absolute after:top-0 after:left-0 after:bg-white after:content-[''] after:h-full after:w-[100%] after:z-[-1] flex flex-col items-center text-center p-[25px] after:rounded-lg before:absolute before:top-0 before:right-0 before:bg-primary before:content-[''] before:h-full before:w-[23px] before:rounded-l-lg before:drop-shadow-lg"
          }`}
        >
          <Link to="/home">
            <AiFillHome
              className={`mx-16 text-5xl ${
                active == "home" ? " text-primary" : " text-white my-20"
              }`}
            />
          </Link>
        </div>

        <div
          className={`${
            active == "msg" &&
            "relative z-10 after:absolute after:top-0 after:left-0 after:bg-white after:content-[''] after:h-full after:w-[100%] after:z-[-1] flex flex-col items-center text-center p-[25px] after:rounded-lg before:absolute before:top-0 before:right-0 before:bg-primary before:content-[''] before:h-full before:w-[23px] before:rounded-l-lg before:drop-shadow-lg"
          }`}
          >
          <Link to="/message">
            <FiMessageSquare
              className={`mx-16 text-5xl ${
                active == "msg" ? " text-primary" : " text-white my-20"
              }`}
            />
          </Link>
        </div>

        <div className={`${
            active == "ntf" &&
            "relative z-10 after:absolute after:top-0 after:left-0 after:bg-white after:content-[''] after:h-full after:w-[100%] after:z-[-1] flex flex-col items-center text-center p-[25px] after:rounded-lg before:absolute before:top-0 before:right-0 before:bg-primary before:content-[''] before:h-full before:w-[23px] before:rounded-l-lg before:drop-shadow-lg"
          }`}>
          <Link to="/notification">
            <IoMdNotifications
              className={`mx-16 text-5xl ${
                active == "ntf" ? " text-primary" : " text-white my-20"
              }`}
            />
          </Link>
        </div>
        <div className={`${
            active == "stng" &&
            "relative z-10 after:absolute after:top-0 after:left-0 after:bg-white after:content-[''] after:h-full after:w-[100%] after:z-[-1] flex flex-col items-center text-center p-[25px] after:rounded-lg before:absolute before:top-0 before:right-0 before:bg-primary before:content-[''] before:h-full before:w-[23px] before:rounded-l-lg before:drop-shadow-lg"
          }`}>
          <Link to="/settings">
            <IoMdSettings
              className={`mx-16 text-5xl ${
                active == "stng" ? " text-primary" : " text-white my-20"
              }`}
            />
          </Link>
        </div>
        <div onClick={handelLogout} className="px-16 pt-40 pb-12">
          <FiLogOut className="text-5xl text-white " />
        </div>
      </div>
    </div>
  );
};

export default Sidbar;
