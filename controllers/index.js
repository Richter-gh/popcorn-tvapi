var os = require("os");
var config = require('../config');
module.exports = {
	getIndex: function(req, res) {
		res.json({
			status: 'online', 
			uptime: process.uptime() | 0, 
			server: 'online',
			updated: config.lastRefresh ? config.lastRefresh.toUTCString() : 'Unknown'
		});
	}
}
