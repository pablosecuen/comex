import Image from "next/image";
import styles from "./landing.module.css";
import Link from "next/link";

function Landing() {
  return (
    <>
      <div className={styles.parent} id="landing">
        <div className={styles.div1}>
          <video width="600" height="600" autoPlay loop className={styles.earthmp4}>
            <source src="/assets/gif/earth.mp4" type="video/mp4" />
          </video>
        </div>
        <div className={styles.div2}>
          <Image
            src="/assets/img/plain.png"
            alt="guypic"
            width={1200}
            height={400}
            className={styles.guypic}
          ></Image>
          <div className={styles.purplecircle}></div>
        </div>
        <div className={styles.div3}>
          <span className={styles.presupuestos}>PRESUPUESTOS A MEDIDA</span>
        </div>
        <div className={styles.div4}>
          <span className={styles.rotatebrand}>
            <strong>©PARANACOMEX</strong>
          </span>
        </div>
        <div className={styles.div5}>
          <span>
            <p className={styles.square}>■</p> EL COMERCIO MUNDIAL <br /> AL ALCANCE DE TU MANO
          </span>
        </div>
        <div className={styles.div6}>
          <div className={styles.card}>
            <h3>EMPRESA DE COMERCIO INTERNACIONAL</h3>
            <span>
              Encontra nuestra lista de servicios <br /> y los valores que representa nuestra
              agrupacion
            </span>
            <div className={styles.buttoncontainer}>
              <button className={styles.btnservices}>
                <Link href="#servicios">SERVICIOS</Link>
              </button>
              <button className={styles.btnaditionals}>
                <Link href="#servicios">ADICIONALES</Link>
              </button>
            </div>
          </div>
        </div>

        <div className={styles.div8}></div>
        <div className={styles.div9}></div>
      </div>
    </>
  );
}

export default Landing;
