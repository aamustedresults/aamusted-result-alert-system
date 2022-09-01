const axios = require("axios");

const sendSMS = async (message, telephoneNumber) => {
  try {
    // SEND SMS

    const data = {
      sender: "AAMUSTED",
      message: message,
      recipients: [telephoneNumber],
    };

    const res = await axios({
      method: "POST",
      url: process.env.SMS_URL,
      headers: {
        "api-key": process.env.SMS_API_KEY,
      },
      data: data,
    });

    return res.data;
  } catch (error) {
    //error.message);
  }
};

module.exports = sendSMS;
