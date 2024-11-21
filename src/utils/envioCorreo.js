const nodeMailer = require('nodemailer');
const { MAIL_CREDENTIALS } = require('./constantes');

const transporter = nodeMailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: MAIL_CREDENTIALS.remitente,
        pass: MAIL_CREDENTIALS.pass
    },
    tls: {
        rejectUnauthorized: false,  // Permitir certificados auto-firmados
    },
})

let mail = {
    from: MAIL_CREDENTIALS.remitente,
    to: "hawavi6871@cpaurl.com",
    subject: "NUEVO CLIENTE",
    text: "RESERVA",
    html: `<h5>UN NUEVO CLIENTE HA SIDO REGISTRADO</h5>`
}

const enviarCorreo = async() =>{
    transporter.sendMail(mail, (error, info) => {
        if(error) {
            console.error("Error sending email: ", error);
        }//end if
        else {
            console.log("Email sent.");
        }//end else
    });
}

module.exports.enviarCorreo = enviarCorreo;