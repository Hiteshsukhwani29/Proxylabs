import React,{useState} from 'react'
import logo from "../../Assets/logo.png";
import{MdOutlinePerson} from 'react-icons/md';
import{FaCoins} from 'react-icons/fa';
import "./Navbar.css"
export default function Navbar() {

const [profile, setprofile] = useState("Saurav")
const [coins, setcoins] = useState(0)

  return (
    <div>
      
<nav className="bg-transparent border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
  <div className=" flex flex-wrap justify-between items-center mx-auto">
  <a href="" className="flex items-center">
      <img src={logo} className="mr-3 h-6 sm:h-9" alt="Logo"/>
  </a>
  <div>
  <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
        <li>
          <a href="#" className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" >Home</a>
        </li>
        <li>
          <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Institutes</a>
        </li>
        <li>
          <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Fields</a>
        </li>
        <li>
          <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About Us</a>
        </li>
      </ul>
  </div>

  <div className="points flex w-28 justify-around items-center">
  <span class="">< FaCoins/></span>
  <p>{coins} coins left</p>
  </div>


    <a href="#" className="profile-btn flex justify-around items-center w-28 p-4 h-8 text-base no-underline rounded-3xl ">{profile} <span><MdOutlinePerson/></span></a>
    
  </div>
</nav>

    </div>
  )
}
