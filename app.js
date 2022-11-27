
const {crearArchivo}=require("./helpers/multiplicar");
const argv = require ("./config/yargs");
const colors = require('colors');

console.clear();





///const base  = 6;


crearArchivo(argv.b, argv.l, argv.h)
.then(nombreArchivo => console.log(nombreArchivo.america))
.catch(err=>console.log(err));