const mail = require('@sendgrid/mail');

mail.setApiKey(process.env.SEND_GRID_KEY);

export default async function (req, res) {
  const body = JSON.parse(req.body);
  const message = `
    Name:${body.name}\r\n
    Email:${body.email}\r\n
    Message:${body.message}
  `;
  const data = {
    to: 'info@asimmetriya.kz',
    from: 'info@asimmetriya.kz',
    subject: 'New message',
    text: message,
    html: message.replace(/\r\n/g, '<br>')
  };
  try {
    await mail.send(data);
    res.status(200).json({ status: 'Ok' });
  } catch (error) {
    console.log(error);
  }

};

// webmail.ps.kz
