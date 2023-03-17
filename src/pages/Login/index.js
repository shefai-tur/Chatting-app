import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { Rings } from "react-loader-spinner";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FcGoogle } from "react-icons/fc";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { userLoginInfo } from "../../slice/userSlice";
const Login = () => {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const dispatch = useDispatch()
  let navigate = useNavigate();
  let [email, setEmail] = useState("");
  let [erremail, setErremail] = useState("");
  let [password, setPassword] = useState("");
  let [errpassword, setErrPassword] = useState("");
  let [loader, setLoader] = useState(true);
  let [loginsuc, setLoginsuc] = useState("");
  let [eay, setEay] = useState(true);
  let handelemail = (e) => {
    setEmail(e.target.value);
    setErremail("");
  };
  let handelpassword = (e) => {
    setPassword(e.target.value);
    setErrPassword("");
  };
  let handelsignin = () => {
    if (!email) {
      setErremail("please Enter Your Email");
    }
    if (!password) {
      setErrPassword("Enter Your Password");
    }
    signInWithEmailAndPassword(auth, email, password)
      .then((user) => {
        setLoginsuc("SignIn Successfuly");
        toast("Login Successful");
        dispatch(userLoginInfo(user.user))
       localStorage.setItem("userInfo",JSON.stringify(user))
        setLoader(false);
        setTimeout(() => {
          navigate("/home");
          setLoader(true);
        }, 3000);
      })
      .catch((error) => {
        const errorCode = error.code;
        if (errorCode.includes("auth/wrong-password")) {
          setErrPassword("password Not Correct");
        }
        if (errorCode.includes("auth/invalid-email")) {
          setErremail("Not valid-email");
        }
        if (errorCode.includes("auth/user-not-found")) {
          setErremail("Not Register Your Email");
        }
      });
  };
  let handelglogin = () => {
    signInWithPopup(auth, provider).then(() => {
      navigate("/home");
    });
  };
  let handelEay = () => {
    if (eay) {
      setEay(false);
    } else {
      setEay(true);
    }
  };
  return (
    <div className="flex">
      <div className="w-1/2 flex justify-end bg-page pt-56">
        <div>
          <ToastContainer />
          <h1 className="text-white text-4xl mr-20  font-nuni font-bold">
            Login to your account!
          </h1>
          <div
            onClick={handelglogin}
            className="relative border py-2 w-[50%] mt-2 bg-primary rounded-lg"
          >
            <h2 className=" text-white text-xl  mt-2.5 ml-10 font-nuni font-regular">
              Login with Google
            </h2>
            <FcGoogle className="absolute top-4 left-0 text-3xl" />
          </div>

          <h2 className="text-white text-2xl bg-primary mr-20 mt-2.5 font-nuni font-regular">
            {loginsuc}
          </h2>
          <div className="relative w-96 border border-primary border-2px rounded-[10px] mt-14">
            <input
              onChange={handelemail}
              className="w-full p-[26px] rounded-[10px] text-primary text-xl font-nuni font-semibold  outline-none"
              type="email"
            />
            <h3 className="absolute top-[-13px] left-[50px] bg-page h-[13px] px-8 text-[#11175D] text-sm font-nuni font-semibold">
              Email Addres
            </h3>
          </div>
          <h3 className="bg-red-500 w-96 mt-1.5 rounded-[10px]  px-8 text-white text-sm font-nuni font-sm ">
            {erremail}
          </h3>

          <div className="relative w-96 border border-primary border-2px rounded-[10px] mt-14">
            <input
              onChange={handelpassword}
              className="w-full p-[26px] rounded-[10px] text-primary text-xl font-nuni font-semibold outline-none"
              type={eay ? "password" : "text"}
            />
            <h3 className="absolute top-[-13px] left-[50px] bg-page h-[13px] px-8 text-[#11175D] text-sm font-nuni font-semibold ">
              Password
            </h3>
            <div
              onClick={handelEay}
              className="absolute top-[30px] right-[20px]"
            >
              {eay ? <BsFillEyeSlashFill /> : <BsFillEyeFill />}
            </div>
          </div>
          <h3 className="bg-red-500 w-96 mt-1.5 rounded-[10px]  px-8 text-white text-sm font-nuni font-sm ">
            {errpassword}
          </h3>

          {loader ? (
            <button
              onClick={handelsignin}
              className="w-96 bg-primary text-white py-6 mt-12 rounded-full text-xl font-nuni font-semibold"
            >
              Sign in
            </button>
          ) : (
            <div className="w-96 pl-32 mt-12">
              <Rings
                height="90"
                width="90"
                color="#844F50"
                radius="6"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                ariaLabel="rings-loading"
              />
            </div>
          )}

          <p className="mt-8 ml-20 text-sm font-nuni font-regular text-white">
            Don’t have an account ?
            <span className="font-bold text-primary">
              <Link to="/registration">Sign up</Link>
            </span>
          </p>
          <p className="mt-2 ml-28 text-sm font-nuni font-bold text-primary">
           <Link to="/forgetpassword">Forget Password</Link> 
          </p>
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
  );
};

export default Login;
