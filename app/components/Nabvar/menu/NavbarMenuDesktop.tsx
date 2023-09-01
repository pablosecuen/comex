"use client";
import Image from "next/image";
import styles from "./NavbarMenuDesktop.module.css";
import Link from "next/link";
import { useState } from "react";
import { services, enlaces } from "@/app/data/data";
import Icon from "../../Icon/Icon";
import handleNavItemClick from "@/app/customHook/handleNavItemClick";

const NavbarMenuDesktop: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLinksOpen, setIsLinksOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsModalOpen(true);
  };

  const handleMouseLeave = () => {
    setIsModalOpen(false);
  };

  const handleMouseEnterLinks = () => {
    setIsLinksOpen(true);
  };

  const handleMouseLeaveLinks = () => {
    setIsLinksOpen(false);
  };

  return (
    <nav className={styles.navcontainer}>
      <ul className={styles.navul}>
        <Link href="#landing" onClick={(e) => handleNavItemClick(e, "landing")}>
          <li>HOME</li>
        </Link>
        <Link href="#nosotros" onClick={(e) => handleNavItemClick(e, "nosotros")}>
          <li>NOSOTROS</li>
        </Link>
        <Link href="#servicios" onClick={(e) => handleNavItemClick(e, "servicios")}>
          <li onMouseEnter={handleMouseEnter} className={styles.serviciosli}>
            SERVICIOS
            {isModalOpen && (
              <div className={styles.modal} onMouseLeave={handleMouseLeave}>
                {/* Contenido del menú secundario */}
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
            )}
          </li>
        </Link>

        <li onMouseEnter={handleMouseEnterLinks} className={styles.enlacesli}>
          ENLACES
          {isLinksOpen && (
            <div className={styles.modal2} onMouseLeave={handleMouseLeaveLinks}>
              {enlaces.map((enlaces, index) => (
                <div className={styles.linkscard} key={index}>
                  <ul className={styles.ul}>
                    <li>
                      <a
                        href={enlaces.link}
                        target="_blank"
                        rel="noreferrer"
                        className={styles.links}
                      >
                        <Image src={enlaces.icon} width={60} height={60} alt="icono" />
                        {enlaces.name}
                      </a>
                    </li>
                  </ul>
                </div>
              ))}
            </div>
          )}
        </li>

        <Link href="#contacto" onClick={(e) => handleNavItemClick(e, "contacto")}>
          <li>CONTACTO</li>
        </Link>
      </ul>
    </nav>
  );
};

export default NavbarMenuDesktop;
