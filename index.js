import _ from "lodash"

//Ejercicio 1//

const numeros = [1, 2, 3, 4, 5];
const numerosinvertidos = _.reverse(numeros);
console.log(numerosinvertidos);



//Ejercicio 2//

const valores = [0, "Hola", false, 42, "", null, "Mundo", undefined, NaN, true]; 
const valoresfiltrados = _.filter(valores, Boolean);
console.log(valoresfiltrados); 



//Ejercicio 3//

const arrayuno = [1, 2, 3];
const arraydos = [4, 5, 6];
const union = _.union(arrayuno, arraydos);
console.log(union);



//Ejercicio 4//

const palabras = ["hola", "mundo", "hola", "javascript", "mundo", "hola"];
const frecuenciadeelementos = _.countBy(palabras);
console.log( frecuenciadeelementos);



//Ejercicio 5//

const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];
const diferencia = _.difference(array1, array2);
console.log(diferencia);



//Ejercicio 6//

const personas = [
  { nombre: "Ana", edad: 25 },
  { nombre: "Luis", edad: 22 },
  { nombre: "Juan", edad: 30 }
];
const personasordenadas = _.sortBy(personas, 'edad');
console.log(personasordenadas);




//Ejercicio 7//

const numerosrepetidos = [1, 2, 2, 3, 4, 4, 5, 6, 6, 7];
const valoresunicos = _.uniq(numerosrepetidos);
console.log(valoresunicos);




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