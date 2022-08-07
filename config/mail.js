const nodemailer = require("nodemailer");
const { google } = require("googleapis");

const CLIENT_ID =
  "875564393300-hb6hgvng1vkt937s1jmv7dbebqjmk8l5.apps.googleusercontent.com";
const CLIENT_SECRET = "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";
const REDIRECT_URL = "hhtps://developers.google.com/oauthplayground";
const REFRESH_TOKEN =
  "1//04qm8gkJhayqsCgYIARAAGAQSNwF-L9IrOILTK46y0skCWd-7ZAiAtDD8usa9W1cilkA86XVilUF11GD4Whk99hhrD42iHsMniIA";

const client = new google.auth.OAuth2({
  clientId: CLIENT_ID,
  clientSecret: CLIENT_SECRET,
  redirectUri: REDIRECT_URL,
});
client.setCredentials({
  refresh_token: REFRESH_TOKEN,
});

const sendMail = async (htmlText) => {
  try {
    const ACCESS_TOKEN = await client.getAccessToken();

    const transportMail = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAUTH2",
        user: "nicktest701@gmail.com",
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken: ACCESS_TOKEN,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const mailOptions = {
      from: "nicktest701@gmail.com",
      to: ["phreshboune17@gmail.com"],
      // to: ["phreshboune17@gmail.com", "kwasiowusuansah00@gmail.com"],
      subject: "Message from results system",
      text: "Message from results system",
      html: `<!DOCTYPE html>
      <html lang="en">
      <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;700&display=swap" rel="stylesheet">
      <style>

      html{
        font-family:'Open Sans',sans-serif !important;
        font-size:15px;
      }
      </style>
  </head>
      <body style='font-family:"Open Sans",sans-serif;background-color:whitesmoke;padding:20px;color:#333;'>
      ${htmlText}
      </body>
      </html>
      
      `,
      // attachments: [{ filename: "me.pdf", path: "./me.pdf" }],
    };

    const mailResult = await transportMail.sendMail(mailOptions);
    console.log(mailResult);
  } catch (error) {
    console.log(error);
  }
};

module.exports = sendMail;
