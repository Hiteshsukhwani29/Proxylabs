import React, { useState, useEffect } from "react";
import { TextField, Button } from "@mui/material";
import { Upload } from "heroicons-react";
import { CustomSelect, StyledOption } from "../../Dropdown/Index";
import db from "../../../firebase";
import { useSelector } from "react-redux";

export default function Index({ setShowCompleteProfile }) {
  const state = useSelector(state => state.t1);

  const [inputValues, setInputValue] = useState({
    Address: "",
    City: "",
    Pincode: "",
    State: "",
    AdminName: "",
    AdminEmail: "",
    adminPhone: "",
  });

  const [validation, setValidation] = useState({
    Address: "",
    City: "",
    Pincode: "",
    State: "",
    AdminName: "",
    AdminEmail: "",
    adminPhone: "",
  });

  //handle submit updates
  function handleChange(event) {
    const { name, value } = event.target;
    setInputValue({ ...inputValues, [name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let errors = { ...validation };

    if (!inputValues.Address.trim()) {
      errors.Address = "Address is required";
    } else {
      errors.Address = "";
    }

    if (!inputValues.City.trim()) {
      errors.City = "City is required";
    } else {
      errors.City = "";
    }

    if (!inputValues.Pincode.trim()) {
      errors.Pincode = "Pincode is required";
    } else {
      errors.Pincode = "";
    }

    if (!inputValues.State.trim()) {
      errors.State = "State is required";
    } else {
      errors.State = "";
    }

    if (!inputValues.AdminName.trim()) {
      errors.AdminName = "Admin Name is required";
    } else {
      errors.AdminName = "";
    }

    if (!inputValues.AdminEmail.trim()) {
      errors.AdminEmail = "Admin Email is required";
    } else {
      errors.AdminEmail = "";
    }

    if (!inputValues.adminPhone.trim()) {
      errors.AdminPhone = "Admin Phone is required";
    } else {
      errors.AdminPhone = "";
    }
    return setValidation(errors);
  };

  const InstituteRef = db
    .collection("Institutes")
    .doc(state.user.uid);

  const submitDetails = (e) => {
    InstituteRef.get().then((snapshot) => {
      InstituteRef.set({ ...snapshot, name: "Hitesh" });
    });
  };

  return (
    <div className="flex flex-col w-[48rem] h-[42rem] px-8 py-5 rounded-xl bg-white mx-auto -my-[2%] drop-shadow-xl">
      <div className=" overflow-y-scroll">
      <div className="flex items-center">
        <div class="w-10 h-10 rounded-full border-4 border-accent text-accent flex justify-center items-center">
          <p>1</p>
        </div>
        <div className=" bg-gray flex-1 h-[4px]  "></div>

        <div class="w-10 h-10 rounded-full border-4 border-accent text-accent flex justify-center items-center">
          <p>2</p>
        </div>
        <div className=" bg-gray flex-1 h-[4px]  "></div>
        <div class="w-10 h-10 rounded-full border-4 border-accent text-accent flex justify-center items-center">
          <p>3</p>
        </div>
      </div>

      <div>
        <div className=" bg-gray flex-1 h-[1px] -mx-8 my-5"></div>
      </div>
      <div className="w-full text-xl font-semibold m-4">College Details</div>
      <div className="grid grid-cols-2">
        <div className="mx-6 my-4">
          <TextField
            className="!w-full !text-xs"
            variant="outlined"
            size="medium"
            label="Head of Institute"
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

          <TextField
            className="!w-full !text-xs"
            variant="outlined"
            size="medium"
            label="Address"
            name="Address"
            onChange={(e) => handleChange(e)}
            value={inputValues.Address}
          />
          {validation.Address && <p>{validation.Address}</p>}

          <div className="grid grid-cols-2 mb-4 my-3">
            <div>
              <TextField
                className="!w-full !text-xs"
                variant="outlined"
                size="medium"
                label="City"
                name="City"
                onChange={(e) => handleChange(e)}
                value={inputValues.City}
              />
              {validation.City && <p>{validation.City}</p>}
            </div>
            <div>
              <TextField
                className="!w-full !text-xs"
                variant="outlined"
                size="medium"
                label="Pincode"
                name="Pincode"
                onChange={(e) => handleChange(e)}
                value={inputValues.Pincode}
              />
              {validation.Pincode && <p>{validation.Pincode}</p>}
            </div>
          </div>

          <TextField
            className="!w-full !text-xs"
            variant="outlined"
            size="medium"
            label="State"
            name="State"
            onChange={(e) => handleChange(e)}
            value={inputValues.State}
          />

          {validation.State && <p>{validation.State}</p>}
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
            <TextField
              className="!w-full !text-xs !mb-2"
              variant="outlined"
              size="medium"
              label="Admin Name"
              name="AdmimName"
              onChange={(e) => handleChange(e)}
              value={inputValues.AdminName}
            />

            {validation.AdminName && <p>{validation.AdminName}</p>}

            <TextField
              className="!w-full !text-xs !my-2"
              variant="outlined"
              size="medium"
              label="Admin Phone"
              name="AdminPhone"
              onChange={(e) => handleChange(e)}
              value={inputValues.AdminPhone}
            />

            {validation.AdminPhone && <p>{validation.AdminPhone}</p>}

            <TextField
              className="!w-full !text-xs !mt-2"
              variant="outlined"
              size="medium"
              label="Add Admin"
            />
          </div>
          <div className="mx-6 my-4">
          <TextField
              className="!w-full !text-xs !mb-2"
              variant="outlined"
              size="medium"
              label="Admin Email"
              name="AdminEmail"
              onChange={(e) => handleChange(e)}
              value={inputValues.AdminEmail}
            />
            {validation.AdminEmail && <p>{validation.AdminEmail}</p>}

            <TextField
              className="!w-full !text-xs !my-2"
              variant="outlined"
              size="medium"
              label="Alternate Phone"
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
                className="!w-14 !text-xs "
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
        <div className=" bg-gray flex-1 h-[1px] -mx-8 mb-8 "></div>
      </div>
      </div>

      <div className="flex justify-between py-2">
        <Button
          className=" !text-black !px-6  !py-2 !rounded-2xl"
          variant="outlined"
          onClick={()=>setShowCompleteProfile(false)}
        >
          Continue later
        </Button>
        <Button
          className="!bg-accent !text-white !px-16  !py-2 !rounded-2xl"
          variant="outlined"
          onClick={handleSubmit}
        >
          Done
        </Button>
      </div>
    </div>
  );
}
