import mongoose from "mongoose";

const chargerSchema = new mongoose.Schema({
  stationName: { type: String, required: true },
  latitude: { type: Number, required: true },
  longitude: { type: Number, required: true },
  status: { type: String, enum: ["Active", "Inactive"], default: "Active"  },
  powerOutput: { type: String, required: true },
  connectorType: { type: String, required: true },
});

const Charger = mongoose.model("Charger", chargerSchema)

export default Charger
