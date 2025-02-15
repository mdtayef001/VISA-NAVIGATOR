import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import { AuthContext } from "../Provider/AuthProvider";
import { FaRegUserCircle } from "react-icons/fa";
import { toast } from "react-toastify";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogout = () => {
    logOut()
      .then(() => {
        toast.success("Log out");
      })
      .catch((error) => console.error(error));
  };
  const link = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/all-visas"}>All visas</NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink to={"/add-visa"}>Add visa</NavLink>
          </li>
          <li>
            <NavLink to={`/my-visa/${user.email}`}>My added visas</NavLink>
          </li>
          <li>
            <NavLink to={`/visaApplications/${user.email}`}>
              My Visa applications
            </NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <nav className="container mx-auto">
      <div className="navbar bg-white">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-white rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {link}

              {user ? (
                <li>
                  <Link onClick={handleLogout} to={"/"}>
                    Logout
                  </Link>
                </li>
              ) : (
                <li>
                  <Link to={"/auth/login"}>Login</Link>
                </li>
              )}
            </ul>
          </div>
          <a className="btn btn-ghost  lg:text-xl">VISA NAVIGATOR</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{link}</ul>
        </div>
        <div className="navbar-end space-x-2 items-center">
          {user ? (
            <>
              <div id="user" className="cursor-pointer w-10 ">
                <img
                  className="w-full h-full rounded-full"
                  src={user.photoURL}
                  alt=""
                />
              </div>
              <Tooltip
                anchorSelect="#user"
                className="userToolTip z-20"
                place="bottom"
                style={{
                  backgroundColor: "rgb(201, 201, 201)",
                  color: "black",
                }}
                clickable
              >
                <div>
                  <p className="mb-3">{user.displayName}</p>
                  <button onClick={handleLogout} className="">
                    Log out
                  </button>
                </div>
              </Tooltip>
            </>
          ) : (
            <p className="text-4xl">
              <FaRegUserCircle />
            </p>
          )}
          <div className="space-x-2 lg:flex">
            {user ? (
              ""
            ) : (
              <>
                <Link to={"/auth/login"} className="btn ">
                  Login
                </Link>
                <Link to={"/auth/signup"} className="btn hidden lg:flex">
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
