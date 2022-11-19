import express from "express";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(express.json());

app.post("/sendemail", (req, res) => {
  const { to, subject, text } = req.body;
  console.log(req.body);

  const smtpTransport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "anand213200@gmail.com",
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const mail_options = {
    from: "anand213200@gmail.com",
    to: to,
    subject: subject,
    text: text,
  };

  smtpTransport.sendMail(mail_options, () => {
    smtpTransport.close();
  });

  res.json({
    status: true,
    message: "Email sent Successfully...",
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server started running on port ${PORT}📦`);
});
