"use client";
import React from "react";
import styles from "./services.module.css";
import { services, extraservices } from "@/app/data/data";
import Icon from "../Icon/Icon";

function Services() {
  return (
    <section className={styles.main}>
      <h3 className={styles.servicestitle}>SERVICIOS</h3>
      <div className={styles.services}>
        {services.map((service, index) => (
          <div className={styles.servicecard} key={index}>
            <div className={styles.card}>
              <div className={styles.icon}>
                <div className={styles.innerCircle}>
                  <Icon icon={service.icon()} className={styles.icon1} />
                </div>
              </div>
              <span className={styles.servicios}>{service.servicio}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
