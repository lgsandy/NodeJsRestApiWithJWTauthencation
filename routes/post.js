const UserModel = require('../model/UserModel');
const express = require('express');
const router = express.Router();
//import verify token for this route
const verify = require('./verifyToken');
//create get post route
router.get('/', verify, (req, res) => {
	UserModel.find()
		.select('name email')
		.exec()
		.then((result) => {
			res.send(result);
		})
		.catch((err) => {
			res.send(err);
		});
	//res.json({ posts: { title: 'sandy Post', desc: 'Authencated data' } });
});
//export router
module.exports = router;
