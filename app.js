const colors = require('colors');
const { tablon } = require('./own_modules/tabla');
const argv = require('./config/yargs');

console.clear();
console.log(argv);

let factor = argv.f;
let listar = argv.l;
let multiplicador = argv.m;

tablon(factor, listar, multiplicador)
    .then( fileName => console.log(`Se ha creado el archivo: ${fileName}`))
    .catch( err => console.log( err ))

