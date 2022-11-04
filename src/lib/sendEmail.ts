import 'dotenv/config';
import mg from 'mailgun-js';
const mailgun = mg({
  apiKey: process.env.MAILGUN_PRIVATE_KEY as string,
  domain: process.env.MAILGUN_DOMAIN as string,
});

type args = {
  email: string;
  subject: string;
  message?: string;
  template?: string;
  variables?: { [key: string]: string };
};

export default function sendEmail({ email, subject, message, template, variables }: args) {
  const data = {
    from: process.env.EMAIL,
    to: email,
    subject,
    text: message,
    template,
    'h:X-Mailgun-Variables': JSON.stringify(variables),
  };
  mailgun.messages().send(data, function (error, body) {
    if (error) console.log(error.message);
  });
}
