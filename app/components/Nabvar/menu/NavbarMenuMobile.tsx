"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./NavbarMenuMobile.module.css";
import handleNavItemClick from "@/app/customHook/handleNavItemClick";
import { services } from "@/app/data/data";
import Icon from "../../Icon/Icon";

const NavbarMenuMobile: React.FC<NavbarMenuMobileProps> = ({ isOpen, toggleMenu }) => {
  const [showServices, setShowServices] = useState(false);

  useEffect(() => {
    setShowServices(isOpen);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSummaryClick = () => {
    setShowServices(!showServices);
  };

  return (
    <>
      {isOpen && <div className={styles.closingdiv} onClick={toggleMenu}></div>}

      <nav className={`${styles.navmobile} ${isOpen ? styles.open : ""}`}>
        <ul className={styles.navul}>
          <Link href="#landing" onClick={(e) => handleNavItemClick(e, "landing")}>
            <li>HOME</li>
          </Link>
          <Link href="#nosotros" onClick={(e) => handleNavItemClick(e, "nosotros")}>
            <li>NOSOTROS</li>
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

          <Link href="#enlaces" onClick={(e) => handleNavItemClick(e, "enlaces")}>
            <li>ENLACES</li>
          </Link>
          <Link href="#contacto" onClick={(e) => handleNavItemClick(e, "contacto")}>
            <li>CONTACTO</li>
          </Link>
        </ul>
      </nav>
    </>
  );
};

export default NavbarMenuMobile;
