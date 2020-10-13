import React from 'react';
import MapMarkerImg from '../images/map-marker.svg';
import {Link } from 'react-router-dom';
import {FiPlus} from 'react-icons/fi';
import '../styles/pages/orphanages-map.css';
import {Map, TileLayer} from 'react-leaflet';

import 'leaflet/dist/leaflet.css'
function OrphanagesMap(){
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={MapMarkerImg} alt="Happy"/>
          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita </p>
        </header>
        <footer>
          <strong>Araras</strong>
          <span>São Paulo</span>
        </footer>
      </aside>
      
      <Map 
        center={[-22.3716386,-47.3762682]}
        zoom={15}
        style={{
          width: '100%',
          height: '100%'
        }}
      >
        <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      </Map>
      
      
      <Link to="" className="create-orphanage">
        <FiPlus size={32} color="#FFF"/>
      </Link>
    </div>
  )
}

export default OrphanagesMap