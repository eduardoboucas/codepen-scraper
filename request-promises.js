var Promise = require('es6-promise').Promise;
var request = require('request');

var fetchUrl = function (url) {
	return new Promise(function (resolve, reject) {
		request(url, function (err, response, body) {
			if (err) {
				reject(Error(err));
			}
		
			resolve({response: response, body: body});
		});
	});
}

module.exports = {
	fetchUrl: fetchUrl
};