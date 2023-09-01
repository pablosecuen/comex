const express = require("express");
const bodyParser = require("body-parser");
const sendEmail = require("./mailer/nodemailer");

const app = express();
const port = process.env.PORT || 3001; // Puedes especificar el puerto que desees o usar el puerto 3000 como predeterminado

// Middleware para analizar JSON y datos del formulario
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Ruta de ejemplo
app.get("/", (req, res) => {
  res.send("¡Hola, mundo!");
});

// Ruta para manejar solicitudes POST (por ejemplo, para un formulario de contacto)
app.post("/contact", (req, res) => {
  const { name, email, message, subject, phone } = req.body;
  try {
    // Construct email content
    const text = `Name: ${name}\nSubject: ${subject}\nPhone: ${phone}\nEmail: ${email}\nMessage: ${message}`;
    const html = `<p>Name: ${name}\nSubject: ${subject}\nPhone: ${phone}\nEmail: ${email}\nMessage: ${message}</p>`;

    // Send the email
    sendEmail("recipient@example.com", subject, phone, text, html);

    res.status(200).send("Mensaje enviado con éxito");
  } catch (error) {
    console.error("Error handling contact form submission:", error);
    res.status(500).send("An error occurred while processing your request.");
  }
  // Ejemplo de respuesta
  res.json({ message: "Mensaje recibido con éxito", data: { name, email, message } });
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor en ejecución en http://localhost:${port}`);
});
