var Promise = require('es6-promise').Promise;
var codepen = require('./codepen');

if (typeof process.argv[2] === 'undefined') {
	console.log('You have to specify a user!');

	process.exit(1);
}

var user = process.argv[2];

codepen.getFollowers(user).then(function (data) {
	var response = {};
	
	response.username = user;
	response.connections = data;

	return codepen.getPublicPens(user).then(function (pens) {
		response.pens = pens;
		response.penCount = pens.length;

		console.log(JSON.stringify(response));
	});
});