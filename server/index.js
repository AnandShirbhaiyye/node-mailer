const nodemailer = require("nodemailer");

async function main(){

  const smtpTransport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: "anand213200@gmail.com",
      pass: "pkdokkftupqbukta"
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