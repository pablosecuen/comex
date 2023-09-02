"use client";
import { BsWhatsapp } from "react-icons/bs";
import style from "./whatsappnav.module.css";
import { AiOutlineArrowUp, AiOutlineMail } from "react-icons/ai";
import Link from "next/link";
import handleNavItemClick from "@/app/customHook/handleNavItemClick";
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
          <AiOutlineArrowUp onClick={(e: any) => handleNavItemClick(e, "landing")} />
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
