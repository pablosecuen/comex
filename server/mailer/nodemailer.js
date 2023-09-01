const nodemailer = require("nodemailer");

// Configura el transporte SMTP
const transporter = nodemailer.createTransport({
  host: "tu_servidor_smtp.com",
  port: 587, // Puerto SMTP
  secure: false, // false para puertos no seguros; true para puertos seguros (por ejemplo, 465)
  auth: {
    user: "tu_usuario_smtp",
    pass: "tu_contraseña_smtp",
  },
});

// Función para enviar correos electrónicos
const sendEmail = (to, subject, text, html) => {
  // Configura el correo electrónico
  const mailOptions = {
    from: "tu_correo_enviador@example.com",
    to,
    subject,
    text,
    html,
  };

  // Envía el correo electrónico
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error al enviar el correo electrónico:", error);
    } else {
      console.log("Correo electrónico enviado con éxito:", info.response);
    }
  });
};

module.exports = sendEmail;
