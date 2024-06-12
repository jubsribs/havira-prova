import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import "leaflet/dist/leaflet.css"
import "./styles.scss";
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

export const Mapa = () => {
    const [usuarios, setUsuarios] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => setUsuarios(data))
            .catch(error => console.error('Erro ao buscar usuários:', error));
    }, []);
    const customIcon = new L.Icon({
        iconUrl: markerIcon,
        iconRetinaUrl: markerIcon2x,
        shadowUrl: markerShadow,
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41],
    });
    return (
        <div className="maps-body">
            <MapContainer center={[40.505, -0.099]} zoom={1.5} className="leaflet-container">
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {usuarios.map((usuario, index) => (
                    <Marker key={index} position={[usuario.address.geo.lat, usuario.address.geo.lng]} icon={customIcon}>
                        <Popup>
                            <b>Nome:</b> {usuario.name} <br />
                            <b>Email:</b> {usuario.email} <br />
                            <b>Rua:</b> {usuario.address.street} <br />
                            <b>apt:</b> {usuario.address.suite} <br />
                            <b>CEP:</b> {usuario.address.zipcode} <br />
                            <b>Cidade:</b> {usuario.address.city}
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    );
};
