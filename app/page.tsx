import ContactForm from "./components/Contactform/ContactForm";
import Footer from "./components/Footer/Footer";
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
              <p className={styles.bannernumber}>150</p>
            </div>
          </span>
          <div className={styles.bannertext}>
            <span>CLIENTES</span>
            <span>
              <strong>SATISFECHOS</strong>
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
              <p className={styles.bannernumber}>10000</p>
            </div>
          </span>
          <div className={styles.bannertext}>
            <span>OPERACIONES</span>
            <span>
              <strong>REALIZADAS</strong>
            </span>
          </div>
        </div>
      </section>
      <Us />
      <Services />
      <GoogleMapComponent />
      <ContactForm />
      <Footer />
    </main>
  );
}
