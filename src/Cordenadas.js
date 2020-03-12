import React , { useState, useEffect } from 'react';


function useCordenada() {

    const [cordenada, setCordenada] = useState({
        latitud: null,
        longitud: null
    });
    let geoId;

    useEffect( () => {
        geoId = window.navigator.geolocation.watchPosition(position => {
            setCordenada({
                latitud: position.coords.latitude,
                longitud: position.coords.longitude
            });
        });
        return () => {
            navigator.geolocation.clearWatch(geoId)
        };
    });
    return cordenada;
}
export default function Cordenada() {
    const cordenada = useCordenada();


    return(
        <div>
            { cordenada.latitud == null ? (<div>cargando...</div>) : 
                 <div>
                 <h1>Soy las cordenadas</h1>
                 <h3> latitud: {cordenada.latitud != null ? cordenada.latitud : "no hay"}</h3>
                 <h3> longitud: {cordenada.longitud != null ?cordenada.longitud: 'no hay' }  </h3>
             </div>
            }
        </div>
    )
}