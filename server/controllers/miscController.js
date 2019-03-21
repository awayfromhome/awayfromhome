const stripe = require('stripe')('sk_test_Nv8iegkDSaolHLEsNJDRWmqf');
const { createTransport } = require('nodemailer');

//Before using gmail you must allow less secure apps access to the account aka don't use your primary gmail
let transporter = createTransport({
   service: 'gmail',
   auth: {
      user: 'stickly082@gmail.com', //gmail username
      pass: '746655643082Leed' //gmail password
   }
});

module.exports = {
   newTransaction: (req, res) => {},
   newCharge: async (req, res) => {
      console.log(req.body);
      try {
         let { status } = await stripe.charges.create({
            amount: 50000,
            currency: 'usd',
            source: req.body
         });
         let message = {
            from: 'stickly082@gmail.com',
            to: 'csleedylan@gmail.com',
            subject: 'Test Message',
            html: '<p>Hello there fellow human</p>'
         };
         transporter.sendMail(message);
         res.status(200).json({ status });
      } catch (err) {
         console.log(err);
         res.status(500).end();
      }
   }
};
