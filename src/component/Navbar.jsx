import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import "../App.css";
import { AuthContext } from "../Authentication";
import { useNavigate } from "react-router-dom";

const Navbar = () => {

  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogOut = () => {
    logOut()
    .then(() => {
      navigate('/login')
    }).catch(() => {

    })
  }

  return (
    <>
      <section className="mt-2 sticky top-0 z-40">
        <div className="navbar bg-base-100 shadow-md">
          <div className="flex-1">
            <a className="btn btn-ghost font-bold text-3xl animate__animated animate__rubberBand">ProPertyPeak</a>
          </div>
          <div className="flex-none">
            <div className="mr-8">
              <ul className="flex space-x-8 font-bold">
                <li>
                  <NavLink className="changeActiveRoute" to="/">
                    Home
                  </NavLink>
                </li>

                <li>
                  {user && <NavLink className="changeActiveRoute" to="/updateProfile">
                    User Update
                  </NavLink>}
                </li>
                <li>
                  {user && <NavLink className="changeActiveRoute" to="/contact">
                    Contact Us
                  </NavLink>}
                </li>
              </ul>
            </div>
            {/* user  */}
            {user ? (
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar "
                >
                  <div className="w-10 rounded-full">
                    <img
                      alt="Tailwind CSS Navbar component"
                      src={user.photoURL ? user.photoURL: "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"}
                    />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-slate-100 rounded-box w-52"
                >
                  <li className="font-bold">
                    <Link to="/userProfile" className="justify-between">
                      Profile
                      <span className="badge-outline text-nowrap font-semibold ">
                        {
                          user.displayName == null ? "Not Provided" : user.displayName 
                        }
                      </span>
                    </Link>
                  </li>
                  <li><button onClick={handleLogOut} className="font-bold">Logout</button></li>
                </ul>
              </div>
            ) : (
              <section className="flex space-x-6">
                <div>
                <Link to="/login"
                  href="#_"
                  className="px-5 py-2.5 relative rounded group text-white font-medium inline-block"
                >
                  <span className="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-purple-600 to-blue-500"></span>
                  <span className="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-purple-600 to-blue-500"></span>
                  <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-purple-600 to-blue-500"></span>
                  <span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-purple-600 from-blue-500"></span>
                  <span className="relative">Login</span>
                </Link>
                </div>
                <div>
                <Link to="/register"
                  href="#_"
                  className="px-5 py-2.5 relative rounded group text-white font-medium inline-block"
                >
                  <span className="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-purple-600 to-blue-500"></span>
                  <span className="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-purple-600 to-blue-500"></span>
                  <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-purple-600 to-blue-500"></span>
                  <span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-purple-600 from-blue-500"></span>
                  <span className="relative">Sign Up</span>
                </Link>
                </div>
              </section>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Navbar;
