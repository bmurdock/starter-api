const mongoose = require('mongoose');
const config = require('./config');

module.exports = function() {
	mongoose.set('useNewUrlParser', true);
	mongoose.set('useFindAndModify', false);
	mongoose.set('useCreateIndex', true);
	mongoose.set('useUnifiedTopology', true);

	mongoose
		.connect(config.DB)
		.then((result) => {
			return result;
		})
		.catch((err) => {
			console.log('Error connecting to db: ', err);
		});

	mongoose.connection.on('connected', function() {
		console.log('Mongoose connected to the database...');
	});

	mongoose.connection.on('error', function(mongooseErr) {
		console.log('Mongoose encountered an error while connecting: ', mongooseErr);
	});

	mongoose.connection.on('disconnected', function() {
		console.log('Mongoose connection was disconnected...');
	});

	// handle when the application closes unexpectedly
	process.on('SIGINT', function() {
		mongoose.connection.close(function() {
			console.log('Mongoose connection closed due to server interruption.');
			process.exit(0);
		});
	});
};
