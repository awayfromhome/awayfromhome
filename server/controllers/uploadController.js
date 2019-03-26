require('dotenv').config();
const aws = require('aws-sdk');
const s3Bucket = new aws.S3({
	Bucket: process.env.BUCKET,
	accessKeyId: process.env.S3_KEY,
	secretAccessKey: process.env.S3_SECRET_KEY
});
module.exports = {
	uploadPic: (req, res) => {
		console.log(req, res);
		try {
			const params = {
				Bucket: process.env.BUCKET,
				Key: req.file.originalname,
				Body: req.file.buffer,
				ContentType: req.file.mimetype
			};
			s3Bucket.upload(params, (err, data) => {
				if (err) {
					console.log('Error in callback', err);
					res.status(500).json({ err: 'error in upload' });
				}

				console.log('data from s3Bucket.upload: ', data);
				res.status(200).json(data);
			});
		} catch (err) {
			res.status(500).json('Internal server error');
		}
	}
};
