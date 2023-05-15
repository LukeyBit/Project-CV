import { createTransport, SendMailOptions, Transporter } from 'nodemailer';
import { Request } from 'express';
import { ControllerResponse } from '../routes/messageRouter';

export function sendMessage(req: Request): ControllerResponse {
    const transporter: Transporter = createTransport({
        host: process.env.SMTP_HOST || '',
        port: Number(process.env.SMTP_PORT) || 465,
        secure: true,
        auth: {
            user: process.env.OUT_EMAIL || '',
            pass: process.env.PASSWORD || '',
        }
    });

    const mailOptions: SendMailOptions = {
        from: process.env.OUT_EMAIL || '',
        to: process.env.IN_EMAIL || '',
        subject: `New message from ${req.body.firstName} ${req.body.lastName}`,
        text: `
            Name: ${req.body.firstName} ${req.body.lastName}
            Email: ${req.body.email}
            Message: ${req.body.message}
            `
    };

    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            return { success: false, message: err.message };
        } else {
            return { success: true, message: 'Message sent' };
        }
    });

    return { success: false, message: 'Message not sent' };
}