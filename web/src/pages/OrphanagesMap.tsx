import React, { useEffect, useState } from 'react';
import mapMarkerImg from '../images/map-marker.svg';
import {Link } from 'react-router-dom';
import {FiPlus, FiArrowRight} from 'react-icons/fi';
import '../styles/pages/orphanages-map.css';
import {Map, TileLayer, Marker, Popup} from 'react-leaflet';
import mapIcon from '../utils/MapIcon';
import api from '../services/api';

interface Orphanage{
  id: number,
  name: string,
  latitude: number,
  longitude: number
}

function OrphanagesMap(){

  const [orphanages, setOrphanages] = useState<Orphanage[]>([])

  useEffect(()=>{
    api.get('orphanages').then(resp=>{
      setOrphanages(resp.data);
    })
  }, [])

  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarkerImg} alt="Happy"/>
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
        {/* Escolher uma das opções de mapa para ser utilizado, ambas funcionam */}
        {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}
        <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}/>
        {
          orphanages.map(orphanage=>{
            return (
              <Marker
              key={orphanage.id}
              position={[orphanage.latitude,orphanage.longitude]}
              icon={mapIcon}
              >
                <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup">
                  {orphanage.name}
                  <a href={`orphanages/${orphanage.id}`}>
                    <FiArrowRight size={20} color="#FFF"/>
                  </a>
                </Popup>
              </Marker>
            );
          })
        }
      </Map>
      
      
      <Link to="/orphanages/create" className="create-orphanage">
        <FiPlus size={32} color="#FFF"/>
      </Link>
    </div>
  )
}

export default OrphanagesMap