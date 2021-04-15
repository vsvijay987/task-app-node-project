const sgMail = require('@sendgrid/mail');

const sendGridApiKey = 'SG.SXBHmeWtREeceafU6BvYNQ.H6fBQXM8P6eEdx8QEQEkgRBPDoB8BXkYxHuS2TnNR3s';

sgMail.setApiKey(sendGridApiKey);

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        from: 'vsvijju987@gmail.com',
        to: email,
        subject: "Thankyou for joining in!",
        text: `Welcome to the app, ${name}. Let me know how you get along with the app`
    })
}

const sendUserRemovedEmail = (email, name) => {
    sgMail.send({
        from: 'vsvijju987@gmail.com',
        to: email,
        subject: "We will miss you!!",
        text: `Please let us know ${name}, what's gone wrong from our side !`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendUserRemovedEmail
}