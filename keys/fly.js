var drone = require("ar-drone");
var client = drone.createClient();
client.config('general:navdata_demo', 'FALSE');

var _ = require("underscore");
var keypress = require('keypress');
var keymap = require('./buttonmap.js');

var stop = function() {
	console.log("stopping");
	client.stop();
};

var processKey = function(keyName) {
	try {
		var keycmd = _.findWhere(keymap, {key: keyName});
		client[keycmd.action].apply(client, keycmd.data);
	} catch (err){ 
		console.log(err);
		client.stop();
		client.land();
	}
};

// make `process.stdin` begin emitting "keypress" events
keypress(process.stdin);

// listen for the "keypress" event
process.stdin.on('keypress', function (ch, key) {
  if (key && key.ctrl && key.name == 'c') {
    process.exit(0);
  } else if(key) {
  	processKey(key.name);
  }
});

process.stdin.setRawMode(true);
process.stdin.resume();

console.log("T for takeoff");