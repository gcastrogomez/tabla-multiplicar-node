const { crearArchivo } = require("./helpers/multiplicar");
const argv = require("./config/yargs");

console.clear();

//const [, , arg3 = "base=5"] = process.argv; //No es recomendable, hacemos referencia a la posición y busca un caracter= para separar...
//const [, base] = arg3.split("="); //Por lo que limite=20 (podeís probar) haría la tabla del 20, pero esto sirve para entender el funcionamiento.

//const base = 13;
crearArchivo(argv.b, argv.l, argv.h)
  .then((archivo) => console.log(archivo, "creado"))
  .catch((err) => console.log(err));
