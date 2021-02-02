const ora = require('ora')
const getBooks = require('../utils/googlebooks')

module.exports = async (args) => {
    const spinner = ora().start()

    try {
        const phrase = args.phrase || args.p;
        const books = await getBooks(phrase);

        spinner.stop();

        console.log(`Current books with ${phrase}:`)
        console.log(`\t${books}`)
    } catch (err) {
        spinner.stop()

        console.error(err)
    }
}