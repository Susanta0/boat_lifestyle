import React, { useState, useEffect, useRef } from "react";
import { MdKeyboardArrowDown, MdClose } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import Search from "./NavDetails/Search";
import Login from "./NavDetails/Login";
import Cart from "./NavDetails/Cart";
import { GiHamburgerMenu } from "react-icons/gi";
import NavCategories from "./NavDetails/NavCategories";

const navData = [
  {
    id: 1,
    title: "Categories",
    icon: <MdKeyboardArrowDown />,
    hasDropdown: true,
  },
  {
    id: 2,
    title: "boAt Personalisation",
    hasDropdown: false,
  },
  {
    id: 3,
    title: "Corporate Orders",
    hasDropdown: false,
  },
  {
    id: 4,
    title: "More",
    icon: <MdKeyboardArrowDown />,
    hasDropdown: true,
  },
];

const Navbar = () => {
  const navigate = useNavigate();
  const [hoveredItem, setHoveredItem] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const hoverTimeoutRef = useRef(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
    };
  }, []);

  const handleMouseEnter = (itemId) => {
    if (windowWidth >= 1024) {
      // Clear any existing timeout
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
      setHoveredItem(itemId);
    }
  };

  const handleMouseLeave = () => {
    if (windowWidth >= 1024) {
      // Set a timeout before hiding the dropdown
      hoverTimeoutRef.current = setTimeout(() => {
        setHoveredItem(null);
      }, 300); // 300ms delay before hiding
    }
  };

  // Handle mouse enter on dropdown to keep it visible
  const handleDropdownMouseEnter = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleItemClick = (itemId) => {
    if (windowWidth < 1024) {
      setHoveredItem(hoveredItem === itemId ? null : itemId);
    }
  };

  return (
    <>
      <div className="fixed top-10 left-0 w-full bg-white z-50 shadow-md">
        <div className="flex items-center justify-between px-4 md:px-6 lg:px-10 py-4">
          {/* Mobile Menu Button */}
          <div className="block lg:hidden">
            <button onClick={toggleMobileMenu} className="focus:outline-none">
              {mobileMenuOpen ? (
                <MdClose className="h-6 w-6" />
              ) : (
                <GiHamburgerMenu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Logo */}
          <div className="flex items-center">
            <img
              onClick={() => navigate("/")}
              className="w-16 sm:w-20 md:w-24 cursor-pointer"
              src="/boAt_logo_small_3067da8c-a83b-46dd-b28b-6ef1e16ccd17_small.svg"
              alt="Boat_logo"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center">
            <ul className="flex space-x-6 xl:space-x-10">
              {navData.map((item) => (
                <li
                  key={item.id}
                  className="relative group flex items-center hover:font-extrabold"
                  onMouseEnter={() => handleMouseEnter(item.id)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link className="text-sm xl:text-base tracking-wide cursor-pointer relative">
                    {item.title}
                    {/* Center expanding red underline on hover */}
                    <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-300 group-hover:left-0"></span>
                  </Link>
                  {item.icon && <span className="ml-1">{item.icon}</span>}
                  {item.id === 1 && hoveredItem === 1 && (
                    <div
                      ref={dropdownRef}
                      className="absolute top-full left-0 w-auto transition-opacity duration-300"
                      onMouseEnter={handleDropdownMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      <NavCategories />
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Search, Login, Cart Icons */}
          <div className="flex items-center space-x-3 sm:space-x-5">
            <Search />
            <Login />
            <Cart />
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white shadow-md">
            <ul className="py-2 px-4">
              {navData.map((item) => (
                <li key={item.id} className="py-3 border-b border-gray-100">
                  <div
                    className="flex items-center justify-between relative"
                    onClick={() => handleItemClick(item.id)}
                  >
                    <span className="text-sm font-medium relative">
                      {item.title}
                      {/* Center expanding red underline for mobile */}
                      <span
                        className={`absolute bottom-0 h-0.5 bg-red-600 transition-all duration-300 ${
                          hoveredItem === item.id
                            ? "w-full left-0"
                            : "w-0 left-1/2"
                        }`}
                      ></span>
                    </span>
                    {item.icon && <span>{item.icon}</span>}
                  </div>
                  {item.id === 1 && hoveredItem === 1 && (
                    <div className="mt-3">
                      <NavCategories isMobile={true} />
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Spacer for fixed navbar */}
      <div className="h-16 sm:h-20"></div>
    </>
  );
};

export default Navbar;
