const { sendEmail } = require("./mailer");


// API endpoint for submitting the message
const submitMessage = async (req, res) => {
  const { name, email, subject, message } = req.body;

  try {
    // Send email using the mailer module
    await sendEmail(name, email, subject, message);

    res.sendStatus(200); // Success response
  } catch (error) {
    console.error('Error sending email:', error);
    res.sendStatus(500); // Internal server error response
  }
};

module.exports = {
  submitMessage,
};
