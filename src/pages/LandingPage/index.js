import React from "react";
import Searchbar from "../../components/Searchbar";
import Banner from "../../components/Banner";
import Labs from "../../components/Labs";
import Students from "../../components/Students";

function index() {
  return (
    <div className="bg-bg1">
      <Searchbar />
      <Banner />
      <Labs/>
      <Students />
    </div>
  );
}

export default index;
