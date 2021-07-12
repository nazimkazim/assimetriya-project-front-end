const SparkPost = require('sparkpost');


export default function (req, res) {

  const client = new SparkPost(process.env.SPARK_POST_KEY);
  const data = JSON.parse(req.data);
  const message = `
    Name:${data.name}\r\n
    Email:${data.email}\r\n
    Message:${data.message}
  `;
  client.transmissions.send({
    content: {
      from: 'info@asimmetriya.kz',
      subject: "test email",
      html: message
    },
    recipients: [{ address: email }]
  }).then(() => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application-json");
    res.end(JSON.stringify({ error: null }));
  }).catch((e) => {
    console.log(e);
    res.statusCode = 500;
    res.setHeader("Content-Type", "application-json");
    res.end(JSON.stringify({ error: 'error sending email' }));
  });
};

// webmail.ps.kz
