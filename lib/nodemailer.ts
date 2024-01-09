import nodemailer from "nodemailer";

const email = process.env.EMAIL;
const pass = process.env.EMAIL_PASS;

let config = {
  service: "gmail",
  auth: {
    user: email,
    pass: pass,
  },
};

export const transporter = nodemailer.createTransport(config);

export const mailOptions = {
  from: email,
};
