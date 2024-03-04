'use client';

import { LatLngTuple } from "leaflet";
import { 
  MapContainer, 
  TileLayer, 
  GeoJSON,
} from 'react-leaflet';

import { GeoJsonObject } from 'geojson';

import "leaflet/dist/leaflet.css";
import styles from "./styles.module.css";

import pernambucoData from '@/data/pernambuco.json';
import { markers } from "@/data/markerList";
import PopupMarker, { PopupMarkerProps } from "./PopupMarker";

const position: LatLngTuple = [-8.38, -38]
// @ts-ignore
const pernambucoGeoJson: GeoJsonObject = pernambucoData;

export default function Map() {
  return(
    <div className={styles.container}>
    <MapContainer 
      center={position} 
      zoom={8} 
      scrollWheelZoom={false}
      dragging={false}
      doubleClickZoom={false}
      style={{ height: '100%', width: '100%' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        subdomains='abcd'
        url="https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png"
      />
      <GeoJSON data={pernambucoGeoJson} style={() => ({
        color: '#2F2012',
        weight: 3,
        fillOpacity: 0
      })} />

      {markers.map(marker => (
        <PopupMarker 
          position={marker.position} 
          type={marker.type} 
          title={marker.title} 
          description={marker.description}
        />
      ))}
    </MapContainer>
    </div>
  )
}