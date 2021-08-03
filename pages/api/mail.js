/* const mail = require('@sendgrid/mail');

mail.setApiKey(process.env.SEND_GRID_KEY);

export default async function (req, res) {
  //res.status(200).json({ status: 'Ok' });
  const body = JSON.parse(req.body);
  const message = `
    Name:${body.name}\r\n
    Email:${body.email}\r\n
    Message:${body.message}
  `;
  const data = {
    to: 'info@asimmetriya.kz',
    from: body.email,
    subject: 'New message',
    text: message,
    html: message.replace(/\r\n/g, '<br>')
  };
  try {
    mail.send(data);
    res.status(200).json({ status: 'Ok' });
  } catch (error) {
    console.log(error);
  }
}; */

/* import AbortController from 'node-abort-controller';
global.AbortController = AbortController;

const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');


const auth = {
  auth: {
    api_key: process.env.MAILGUN_PRIVATE_KEY || 'MAIL_GUN_API_KEY', // TODO: Replace with your mailgun API KEY
    domain: process.env.MAILGUN_DOMAIN || 'MAIL_GUN_DOMAIN' // TODO: Replace with your mailgun DOMAIN
  }
};


export default async function (req, res) {
  console.log(req.body);
  const mailOptions = {
    from: req.body.email, // TODO replace this with your own email
    to: 'info@asimmetriya.kz', // TODO: the receiver email has to be authorized for the free tier
    name: req.body.name,
    text: req.body.message
  };


  try {
    const transporter = nodemailer.createTransport(mailGun(auth));
    transporter.sendMail(mailOptions);
    res.status(200).json({ status: 'Ok' });
  } catch (error) {
    console.log(error);
  }
} */

const mailgun = require("mailgun-js");
const DOMAIN = process.env.MAILGUN_DOMAIN;
const mg = mailgun({ apiKey: process.env.MAILGUN_PRIVATE_KEY, domain: DOMAIN });

export default async function (req, res) {

  const data = {
    from: 'Excited User <me@samples.mailgun.org>',
    to: 'nazimtudiyev@gmail.com',
    subject: 'Hello',
    text: 'Testing some Mailgun awesomness!'
  };

  const result = await mg.messages().send(data, function (error, body) {
    console.log(body);
  });
  res.status(200).json({ status: 'Ok' });
  return result;
}



// webmail.ps.kz
