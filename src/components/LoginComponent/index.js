import React, { useState, useEffect } from "react";
import { X } from "heroicons-react";
import Student from "./Student";
import Institute from "./Institute";

/**
 * Appropriate comments are must, otherwise changes will not be merged
 */

/**
 * @author Hitesh Sukhwani
 */
function Index({ ShowModal, setShowModal }) {
  const [AlreadyLoggedIn, setAlreadyLoggedIn] = useState(false);
  const [Token, setToken] = useState("");

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("token"));
    if (token) {
      setAlreadyLoggedIn(true);
      setToken(token);
    }
  }, [Token]);

  const [welcomeText, setwelcomeText] = useState("Welcome to Proxy Labs!");

  const [InstituteTab, setInstituteTab] = useState(false);

  const tabHandler = () => {
    setInstituteTab(!InstituteTab);
  };

  return (
    <>
      {ShowModal ? (
        <>
          {!AlreadyLoggedIn ? (
            <div
              className="flex flex-col w-min p-5 rounded-xl bg-white whitespace-nowrap m-auto drop-shadow-xl"
              style={{ border: "1px solid #eeeeee" }}
            >
              <div className="flex items-center">
                <X
                  className="h-4 w-4 flex-0 cursor-pointer"
                  onClick={() => setShowModal(false)}
                />
                <div className="text-lg whitespace-nowrap flex-1 text-center">
                  Login or Signup
                </div>
              </div>
              <div className=" bg-gray w-auto h-[1px] mt-3 -mx-5 opacity-50"></div>
              <div className="flex my-3">
                <div className="flex-col cursor-pointer" onClick={tabHandler}>
                  <div className="text-sm mx-[1px] tracking-wider">Student</div>
                  <div
                    className={`bg-accent w-auto h-1 rounded-full ${
                      InstituteTab === true ? "hidden" : "block"
                    }`}
                  ></div>
                </div>
                <div
                  className="flex-col ml-5 cursor-pointer"
                  onClick={tabHandler}
                >
                  <div className="text-sm mx-[1px] tracking-wider">
                    Institute
                  </div>
                  <div
                    className={`bg-accent w-auto h-1 rounded-full ${
                      InstituteTab === true ? "block" : "hidden"
                    }`}
                  ></div>
                </div>
              </div>
              <div className="my-4 text-lg">{welcomeText}</div>
              {!InstituteTab ? (
                <Student setwelcomeText={setwelcomeText} />
              ) : (
                <Institute setwelcomeText={setwelcomeText} />
              )}
            </div>
          ) : (
            <></>
          )}
        </>
      ) : (
        <></>
      )}
    </>
  );
}

export default Index;
