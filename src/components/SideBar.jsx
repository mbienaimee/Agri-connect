import React from "react";
import { NavLink } from "react-router-dom";
import { BiSolidDashboard } from "react-icons/bi";
import { FaUsers } from "react-icons/fa6";
import { AiFillProduct } from "react-icons/ai";
import axios from "axios";

const Sidebar = () => {
  return (
    <div className="bg-[#235a25] text-white flex flex-col gap-6 p-7 h-[100vh]">
      <NavLink
        to="/admin"
        className="flex items-center text-xl gap-2 hover:text-black hover:bg-white p-2"
      >
        <BiSolidDashboard />
        Dashboard
      </NavLink>
      <NavLink
        to="/clients"
        className="flex items-center text-xl gap-2 hover:text-black hover:bg-white p-2"
      >
        <FaUsers />
        Clients
      </NavLink>
      <NavLink
        to="/products"
        className="flex items-center text-xl gap-2 hover:text-black hover:bg-white p-2"
      >
        <AiFillProduct />
        Products
      </NavLink>
      <NavLink
        to="/order"
        className="flex items-center text-xl gap-2 hover:text-black hover:bg-white p-2"
      >
        <AiFillProduct />
        orders
      </NavLink>
    </div>
  );
};

export default Sidebar;
