var drone = require("ar-drone");
var client = drone.createClient();
client.config('general:navdata_demo', 'FALSE');

var _ = require("underscore");
var keymap = require('./keymap.js');

var stop = function() {
	console.log("stopping");
	client.stop();
};

var processKey = function(keyName) {
	try {
		var keycmd = _.findWhere(keymap, {key: keyName});
		if(keycmd) {
			client[keycmd.action].apply(client, keycmd.data);
		}
	} catch (err){ 
		console.log(err);
		client.stop();
		client.land();
	}
};

console.log("T for takeoff");

module.exports = {
	processKey: processKey,
	stop: stop
};