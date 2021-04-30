const fs = require('fs');
const colors = require('colors');

let factor;

const tablon = async( factor, listar = false, multiplicador ) => {
    try {
        const fileName = `tabla-del-${factor}.txt`;
        let data = '';
        let breakLine = '=================='.green;
        let breakLine2 = '==================\n'.green;

        if( listar ){
            for(let i = 1; i <= multiplicador; i++) {
                data += `${ factor } * ${ i } = ${ factor * i }\n`;
            }
            console.log(breakLine);
            console.log(`Tabla del ${factor}`);
            console.log(breakLine2);
            console.log(data);
            console.log(breakLine2);
        } else {
            for(let i = 1; i <= multiplicador; i++) {
                data += `${ factor } * ${ i } = ${ factor * i }\n`;
            }
        }

        fs.writeFileSync(`./salida/${fileName}`, data);
    
        return(`${fileName}`.underline.yellow);
        
    } catch ( err ) {
        throw err;
    }
}

module.exports = {
    tablon
}