import React from "react";
import Searchbar from "../../components/Searchbar";
import Banner from "../../components/Banner";
import Labs from "../../components/Labs";
import Navbar from "../../components/Navbar"

function index() {
  return (
    <div className="bg-bg1">
      <Navbar/>
      <Searchbar />
      <Banner />
      <Labs/>
    </div>
  );
}

export default index;
