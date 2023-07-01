const nodemailer = require('nodemailer');

// Configure the email transport options
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  auth: {
    user: 'swe.hamedhasan@gmail.com',
    pass: 'ebfroimpxcsqpbmg'
  }
});

// Function to send the email
const sendEmail = async (name, email, subject, message) => {
  try {
    console.log('Sender email:', email);
    // Compose the email
    const mailOptions = {
      from: 'swe.hamedhasan@gmail.com',
      to: 'swe.hamedhasan@gmail.com', // Update the recipient email address here
      replyTo: email, // Set the reply-to address to the user's email
      subject: subject,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage: ${message}`,
    };

    // Send the email using the transporter
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending email:', error);
        throw error; // Propagate the error to the caller
      } else {
        console.log('Email sent:', info.response);
      }
    });
  } catch (error) {
    console.error('Error sending email:', error);
    throw error; // Propagate the error to the caller
  }
};

module.exports = {
  sendEmail,
};
