import React, { useState } from "react";
import DashboardLayout from "../components/layouts/DashboardLayout";
import ChargerFilters from "../components/ChargerFilters";
import ChargerTable from "../components/ChargerTable";
import AddChargerDialog from "../components/AddChargerDialog";
import {
  useReadChargerQuery,
  useDeleteChargerMutation,
} from "../redux/api/chargerApi";
import { toast } from "react-toastify";
import ChargerMap from "../components/ChargerMap";

const filterOptions = [
  { label: "status", options: ["Active", "Inactive"] },
  { label: "powerOutput", options: ["25 kW", "30 kW", "55 kW"] },
  { label: "connectorType", options: ["Type 1", "Type 2", "CCS"] },
];

const DashboardPage = () => {
  const [open, setOpen] = useState(false);
  const [editData, setEditData] = useState(null);
  const [filters, setFilters] = useState({
    status: "",
    powerOutput: "",
    connectorType: "",
  });

  const { data, isLoading, error, refetch } = useReadChargerQuery(
    Object.fromEntries(Object.entries(filters).filter(([_, v]) => v))
  );
  const [deleteCharger] = useDeleteChargerMutation();

  const handleDelete = async (id) => {
    try {
      await deleteCharger(id).unwrap();
      toast.success("Charger deleted successfully");
      refetch();
    } catch (err) {
      toast.error("Failed to delete charger");
      console.error(err);
    }
  };

  return (
    <DashboardLayout>
      <div className="p-6 overflow-x-auto">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Charger List</h1>
          <button
            onClick={() => {
              setEditData(null);
              setOpen(true);
            }}
            className="bg-[#042784] text-white px-4 py-2 rounded hover:bg-[#031e63] cursor-pointer text-lg font-semibold"
          >
            + Add Charger
          </button>
        </div>

        <ChargerFilters
          filterOptions={filterOptions}
          filters={filters}
          setFilters={setFilters}
        />

        {isLoading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>Error loading chargers</div>
        ) : (
          <ChargerTable
            chargers={data?.chargers || []}
            onEdit={(charger) => {
              setEditData(charger);
              setOpen(true);
            }}
            onDelete={handleDelete}
          />
        )}

        <ChargerMap chargers={data?.chargers || []} />

        <AddChargerDialog
          open={open}
          onClose={() => {
            setOpen(false);
            refetch();
          }}
          editData={editData}
        />
      </div>
    </DashboardLayout>
  );
};

export default DashboardPage;
