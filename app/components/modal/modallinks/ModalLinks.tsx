import React from "react";
import styles from "./modallinks.module.css";
import Image from "next/image";
import { enlaces } from "@/app/data/data";

interface ModalLinksProps {
  handleMouseLeaveLinks: () => void; // Assuming handleMouseLeave is a function with no parameters and no return value
}

function ModalLinks({ handleMouseLeaveLinks }: ModalLinksProps) {
  return (
    <div className={styles.modal2} onMouseLeave={handleMouseLeaveLinks}>
      {enlaces.map((enlaces, index) => (
        <div className={styles.linkscard} key={index}>
          <ul className={styles.ul}>
            <li>
              <a href={enlaces.link} target="_blank" rel="noreferrer" className={styles.links}>
                <Image src={enlaces.icon} width={60} height={60} alt="icono" />
                {enlaces.name}
              </a>
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
}

export default ModalLinks;
