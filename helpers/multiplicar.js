const fs = require("fs");
const colors = require('colors');
const crearArchivo = async (base = 5, listar = false, hasta=10) => {

    try {


        let salida = "";


        for (let i = 1; i <= hasta; i++) {
            salida += (`${base} x ${i} = ${base * i}\n`);
        }

        if (listar) {
            console.log("===========================".gray)
            console.log(`table-${base}`.red)
            console.log("===========================".gray)
            console.log(salida.cyan);
        }

        fs.writeFileSync(`./salida/table-${base}.txt`, salida);
        return `table-${base}.txt creada`;

    } catch (err) {
        throw err
    }
}

module.exports = {
    crearArchivo
}