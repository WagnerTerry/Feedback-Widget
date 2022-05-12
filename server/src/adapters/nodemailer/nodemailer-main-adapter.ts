import nodemailer from 'nodemailer'
import { MailAdapter, SendMailData } from '../mail-adapter';

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "90225ef0572625",
      pass: "4b3ac9882f1d90"
    }
  });

export class  NodemailerMailAdapter implements MailAdapter {
    async sendMail({ subject, body}: SendMailData){
         await transport.sendMail({
        from: 'Equipe Feedget <oi@feedget.com>',
        to: 'Wagner Terry <wagner.goncalves@calindra.com.br>',
        subject,
        html: body,
    })
    }
}