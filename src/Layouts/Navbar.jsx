import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

const Navbar = () => {
  const { user, signOutFunction } = useContext(AuthContext);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    const html = document.querySelector("html");
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleTheme = (checked) => {
    setTheme(checked ? "dark" : "light");
  };

  const handleLogout = () => {
    signOutFunction()
      .then(() => toast.success("Logged out successfully"))
      .catch(() => toast.error("Logout failed"));
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            className="h-10"
            src="https://img.icons8.com/?size=100&id=3IgXmFMQUcmp&format=png&color=000000"
            alt="logo"
          />
          <Link to="/" className="text-2xl font-bold">
            <span className="text-blue-500">Home</span>
            <span className="text-blue-400">Nest</span>
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-6 font-medium text-gray-700">
          <li><NavLink to="/" className="hover:text-blue-500">Home</NavLink></li>
          <li><NavLink to="/properties" className="hover:text-blue-500">All Properties</NavLink></li>
          <li><NavLink to="/add-property" className="hover:text-blue-500">Add Property</NavLink></li>
          <li><NavLink to="/my-properties" className="hover:text-blue-500">My Properties</NavLink></li>
          <li><NavLink to="/my-ratings" className="hover:text-blue-500">My Ratings</NavLink></li>
        </ul>

        {/* Mobile Menu */}
        <div className="lg:hidden relative">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="btn btn-ghost"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {mobileMenuOpen && (
            <ul className="absolute right-0 top-14 bg-white shadow-lg rounded-lg p-4 w-56 z-50 text-gray-800 space-y-2">
              <li><NavLink to="/" className="hover:text-blue-500">Home</NavLink></li>
              <li><NavLink to="/properties" className="hover:text-blue-500">All Properties</NavLink></li>
              <li><NavLink to="/add-property" className="hover:text-blue-500">Add Property</NavLink></li>
              <li><NavLink to="/my-properties" className="hover:text-blue-500">My Properties</NavLink></li>
              <li><NavLink to="/my-ratings" className="hover:text-blue-500">My Ratings</NavLink></li>
            </ul>
          )}
        </div>

        {/* Auth Buttons */}
        <div className="flex items-center gap-4">
          {!user ? (
            <>
              <Link className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition" to="/login">Log in</Link>
              <Link className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition" to="/signup">Sign Up</Link>
            </>
          ) : (
            <div className="relative">
              <img
                src={user?.photoURL || "https://via.placeholder.com/88"}
                className="h-10 w-10 rounded-full cursor-pointer border-2 border-blue-300"
                alt="user"
                onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
              />
              {profileDropdownOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-white border rounded-lg shadow-lg z-50 p-4">
                  <p className="text-sm font-semibold text-gray-800">{user.displayName}</p>
                  <p className="text-xs text-gray-500 mb-3">{user.email}</p>
                  <div className="flex justify-between items-center">
                    <input
                      onChange={(e) => handleTheme(e.target.checked)}
                      type="checkbox"
                      defaultChecked={localStorage.getItem("theme") === "dark"}
                      className="toggle"
                    />
                    <button
                      onClick={handleLogout}
                      className="text-red-600 hover:underline text-sm"
                    >
                      Log out
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
