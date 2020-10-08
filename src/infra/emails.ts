
import * as nodemailer from "nodemailer";
import { MailOptions } from "nodemailer/lib/json-transport";
import Mail from "nodemailer/lib/mailer";



export class EmailService {

  transporter: Mail;
  constructor() {

    this.transporter = nodemailer.createTransport({
      host: "smtp.office365.com",
      port: 587,
      secure:false,

      tls: { ciphers: 'SSLv3' },
      auth: {
        user: "",
        pass: ""
      }
    });
  }

  Send(message: MailOptions): Promise<any> {

    return new Promise((resolve, reject) => {

      this.transporter.sendMail(message, (error, info) =>
        error ? reject(error) : resolve(info)
      )

    });
  }

}