// En estas primeras 6 preguntas, reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = 'Juan';

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 25;

// Crea una variable booleana:
const nuevoBool = true;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40 ;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;


// En los próximos 22 problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.


function devolverString(str) {
  // "Return" la string provista: str
  // Tu código:
  str = 'str'
  return str;
}
let respuesta = devolverString();
console.log (respuesta);


function suma(x, y) {
  // "x" e "y" son números
  // Suma "x" e "y" juntos y devuelve el valor
  // Tu código:
   var add = x + y;
   return add;
}
let adicion =suma (5,6);
console.log(adicion);

function resta(x, y) {
  // Resta "y" de "x" y devuelve el valor
  // Tu código:
  var sust = x - y;
  return sust;
}
let rest= resta (10,5);
console.log(rest);

function multiplica(x, y) {
  // Multiplica "x" por "y" y devuelve el valor
  // Tu código:
 multip =x *y;
  return multip;
}
let multi = multiplica(2, 10);
console.log(multi);

function divide(x, y) {
  // Divide "x" entre "y" y devuelve el valor
  // Tu código:
  var divi = x / y;
  return divi;
}
let divided = divide(20,1);
console.log(divided);

function sonIguales(x, y) {
  // Devuelve "true" si "x" e "y" son iguales
  // De lo contrario, devuelve "false"
  // Tu código:
  if (x===y){
    return true;
  } 
  return false;
}
let iguales =sonIguales (20,15);
console.log(iguales);

function tienenMismaLongitud(str1, str2) {
  // Devuelve "true" si las dos strings tienen la misma longitud
  // De lo contrario, devuelve "false"
  // Tu código:
  if (str1.length === str2.length){
    return true;
  }
  return false;
}
let longitud = tienenMismaLongitud('Frontend', 'Backend');
console.log(longitud);

function menosQueNoventa(num) {
  // Devuelve "true" si el argumento de la función "num" es menor que noventa
  // De lo contrario, devuelve "false"
  // Tu código:
  if (num < 90){
    return true;
  }
  return false;
}
let numero = menosQueNoventa(95);
console.log(numero);

function mayorQueCincuenta(num) {
  // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
  // De lo contrario, devuelve "false"
  // Tu código:
  if(num> 50){
    return true;
  }
  return false;
}
let number = mayorQueCincuenta(150);
console.log(number);

function obtenerResto(x, y) {
  // Obten el resto de la división de "x" entre "y"
  // Tu código:
  var resto = x% y;
  return resto;
}
let modulo = obtenerResto(20, 5);
console.log(modulo);

function esPar(num) {
  // Devuelve "true" si "num" es par
  // De lo contrario, devuelve "false"
  // Tu código:
  if(num % 2 === 0){
    return true;
  }
  return false;
}
let par = esPar(100, 10);
console.log(par);

function esImpar(num) {
  // Devuelve "true" si "num" es impar
  // De lo contrario, devuelve "false"
  // Tu código:
  if(num %2 !== 0){
    return true;
  }
  return false;
}
let impar = esImpar(9, 4);
console.log(impar);

function elevarAlCuadrado(num) {
  // Devuelve el valor de "num" elevado al cuadrado
  // ojo: No es raiz cuadrada!
  // Tu código:
  
  var result = num ** 2;
  return result;
}
let potencia = elevarAlCuadrado(100);
console.log(potencia);


function elevarAlCubo(num) {
  // Devuelve el valor de "num" elevado al cubo
  // Tu código:
  var result = num ** 3;
  return result;
}
let cubo = elevarAlCubo(200);
console.log(cubo);


function elevar(num, exponent) {
  // Devuelve el valor de "num" elevado al exponente dado en "exponent"
  // Tu código:
  var elevar= Math.pow(num, exponent);
  return elevar;
}
let up = elevar(10,2);
console.log(up);

function redondearNumero(num) {
  var redondeo = Math.round(num);
  return redondeo;
}
let redondo = redondearNumero(3.6);
console.log(redondo);

function redondearHaciaArriba(num) {
  // Redondea "num" hacia arriba (al próximo entero) y devuélvelo
  // Tu código
  var arriba = Math.ceil(num);
  return arriba;
}
let haciaArriba = redondearHaciaArriba(99.1)
console.log(haciaArriba);

function agregarSimboloExclamacion(str) {
  // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
  // Ejemplo: "hello world" pasaría a ser "hello world!"
  // Tu código:
  var excla = str + `!`;
  return excla;
}
let signo = agregarSimboloExclamacion('Hello word');
console.log(signo);

function combinarNombres(nombre, apellido) {
  // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
  // Ejemplo: "Soy", "Henry" -> "Soy Henry"
  // Tu código:
  var nombre = `${nombre} ${apellido}`;
  return nombre;
}
let name= combinarNombres('Juan','Caceres');
console.log(name);

function obtenerSaludo(nombre) {
  // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
  // "Martin" -> "Hola Martin!"
  // Tu código:
  var saludo = `Hola ${nombre}`;
  return saludo;
}
let regard = obtenerSaludo('Martin!');
console.log(regard);

function obtenerAreaRectangulo(alto, ancho) {
  // Retornar el area de un rectángulo teniendo su altura y ancho
  // Tu código:
  var area = alto * ancho;
  return area;
}
let resultado = obtenerAreaRectangulo(40, 20);
console.log(resultado);


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  nuevaString,
  nuevoNum,
  nuevoBool,
  nuevaResta,
  nuevaMultiplicacion,
  nuevoModulo,
  devolverString,
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  agregarSimboloExclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
};
