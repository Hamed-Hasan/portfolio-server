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
    console.log(email)
    // Compose the email
    const mailOptions = {
      from: email,
      to: 'swe.hamedhasan@gmail.com', // Update the recipient email address here
      replyTo: email, // Set the reply-to address to the user's email
      subject: subject,
      html: `
        <div style="background: linear-gradient(135deg, #22d3ee 0%, #bfdbfe 100%); padding: 1rem; border-radius: 10px;">
          <div style="background: linear-gradient(135deg, #f59e0b 0%, #fdba74 100%); padding: 1.5rem; border-radius: 10px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">
            <div style="margin-bottom: 1rem;">
              <h3 style="font-size: 1.5rem; font-weight: bold; color: #171717;">Name:</h3>
              <p style="margin: 0;">${name}</p>
            </div>
            <div style="margin-bottom: 1rem;">
              <h3 style="font-size: 1.5rem; font-weight: bold; color: #171717;">Email:</h3>
              <p style="margin: 0;">${email}</p>
            </div>
            <div style="margin-bottom: 1rem;">
              <h3 style="font-size: 1.5rem; font-weight: bold; color: #171717;">Subject:</h3>
              <p style="margin: 0;">${subject}</p>
            </div>
            <div style="margin-bottom: 1rem;">
              <h3 style="font-size: 1.5rem; font-weight: bold; color: #171717;">Message:</h3>
              <p style="margin: 0;">${message}</p>
            </div>
          </div>
        </div>
      `,
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
