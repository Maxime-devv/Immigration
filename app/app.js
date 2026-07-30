require('dotenv').config();
const express = require("express");
const { sendEmail } = require("./api/send-emails/send-emails.js");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.post("/api/send-emails", async (req, res) => {
  const { from, subject, text, captcha } = req.body;

  try {
    const result = await sendEmail(from, subject, text, captcha);
    return res.status(result.status).json(result.body);
  } catch (error) {
    console.error("Erreur inattendue dans la route send-emails:", error);
    return res.status(500).json({ message: "Erreur d'envoi" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});