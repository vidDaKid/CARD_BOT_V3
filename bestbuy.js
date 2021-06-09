let request = require('request-promise');
const cookieJar = request.jar();
request = request.defaults({ jar: cookieJar });

async function main() {
	const res = await request.get('https://www.bestbuy.com');
	// const cookieString = cooki.getCookieString('https://www.bestbuy.com');
	conole.log(res)
}

main();
