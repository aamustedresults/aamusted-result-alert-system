const axios = require("axios");

const sendSMS = async (message) => {
  try {
    // SEND SMS

    const data = {
      sender: "AAMUSTED",
      message: message,
      recipients: ["+233543772591"],
    };

    const res = await axios({
      method: "POST",
      url: "https://sms.arkesel.com/api/v2/sms/send",
      headers: {
        "api-key": "WmhLR21GSURXd0twZW10VXlMRFA",
      },
      data: data,
    });

    return res.data;
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = sendSMS;
