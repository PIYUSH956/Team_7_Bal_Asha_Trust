const UserActivity = require('../models/userActivity');
const nodemailer = require('nodemailer');
exports.trackUser = async (req, res) => {

    try {
        const tenDaysAgo = new Date();
        
       
        // Find users who haven't logged in for 10 days
        tenDaysAgo.setDate(tenDaysAgo.getDate() - 10);

       
        const inactiveUsers = await UserActivity.find({ date: { $lt: tenDaysAgo } });
    
       
       console.log(inactiveUsers);
       
    
 
        const transporter = nodemailer.createTransport({
            host: 'smtp.ethereal.email',
            port: 587,
            auth: {
                user: 'verlie44@ethereal.email',
                pass: 'm8DAP281u8dDxCBVDu'
            }
        });

      inactiveUsers.forEach(user => {
        console.log(user);
        const mailOptions = {
          from: '<balAshatrust@gmail.com>',
          to: user.email, 
          subject: 'Reminder: Please log in',
          text: `Hello ,\n\nIt has been more than 10 days since your last login. Please log in to our application.`
        }

        transporter.sendMail(mailOptions, function(err, data) {
            if(err) {
                console.log('Error Occurs'+err);
            } else {
                console.log('Email sent successfully');
            }
        });
    });
  

        return res.status(200).send(inactiveUsers);
    } catch (err) {
        return res.status(400).json(err);
    }

}