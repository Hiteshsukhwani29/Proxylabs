import React, { useState } from "react";
import logo from "../../assets/logo.png";
import Coin from "../../assets/animation_coin.gif";
import OutlinePerson from "../../assets/nav_profile_icon.png";
import LoginComponent from "../LoginComponent";

function Index() {
  const [coins, setcoins] = useState(100);
  const [profile, setprofile] = useState("");

  return (
    <>
      <div className="flex items-start pt-6 px-4">
        <img className="h-9 flex-0 mr-10 ml-5" src={logo} alt="Logo" />
        <div className="flex text-xs sm:text-[10px] flex-1 justify-between md:text-sm lg:text-[1rem] ml-10">
          <div className="hover:font-semibold focus:font-semibold active:font-semibold transition ease-out hover:ease-in duration-150">
            Home
          </div>
          <div className="hover:font-semibold focus:font-semibold active:font-semibold transition ease-out hover:ease-in duration-150">
            Institute
          </div>
          <div className="hover:font-semibold focus:font-semibold active:font-semibold transition ease-out hover:ease-in duration-150">
            Fields
          </div>
          <div className="hover:font-semibold focus:font-semibold active:font-semibold transition ease-out hover:ease-in duration-150">
            About us
          </div>
        </div>
        <div className="flex-1"></div>
        <div className="flex justify-around flex-1">
          <div className="flex-0 flex items-center">
            <img className="h-8 w-8" src={Coin} />
            <div className="text-sm flex font-semibold mx-2 items-center">
              {coins}&nbsp;
              <div className="font-normal">coins left </div>
            </div>
          </div>
          <div className="bg-white flex h-min w-max px-4 py-1 rounded-full flex-0 justify-center">
            <div ><LoginComponent/></div>
            <img className="h-6 w-6 ml-2" src={OutlinePerson} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
