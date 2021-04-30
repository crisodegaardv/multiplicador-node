const colors = require('colors');

const argv = require('yargs')
    .option('f', {
        alias: 'factor',
        type: 'number',
        describe: 'Número base para la tabla de multiplicar',
        demandOption: true
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        describe: 'informa si se ha creado el archivo .txt',
        demandOption: true,
        default: false
    })
    .option('m', {
        alias: 'multiplicador',
        type: 'number',
        describe: 'cambia la cantidad de veces que se multiplica el factor',
        default: 10
    })
    .check((argv, option) => {
        if( isNaN(argv.f)) {
            throw 'El factor debe ser un número.'
        } else {
            return true
        }
    })
    .argv
;

module.exports = argv;
