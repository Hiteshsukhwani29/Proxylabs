import React, { useEffect } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Landing_bg from "../../assets/Landing_bg.png";
import HostIntro1 from "../../assets/HostIntro1.png";
import HostIntro2 from "../../assets/HostIntro2.png";
import HostIntro3 from "../../assets/HostIntro3.png";
import Slider from "../../components/Slider";
import Headings from "../../components/Headings";

export default function Index({ setShowExpandedMenu }) {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/host`;
    navigate(path);
  };

  return (
    <div className="" onClick={() => {
      setShowExpandedMenu(false);
    }}>
      <div className="flex justify-between items-center my-24 p-4">
        <div className="flex flex-col mx-16">
          <Headings Head="Host your college labs and workshops for all students." detail="Allow your location, select your field and dive into the list of colleges at your disposal :)"/>
          <div className="text-4xl font-bold  min-w-96 ">
          <Button
            className="!bg-accent !text-white !px-6 !py-2 !my-6 !rounded-3xl shadow-accent-btn !normal-case"
            variant="outlined"
            onClick={routeChange}
          >
            Lets host
          </Button>
          </div>
        </div>
        <div className="flex-0 mx-10">
        <Slider/>
          {/* <img className="h-80 max-w-lg rounded-lg" src={Landing_bg} alt="" /> */}
        </div>
      </div>

      <div data-aos="zoom-in" className="flex items-center justify-center ">
        <div>
          <img src={HostIntro1} alt="" />
        </div>
        <div className="w-[55%] px-16">
          <div className="font-bold text-3xl">
            <span className="text-green">Generate income </span>
            <br />
            from laboratories out of college schedule.
          </div>
          <div className="my-4 ">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati
            quisquam dolores quo voluptatem neque, vel molestias eius iure animi
            alias, recusandae illum ex magnam quibusdam iusto? Quisquam esse
            rerum nihil!
          </div>
        </div>
      </div>

      <div data-aos="zoom-in" className="flex items-center justify-center ">
        <div className="w-[55%] px-16">
          <div className="font-bold text-3xl">
            Encourage<span className="text-[#3E2FD2]">research culture </span>
            <br />
            within the college campus.
          </div>
          <div className="my-4 ">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati
            quisquam dolores quo voluptatem neque, vel molestias eius iure animi
            alias, recusandae illum ex magnam quibusdam iusto? Quisquam esse
            rerum nihil!
          </div>
        </div>
        <div>
          <img src={HostIntro2} alt="" />
        </div>
      </div>

      <div data-aos="zoom-in" className="flex items-center justify-center ">
        <div>
          <img src={HostIntro3} alt="" />
        </div>
        <div className="w-[55%] px-16">
          <div className="font-bold text-3xl">
            Exchange
            <span className="text-[#FABD27]">new ideas and innovations</span>
            <br />
            with bright minds
          </div>
          <div className="my-4 ">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati
            quisquam dolores quo voluptatem neque, vel molestias eius iure animi
            alias, recusandae illum ex magnam quibusdam iusto? Quisquam esse
            rerum nihil!
          </div>
        </div>
      </div>
    </div>
  );
}
