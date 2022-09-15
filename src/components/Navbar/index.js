import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import Coin from "../../assets/animation_coin.gif";
import OutlinePerson from "../../assets/nav_profile_icon.png";
import LoginComponent from "../LoginComponent";
import { Menu } from "heroicons-react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

function Index({
  setShowModal,
  setShowAddCurriculumCard,
  ShowAddCurriculumCard,
  setShowCompleteProfile,
  ShowExpandedMenu,
  setShowExpandedMenu,
}) {
  const state = useSelector((state) => state.t1);

  const { pathname } = useLocation();

  console.log(pathname);

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
      <div className="flex items-start pt-6 px-4 flex-0 bg-bg1">
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
          {pathname === "/" || pathname === "/Institute" ? (
            <>
              {type === "Institute" ? (
                <>
                  <div
                    className="bg-white border !border-accent flex h-min w-max mx-4 px-6 py-1 rounded-full flex-0 justify-center cursor-pointer"
                    onClick={() => {
                      setShowAddCurriculumCard(true);
                      setShowExpandedMenu(false);
                      setShowCompleteProfile(false);
                      console.log("true");
                    }}
                  >
                    Add Curriculum
                  </div>
                  <div
                    className="bg-white border !border-accent flex h-min w-max mr-4 px-6 py-1 rounded-full flex-0 justify-center cursor-pointer"
                    onClick={() => {
                      setShowCompleteProfile(true);
                      setShowExpandedMenu(false);
                      setShowAddCurriculumCard(false);
                    }}
                  >
                    Complete Profile
                  </div>
                </>
              ) : (
                <></>
              )}
            </>
          ) : (
            <></>
          )}
        </div>

        {!AlreadyLoggedIn ? (
          <div
            className="bg-white flex h-min w-max px-6 py-1 rounded-full flex-0 justify-center cursor-pointer border-accent1"
            onClick={() => {
              setShowModal(true);
              setShowExpandedMenu(false);
            }}
          >
            <div>Sign Up</div>
            <img className="h-6 w-6 ml-2" src={OutlinePerson} />
          </div>
        ) : (
          <div
            className="bg-white flex h-min w-max px-4 py-1 rounded-full flex-0 justify-center cursor-pointer border-black1 mr-6"
            onClick={() => {
              setShowExpandedMenu(true);
              setShowAddCurriculumCard(false);
              setShowCompleteProfile(false);
            }}
          >
            <Menu className="text-gray" />
            <img className="h-6 w-6 ml-2" src={OutlinePerson} />
          </div>
        )}
      </div>
    </>
  );
}

export default Index;
