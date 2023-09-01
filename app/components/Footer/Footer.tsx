"use client";
import React from "react";
import style from "./footer.module.css";

import { AiOutlineMail } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import Icon from "../Icon/Icon";
import UseAnimations from "react-useanimations";
import facebook from "react-useanimations/lib/facebook";
import linkedin from "react-useanimations/lib/linkedin";
import instagram from "react-useanimations/lib/instagram";

function Footer() {
  return (
    <footer className={style.main}>
      <div className={style.parent}>
        <div className={style.divmobile}>
          <div className={style.div1}>
            {" "}
            <h5 className={style.h5}>SERVICIOS</h5>
            <ul className={style.ul}>
              <li className={style.li}>Operaciones</li>
              <li className={style.li}>Conexiones</li>
              <li className={style.li}>Corresponsalias</li>
              <li className={style.li}>Permisos</li>
              <li className={style.li}>Asesoramiento</li>
            </ul>{" "}
          </div>
          <div className={style.div2}>
            {" "}
            <h5 className={style.h5}>NOSOTROS</h5>
            <ul className={style.ul}>
              <li className={style.li}>Quienes somos?</li>
              <li className={style.li}>Nuestros valores</li>
              <li className={style.li}>Nuestra mision</li>
              <li className={style.li}>Nuestra vision</li>
            </ul>
          </div>
        </div>
        <div className={style.div3}>
          <h5 className={style.h6}>
            Incribite a nuestro
            <br /> __ NewsLetter
          </h5>{" "}
        </div>
        <div className={style.div4}>
          <input className={style.input} />
          <button className={style.btn}>✓</button>
        </div>
        <div className={style.div5}>
          <h5 className={style.seguinos}>SEGUINOS</h5>
          <div className={style.iconmobile}>
            <Icon icon={<AiOutlineMail />} className={style.icon1} />
            <UseAnimations
              animation={facebook}
              size={50}
              className={style.icon}
              fillColor="#ffffff"
              strokeColor="#ffffff"
            />
            <UseAnimations
              animation={linkedin}
              size={50}
              className={style.icon}
              fillColor="#ffffff"
              strokeColor="#ffffff"
            />
            <UseAnimations
              animation={instagram}
              size={50}
              className={style.icon}
              fillColor="#ffffff"
              strokeColor="#ffffff"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
