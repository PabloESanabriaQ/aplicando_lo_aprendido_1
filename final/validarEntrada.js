"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertirAFecha = exports.validarEntrada = void 0;
var Entrada_1 = require("./tipos/Entrada");
var ingresoPorTeclado_1 = require("./ingresoPorTeclado");
function validarEntrada(entrada, validacion) {
    switch (entrada.tipo) {
        case Entrada_1.TiposEntrada.OPCION:
            if (validarOpcion(entrada.valor))
                return entrada;
            else
                validarEntrada((0, ingresoPorTeclado_1.ingresoPorTeclado)(entrada), Entrada_1.TiposEntrada.OPCION);
            break;
        case Entrada_1.TiposEntrada.TITULO:
            if (validarTitulo(entrada.valor))
                return entrada;
            else
                validarEntrada((0, ingresoPorTeclado_1.ingresoPorTeclado)(entrada), Entrada_1.TiposEntrada.TITULO);
            break;
        case Entrada_1.TiposEntrada.DIFICULTAD:
            if (validarDificultad(entrada.valor))
                return entrada;
            else
                validarEntrada((0, ingresoPorTeclado_1.ingresoPorTeclado)(entrada), Entrada_1.TiposEntrada.DIFICULTAD);
            break;
        case Entrada_1.TiposEntrada.ESTADO:
            if (validarEstado(entrada.valor))
                return entrada;
            else
                validarEntrada((0, ingresoPorTeclado_1.ingresoPorTeclado)(entrada), Entrada_1.TiposEntrada.ESTADO);
            break;
        case Entrada_1.TiposEntrada.VENCIMIENTO:
            if (validarFechaVencimiento(convertirAFecha(entrada.valor)))
                return entrada;
            else
                validarEntrada((0, ingresoPorTeclado_1.ingresoPorTeclado)(entrada), Entrada_1.TiposEntrada.VENCIMIENTO);
            break;
    }
    return entrada;
}
exports.validarEntrada = validarEntrada;
function validarEstado(estadoStr) {
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
function validarDificultad(dificultadStr) {
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
function validarFechaVencimiento(_a) {
    var dia = _a.dia, mes = _a.mes, anio = _a.anio;
    var fecha = new Date(anio, mes - 1, dia);
    if (mes < 1 || mes > 12 || fecha.getDate() !== dia || fecha.getMonth() !== mes - 1 || fecha.getFullYear() !== anio) {
        return false;
    }
    return fecha;
}
/*
* Este regex me separa con las / los valores de día, mes y año: 12/12/2024
* se convierte en: dia = 12, mes = 12, anio = 2024
*/
function convertirAFecha(fechaString) {
    var regex = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/;
    var match = fechaString.match(regex);
    if (match) {
        var dia = parseInt(match[1]);
        var mes = parseInt(match[2]);
        var anio = parseInt(match[3]);
        return { dia: dia, mes: mes, anio: anio };
    }
    return { dia: 0, mes: 0, anio: 0 };
}
exports.convertirAFecha = convertirAFecha;
/*
* La expresión regular \S busca cualquier caracter que no sea un espacio.
*/
function validarTitulo(titulo) {
    return /\S/.test(titulo);
}
function validarOpcion(opcion) {
    if (+opcion <= 5 || +opcion >= 0)
        return true;
    return false;
}
