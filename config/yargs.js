const argv = require("yargs")
    .option("b", {
        alias: "base",
        type: "number",
        demandOption: true,
        describe:"es la base de la tabla de multiplicar"
    })
    .check((argv, option) => {
        if (isNaN(argv.b)) {
            throw "la base tiene que ser un numero"
        }
        return true;
    })
    .option("l", {
        alias: "listar",
        type: "boolean",
        default: false,
        describe:"muestra la tabla en consola"
    })
    .option("h", {
        alias: "hasta",
        type: "number",
        default:10,
        describe:"Este es el numero hasta donde quiere la tabla"
    })
    .argv;

module.exports = argv;