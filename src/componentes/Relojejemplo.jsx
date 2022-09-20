import React, { useEffect, useState } from 'react';
import './reloj.css';

export const Reloj = () => {

    const date = new Date();

    const [dataTime, setDataTime] = useState({
        horas: date.getHours(),
        minutos: date.getMinutes(),
        segundos: date.getSeconds(),
        edad: 0,
        nombre: 'Martín',
        apellidos: 'San José'
    });


    useEffect(() => {
        
        const timer = setInterval(() => {
            
            const date = new Date();
            setDataTime({
                horas: date.getHours(),
                minutos: date.getMinutes(),
                segundos: date.getSeconds(),
            });
            
        }, 1000);
        

        return () => clearInterval(timer);

    }, []);

    return (
        <>
            <div className="autor">GDcode</div>
            <div className="container">
                <div className="contador">
                    <p>
                        {dataTime.horas < 10 ? ` 0${dataTime.horas}` : dataTime.horas} h : {dataTime.minutos < 10 ? ` 0${dataTime.minutos}` : dataTime.minutos} min : {dataTime.segundos < 10 ? ` 0${dataTime.segundos}` : dataTime.segundos} seg
                    </p>
                    <h3>{this.state.nombre} {this.state.apellidos}</h3>
                    <h1>Edad: {this.state.edad}</h1>
                </div>
            </div>
        </>
    )
}