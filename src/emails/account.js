const sgMail = require('@sendgrid/mail');

const sendGridApiKey = 'SG.SXBHmeWtREeceafU6BvYNQ.H6fBQXM8P6eEdx8QEQEkgRBPDoB8BXkYxHuS2TnNR3s';

sgMail.setApiKey(sendGridApiKey);

sgMail.send({
    to: 'vijaysahu548@gmail.com',
    from: 'vsvijju987@gmail.com',
    subject: 'This is my first sendgrid mail',
    text: 'I hope this mail is received'
})