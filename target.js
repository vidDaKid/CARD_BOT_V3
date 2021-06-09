let request = require('request-promise')
const cookieJar = request.jar();
// Redfine request to automatically save cookies in a cookie jar
request = request.defaults({ jar: cookieJar });

async function main() {
	const mainURL = 'https://www.target.com'
	const authLoginURL = 'https://gsp.target.com/gsp/authentications/v1/auth_codes?client_id=ecom-web-1.0.0&state=1623224525823&redirect_uri=https%3A%2F%2Fwww.target.com%2F'
	const loginURL = 'https://login.target.com/gsp/static/v1/login/'

	const result = await request.get(loginURL, headers={
		'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36',
		'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
	})
	console.log(cookieJar.getCookieString(loginURL))
}

main();
