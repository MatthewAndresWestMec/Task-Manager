const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://imdb8.p.rapidapi.com/auto-complete',
  params: {q: 'turbo'},
  headers: {
    'X-RapidAPI-Key': '3ce699255emsh5917ed94f1ec752p1ac410jsneac84a4daee6',
    'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
  }
};


async function main() {
try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}
}
main()