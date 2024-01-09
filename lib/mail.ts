import { transporter, mailOptions } from "@/lib/nodemailer";

const domain = process.env.NEXT_PUBLIC_APP_URL;

export const sendTwoFactorEmail = async (email: string, token: string) => {
  await transporter.sendMail({
    ...mailOptions,
    to: email,
    subject: "2FA Code",
    html: `<p>Your 2FA code: ${token}</p>`,
  });
};

export const sendVerificationEmail = async (email: string, token: string) => {
  const confirmLink = `${domain}/auth/new-verification?token=${token}`;

  await transporter.sendMail({
    ...mailOptions,
    to: email,
    subject: "Confirm your email",
    html: `<p>Click <a href=${confirmLink}>here</a> to confirm email.</p>`,
  });
};

export const sendPasswordResetEmail = async (email: string, token: string) => {
  const resetLink = `${domain}/auth/new-password?token=${token}`;

  await transporter.sendMail({
    ...mailOptions,
    to: email,
    subject: "Reset your password",
    html: `<p>Click <a href=${resetLink}>here</a> to reset password.</p>`,
  });
};
