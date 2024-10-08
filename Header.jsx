import React from 'react'
import {GrSearch} from "react-icons/gr";
import {FaRegCircleUser} from "react-icons/fa6";
import { FaShoppingCart } from 'react-icons/fa';
import {Link} from "react-router-dom";

const Header = () => {
  return (
    <header className='h-19 shadow-md bg-white'>
      <div className="h-full container mx-auto flex items-center px-3 justify-between">
        <div className="text-start text-2xl my-4 font-bold text-blue-500">
          <Link to={"/"}>GlobalGoods</Link> 
        </div>

        <div className='hidden lg:flex items-center w-full justify-between max-w-sm border rounded-l-xl focus-within:shadow-lg pl-3 outline-none'>
          <input type='text' placeholder='Search products here' className='w-full outline-none' />
          <div className='text-lg flex items-center bg-blue-500 min-w-[50px] h-8 justify-center rounded-r-xl text-white '>
            <GrSearch/>
          </div>
        </div>

        <div className='flex items-center gap-10'>
          <div className='text-2xl cursor-pointer'>
            <FaRegCircleUser/>
          </div>

          <div className='text-2xl cursor-pointer flex items-center relative'>
            <span><FaShoppingCart/></span>
            <div className='bg-blue-500 text-white w-5 h-5 rounded-full p-1 flex items-center justify-center absolute -top-3 -right-3 '>
              <p className='text-sm'>0</p>
            </div>
          </div>

          <div>
            <Link to={"/login"} className='bg-blue-600 rounded-full text-white py-1 px-4 font-center hover:bg-blue-400'>Login</Link>
          </div>
        </div>


      </div>
    </header>
  )
}

export default Header
