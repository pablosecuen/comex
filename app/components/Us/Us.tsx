import Image from "next/image";
import React from "react";
import styles from "./us.module.css";

function Us() {
  return (
    <>
      {" "}
      <section className={styles.main} id="nosotros">
        <Image
          src="/assets/elipse/Design.png"
          width={1100}
          height={500}
          alt="elipse"
          className={styles.elipse}
        />
        <Image
          src="/assets/elipse/Design.png"
          width={1100}
          height={500}
          alt="elipse"
          className={styles.elipse2}
        />
        <Image
          src="/assets/elipse/Design.png"
          width={1100}
          height={500}
          alt="elipse"
          className={styles.elipse3}
        />
        <h3 className={styles.quienessomos}>
          QUIENES <p className={styles.somos}>SOMOS</p>
        </h3>
        <span className={styles.quienessomostexto}>
          En el año 2012, Fernando Pfleiderer y Eduardo Rizzuto deciden asociarse para crear Parana
          Comex, una empresa joven, innovadora y con gran competitividad en el mercado del Comercio
          Exterior, la cual se encuentra estratégicamente ubicada en la ciudad de Rosario. En sus
          inicios la empresa estaba conformada por los socios, los cuales cuentan con más de 15 años
          de experiencia en el rubro y con el tiempo la estructura fue ampliándose. Actualmente está
          integrada por un grupo de trabajo altamente capacitado.
        </span>
        <div className={styles.cardcontainer}>
          <div className={styles.card}>
            <h5 className={styles.title}>Misión</h5>
            <span className={styles.spantext}>
              Nuestro objetivo es brindar un servicio eficiente, personalizado, confiable.
              Consideramos que la clave de los grandes resultados es la sumatoria y coordinación de
              esfuerzos para lograr un mismo objetivo.
            </span>
          </div>
          <div className={styles.card}>
            <h5 className={styles.title}>Valores</h5>
            <span className={styles.spantext}>
              Responsabilidad, Trabajo en equipo, Honestidad, transparencia y compromiso
            </span>
          </div>
          <div className={styles.card}>
            <h5 className={styles.title}>Visión</h5>
            <span className={styles.spantext}>
              Afianzar las relaciones con nuestros clientes proporcionándoles un servicio de calidad
              y superando sus expectativas. Lograr posicionarnos como una de las primeras opciones
              cuando se piense en comercio exterior.
            </span>
          </div>
        </div>
      </section>
    </>
  );
}

export default Us;
