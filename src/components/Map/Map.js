import React, {useState} from 'react';
import MapGL, {Marker} from 'react-map-gl';
import {BiMap} from 'react-icons/bi';
import {MapContainer, Icon} from './Map-styles'



const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_API_KEY;

export const Map = () => {

    const [viewport, setViewPort] = useState({
        latitude: 51.4549886,
        longitude: -0.037272,
        zoom: 18,
    })

    return (

        <MapContainer>

            <h3> Find Fred </h3>

                        
            <MapGL 

                {...viewport}
                width="100%"
                height="550px"
                mapStyle="mapbox://styles/mapbox/streets-v11"
                onViewportChange={setViewPort}
                mapboxApiAccessToken={MAPBOX_TOKEN}
                >

                <Marker 
                        latitude={51.4549886} 
                        longitude={-0.037272} 
                        offsetLeft={-33} 
                        offsetTop={-45}
                    >

                    <Icon>

                        <BiMap className='mapicon'/> 

                    </Icon>
                        

                </Marker>

            </ MapGL>



        </MapContainer>
        


    )
}
