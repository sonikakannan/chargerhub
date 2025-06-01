import React, { useState } from "react";
import Sidebar from "../Sidebar";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";

const DashboardLayout = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidde relative ">
      {/* Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-20 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
      {/* Sidebar */}
      <div
        className={`fixed z-30 inset-y-0 left-0 w-64 bg-[#042784] text-white transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:static md:block`}
      >
        {/* Close Icon for mobile */}
        <div className="flex justify-end md:hidden p-4">
          <button onClick={() => setSidebarOpen(false)}>
            <IoClose size={24} className="text-white" />
          </button>
        </div>
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col w-full">
        {/* Top Navbar */}
        <header className="md:hidden p-4 bg-white shadow flex items-center justify-between">
          <button
            onClick={() => setSidebarOpen((prev) => !prev)}
            className="text-gray-700"
          >
            <FiMenu size={24} />
          </button>
        </header>
        <main className="flex-1 p-4 bg-gray-100 overflow-auto">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
