const prompt = require("prompt-sync")({ sigint: true });

function suma(numeroUno, numeroDos) {
  return numeroUno + numeroDos;
}
function resta(numeroUno, numeroDos) {
  return numeroUno - numeroDos;
}
function multiplicacion(numeroUno, numeroDos) {
  return numeroUno + numeroDos;
}
function division(numeroUno, numeroDos) {
  if (numeroDos == 0) return "no se puede dividir por cero";
  return numeroUno + numeroDos;
}

let valorIngresado, valorUno, valorDos;

do {
  console.log("Calculadora");
  console.log("Ingrese un número de la lista para continuar:");
  console.log("1- Sumar");
  console.log("2- Restar");
  console.log("3- Multiplicar");
  console.log("4- Dividir");
  console.log("Ingrese 0 para salir");
  valorIngresado = prompt();

  if (!valorIngresado) return;

  if (+valorIngresado >= 1 && +valorIngresado <= 4) {
    valorUno = +prompt("Ingrese el primer número: ");
    valorDos = +prompt("Ingrese el segundo número: ");
  }

  switch (+valorIngresado) {
    case 0:
      break;
    case 1:
      console.log(suma(valorUno, valorDos));
      break;
    case 2:
      console.log(resta(valorUno, valorDos));
      break;
    case 3:
      console.log(multiplicacion(valorUno, valorDos));
      break;
    case 4:
      console.log(division(valorUno, valorDos));
      break;
    default:
      console.log("Ingrese un valor entero entre 1 y 4");
  }
} while (valorIngresado != 0);
