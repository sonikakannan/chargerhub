import React from "react";

const ChargerFilters = ({ filterOptions, filters, setFilters }) => (
  <div className="flex flex-wrap gap-4 mb-4 items-center">
    {/* Search Bar */}
    <input
      type="text"
      placeholder="Search by station name..."
      className="border border-gray-300 px-4 py-2 rounded bg-white"
      value={filters.search || ""}
      onChange={(e) =>
        setFilters((prev) => ({
          ...prev,
          search: e.target.value,
        }))
      }
      style={{ minWidth: 220 }}
    />

    {/* Filter Dropdowns */}
    {filterOptions.map(({ label, options }) => (
      <select
        key={label}
        className="border border-gray-300 px-4 py-2 rounded bg-white"
        value={filters[label] || ""}
        onChange={(e) =>
          setFilters((prev) => ({
            ...prev,
            [label]: e.target.value,
          }))
        }
      >
        <option value="">{label}</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    ))}
  </div>
);

export default ChargerFilters;
