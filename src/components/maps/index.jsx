import * as React from "react";
import { useRef } from "react";
import { useState } from "react";
import {MapContainer,TileLayer} from 'react-leaflet'
import "leaflet/dist/leaflet.css"
//import "./styles.scss";

export const Mapa = () => {

    const [center,setCenter] = useState({lat:13.084622, lng:80.248357});
    const ZOOM_LEVEL = 9;
    const mapRef = useRef();

    return (
        <div className="maps-body">
            <MapContainer
                center = {center}
                zoom = {ZOOM_LEVEL}
                ref={mapRef}
            >
                <TileLayer url={"https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=0AuPs1ztBg4BMVRtrQAh"}/>
            </MapContainer>
        </div>

    );
};
