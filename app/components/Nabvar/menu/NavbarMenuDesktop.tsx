"use client";
import styles from "./NavbarMenuDesktop.module.css";
import Link from "next/link";
import { useState } from "react";
import ModalServices from "../../modal/modalservices/ModalServices";
import ModalLinks from "../../modal/modallinks/ModalLinks";

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
        <Link href="#landing">
          <li>HOME</li>
        </Link>
        <Link href="#servicios">
          <li onMouseEnter={handleMouseEnter} className={styles.serviciosli}>
            SERVICIOS
            {isModalOpen && <ModalServices handleMouseLeave={handleMouseLeave} />}
          </li>
        </Link>
        <Link href="#nosotros">
          <li>NOSOTROS</li>
        </Link>

        <li onMouseEnter={handleMouseEnterLinks} className={styles.enlacesli}>
          ENLACES
          {isLinksOpen && <ModalLinks handleMouseLeaveLinks={handleMouseLeaveLinks} />}
        </li>
        <Link href="#contacto">
          <li>CONTACTO</li>
        </Link>
      </ul>
    </nav>
  );
};

export default NavbarMenuDesktop;
