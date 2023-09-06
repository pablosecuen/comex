import styles from "./modalservices.module.css";
import { services } from "@/app/data/data";

interface ModalServicesProps {
  handleMouseLeave: () => void;
}

function ModalServices({ handleMouseLeave }: ModalServicesProps) {
  return (
    <div className={styles.modal} onMouseLeave={handleMouseLeave}>
      {/* Contenido del menú secundario */}
      {services.map((service, index) => (
        <div className={styles.servicecard} key={index}>
          <div className={styles.icon}>
            <strong>
              <p className={styles.title}> {service.title.toLocaleUpperCase()}</p>
            </strong>
          </div>
          <div className={styles.card}>
            <span className={styles.servicios}>{service.servicio}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ModalServices;
