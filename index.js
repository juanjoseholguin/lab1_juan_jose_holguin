import _ from "lodash"

//Ejercicio 1//

const numeros = [1, 2, 3, 4, 5];
const numerosInvertidos = _.reverse(numeros);
console.log(numerosInvertidos);



//Ejercicio 2//

const valores = [0, "Hola", false, 42, "", null, "Mundo", undefined, NaN, true]; 
const valoresFiltrados = _.filter(valores, Boolean);
console.log(valoresFiltrados); 



//Ejercicio 3//

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const union = _.union(array1, array2);
console.log(union);



//Ejercicio 4//

const palabras = ["hola", "mundo", "hola", "javascript", "mundo", "hola"];
const frecuenciaElementos = _.countBy(palabras);
console.log( frecuenciaElementos);



//Ejercicio 5//

const arrayUno = [1, 2, 3, 4, 5];
const arrayDos = [3, 4, 5, 6, 7];
const diferencia = _.difference(arrayUno, arrayDos);
console.log(diferencia);



//Ejercicio 6//

const personas = [
  { nombre: "Ana", edad: 25 },
  { nombre: "Luis", edad: 22 },
  { nombre: "Juan", edad: 30 }
];
const personasOrdenadas = _.sortBy(personas, 'edad');
console.log(personasOrdenadas);




//Ejercicio 7//

const numerosRepetidos = [1, 2, 2, 3, 4, 4, 5, 6, 6, 7];
const valoresUnicos = _.uniq(numerosRepetidos);
console.log(valoresUnicos);




// Ejercicio 8//

const n = 3;
const elementos = ["a", "b", "c", "d", "e", "f", "g", "h"];
const grupos = _.chunk(elementos, n);
console.log(grupos);



// Ejercicio 9//

const persona = { nombre: "Carlos", apellido: "Pérez", edad: 28 };
const transformada = _.mapKeys(persona, (value, key) => key.toUpperCase());
console.log(transformada);



// Ejercicio 10//

const anidado = [1, [2, [3, [4, 5]]], 6];
const aplanado = _.flattenDeep(anidado);
console.log(aplanado);



// Ejercicio 11//

const listaa1 = [1, 2, 3, 4, 5];
const listaa2 = [3, 4, 5, 6, 7];
const listaa3 = [5, 6, 7, 8, 9];
const interseccion = _.intersection(listaa1, listaa2, listaa3);
console.log(interseccion);


// Ejercicio 12//

const clave = "curso";
const estudiantes = [
  { nombre: "Mario", curso: "Matemáticas" },
  { nombre: "Lucía", curso: "Historia" },
  { nombre: "Juan", curso: "Matemáticas" },
  { nombre: "Elena", curso: "Historia" }
];
const agrupados = _.groupBy(estudiantes, clave);
console.log(agrupados);
