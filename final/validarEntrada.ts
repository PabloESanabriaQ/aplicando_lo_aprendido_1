import { EntradaParam, TiposEntrada } from "./tipos/Entrada";
import { Fecha } from "./tipos/Fecha";
import { ingresoPorTeclado } from "./ingresoPorTeclado";

export function validarEntrada(entrada : EntradaParam, validacion : TiposEntrada) : EntradaParam {
  switch(entrada.tipo) {
    case TiposEntrada.OPCION: 
          if(validarOpcion(entrada.valor))
            return entrada;
          else validarEntrada(ingresoPorTeclado(entrada), TiposEntrada.OPCION);
    break;
    case TiposEntrada.TITULO: 
          if(validarTitulo(entrada.valor))
            return entrada;
          else validarEntrada(ingresoPorTeclado(entrada), TiposEntrada.TITULO);
    break;
    case TiposEntrada.DIFICULTAD:
        if(validarDificultad(entrada.valor))
          return entrada;
        else validarEntrada(ingresoPorTeclado(entrada), TiposEntrada.DIFICULTAD);
    break;
    case TiposEntrada.ESTADO: 
          if(validarEstado(entrada.valor))
            return entrada;
          else validarEntrada(ingresoPorTeclado(entrada), TiposEntrada.ESTADO);
    break;
    case TiposEntrada.VENCIMIENTO: 
          if(validarFechaVencimiento(convertirAFecha(entrada.valor)))
            return entrada;
          else validarEntrada(ingresoPorTeclado(entrada), TiposEntrada.VENCIMIENTO);
    break;
  }
  return entrada;
}

function validarEstado(estadoStr: string): string | false {
  switch (estadoStr.toLowerCase()) {
    case "":
    case "1":
    case "p":
    case "pendiente":
      return "1";
    case "2":
    case "e":
    case 'en curso':
      return "2";
    case "3":
    case "t":
    case "terminada":
      return "3";
    default:
      return false;
  }
}

function validarDificultad(dificultadStr: string): string | false {
  switch (dificultadStr.toLowerCase()) {
    case "":
    case "1":
    case "f":
    case "facil":
      return "1";
      case "2":
      case "m":
      case "media":
      return "2";
      case "3":
      case "d":
      case "dificil":
      return "3";
    default:
      return false;
  }
}

function validarFechaVencimiento({ dia, mes, anio }: Fecha): Date | false {

  const fecha = new Date(anio, mes - 1, dia);
  
  if (mes < 1 || mes > 12 || fecha.getDate() !== dia || fecha.getMonth() !== mes - 1 || fecha.getFullYear() !== anio) {
    return false;
  }
  return fecha;
}

/*
* Este regex me separa con las / los valores de día, mes y año: 12/12/2024
* se convierte en: dia = 12, mes = 12, anio = 2024
*/
export function convertirAFecha(fechaString : string) : Fecha {
    const regex = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/;
    const match = fechaString.match(regex);
  
    if (match) {
        const dia = parseInt(match[1]);
        const mes = parseInt(match[2]);
        const anio = parseInt(match[3]);
        return { dia: dia, mes: mes, anio: anio };
    }
    return { dia: 0, mes: 0, anio: 0 };
  }

/*
* La expresión regular \S busca cualquier caracter que no sea un espacio.
*/
function validarTitulo(titulo : string) : boolean {
  return /\S/.test(titulo);
}

function validarOpcion(opcion : string) : boolean {
  if(+opcion <= 5 || +opcion >= 0) return true;
  return false;
}