import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import img from "../../assets/img/demoImg.jpg";
import { themeContext } from "../../Firebase/AuthProvider";
import {FaSignOutAlt} from 'react-icons/fa'
import {MdAppRegistration} from 'react-icons/md'
import {VscSignIn} from 'react-icons/vsc'

const Header = () => {
  const [show,setShow] = useState(true);
  const { user,logOut } = useContext(themeContext);
  const navigate = useNavigate()
  const handleLogOut = () => {
    logOut()
    .then(() => {
      setShow(true)
      navigate("/login")
    })
  }

const handleUser = () => {
  setShow(!show)
}


  return (
    <div className="py-5 shadow-xl">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <Link to="/">Logo</Link>
          <ul className="flex items-center gap-6">
            <NavLink
              className={({ isActive }) =>
                `font-medium text-xl ${isActive ? "text-rose-500" : ""}`
              }
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `font-medium text-xl ${isActive ? "text-rose-500" : ""}`
              }
              to="/About"
            >
              About
            </NavLink>
            <div className="cursor-pointer relative">
              {user && user?.photoURL ? (
                <img
                onClick={handleUser}
                  src={user?.photoURL}
                  className="w-10 h-10 rounded-full object-cover"
                  alt={user?.displayName}
                />
              ) : (
                <img
                onClick={handleUser}
                  src={img}
                  className="w-10 h-10 rounded-full object-cover"
                  alt="demo picture"
                />
              )}
              <div className={`absolute px-2 py-3 z-[9999] right-0 top-[59px] bg-white shadow-2xl rounded-lg w-[200px] h-[200px] ${show && 'hidden'}`}>
                  {
                    user && user.email ? <ul>
                      <li onClick={handleLogOut} className="flex items-center gap-2 text-sm font-medium"><FaSignOutAlt />Log Out</li>
                    </ul> : <ul>
                    <Link to="/login" className="flex items-center gap-2 text-sm font-medium"><VscSignIn />Sign in</Link>
                    <Link to="/registration" className="flex items-center gap-2 text-sm font-medium"><MdAppRegistration />Registration</Link>
                    </ul>
                  }
              </div>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
