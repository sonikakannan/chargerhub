import React from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const ChargerTable = ({ chargers = [], onEdit, onDelete }) => (
  <div className="overflow-x-auto">
    <table className="w-full shadow text-left border-separate border-spacing-y-2">
      <thead className=" text-gray-700 bg-white">
        <tr className="">
          <th className="px-4 py-3">Name</th>
          <th className="px-4 py-3">Location</th>
          <th className="px-4 py-3">Status</th>
          <th className="px-4 py-3">Power Output</th>
          <th className="px-4 py-3">Connector Type</th>
          <th className="px-4 py-3">Actions</th>
        </tr>
      </thead>
      <tbody>
        {chargers.map((charger) => (
          <tr
            key={charger._id || charger.stationName}
            className=" hover:bg-gray-50 bg-white cursor-pointer"
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
                className="text-blue-600 hover:underline cursor-pointer flex items-center space-x-1  md:inline-flex"
                onClick={() => onEdit && onEdit(charger)}
              >
                <FaEdit className="inline lg:hidden" />
                <span className="hidden lg:inline">Edit</span>
              </span>
              <span
                className="text-red-600 hover:underline cursor-pointer flex items-center space-x-1 md:inline-flex"
                onClick={() => onDelete && onDelete(charger._id)}
              >
                <MdDelete className="inline lg:hidden " />
                <span className="hidden lg:inline">Delete</span>
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default ChargerTable;
