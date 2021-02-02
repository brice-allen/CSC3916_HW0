const ora = require('ora')
const fib = require('../utils/fib')

module.exports = async (args) => {
    const spinner = ora().start()

    try {
        const fib_num = parseInt(args._[1]);

        spinner.stop();

        console.log(`fib # with ${fib_num}:`)
        console.log(fib(fib_num));
    } catch (err) {
        spinner.stop()

        console.error(err)
    }
};