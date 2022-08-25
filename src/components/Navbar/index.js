import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import Coin from "../../assets/animation_coin.gif";
import OutlinePerson from "../../assets/nav_profile_icon.png";
import LoginComponent from "../LoginComponent";
import { Menu } from "heroicons-react";
import { useSelector } from "react-redux";

function Index({ setShowModal , setShowAddCurriculumCard, ShowAddCurriculumCard}) {
  const state = useSelector((state) => state.t1);

  const [coins, setcoins] = useState(100);

  const [AlreadyLoggedIn, setAlreadyLoggedIn] = useState(false);
  const [Token, setToken] = useState("");
  const type = JSON.parse(localStorage.getItem("type"));

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("token"));
    if (token) {
      setAlreadyLoggedIn(true);
      setToken(token);
    }
  }, [Token]);

  return (
    <>
      <div className="flex items-start pt-6 px-4 flex-0">
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

        <div
          className={`bg-white border !border-accent flex h-min w-max mx-4 px-6 py-1 rounded-full flex-0 justify-center cursor-pointer ${
            type==="Institute" ? "block" : "hidden"
          }`}
          onClick={() => {setShowAddCurriculumCard(!ShowAddCurriculumCard);(console.log("true"))}}>
          Add Curriculum
        </div>
        <div
          className={`bg-white border !border-accent flex h-min w-max px-6 py-1 rounded-full flex-0 justify-center cursor-pointer ${
            type==="Institute" ? "block" : "hidden"
          }`}
        >
          Complete Profile
        </div>

        <div className="flex justify-around flex-1">
          <div
            className={`flex-0 flex items-center ${
              AlreadyLoggedIn ? "block" : "hidden"
            }`}
          >
            <img className="h-8 w-8" src={Coin} />
            <div className="text-sm flex font-semibold mx-2 items-center ">
              {coins}&nbsp;
              <div className="font-normal">coins left </div>
            </div>
          </div>
          {!AlreadyLoggedIn ? (
            <div
              className="bg-white flex h-min w-max px-6 py-1 rounded-full flex-0 justify-center cursor-pointer"
              onClick={() => setShowModal(true)}
            >
              <div>Sign Up</div>
              <img className="h-6 w-6 ml-2" src={OutlinePerson} />
            </div>
          ) : (
            <div className="bg-white flex h-min w-max px-4 py-1 rounded-full flex-0 justify-center cursor-pointer">
              <Menu className="text-gray"/>
              <img className="h-6 w-6 ml-2" src={OutlinePerson} />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Index;
