const axios = require('axios')

module.exports = async (phrase) => {
    const results = await axios({
        method: 'get',
        url: 'https://www.googleapis.com/books/v1/volumes',
        params: {
            format: 'json',
            q: `${phrase}`,
        },
    })

    return JSON.stringify(results.data);
}