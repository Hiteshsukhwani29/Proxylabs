import React from "react";
import Rating from "@mui/material/Rating";

function index({ collegename, category, imgurl, labname, lat, lon, rating }) {
  let currentLat = 21.313499;
  let currentLon = 76.217673;

  const toRadian = (n) => (n * Math.PI) / 180;

  let lat2 = currentLat;
  let lon2 = currentLon;
  let lat1 = lat;
  let lon1 = lon;

  let R = 6371; // km
  let x1 = lat2 - lat1;
  let dLat = toRadian(x1);
  let x2 = lon2 - lon1;
  let dLon = toRadian(x2);
  let a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRadian(lat1)) *
      Math.cos(toRadian(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  let d = R * c;

  return (
    <>
      <div
        className="rounded-lg bg-white grid grid-flow-col grid-cols-2 pr-4 mt-4"
        style={{ border: "1px solid #eeeeee" }}
      >
        <div className="flex items-center ml-2">
          {imgurl != "" ? (
            <img className="h-12 w-12 rounded-full bg-white m-2" src={imgurl} />
          ) : (
            <div
              className="h-12 w-12 rounded-full bg-temp m-2"
              src={imgurl}
            ></div>
          )}
          <div className="flex flex-1 flex-col m-2 shrink-0">
            <div className="text-lg font-medium">{collegename}</div>
            <div className="mt-2 text-md font-bold">{category}</div>
          </div>
        </div>
        <div className="flex">
          <div className="h-auto w-[1px] opacity-40 m-2 bg-gray rounded-full"></div>
          <div className="flex flex-col m-2">
            <div className="text-md font-normal">{labname}</div>
            <div className="mt-2 flex items-center justify-between">
              <div className="text-xs font-medium text-accent">
                Closest&nbsp;&nbsp;
                <span className="text-xs font-medium text-black">
                  {d} Km
                </span>
              </div>
              <Rating
                name="half-rating-read"
                defaultValue={rating}
                precision={0.5}
                readOnly
                className="!h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default index;
