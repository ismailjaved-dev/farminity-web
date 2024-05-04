import nodemailer from 'nodemailer';

// Create a Nodemailer transporter
const transporter = nodemailer.createTransport({
    service: 'smpt',
    auth: {
        user: 'your_email@example.com',
        pass: 'your_email_password'
    }
});




// Function to send email
export default async function sendEmail(to, subject, text) {
    try {
        // send mail with defined transport object
        let info = await transporter.sendMail({
            from: 'your_email@example.com',
            to: to,
            subject: subject,
            text: text
        });

        console.log("Message sent: %s", info.messageId);
    } catch (error) {
        console.error("Error occurred while sending email: ", error);
    }
}
