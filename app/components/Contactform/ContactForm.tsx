
import style from "./contactform.module.css";

function ContactForm() {
  return (
    <section id="contact" className={style.main}>
      <div className={style.leftcontainer}></div>
      <div className={style.rightcontainer}>
        <h3 className={style.title}>CONTACTANOS</h3>
        <span className={style.span}>Nuestros representantes estan a disposicion</span>
        <form className={style.form}>
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
            <input
              type="text"
              name="sender"
              required
              className={style.input}
              placeholder="Nombre"
            />
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
              className={style.input}
              placeholder="Mensaje"
            ></textarea>
          </div>
          <button className={style.btn}>ENVIAR</button>
        </form>
      </div>
    </section>
  );
}

export default ContactForm;
