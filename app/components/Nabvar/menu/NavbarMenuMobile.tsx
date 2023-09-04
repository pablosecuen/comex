"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./NavbarMenuMobile.module.css";
import { services, enlaces } from "@/app/data/data";
import Icon from "../../Icon/Icon";
import Image from "next/image";

const NavbarMenuMobile: React.FC<NavbarMenuMobileProps> = ({ isOpen, toggleMenu }) => {
  const [showServices, setShowServices] = useState(false);
  const [showEnlaces, setShowEnlaces] = useState(false);

  useEffect(() => {
    setShowServices(isOpen);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSummaryClick = () => {
    setShowServices(!showServices);
  };

  const handleSummaryClick2 = () => {
    setShowEnlaces(!showEnlaces);
  };

  return (
    <>
      {isOpen && <div className={styles.closingdiv} onClick={toggleMenu}></div>}

      <nav className={`${styles.navmobile} ${isOpen ? styles.open : ""}`}>
        <ul className={styles.navul}>
          <Link href="#landing">
            <li>HOME</li>
          </Link>
          <li>
            <details open={showServices} onToggle={handleSummaryClick}>
              <summary>SERVICIOS</summary>
              <div className={`${styles.modal} ${showServices ? styles.openModal : ""}`}>
                {services.map((service, index) => (
                  <div className={styles.servicecard} key={index}>
                    <div className={styles.icon}>
                      <div className={styles.innerCircle}>
                        <Icon icon={service.icon()} className={styles.icon1} />
                      </div>
                    </div>
                    <div className={styles.card}>
                      <span className={styles.servicios}>{service.servicio}</span>
                    </div>
                  </div>
                ))}
              </div>
            </details>
          </li>
          <Link href="#nosotros">
            <li>NOSOTROS</li>
          </Link>

          <li>
            <details open={showEnlaces} onToggle={handleSummaryClick2}>
              <summary>ENLACES</summary>
              <div className={`${styles.modal} ${showEnlaces ? styles.openModal : ""}`}>
                {enlaces.map((enlace, index) => (
                  <div className={styles.servicecard2} key={index}>
                    <div className={styles.icon2}>
                      <div className={styles.innerCircle2}>
                        <Link href={enlace.link}>
                          {" "}
                          <Image src={enlace.icon} width={60} height={40} alt="icono" />
                        </Link>
                      </div>
                    </div>
                    <div className={styles.card2}></div>
                  </div>
                ))}
              </div>
            </details>
          </li>

          <Link href="#contacto">
            <li>CONTACTO</li>
          </Link>
        </ul>
      </nav>
    </>
  );
};

export default NavbarMenuMobile;
