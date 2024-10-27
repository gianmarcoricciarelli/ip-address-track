import L from "leaflet"
import "leaflet/dist/leaflet.css"
import { MapContainer, Marker, TileLayer, useMap } from "react-leaflet"

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
    iconUrl: require("leaflet/dist/images/marker-icon.png"),
    shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
})

interface IChangeMapView {
    position: {
        latitude: number
        longitude: number
    }
}
function ChangeMapView({ position }: IChangeMapView) {
    const map = useMap()

    map.setView([position.latitude, position.longitude], map.getZoom())
    return null
}

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
                eventHandlers={{
                    update: () => console.log("update"),
                }}
            />
            <ChangeMapView
                position={{
                    latitude: Number(latitude),
                    longitude: Number(longitude),
                }}
            />
        </MapContainer>
    )
}
