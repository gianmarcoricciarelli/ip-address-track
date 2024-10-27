import L from "leaflet"
import "leaflet/dist/leaflet.css"
import { MapContainer, Marker, TileLayer } from "react-leaflet"

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
    iconUrl: require("leaflet/dist/images/marker-icon.png"),
    shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
})

interface IMap {
    latitude: string
    longitude: string
}
export function Map({ latitude, longitude }: IMap) {
    return (
        <MapContainer
            className="h-[67%]"
            center={{ lat: Number(latitude), lng: Number(longitude) }}
            zoom={13}
            scrollWheelZoom={false}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker
                position={{ lat: Number(latitude), lng: Number(longitude) }}
            />
        </MapContainer>
    )
}
