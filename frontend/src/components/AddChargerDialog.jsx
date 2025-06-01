import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  MenuItem,
  Stack,
} from "@mui/material";
import {
  useCreateChargerMutation,
  useUpdateChargerMutation,
} from "../redux/api/chargerApi";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const fields = [
  { label: "Station Name", name: "stationName", type: "text" },
  { label: "Latitude", name: "latitude", type: "text" },
  { label: "Longitude", name: "longitude", type: "text" },
  {
    label: "Status",
    name: "status",
    type: "select",
    options: [
      { value: "Active", label: "Active" },
      { value: "Inactive", label: "Inactive" },
    ],
  },
  { label: "Power Output (kW)", name: "powerOutput", type: "text" },
  { label: "Connector Type", name: "connectorType", type: "text" },
];

const defaultForm = {
  stationName: "",
  latitude: "",
  longitude: "",
  status: "Active",
  powerOutput: "",
  connectorType: "",
};

const AddChargerDialog = ({ open, onClose, editData = null }) => {
  const [form, setForm] = useState(defaultForm);
  const [createCharger, { isLoading }] = useCreateChargerMutation();

  const [updateCharger] = useUpdateChargerMutation();

  useEffect(() => {
    if (editData) setForm(editData);
    else setForm(defaultForm);
  }, [editData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    try {
      if (editData?._id) {
        await updateCharger({ id: editData._id, data: form }).unwrap();
        toast.success("Charger updated successfully");
      } else {
        await createCharger(form).unwrap();
        toast.success("Charger added successfully");
      }
      setForm(defaultForm);
      onClose();
    } catch (error) {
      toast.error("Error creating charger");
      console.error("Error creating charger:", error);
    }
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>Add New Charger</DialogTitle>
      <DialogContent>
        <Stack spacing={2}>
          {fields.map((field) =>
            field.type === "select" ? (
              <TextField
                key={field.name}
                select
                label={field.label}
                name={field.name}
                value={form[field.name]}
                onChange={handleChange}
                fullWidth
              >
                {field.options.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            ) : (
              <TextField
                key={field.name}
                label={field.label}
                name={field.name}
                value={form[field.name]}
                onChange={handleChange}
                fullWidth
              />
            )
          )}
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} style={{ color: "#042784" }}>
          Cancel
        </Button>
        <Button
          onClick={handleSubmit}
          disabled={isLoading}
          style={{ backgroundColor: "#042784", color: "#fff" }}
          className="bg-[#042784] hover:bg-[#031e63] text-white px-4 py-2 rounded transition-colors duration-200"
        >
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddChargerDialog;
