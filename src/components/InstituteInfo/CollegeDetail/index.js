import React from "react";
import { TextField, Button } from "@mui/material";
import { Upload } from "heroicons-react";
import { CustomSelect, StyledOption } from "../../Dropdown/Index";
import db from "../../../firebase";

export default function index() {
  const InstituteRef = db
    .collection("Institutes")
    .doc(" nfQv08nR0Eh0FeCZBLY3S0AXCID2");

    const submitDetails = () => {
      InstituteRef.get().then(snapshot=>{
        InstituteRef.set({...snapshot, name:"Hitesh"})
      })
    }

  return (
    <div className="flex flex-col w-[48rem] overflow-x-clip px-8 py-5 rounded-xl bg-white m-auto drop-shadow-xl h-[38rem] overflow-y-scroll">
      <div className="w-full text-xl font-semibold m-4">College Details</div>
      <div className="grid grid-cols-2">
        <div className="mx-6 my-4">
            <input
              className="w-full h-10 px-5 my-3 border rounded-full"
              type="text"
              placeholder="Head of Institute"
              style={{ border: "1px solid #CBCBCB" }}
            />
          <CustomSelect
            className="h-10 !rounded-full !w-full !mx-0 !text-base !px-5 !my-3 border"
            defaultValue={40}
            style={{ border: "1px solid #CBCBCB" }}
          >
            <StyledOption value="" disabled>
              Type of University
            </StyledOption>
            <StyledOption value="Central Govt.">Central Govt.</StyledOption>
            <StyledOption value="State Govt.">State Govt.</StyledOption>
            <StyledOption value="Deemed University ( Govt./ Pvt )">
              Deemed University ( Govt./ Pvt )
            </StyledOption>
            <StyledOption value="Private University">
              Deemed University ( Govt./ Pvt )
            </StyledOption>
          </CustomSelect>

          <CustomSelect
            className="h-10 !rounded-full w-full !mx-0 !text-base !px-5 !my-3 border"
            defaultValue={40}
            style={{ border: "1px solid #CBCBCB" }}
          >
            <StyledOption value={40} disabled>
              Type of Institute
            </StyledOption>
            <StyledOption value="Government.">Government</StyledOption>
            <StyledOption value="Private">Private</StyledOption>
            <StyledOption value="Autonomous">Autonomous</StyledOption>
          </CustomSelect>

          <CustomSelect
            className="h-10 !rounded-full w-full !mx-0 !text-base !px-5 !my-3 border "
            defaultValue={40}
            style={{ border: "1px solid #CBCBCB" }}
          >
            <StyledOption value={40} disabled>
              College Course Domain
            </StyledOption>
            <StyledOption value="Techinal ( Engg, B.Sc )">
              Techinal ( Engg, B.Sc )
            </StyledOption>
            <StyledOption value="Design">Design</StyledOption>
            <StyledOption value="Architecture">Architecture</StyledOption>
            <StyledOption value="Hotel Management">
              Hotel Management
            </StyledOption>
            <StyledOption value="M.B.B.S">M.B.B.S</StyledOption>
            <StyledOption value="Dental">Dental</StyledOption>
          </CustomSelect>

          <input
            className="w-full h-10 px-5 mt-8 mb-3 border rounded-full"
            type="text"
            placeholder="Address"
            style={{ border: "1px solid #CBCBCB" }}
          />
          <div className="grid grid-cols-2 mb-4 my-3">
            <div>
              <input
                className="w-full h-10 px-5  border rounded-full"
                type="text"
                placeholder="City"
                style={{ border: "1px solid #CBCBCB" }}
              />
            </div>
            <div>
              <input
                className="w-full h-10 px-3  border rounded-full"
                type="text"
                placeholder="Pincode"
                style={{ border: "1px solid #CBCBCB" }}
              />
            </div>
          </div>
          <input
            className="w-full h-10 px-5 border rounded-full my-3"
            type="text"
            placeholder="State"
            style={{ border: "1px solid #CBCBCB" }}
          />
        </div>
        <div className="mx-6 my-4">
          <Button
            className="w-full h-10 !my-3 !flex !justify-between  px-4 !bg-white !text-black !rounded-full"
            variant="contained"
            component="label"
          >
            <div>Recognition Letter</div>
            <div>
              <Upload />
            </div>
            <input hidden accept="image/*" multiple type="file" />
          </Button>

          <div
            className="rounded-lg h-96 !my-8"
            style={{ border: "1px solid #CBCBCB" }}
          ></div>
        </div>
      </div>

      {/****************************
       * Admin Detail
       * ******************************/}

      <div>
        <div className=" bg-gray flex-1 h-[1px] -mx-8 "></div>
        <div className="w-full text-xl font-semibold m-4 mt-8">
          Admin Detail
        </div>
        <div className="grid grid-cols-2">
          <div className="mx-6 my-4">
            <input
              className="w-full h-10 px-5 my-3 border rounded-full "
              type="text"
              placeholder="Admin Name"
              style={{ border: "1px solid #CBCBCB" }}
            />

            <input
              className="w-full h-10 px-5 my-3 border rounded-full "
              type="text"
              placeholder="Admin Phone"
              style={{ border: "1px solid #CBCBCB" }}
            />

            <input
              className="w-full h-10 px-5 my-3 border rounded-full "
              type="text"
              placeholder="Add Admin"
              style={{ border: "1px solid #CBCBCB" }}
            />
          </div>
          <div className="mx-6 my-4">
            <input
              className="w-full h-10 px-5 my-3 border rounded-full "
              type="text"
              placeholder="Admin Email"
              style={{ border: "1px solid #CBCBCB" }}
            />

            <input
              className="w-full h-10 px-5 my-3 border rounded-full "
              type="text"
              placeholder="Alternate Phone"
              style={{ border: "1px solid #CBCBCB" }}
            />
          </div>
        </div>
      </div>

      {/****************************
       * Students and Courses
       * ******************************/}

      <div>
        <div className=" bg-gray flex-1 h-[1px] -mx-8 "></div>
        <div className="w-full text-xl font-semibold m-4 mt-8">
          Students and Courses
        </div>
        <div className="grid grid-cols-2">
          <div className="mx-6 my-4">
            <div className="flex items-center justify-between font-semibold h-full">
              <div>Total number of students</div>
              <TextField
                className="!w-14 !text-xs"
                variant="outlined"
                size="small"
                sx={{
                  "& .MuiInputBase-root": {
                    height: 30,
                  },
                }}
              />
            </div>
          </div>
          <div className="mx-6 my-4">
            <CustomSelect
              className="h-10 !rounded-full w-full !mx-0 !text-base !px-5 !my-3 border "
              defaultValue={40}
              style={{ border: "1px solid #CBCBCB" }}
            >
              <StyledOption value={40} disabled>
                Courses we offer
              </StyledOption>
              <StyledOption value={10}>Ten</StyledOption>
              <StyledOption value={20}>Twenty</StyledOption>
              <StyledOption value={30}>Thirty</StyledOption>
            </CustomSelect>
          </div>
        </div>
      </div>
    </div>
  );
}
