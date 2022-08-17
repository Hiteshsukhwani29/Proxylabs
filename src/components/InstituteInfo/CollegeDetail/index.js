import React from "react";
import { TextField, Button } from "@mui/material";
import { Upload } from "heroicons-react";
import { CustomSelect, StyledOption } from "../../Dropdown/Index";

export default function index() {
  return (
    <div className="flex flex-col w-[48rem] overflow-x-clip px-8 py-5 rounded-xl bg-white  m-auto drop-shadow-xl">
      <div className="w-full text-xl font-semibold m-4">College Details</div>
      <div className="grid grid-cols-2">
        <div className="mx-6 my-4">
          <input
            className="w-full h-10 px-5 my-3 border rounded-full "
            type="text"
            placeholder="Head of Institute"
            style={{border: "1px solid #CBCBCB"}}
          />

          <CustomSelect className="h-10 !rounded-full w-full !mx-0 !text-base !px-5 !my-3 border" defaultValue={40}
          style={{border: "1px solid #CBCBCB"}}>
            <StyledOption  value={40} disabled>
            Type of University
            </StyledOption>
            <StyledOption value={10}>Ten</StyledOption>
            <StyledOption value={20}>Twenty</StyledOption>
            <StyledOption value={30}>Thirty</StyledOption>
          </CustomSelect>

          <CustomSelect className="h-10 !rounded-full w-full !mx-0 !text-base !px-5 !my-3 border" defaultValue={40}
          style={{border: "1px solid #CBCBCB"}}>
            <StyledOption  value={40} disabled>
            Type of Institute
            </StyledOption>
            <StyledOption value={10}>Ten</StyledOption>
            <StyledOption value={20}>Twenty</StyledOption>
            <StyledOption value={30}>Thirty</StyledOption>
          </CustomSelect>

          <CustomSelect className="h-10 !rounded-full w-full !mx-0 !text-base !px-5 !my-3 border " defaultValue={40}
          style={{border: "1px solid #CBCBCB",}}>
            <StyledOption  value={40} disabled>
            College Course Domain
            </StyledOption>
            <StyledOption value={10}>Ten</StyledOption>
            <StyledOption value={20}>Twenty</StyledOption>
            <StyledOption value={30}>Thirty</StyledOption>
          </CustomSelect>

          <input
            className="w-full h-10 px-5 mt-8 mb-3 border rounded-full"
            type="text"
            placeholder="Address"
            style={{border: "1px solid #CBCBCB"}}
          />
          <div className="grid grid-cols-2 mb-4 my-3">
            <div>
              <input
                className="w-full h-10 px-5  border rounded-full"
                type="text"
                placeholder="City"
                style={{border: "1px solid #CBCBCB"}}
              />
            </div>
            <div>
              <input
                className="w-full h-10 px-3  border rounded-full"
                type="text"
                placeholder="Pincode"
                style={{border: "1px solid #CBCBCB"}}
              />
            </div>
          </div>
          <input
            className="w-full h-10 px-5 border rounded-full my-3"
            type="text"
            placeholder="State"
            style={{border: "1px solid #CBCBCB"}}
          />

          {/* <CustomSelect className="h-9 w-full px-2 border" defaultValue={40}>
            <StyledOption value={40} disabled>
              Select Field
            </StyledOption>
            <StyledOption value={10}>Ten</StyledOption>
            <StyledOption value={20}>Twenty</StyledOption>
            <StyledOption value={30}>Thirty</StyledOption>
          </CustomSelect>

          <CustomSelect className="h-10 w-full px-2  border" defaultValue={40}>
            <StyledOption value={40} disabled>
              Select Field
            </StyledOption>
            <StyledOption value={10}>Ten</StyledOption>
            <StyledOption value={20}>Twenty</StyledOption>
            <StyledOption value={30}>Thirty</StyledOption>
          </CustomSelect>

          <CustomSelect className="h-10 w-full px-2 border" defaultValue={40}>
            <StyledOption  value={40} disabled>
              Select Field
            </StyledOption>
            <StyledOption value={10}>Ten</StyledOption>
            <StyledOption value={20}>Twenty</StyledOption>
            <StyledOption value={30}>Thirty</StyledOption>
          </CustomSelect> */}
        </div>
        <div className="mx-6 my-4">
          <Button
            className="w-full h-12 !flex !justify-between  px-4 !bg-white !text-black !rounded-full"
            variant="contained"
            component="label"
          >
            <div>Recognition Letter</div>
            <div>
              <Upload />
            </div>
            <input hidden accept="image/*" multiple type="file" />
          </Button>

          <div className="rounded-lg h-96 my-4" style={{border: "1px solid #CBCBCB"}}></div>
        </div>
      </div>
    </div>
  );
}
