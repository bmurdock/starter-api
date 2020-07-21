const express = require('express');
// export an express.Router()
// that you will PROBABLY call/use in your server.js file...
// expects a Mongoose model to be passed in as the only argument
module.exports = function(Model) {
	const router = express.Router();
	// create new express router
	if (Model instanceof Promise) {
		console.log('we have a promise here...');
	}
	if (Model.then && typeof Model.then === 'function') {
		Promise.resolve(
			Model.then((client) => {
				return createRouter(client, client.cname, router);
			}).catch((err) => {
				console.log('Could not get model: ', err);
			})
		);
	} else {
		console.log('not a promise?');
	}
	return router;
};

const createRouter = (Model, key, router) => {
	const controller = require('./controller');
	const ctrl = controller(Model);
	router.get(`/api/${key}/`, ctrl.getAll);
	router.get(`/api/${key}/:id`, ctrl.getById);
	router.post(`/api/${key}/`, ctrl.create);
	router.delete(`/api/${key}/:id`, ctrl.delete);
	router.put(`/api/${key}/:id`, ctrl.update);
	console.log(`New router created listening on /api/${key}\n`);
	return router;
};
