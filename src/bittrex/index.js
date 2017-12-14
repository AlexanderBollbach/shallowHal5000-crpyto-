var bittrex = require("node.bittrex.api");
const config = require("configuration");
const https = require('https')
const bittrexAPIKey = config.get("BITTREX_API_KEY");
const bittrexAPISecret = config.get("BITTREX_API_SECRET");

bittrex.options({
	apikey: bittrexAPIKey,
	apisecret: bittrexAPISecret
});

exports.printMarkets = function() {


var options = {
  host: 'www.google.com',

};

var req = https.request(options, function(res) {
  console.log('STATUS: ' + res.statusCode);
  console.log('HEADERS: ' + JSON.stringify(res.headers));
  res.setEncoding('utf8');
  res.on('data', function (chunk) {
    console.log('BODY: ' + chunk);
  });
});
	// bittrex.getmarketsummaries(function(data, err) {
	// 	if (err) {
	// 		return console.error(err);
	// 	}

	// 	const list = data.result.map(foo => foo.MarketName)

	// 	for (var x in list) {
	// 		console.log(typeof list)
	// 		console.log(list)
	// 	}
	// for (var i in data.result) {
	// 	bittrex.getticker({ market: data.result[i].MarketName }, function(
	// 		ticker
	// 	) {
	// 		console.log(ticker);
	// 	});
	// }
	// });
};
