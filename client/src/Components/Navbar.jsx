import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import Search from "./NavDetails/Search";
import Login from "./NavDetails/Login";
import Cart from "./NavDetails/Cart";
import { GiHamburgerMenu } from "react-icons/gi";

const navData = [
  {
    id: 1,
    title: "Categories",
    icon: <MdKeyboardArrowDown />,
  },
  {
    id: 2,
    title: "boAt Personalisation",
  },
  {
    id: 3,
    title: "Corporate Orders",
  },
  {
    id: 4,
    title: "More",
    icon: <MdKeyboardArrowDown />,
  },
];

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="fixed top-10 left-0 w-full bg-white z-50 2xl:h-[83.2px] xl:h-[83.2px] h-[128px] flex items-center justify-between px-10">
        {/* tab formate */}
        <GiHamburgerMenu className="2xl:hidden xl:hidden lg:block md:block sm:block mb:block hidden h-6 w-6" />
        {/* logo of Boat */}
        <img
          onClick={() => navigate("/")}
          className="mb:max-w-16 sm:max-w-24 md:max-w-24 lg:max-w-24 xl:max-w-24 2xl:max-w-24 max-h-max cursor-pointer"
          src="/boAt_logo_small_3067da8c-a83b-46dd-b28b-6ef1e16ccd17_small.svg"
          alt="Boat_logo"
        />
        {/* navbar list data */}
        <ul className="flex space-x-10 relative 2xl:right-28 xl:right-20 lg:right-2 w-fit 2xl:flex xl:flex lg:hidden md:hidden sm:hidden mb:hidden">
          {navData.map((items, ind) => (
            <li
              key={items.id}
              className="flex items-center hover:font-extrabold"
            >
              <Link className="text tracking-wide text-[1em] cursor-pointer relative">
                {items.title}
              </Link>
              {items.id === 1 || items.id === 4 ? items.icon : null}
            </li>
          ))}
        </ul>

        <div className=" flex items-center space-x-5">
          <Search />
          <Login />
          <Cart />
        </div>
      </div>
    </>
  );
};

export default Navbar;
