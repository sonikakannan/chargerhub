import Charger from "../models/charger.model.js"

export const createCharger = async (req, res)=>{
    const { stationName, latitude, longitude, status, powerOutput, connectorType} = req.body 

    try {
        if(!stationName || !latitude || !longitude || !status || !powerOutput || !connectorType){
            return res.status(400).json({ message: "All filed are required"})
        }

        const existingStation = await Charger.findOne({ stationName})

        if(existingStation) return res.status(400).json({ message:"Station Name already exists! Try anthoer one."})
        
        const newCharger = new Charger({
            stationName, 
            latitude, 
            longitude, 
            status, 
            powerOutput, 
            connectorType
        })

        await newCharger.save()
        res.status(201).json({ message: 'Charger created successfully', newCharger })
    } catch (error) {
          console.log("error in creating charger", error.message);
    res.status(500).json({ message: "Internal Server Error" });
    }
}

export const readCharger = async(req, res)=>{
   try {
     const { status, powerOutput, connectorType, search } = req.query;
    const filter = {};
    if (status) filter.status = status;
    if (powerOutput) filter.powerOutput = powerOutput;
    if (connectorType) filter.connectorType = connectorType;
    if (search) filter.stationName = { $regex: search, $options: "i" };

    const chargers = await Charger.find(filter);
    res.status(200).json({ chargers });
   } catch (error) {
     console.error("error reading chargers:", error.message);
    res.status(500).json({ error: "Internal server error" });
   }
}

export const updateCharger = async (req, res) => {
  const { id } = req.params;
  const { stationName, latitude, longitude, status, powerOutput, connectorType } = req.body;

  try {
    const charger = await Charger.findById(id);
    if (!charger) {
      return res.status(404).json({ message: "Charger not found" });
    }

    charger.stationName = stationName || charger.stationName;
    charger.latitude = latitude || charger.latitude;
    charger.longitude = longitude || charger.longitude;
    charger.status = status || charger.status;
    charger.powerOutput = powerOutput || charger.powerOutput;
    charger.connectorType = connectorType || charger.connectorType;

    await charger.save();
    res.status(200).json({ message: "Charger updated successfully", charger });
  } catch (error) {
    console.error("Error updating charger:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const deleteCharger = async (req, res) => {
  const { id } = req.params;

  try {
    const charger = await Charger.findByIdAndDelete(id);

    if (!charger) {
      return res.status(404).json({ message: "Charger not found" });
    }

    res.status(200).json({ message: "Charger deleted successfully" });
  } catch (error) {
    console.error("Error deleting charger:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
