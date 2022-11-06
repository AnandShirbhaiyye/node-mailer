import express from 'express';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config()

const app = express()
app.use(express.json())

async function main(){

  const smtpTransport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: "anand213200@gmail.com",
      pass: process.env.EMAIL_PASSWORD
    }});

    const mail_options = {
      from: "anand213200@gmail.com",
      to: 'anandshirbhaiyye@gmail.com,prajaktadharpure28@gmail.com',
      subject: 'Test Email to RTC Team',
      text: 'Hello Guys, Im Anand from Road To Code...'
    };

    smtpTransport.sendMail(mail_options, (error, response)=>{
      if(error){
        console.log(error);
      }else{
        console.log('Email sent Successfully...');
      }
      smtpTransport.close();
    });
}

main().catch(console.error);

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`server started running on port ${PORT}📦`)
})