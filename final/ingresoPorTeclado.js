"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ingresoPorTeclado = void 0;
var TextoEntrada_1 = require("./TextoEntrada");
var Entrada_1 = require("./tipos/Entrada");
function ingresoPorTeclado(entrada) {
    var prompt = require('prompt-sync')();
    var valor = "";
    switch (+entrada.tipo) {
        case Entrada_1.TiposEntrada.OPCION:
            valor = prompt(TextoEntrada_1.textoOpcion);
            break;
        case Entrada_1.TiposEntrada.IDTAREA:
            valor = prompt(TextoEntrada_1.textoIdTarea);
            break;
        case Entrada_1.TiposEntrada.TITULO:
            valor = prompt(TextoEntrada_1.textoTitulo);
            break;
        case Entrada_1.TiposEntrada.DESCRIPCION:
            valor = prompt(TextoEntrada_1.textoDescripcion);
            break;
        case Entrada_1.TiposEntrada.ESTADO:
            valor = prompt(TextoEntrada_1.textoEstado);
            break;
        case Entrada_1.TiposEntrada.VENCIMIENTO:
            valor = prompt(TextoEntrada_1.textoVencimiento);
            break;
        case Entrada_1.TiposEntrada.DIFICULTAD:
            valor = prompt(TextoEntrada_1.textoDificultad);
            break;
    }
    return __assign(__assign({}, entrada), { valor: valor });
}
exports.ingresoPorTeclado = ingresoPorTeclado;
