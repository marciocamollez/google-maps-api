import React from 'react';
import { GoogleMap, useJsApiLoader, Marker} from '@react-google-maps/api';
import './MapPage.css';

export interface MapPageProps {

}

const MapPage = () => {

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyCpScopcJPFW_jVfoF3YYJEH0RS789fgqg"
      })

      const position = {
        lat: -23.679827, 
        lng: -46.512719
      }

    return (
        <div className="map">
            {isLoaded ? (
                    <GoogleMap
                      mapContainerStyle={{width: '100%', height: '100%'}}
                      center={position}
                      zoom={15}
                      
                    >
                        <Marker position={position} options={{
                            label: {
                                text: "Minha Casa",
                                className: "map-marker"
                            }
                        }} />
                    </GoogleMap>
                ) : (
                <></>
                )}
        </div>
    );
};

export default MapPage