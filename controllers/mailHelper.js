const nodemailer = require('nodemailer');
const hbs = require('nodemailer-express-handlebars');
require('dotenv').config()

let smtpTransport = nodemailer.createTransport({
	service: 'gmail',
	host: 'smtp.gmail.com',
	auth: {
		user: process.env.EMAIL,
		pass: process.env.PASS,
	},
});

module.exports = {

	sendListingDetails(email,pid){
		const mailOptions = {
            to: email,
            subject: 'Listing Details From Connect GU',
            text: 'Hey!  To verify your post go to: ' + 'https://calm-reef-86023.herokuapp.com/listings/verify/' + pid + '\n' + 'To Edit your post go to: ' + 'https://connectgu.herokuapp.com/edit/' + pid + '\n' + 'To delete your post go to: ' + 'https://connectgu.herokuapp.com/delete/' + pid + '\n'
        }

		smtpTransport.sendMail(mailOptions, (error, response) => {
			return error, response
		});
	},
    sendVerifyAdress(email,id) {
        const mailOptions = {
            to: email,
            subject: 'Verify Email From Connect GU',
            text: 'Hey!  To verify your email go to: ' + 'https://connectgu.herokuapp.com/Verify/' + id
        }

        smtpTransport.sendMail(mailOptions, (error, response) => {
            return error, response
        });
	},
    sendCommentDetails(email,pid){
        const mailOptions = {
            to: email,
            subject: 'Comment Details From Connect GU',
            text: 'Hey!  To verify your comment go to: ' + 'https://calm-reef-86023.herokuapp.com/comment/' + pid + '\n' + 'To Delete your comment go to: ' + 'https://calm-reef-86023.herokuapp.com/commentDelete/' + pid
        }

        smtpTransport.sendMail(mailOptions, (error, response) => {
            return error, response
        });
    },
    sendFeedback(req,res) {
        const mailOptions = {
            to: 'evanarendss@gmail.com',
            subject: 'FEEDBACK',
            text: req.body.feedback
        }

        smtpTransport.sendMail(mailOptions, (error, response) => {
            if (err)
                res.json(error)
            res.send(response)
        });

    }
};
