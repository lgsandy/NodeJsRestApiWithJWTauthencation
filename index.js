const postRoute = require('./routes/post');
const AuthRoute = require('./routes/auth');
const express = require('express');
const mongoose = require('mongoose');
const app = express();
//to read .env data
const dotenv = require('dotenv');
dotenv.config();
//create connection to database
// mongoose
// 	.connect('mongodb+srv://nooortest:krishna2016@cluster0-k5hl9.mongodb.net/admin?retryWrites=true&w=majority', {
// 		useUnifiedTopology: true,
// 		useNewUrlParser: true
// 	})
// 	.then((result) => {
// 		console.log('Connection Successfull');
// 	})
// 	.catch((err) => {
// 		console.log(err);
// 	});
mongoose
	.connect('mongodb+srv://nooortest:krishna2016@cluster0-k5hl9.mongodb.net/test?retryWrites=true&w=majority', {
		useUnifiedTopology: true,
		useNewUrlParser: true
	})
	.then((result) => {
		console.log('Connection Successfull');
	})
	.catch((err) => {
		console.log(err);
	});

//middlewares
app.use(express.json());

//Middleware
app.use('/api/users', AuthRoute);
//configure post route
app.use('/api/users', postRoute);

//start server
const port = process.env.PORT || 8080;
app.listen(port, () => {
	console.log(`Server started on potr:${port}`);
});
