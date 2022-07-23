import React,{useState}from "react";
import logo from "../../assets/logo.png";
import { MdOutlinePerson } from "react-icons/md";
import { FaCoins } from "react-icons/fa";

function Index() {

    const [coins, setcoins] = useState([])
    const [profile, setprofile] = useState("Saurav")

  return (
    <div>
      <header className="bg-transparent flex justify-start items-center px-7 py-3">
        <img
          style={{
            width: "274px",
            height: "64px",
            cursor: "pointer",
          }}
          src={logo}
          alt="Logo"
        />
        <nav>
          <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            <li>
              <a
                href=""
                className="block py-2 pr-4 pl-3 text-gray  bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href=""
                className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Institutes
              </a>
            </li>
            <li>
              <a
                href=""
                className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Fields
              </a>
            </li>
            <li>
              <a
                href=""
                className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                About Us
              </a>
            </li>
          </ul>
        </nav>
        <div className="points ml-80  flex w-28 justify-around items-center">
          <span class="">
            <FaCoins />
          </span>
          <p>{coins} coins left</p>
        </div>

        <a
          href="#"
          style={{
            backgroundColor: "white",
            fontWeight: "400",
            color: "black",
          }}
          className=" ml-40 flex justify-around items-center w-28 p-4 h-8 text-base no-underline rounded-3xl "
        >
          {profile}
          <span>
            <MdOutlinePerson />
          </span>
        </a>
      </header>
    </div>
  );
}

export default Index;
