const minimist = require('minimist');

const args = minimist(process.argv.slice(2))

let cmd = args._[0] || 'help'

if (args.version || args.v) {
    cmd = 'version'
}

if (args.help || args.h) {
    cmd = 'help'
}

switch (cmd) {
    case 'books':
        require('./cmds/books')(args)
        break

    case 'version':
        require('./cmds/version')(args)
        break

    case 'fib':
        let fib = require('./cmds/fib')
        console.log(fib(parseInt(args._[1])));
        break;

    case 'help':
        require('./cmds/help')(args)
        break

    default:
        console.error(`"${cmd}" is not a valid command!`)
        break
}