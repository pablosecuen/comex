/* eslint-disable react/react-in-jsx-scope */
"use client";
import { BsWhatsapp } from "react-icons/bs";
import style from "./whatsappnav.module.css";
import { AiOutlineMail } from "react-icons/ai";
import Link from "next/link";
import UseAnimations from "react-useanimations";
import arrowUp from "react-useanimations/lib/arrowUp";

const WhatsappNav = () => {
  return (
    <div className={style.container}>
      <div className={style.mail}>
        <Link href="mailto:info@paranacomex.com.ar">
          <AiOutlineMail />
        </Link>
      </div>
      <div className={style.top}>
        <Link href="#landing">
          <UseAnimations
            animation={arrowUp}
            size={35}
            className={style.icon1}
            fillColor="#ffffff"
            strokeColor="#ffffff"
          />
          <UseAnimations
            animation={arrowUp}
            size={20}
            className={style.icon}
            fillColor="#ffffff"
            strokeColor="#ffffff"
          />
        </Link>
      </div>
      <div className={style.whatsapp}>
        <Link href="https://wa.link/2rzkxw/" target="_blank">
          <BsWhatsapp />
        </Link>
      </div>
    </div>
  );
};

export default WhatsappNav;
