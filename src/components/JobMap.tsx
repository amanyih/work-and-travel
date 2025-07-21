import L from "leaflet";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import type { Company } from "../types";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

type Props = {
  companies: Company[];
};

export default function JobMap({ companies }: Props) {
  const defaultPosition: [number, number] = [-25.2744, 133.7751];

  return (
    <MapContainer
      center={defaultPosition}
      zoom={4}
      className="h-full w-full rounded"
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {companies.map((company) => (
        <Marker
          key={company.companyId}
          position={[company.latitude, company.longitude]}
        >
          <Popup>
            <div>
              <strong>{company.companyName}</strong>
              <p className="text-xs">{company.address}</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
