'use client';

import { LatLngTuple, Icon } from "leaflet";
import {
  Marker,
  Popup,
  MarkerProps
} from 'react-leaflet';

import "leaflet/dist/leaflet.css";
import styles from "./styles.module.css";

export interface PopupMarkerProps extends MarkerProps {
  type: "TEMPORARIAMENTE FECHADO" | "SEM FUNCIONAMENTO" | "EM FUNCIONAMENTO";
  title: string;
  description: string;
  onClose?: () => void;
}

function selectIcon(type: PopupMarkerProps['type']): string {
  switch (type) {
    case "TEMPORARIAMENTE FECHADO":
      return "./images/map-marker-temporarily-closed.png"; 
    case "SEM FUNCIONAMENTO":
      return "./images/map-marker-not-working.png"; 
    case "EM FUNCIONAMENTO":
      return "./images/map-marker-in-operation.png"; 
    default:
      throw new Error("Tipo de marcador inválido.");
  }
}

function selectTypeClass(type: PopupMarkerProps['type']): string {
  switch (type) {
    case "TEMPORARIAMENTE FECHADO":
      return styles.popupTypeClosed; 
    case "SEM FUNCIONAMENTO":
      return styles.popupTypeNotWorking;
    case "EM FUNCIONAMENTO":
      return styles.popupTypeInOperation;
    default:
      throw new Error("Tipo de marcador inválido.");
  }
}

function selectPopupTitleClass(type: PopupMarkerProps['type']): string {
  switch (type) {
    case "TEMPORARIAMENTE FECHADO":
      return styles.popupTitleClosed; 
    case "SEM FUNCIONAMENTO":
      return styles.popupTitleNotWorking;
    case "EM FUNCIONAMENTO":
      return styles.popupTitleInOperation;
    default:
      throw new Error("Tipo de marcador inválido.");
  }
}

export default function PopupMarker({ 
  position, 
  type, 
  title,
  description,
  onClose,
  ...rest 
}: PopupMarkerProps) {
  const customIcon = new Icon({
    iconUrl: selectIcon(type),
    iconSize: [20, 20]
  })

  return (
    <Marker 
      eventHandlers={{ popupclose: onClose }} 
      position={position} 
      icon={customIcon} 
      {...rest} 
    >
      <Popup className={styles.popup} closeButton={false} pane="tooltipPane">
        <section >
          <div className={`${styles.popupType} ${selectTypeClass(type)}`}>
            <p>{type}</p>
          </div>

          <main className={styles.popupText}>
            <h1 className={`${styles.popupTitle} ${selectPopupTitleClass(type)}`}>{title}</h1>
            <p>{description}</p>
          </main>
        </section>
      </Popup>
    </Marker>
  )
}