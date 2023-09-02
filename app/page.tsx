import ContactForm from "./components/Contactform/ContactForm";
import GoogleMapComponent from "./components/Googlemap/GoogleMapComponent";
import Landing from "./components/Landing/Landing";
import Services from "./components/Services/Services";
import Us from "./components/Us/Us";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Landing />
      <section className={styles.banner}>
        <div className={styles.bannercard}>
          <span>
            <div className={styles.bannernumber}>
              <p className={styles.bannerp}>+</p>
              <p className={styles.bannernumber}>20</p>
            </div>
          </span>
          <div className={styles.bannertext}>
            <span>CLIENTES</span>
            <span>
              <strong>ACTIVOS</strong>
            </span>
          </div>
        </div>
        <div className={styles.bannercard}>
          <span>
            <div className={styles.bannernumber}>
              <p className={styles.bannerp}>+</p>
              <p className={styles.bannernumber}>200</p>
            </div>
          </span>
          <div className={styles.bannertext}>
            <span>LOCALIDADES</span>
            <span>
              <strong>CONECTADAS</strong>
            </span>
          </div>
        </div>
        <div className={styles.bannercard}>
          <span>
            <div className={styles.bannernumber}>
              <p className={styles.bannerp}>+</p>
              <p className={styles.bannernumber}>175</p>
            </div>
          </span>
          <div className={styles.bannertext}>
            <span>OPERACIONES</span>
            <span>
              <strong>ANUALES</strong>
            </span>
          </div>
        </div>
      </section>
      <Us />
      <Services />
      <GoogleMapComponent />
      <ContactForm />

    </main>
  );
}
