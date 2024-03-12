import React from "react";
import { Link } from "react-router-dom";
const Started = () => {
  return (
    <div className="bg-page ">
      <image>
        <img
          className="mx-auto pt-[138px] pb-[22px]"
          src="images/started.png"
          alt="started.png"
          loading="lazy"
        />
      </image>
      <div className="bg-primary ml-2.5 rounded-t-[20%]">
        <h1 className=" pt-20 text-3xl text-white text-center font-nuni font-black	">
          Welcome to “Chatting”
        </h1>
        <h2 className="mx-auto text-2xl text-white text-center font-nuni font-medium mt-8 w-60">
          The place where you will find friends to chat with
        </h2>
        <div className="flex justify-center py-24 drop-shadow-2xl">
          <button className="   text-2xl text-white bg-page font-nuni font-black  border rounded-2xl py-6 px-32 border-none">
            <Link to="registration">Get Started</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Started;
