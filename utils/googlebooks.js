const axios = require('axios')

module.exports = async (phrase) => {
    const results = await axios.get('https://www.googleapis.com/books/v1/volumes', {
        params: {
            format: 'json',
            q: `${phrase}`
        }
    })

    //return JSON.stringify(results.data);
    let customObject = {
        data: results.data,
            status: results.status,
            statsText: results.statusText,
            headers: results.headers,
            requestHeader: (results.config ? results.config.headers : null)
    }

    return JSON.stringify(customObject);
}

/*  console.log(results.data);
    console.log(results.status);
    console.log(results.statusText);
    console.log(results.headers);

        const results = await axios({
        method: 'get',
        url: 'https://www.googleapis.com/books/v1/volumes',
        params: {
            format: 'json',
            q: `${phrase}`,
        },
    })*/
