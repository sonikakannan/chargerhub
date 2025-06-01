import React, { useState } from "react";
import { FaEdit, FaAngleRight , FaAngleLeft } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const ITEMS_PER_PAGE = 5;

const ChargerTable = ({ chargers = [], onEdit, onDelete }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(chargers.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedChargers = chargers.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handlePrevious = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full shadow text-left border-separate border-spacing-y-2">
        <thead className="text-gray-700 bg-white">
          <tr>
            <th className="px-4 py-3">Name</th>
            <th className="px-4 py-3">Location</th>
            <th className="px-4 py-3">Status</th>
            <th className="px-4 py-3">Power Output</th>
            <th className="px-4 py-3">Connector Type</th>
            <th className="px-4 py-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {paginatedChargers.map((charger) => (
            <tr
              key={charger._id || charger.stationName}
              className="hover:bg-gray-50 bg-white cursor-pointer"
            >
              <td className="px-4 py-3">{charger.stationName}</td>
              <td className="px-4 py-3">
                {charger.latitude} {charger.longitude}
              </td>
              <td className="px-4 py-3">{charger.status}</td>
              <td className="px-4 py-3">{charger.powerOutput}</td>
              <td className="px-4 py-3">{charger.connectorType}</td>
              <td className="px-4 py-3 space-x-3 flex">
                <span
                  className="text-blue-600 hover:underline cursor-pointer flex items-center space-x-1 md:inline-flex"
                  onClick={() => onEdit && onEdit(charger)}
                >
                  <FaEdit className="inline lg:hidden" />
                  <span className="hidden lg:inline">Edit</span>
                </span>
                <span
                  className="text-red-600 hover:underline cursor-pointer flex items-center space-x-1 md:inline-flex"
                  onClick={() => onDelete && onDelete(charger._id)}
                >
                  <MdDelete className="inline lg:hidden" />
                  <span className="hidden lg:inline">Delete</span>
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination Controls */}
      <div className="flex justify-between items-center mt-4 px-4">
        <button
          onClick={handlePrevious}
          disabled={currentPage === 1}
          className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
        >
          <FaAngleLeft className="cursor-pointer"/>
        </button>
        <span className="text-sm">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
        >
          <FaAngleRight className="cursor-pointer"/>
        </button>
      </div>
    </div>
  );
};

export default ChargerTable;
