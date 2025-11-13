// import { Link, NavLink } from "react-router-dom";
// import { AuthContext } from "../Context/AuthContext";
// import { useContext } from "react";



// const Navbar = () => {

//  const { user, signOutFunction, setUser, loading } = useContext(AuthContext);

//   return (
//    <div className="navbar bg-base-100 shadow-sm px-15">
//   <div className="navbar-start">
//     <div className="dropdown">
//       <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
//       </div>
//       <ul
//         tabIndex="-1"
//         className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
//         <NavLink to="/" className="hover:text-blue-500">Home</NavLink>
//          <NavLink to="/properties" className="hover:text-blue-500">All Properties</NavLink>
//       <NavLink to="/add-property" className="hover:text-blue-500">Add Property</NavLink>
//       <NavLink to="/my-properties" className="hover:text-blue-500">My Properties</NavLink>
//       <NavLink to="/my-ratings" className="hover:text-blue-500">My Ratings</NavLink>
       
//       </ul>
//     </div>
//     <div className="flex items-center">
//         <img className="h-10" src="https://img.icons8.com/?size=100&id=3IgXmFMQUcmp&format=png&color=000000" alt="" />
//          <a className="text-xl"><span className="font-bold text-xl text-blue-500">Home</span><span className="font-bold text-xl text-blue-400">Nest</span></a>

//     </div>
   
//   </div>
//   <div className="navbar-center hidden lg:flex">
//     <ul className="menu menu-horizontal px-1 gap-5 font-semibold">
//          <NavLink to="/" className="hover:text-blue-500">Home</NavLink>
//          <NavLink to="/properties" className="hover:text-blue-500">All Properties</NavLink>
//       <NavLink to="/add-property" className="hover:text-blue-500">Add Property</NavLink>
//       <NavLink to="/my-properties" className="hover:text-blue-500">My Properties</NavLink>
//       <NavLink to="/my-ratings" className="hover:text-blue-500">My Ratings</NavLink>
   
//     </ul>
//   </div>
//  {user?
//  <div className="navbar-end gap-3">
//     <img
//              src={user?.photoURL || "https://via.placeholder.com/88"}
//                 className="h-10 w-10 rounded-full cursor-pointer border border-pink-200"
//                 alt="user"
//               />
//  </div> :
//   <div className="navbar-end gap-3">
//     <Link className="btn bg-blue-500 text-white" to="/login">Log in</Link>
//     <Link className="btn bg-blue-500 text-white" to="/signup">Sign Up</Link>
    
//   </div>}
// </div>
//   );
// };

// export default Navbar;

import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import { useContext, useState } from "react";

const Navbar = () => {
  const { user, signOutFunction } = useContext(AuthContext);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLogout = () => {
    signOutFunction()
      .then(() => alert("Logged out successfully"))
      .catch((err) => alert("Logout failed"));
  };

  return (
    <div className="navbar bg-base-100 shadow-sm px-15">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex="-1" className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            <NavLink to="/" className="hover:text-blue-500">Home</NavLink>
            <NavLink to="/properties" className="hover:text-blue-500">All Properties</NavLink>
            {user && (
              <>
                <NavLink to="/add-property" className="hover:text-blue-500">Add Property</NavLink>
                <NavLink to="/my-properties" className="hover:text-blue-500">My Properties</NavLink>
                <NavLink to="/my-ratings" className="hover:text-blue-500">My Ratings</NavLink>
              </>
            )}
          </ul>
        </div>
        <div className="flex items-center">
          <img className="h-10" src="https://img.icons8.com/?size=100&id=3IgXmFMQUcmp&format=png&color=000000" alt="" />
          <a className="text-xl">
            <span className="font-bold text-xl text-blue-500">Home</span>
            <span className="font-bold text-xl text-blue-400">Nest</span>
          </a>
        </div>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-5 font-semibold">
          <NavLink to="/" className="hover:text-blue-500">Home</NavLink>
          <NavLink to="/properties" className="hover:text-blue-500">All Properties</NavLink>
              <NavLink to="/add-property" className="hover:text-blue-500">Add Property</NavLink>
              <NavLink to="/my-properties" className="hover:text-blue-500">My Properties</NavLink>
              <NavLink to="/my-ratings" className="hover:text-blue-500">My Ratings</NavLink>
            
        </ul>
      </div>

      <div className="navbar-end gap-3">
        {!user ? (
          <>
            <Link className="btn bg-blue-500 text-white" to="/login">Log in</Link>
            <Link className="btn bg-blue-500 text-white" to="/signup">Sign Up</Link>
          </>
        ) : (
          <div className="relative">
            <img
              src={user?.photoURL || "https://via.placeholder.com/88"}
              className="h-10 w-10 rounded-full cursor-pointer border border-pink-200"
              alt="user"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            />
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow z-10 p-4">
                <p className="text-sm font-semibold">{user.displayName}</p>
                <p className="text-xs text-gray-500 mb-2">{user.email}</p>
                <button
                  onClick={handleLogout}
                  className="text-red-600 hover:underline text-sm"
                >
                  Log out
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

