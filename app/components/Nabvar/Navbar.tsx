"use client";
import Image from "next/image";
import styles from "./navbar.module.css";
import { useState } from "react";
import UseAnimations from "react-useanimations";
import menu2 from "react-useanimations/lib/menu2";
import NavbarMenuDesktop from "./menu/NavbarMenuDesktop";

import NavbarMenuMobile from "./menu/NavbarMenuMobile";

const Navbar: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <div className={styles.navcontainer}>
        <Image src="/assets/logo.svg" width={150} height={50} alt="logo" />
        <button
          onClick={toggleMenu}
          className={`${styles["animation-container"]} ${styles.burgerbtm}`}
        >
          <UseAnimations animation={menu2} size={50} fillColor="#55bbbb" strokeColor="#55bbbb" />
        </button>
        <NavbarMenuDesktop />
        <Image src="/assets/logo.svg" width={150} height={50} alt="logo" className={styles.logo2} />
      </div>
      <NavbarMenuMobile isOpen={isMenuOpen} toggleMenu={toggleMenu} />
    </header>
  );
};

export default Navbar;
