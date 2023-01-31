const fs = require("fs");
// const crearArchivo = (base) => {
//   return new Promise((resolve,reject) => {
//     let salida = "";
//     if (0<+base<10) {
//         console.log("==================================");
//         console.log(`   TABLA DE MULTIPLICAR DEL ${base}`);
//         console.log("==================================");
//         for (let i = 1; i <= 10; i++) {
//             salida += base + " x " + i + " = " + +base * +i + "\n";
//         }
//         console.log(salida);
//         fs.writeFileSync(`tabla-${base}.txt`, salida);
//         resolve (`tabla-${base}.txt`);
//     } else {
//         reject (`El numero a multiplicar es incorrecto`);
//     }
//   })
// };

const crearArchivo = async (base=5, l=false, h=10) => {
  try {
    let salida = "";
    salida += "==================================\n";
    salida += `   TABLA DE MULTIPLICAR DEL ${base}` + "\n";
    salida += "==================================\n";
    for (let i = 1; i <= h; i++) {
      salida += base + " x " + i + " = " + +base * +i + "\n";
    }
    if (l) {
      console.log(salida);
    }
    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
    return `tabla-${base}.txt`;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  crearArchivo,
};
