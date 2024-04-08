import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css"

const Navbar = () => {
  return (
    <>
      <section className="mt-2">
        <div className="navbar bg-base-100">
          <div className="flex-1">
            <a className="btn btn-ghost font-bold text-3xl">ProPertyPeak</a>
          </div>
          <div className="flex-none">
            <div className="mr-8">
              <ul className="flex space-x-8 font-bold">
                <li>
                  <NavLink className='changeActiveRoute' to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink className='changeActiveRoute' to="/userProfile">Profile</NavLink>
                </li>
                <li>
                  <NavLink className='changeActiveRoute' to="/updateProfile">User Update</NavLink>
                </li>
              </ul>
            </div>
            {/* user  */}
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a className="justify-between">Profile</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Navbar;
