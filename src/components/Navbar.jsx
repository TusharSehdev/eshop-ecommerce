import React from 'react'
import PropTypes from 'prop-types'
import { IoMdSearch } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { IoCarSportOutline } from "react-icons/io5";
import Logo from "../assets/Logo.png";
import DarkMode from './DarkMode';
import { MdArrowDropDown } from "react-icons/md";


const MenuLinks =[
  {
    id:1,
    name: "Home",
    link: "/#",
  },
  {
    id:2,
    name: "Shop",
    link: "/#shop",
  },
  {
    id:3,
    name: "About",
    link: "/#about",
  },{
    id:4,
    name: "Blogs",
    link: "/#blogs",
  },
]
function Navbar(props) {
  return (
    <div className='bg-white dark:bg-gray-900 dark:text-white'>
        <div className='py-4'>
            <div className="container flex justify-between items-center">
                <div className='flex items-center gap-4'>
                    <a href="/" className='text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl duration-200 relative z-40'>
                      <div>
                      <img className="w-[50px]" src={Logo} alt="" />
                      </div>
                      </a>
                    <div className='hidden lg:block'>
                      <ul className='flex items-center gap-4'>
                        {
                          MenuLinks.map((data, index) =>(
                            <li key={index}>
                              <a href={data.link} className='inline-block px-4 font-semibold text-gray-500 hover:text-black dark:hover:text-primary duration-200 '>{data.name}</a>
                            </li>
                          ))
                        }
                        <li className='flex'>
                          <a className='' href="">Dropdown Links</a>
                          <MdArrowDropDown className=''/>
                        </li>
                      </ul>
                    </div>
                </div>
                <div className='flex justify-between items-center gap-4'>
                  {/* SearchBar Section */}
                  <div className='relative group hidden sm:block'>
                    <input type="text" placeholder='Search' className='search-bar'/>
                    <IoMdSearch className='text-xl text-gray-600 group-hover:text-primary dark:text-gray-400 absolute top-1/2 -translate-y-1/2 right-3 duration-200'/>
                  </div>
                  <button className='relative group p-3'>
                  <FaShoppingCart className=' text-xl text-gray-900 dark:text-gray-400 group-hover:text-primary '/>
                  <div className='w-4 h-4 bg-white text-black rounded-full absolute top-0 right-0 flex items-center justify-center text-xs'>4</div>
                  </button>
                  {/* Dark Mode Enabler */}
                  <div>
                      <DarkMode/>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

Navbar.propTypes = {}

export default Navbar
