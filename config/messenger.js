const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const from = process.env.TWILIO_PHONE_NO;
const client = require("twilio")(accountSid, authToken);

const messenger = (to) => {
  client.messages
    .create({
      body: "You have been enrolled successfully on the results system",
      from: from,
      to: to,
    })
    .then((message) => console.log(message.sid))
    .catch((error) => {
      console.log(error);
    });
};

module.exports = messenger;
