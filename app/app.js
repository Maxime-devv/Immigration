
require('dotenv').config();
const express = require("express");
const {sendEmail} = require("./api/send-emails/send-emails.js")
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;
console.log("EMAIL_USER =", process.env.EMAIL_USER);
app.use(express.json());
app.options("*", cors());
app.use((req,res,next)=> {
    res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});
app.use(cors());

app.post("/api/send-emails", async (req, res,next)=>{
    const {from,subject, text} = req.body;

    try{
        await sendEmail(from,subject,text);
        res.status(200).json({ message: "Email envoyé avec succès" });
    } catch (error) {
        res.status(500).json({ message: "Erreur d'envoi", error });
    }
})
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});