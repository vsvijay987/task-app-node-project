const sgMail = require('@sendgrid/mail');

const sendGridApiKey = process.env.SENDGRID_API_KEY

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