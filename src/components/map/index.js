import React from "react"
import PropTypes from "prop-types"
import L from "leaflet"
import { Map as BaseMap, Marker, Popup, TileLayer } from "react-leaflet"
import styles from "./styles.module.scss"

const isDomAvailable = typeof window !== "undefined"

if (isDomAvailable) {
  // To get around an issue with the default icon not being set up right between using React
  // and importing the leaflet library, we need to reset the image imports
  // See https://github.com/PaulLeCam/react-leaflet/issues/453#issuecomment-410450387

  delete L.Icon.Default.prototype._getIconUrl

  L.Icon.Default.mergeOptions({
    iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
    iconUrl: require("leaflet/dist/images/marker-icon.png"),
    shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
  })
}

const Map = ({ markers, memberData, children }) => {
  if (!isDomAvailable) {
    return (
      <div className={styles.map}>
        <p className={styles.mapLoading}>Loading map...</p>
      </div>
    )
  }

  const mapSettings = {
    center: [29.7604, -95.3698],
    className: styles.mapBase,
    closePopupOnClick: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    touchZoom: false,
    trackResize: false,
    zoom: 10.6,
    zoomControl: false,
    zoomDelta: false,
    zoomSnap: false,
  }
  // TODO put a link
  return (
    <div className={styles.map}>
      <BaseMap {...mapSettings}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={mapSettings.center}>
          <Popup>Dr. Beren</Popup>
        </Marker>
        {children}
        {/* {markers.map((marker, i) => {
          return (
          )
        })} */}
      </BaseMap>
    </div>
  )
}

Map.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  defaultBaseMap: PropTypes.string,
  mapEffect: PropTypes.func,
}

export default Map
