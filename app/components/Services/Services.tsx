"use client";
import React from "react";
import styles from "./services.module.css";
import { services } from "@/app/data/data";
import Icon from "../Icon/Icon";

function Services() {
  return (
    <section className={styles.main} id="servicios">
      <h3 className={styles.servicestitle}>SERVICIOS</h3>
      <div className={styles.services}>
        {services.map((service, index) => (
          <div className={styles.servicecard} key={index}>
            <div className={styles.square}>.{String(index + 1).padStart(2, "0")}</div>
            <div className={styles.icon}>
              <div className={styles.innerCircle}>
                <strong className={styles.title}>
                  {service.title.toLocaleUpperCase()}
                  <p className={styles.number}>{String(index + 1).padStart(2, "0")}</p>
                </strong>
              </div>
            </div>
            <span className={styles.servicios}>{service.servicio}</span>
            <button className={styles.button1}>MAS INFO</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
