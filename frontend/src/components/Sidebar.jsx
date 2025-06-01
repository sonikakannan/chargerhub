import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearCredentials } from "../redux/slices/authSlice";
import { IoGrid } from "react-icons/io5";
import { CiLogout } from "react-icons/ci";

const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(clearCredentials());
    navigate("/auth");
  };

  const menuItems = [
    {
      icon: <IoGrid size={20} />,
      label: "Chargers",
      onClick: () => {},
    },
    {
      icon: <CiLogout size={20} />,
      label: "Logout",
      onClick: handleLogout,
    },
  ];

  return (
    <aside className="h-full p-4">
      <h2 className="text-2xl font-semibold mb-6">Dashboard</h2>
      <ul className="space-y-2">
        {menuItems.map((item, index) => (
          <li
            key={index}
            onClick={item.onClick}
            className="flex items-center space-x-3 px-4 py-2 text-lg font-semibold cursor-pointer rounded-md hover:bg-[#0634b3] hover:text-white transition-colors duration-200"
          >
            {item.icon}
            <span className="text-base">{item.label}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
