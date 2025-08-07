const axios = require('axios');
require('dotenv').config(); 

const sendEmail = async (fromm, subjectt, textt, captcha) => {
 if (!captcha) {
    return res.status(400).json({ message: 'Captcha manquant.' });
  }

  try{

    const captchaResponse = await axios.post(`https://www.google.com/recaptcha/api/siteverify?secret=${process.env.CLE_SECRETE}&response=${captcha}`)

     const { success} = captchaResponse.data;

     if(!success) {
        return res.status(400).json({ message: 'Captcha invalide.' });
     }

  const payload = {
    sender: {
      email: process.env.EMAIL_USER,
      name: "Immigration Inc",
    },
    to: [{ email: process.env.EMAIL_USER, name: 'Souhad El-Khatib' }],
    templateId: 1, // ID du template
    params: {
      content: textt,
    },
    
  };

  const payloadNoTemplate = {
    sender: {
      email: process.env.EMAIL_USER,
      name: "Immigration Inc",
    },
    to: [{ email: fromm }],
    subject: "Demande de rendez-vous reçue / Appointment Request Received",
    htmlContent:`<!DOCTYPE html>
<html>
  <body style="font-family: Arial, sans-serif; color: #333333; background-color: #ffffff; padding: 20px; font-size: 16px; line-height: 1.6;">
    <div style="max-width: 600px; margin: auto; border: 1px solid #e0e0e0; border-radius: 8px; padding: 30px; background-color: #fafafa;">
      <h1 style="color: #006699; text-align: center;">Nous avons bien reçu votre demande de rendez-vous</h1>
      <p>Nous vous contacterons bientôt.</p>
      <p>Merci de votre confiance.</p>
      <hr style="margin: 30px 0; border: none; border-top: 1px solid #cccccc;" />
      <h1 style="color: #006699; text-align: center;">We have received your appointment request</h1>
      <p>We will contact you soon.</p>
      <p>Thank you for your trust.</p>

      <div style="background-color: #f1f4f9; text-align: center; padding: 20px; margin-top: 40px; border-radius: 6px;">
        <p style="margin: 0; font-size: 15px;">
          <strong style="font-size: 17px;">Routes immigration</strong><br/>
          1600 Boulevard Henri-Bourassa Ouest,<br/>
          Bureau 312 Montréal, Qc, H3M 3E2
        </p>
      </div>
    </div>
  </body>
</html>`,
  };
    const response = await axios.post('https://api.brevo.com/v3/smtp/email', payload, {
      headers: {
        'Content-Type': 'application/json',
        'api-key': process.env.EMAIL_PASS, 
      },
    });

    console.log('✅ Email envoyé :', response.data);

    const responseNoTemplate = await axios.post('https://api.brevo.com/v3/smtp/email', payloadNoTemplate, {
      headers: {
        'Content-Type': 'application/json',
        'api-key': process.env.EMAIL_PASS, 
      },
    });
    console.log('✅ Email envoyé sans template (deuxième destinataire) :', responseNoTemplate.data);
  }catch (error) {
    console.error('❌ Erreur interne:', error);
    return res.status(500).json({ message: 'Erreur interne.' });
  }
};

module.exports = { sendEmail };
