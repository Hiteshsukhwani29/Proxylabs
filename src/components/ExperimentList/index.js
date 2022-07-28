import React from 'react';
import ExperimentListItem from "./ExperimentListItem";

function index() {
  return (
    <div className='bg-white rounded-lg mx-4 my-3 p-2 w-1/2' style={{ border: "1px solid #eeeeee" }}>
    <ExperimentListItem expno="1" expname="Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur"/>
    <ExperimentListItem expno="2" expname="Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur"/>
    <ExperimentListItem expno="3" expname="Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur"/>
    <ExperimentListItem expno="4" expname="Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur"/>
    <ExperimentListItem expno="5" expname="Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur"/>
    <ExperimentListItem expno="6" expname="Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur"/>
    <ExperimentListItem expno="7" expname="Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur"/>
    <ExperimentListItem expno="8" expname="Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur"/>
    <ExperimentListItem expno="9" expname="Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur"/>
    </div>
  )
}

export default index