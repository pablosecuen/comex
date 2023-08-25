"use client";
import React from "react";
import style from "./googlemaps.module.css";

function GoogleMapComponent() {
  return (
    <div className={style.main}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d26782.718833403076!2d-60.6570331!3d-32.9552373!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b7aa55f4c6c0e3%3A0x8ee073f733089006!2sParana%20Comex%20SRL%20-%20Comercio%20Exterior%20-%20Estudio%20Aduanero%20-%20Despachantes%20de%20Aduana!5e0!3m2!1ses!2sar!4v1692918244449!5m2!1ses!2sar"
        width="1920"
        height="450"
        loading="lazy"
      ></iframe>
    </div>
  );
}

export default GoogleMapComponent;
