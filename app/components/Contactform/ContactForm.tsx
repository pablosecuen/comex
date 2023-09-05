import Image from "next/image";
import style from "./contactform.module.css";

function ContactForm() {
  return (
    <section id="contacto" className={style.main}>
      <div className={style.leftcontainer}>
        <Image
          src="/assets/img/containers.png"
          width={400}
          height={450}
          alt="containers"
          className={style.imgdude}
        />
      </div>
      <div className={style.rightcontainer}>
        <Image
          src="/assets/img/truck.png"
          width={400}
          height={450}
          alt="truck"
          className={style.truck}
        />
        <form className={style.form}>
          <h3 className={style.title}>CONTACTANOS</h3>

          <span className={style.span}>Nuestros representantes estan a disposicion</span>
          <div className={style["form-item"]}>
            <input
              type="text"
              name="subject"
              required
              className={style.input}
              placeholder="Asunto"
            />
          </div>
          <div className={style["form-item"]}>
            <input type="text" name="name" required className={style.input} placeholder="Nombre" />
          </div>
          <div className={style["form-item"]}>
            <input type="text" name="email" required className={style.input} placeholder="E-mail" />
          </div>
          <div className={style["form-item"]}>
            <input
              type="text"
              name="phone"
              required
              className={style.input}
              placeholder="Telefono"
            />
          </div>
          <div className={style["form-item"]}>
            <textarea
              name="message"
              required
              className={style.textarea}
              placeholder="Mensaje"
            ></textarea>
          </div>
          <button role="submit" className={style.btn}>
            ENVIAR
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactForm;
