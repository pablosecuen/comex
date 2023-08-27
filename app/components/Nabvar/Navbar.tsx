"use client";
import Image from "next/image";
import styles from "./navbar.module.css";
import Link from "next/link";
import { useState } from "react";
import { services } from "@/app/data/data";
import Icon from "../Icon/Icon";
const Navbar: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsModalOpen(true);
  };

  const handleMouseLeave = () => {
    setIsModalOpen(false);
  };

  return (
    <nav className={styles.navcontainer}>
      <Image src="/assets/logo.svg" width={200} height={50} alt="logo" />
      <ul className={styles.navul}>
        <Link href="">
          <li>HOME</li>
        </Link>
        <Link href="">
          <li>NOSOTROS</li>
        </Link>
        <Link href="">
          <li onMouseEnter={handleMouseEnter}>
            SERVICIOS
            {isModalOpen && (
              <div className={styles.modal} onMouseLeave={handleMouseLeave}>
                {/* Contenido del menú secundario */}
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
            )}
          </li>
        </Link>
        <Link href="">
          <li>ENLACES</li>
        </Link>
        <Link href="">
          <li>CONTACTO</li>
        </Link>
      </ul>
      <Image src="/assets/logo.svg" width={200} height={50} alt="logo" />
    </nav>
  );
};

export default Navbar;
