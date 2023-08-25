import React from "react";
import style from "./footer.module.css";

import { AiFillLinkedin, AiOutlineMail } from "react-icons/ai";
import { BsGithub, BsInstagram } from "react-icons/bs";

function Footer() {
  return (
    <footer className={style.main}>
      <div className={style.parent}>
        <div className={style.div1}></div>
        <div className={style.div2}>
          <h5>Servicios</h5>
          <ul>
            <li>123</li>
            <li>123</li>
            <li>123</li>
            <li>123</li>
          </ul>{" "}
        </div>
        <div className={style.div3}>
          <h5>NOSOTROS</h5>
          <ul>
            <li>asd</li>
            <li>asd</li>
            <li>asd</li>
            <li>Asd</li>
          </ul>
        </div>
        <div className={style.div4}>
          Incribite a nuestro NewsLetter
          <input />
          <button></button>
        </div>
        <div className={style.div5}>
          <h5>SEGUINOS</h5>
          <BsInstagram /> <AiOutlineMail /> <AiFillLinkedin />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
