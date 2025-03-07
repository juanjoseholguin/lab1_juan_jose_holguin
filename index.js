import _ from "lodash"

//Ejercicio 1//

console.log("------Ejercicio 1------");
const numeros = [1, 2, 3, 4, 5];
const numerosInvertidos = _.reverse(numeros);
console.log(numerosInvertidos);
console.log("------------");



//Ejercicio 2//

console.log("------Ejercicio 2------");
const valores = [0, "Hola", false, 42, "", null, "Mundo", undefined, NaN, true]; 
const valoresFiltrados = _.filter(valores, Boolean);
console.log(valoresFiltrados); 
console.log("------------");



//Ejercicio 3//

console.log("------Ejercicio 3------");
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const union = _.union(array1, array2);
console.log(union);
console.log("------------");


//Ejercicio 4//

console.log("------Ejercicio 4------");
const palabras = ["hola", "mundo", "hola", "javascript", "mundo", "hola"];
const frecuenciaElementos = _.countBy(palabras);
console.log( frecuenciaElementos);
console.log("------------");



//Ejercicio 5//

console.log("------Ejercicio 5------");
const arrayUno = [1, 2, 3, 4, 5];
const arrayDos = [3, 4, 5, 6, 7];
const diferencia = _.difference(arrayUno, arrayDos);
console.log(diferencia);
console.log("------------");



//Ejercicio 6//

console.log("------Ejercicio 6------");
const personas = [
  { nombre: "Ana", edad: 25 },
  { nombre: "Luis", edad: 22 },
  { nombre: "Juan", edad: 30 }
];
const personasOrdenadas = _.sortBy(personas, 'edad');
console.log(personasOrdenadas);
console.log("------------");




//Ejercicio 7//

console.log("------Ejercicio 7------");
const numerosRepetidos = [1, 2, 2, 3, 4, 4, 5, 6, 6, 7];
const valoresUnicos = _.uniq(numerosRepetidos);
console.log(valoresUnicos);
console.log("------------");




// Ejercicio 8//

console.log("------Ejercicio 8------");
const n = 3;
const elementos = ["a", "b", "c", "d", "e", "f", "g", "h"];
const grupos = _.chunk(elementos, n);
console.log(grupos);
console.log("------------");



// Ejercicio 9//

console.log("------Ejercicio 9------");
const persona = { nombre: "Carlos", apellido: "Pérez", edad: 28 };
const transformada = _.mapKeys(persona, (valor, clave) => clave.toUpperCase(clave));
console.log(transformada);
console.log("------------");



// Ejercicio 10//

console.log("------Ejercicio 10------");
const anidado = [1, [2, [3, [4, 5]]], 6];
const aplanado = _.flattenDeep(anidado);
console.log(aplanado);
console.log("------------");



// Ejercicio 11//

console.log("------Ejercicio 11------");
const listaa1 = [1, 2, 3, 4, 5];
const listaa2 = [3, 4, 5, 6, 7];
const listaa3 = [5, 6, 7, 8, 9];
const interseccion = _.intersection(listaa1, listaa2, listaa3);
console.log(interseccion);
console.log("------------");


// Ejercicio 12//

console.log("------Ejercicio 12------");
const clave = "curso";
const estudiantes = [
  { nombre: "Mario", curso: "Matemáticas" },
  { nombre: "Lucía", curso: "Historia" },
  { nombre: "Juan", curso: "Matemáticas" },
  { nombre: "Elena", curso: "Historia" }
];
const agrupados = _.groupBy(estudiantes, clave);
console.log(agrupados);
console.log("------------");
