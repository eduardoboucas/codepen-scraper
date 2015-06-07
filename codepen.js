var grab = require('./request-promises');
var cheerio = require('cheerio');

var pensUrl = 'http://codepen.io/@user@/next/public-list/?page=@page@&popstateEvent=false&size=small&q=&selected_tag=&love_item=null&love_type=loved&turn_off_js=false&m=false';
var profileUrl = 'http://codepen.io/@user@/popular/';

var getFollowers = function (user) {
	return grab.fetchUrl(profileUrl.replace('@user@', user)).then(function (data) {
		var $ = cheerio.load(data.body);

		if (!$('#profile-grid').length) {
			console.log('The user ' + user + ' does not seem to exist');

			process.exit(1);
		}
		
		var connections = {};

		connections.followers = $('#followers-count').text();
		connections.following = $('#following-count').text();

		return connections;
	});
};

var getPublicPens = function (user, page, pens) {
	var url = pensUrl.replace('@user@', user);
	page = page || 1;
	pens = pens || [];

	return grab.fetchUrl(url.replace('@page@', page)).then(function (data) {
		var $ = cheerio.load(JSON.parse(data.body).html);

		if ($('#no-pens-message').length) {
			return pens;
		}

		$('.pen-in-list-view').each(function (index, pen) {
			var stats = $(pen).find('.stat-value');
			var title = $(pen).find('.title a');

			var comments = parseInt($(stats[0]).text().trim());
			var views = parseInt($(stats[1]).text().trim());
			var loves = parseInt($(stats[2]).text().trim());

			var pen = {
				title: $(title).text().trim(),
				url: $(title).attr('href'),
				comments: isNaN(comments) ? 0 : comments,
				views: isNaN(views) ? 0 : views,
				loves: isNaN(loves) ? 0 : loves
			};

			pens.push(pen);
		});

		return module.exports.getPublicPens(user, page + 1, pens);
	});	
};

module.exports = {
	getFollowers: getFollowers,
	getPublicPens: getPublicPens
};