const menus = {
    main: `
    gbooks [command] <options>

    books .............. show books 
    fib ................ show fib #
    version ............ show package version
    help ............... show help menu for a command`,

    books: `
    gbooks books <options>

    --phrase, -p ..... the phrase to use`,
}

module.exports = (args) => {
    const subCmd = args._[0] === 'help'
        ? args._[1]
        : args._[0]

    console.log(menus[subCmd] || menus.main)
}