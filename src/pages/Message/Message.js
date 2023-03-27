import React from "react";
import Friendrequest from "../../componets/Friendrequest";
import Groupsrequest from "../../componets/Groupsrequest";
import Search from "../../componets/Search";
import Sidbar from "../../componets/Sidbar";

const Message = () => {
  return (
    <div className="bg-page">
      <div className="flex p-6 gap-x-11	">
        <div className="w-[186px]">
          <Sidbar active="msg" />
        </div>
        <div className="w-[573px]">
          <Search />
          <Groupsrequest />
          <Friendrequest />
        </div>
        <div className="w-[980px]">shefaitur rahman</div>
      </div>
    </div>
  );
};

export default Message;
