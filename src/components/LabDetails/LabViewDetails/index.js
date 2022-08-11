import React from "react";
import { Button } from "@mui/material";

export default function Index() {
  return (
    <>
      <div className=" bg-gray flex-1 h-[1px] mt-3"></div>
      <div className=" my-6  py-4">
        <div className="font-semibold py-2">Requirements</div>
        <div className="text-sm py-2 ">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt
          exercitationem architecto perferendis qui ducimus deleniti saepe
          minima, tempore ea illum Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Sit molestiae ratione odio quam. Odit voluptas,
          repellat delectus iure ea nobis doloribus quas quasi magni dicta porro
          dignissimos magnam debitis, harum voluptatum! Impedit natus ipsa
          explicabo ea illo recusandae odit iste numquam ipsum cum, quae
          voluptatem, ex aspernatur? Nostrum, vitae iusto?
        </div>
        <Button
          className="!bg-white !text-black !px-6  !py-1 !rounded-3xl !mt-6 "
          variant="outlined"
        >
          Download Exp PDF
        </Button>
      </div>
      <div className=" bg-gray flex-1 h-[1px] mt-3"></div>
      <div className="flex justify-between items-center pt-6">
        <Button
          className="!bg-white !text-black !px-12  !py-2 !rounded-full "
          variant="outlined"
        >
          Upload Experiment
        </Button>

        <div>
          <Button
            className="!bg-white !text-black !px-6  !py-2 !rounded-full !mr-4 "
            variant="outlined"
          >
            Add Review
          </Button>

          <Button
            className="!bg-accent !text-white !px-6  !py-2 !rounded-full"
            variant="outlined"
          >
            Submit
          </Button>
        </div>
      </div>
    </>
  );
}
