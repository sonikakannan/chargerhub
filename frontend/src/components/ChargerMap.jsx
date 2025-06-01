import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

const FitBounds = ({ chargers }) => {
  const map = useMap();

  useEffect(() => {
    if (chargers.length > 0) {
      const bounds = L.latLngBounds(
        chargers.map((charger) => [charger.latitude, charger.longitude])
      );
      map.fitBounds(bounds);
    }
  }, [chargers, map]);

  return null;
};

const ChargerMap = ({ chargers }) => {
  const defaultCenter = [20.5937, 78.9629];
  return (
    <div className="mt-6" style={{ height: "400px", width: "100%" }}>
      <MapContainer
        center={defaultCenter}
        zoom={5}
        scrollWheelZoom={true}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        />

        <FitBounds chargers={chargers} />

        {chargers.map((charger) => (
          <Marker
            key={charger._id}
            position={[charger.latitude, charger.longitude]}
          >
            <Popup>
              <strong>{charger.stationName}</strong>
              <br />
              Status: {charger.status}
              <br />
              Power: {charger.powerOutput}
              <br />
              Connector: {charger.connectorType}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default ChargerMap;
