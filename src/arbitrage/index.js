const request = require("request");

async function getCurrentBidForMarketBITTREX(market) {
	return new Promise((resolve, reject) => {
		request(
			`https://bittrex.com/api/v1.1/public/getticker?market=${market}`,
			(error, response, body) => {
				if (!error) {
					resolve(JSON.parse(body).result.Last);
				}
			}
		);
	});
}

async function getCurrentBidForMarketGDAX(market) {
	return new Promise((resolve, reject) => {
		const options = {
			url: `https://api.gdax.com/products/${market}/ticker`,
			headers: {
				"User-Agent": "alex node app"
			}
		};

		request(options, (error, response, body) => {
			if (!error) {
				let res = JSON.parse(body).price;
				resolve(res);
			}
		});
	});
}

exports.getArbitrage = async () => {
	let bittrex = await getCurrentBidForMarketBITTREX("btc-ltc");
	let gdax = await getCurrentBidForMarketGDAX('LTC-BTC');

	return { gdax, bittrex };
};
