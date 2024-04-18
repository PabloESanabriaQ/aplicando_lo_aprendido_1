"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cargarTarea = void 0;
var ingresoPorTeclado_1 = require("./ingresoPorTeclado");
var CargaTarea_1 = require("./tipos/CargaTarea");
var Dificultad_1 = require("./tipos/Dificultad");
var Entrada_1 = require("./tipos/Entrada");
var Estado_1 = require("./tipos/Estado");
var validarEntrada_1 = require("./validarEntrada");
function cargarTarea(idTarea, tipo) {
    var nuevaTarea = {
        id: idTarea,
        titulo: "",
        descripcion: "",
        estado: Estado_1.Estado.PENDIENTE,
        fechaCreacion: new Date(),
        ultimaEdicion: new Date(),
        dificultad: Dificultad_1.Dificultad.FACIL
    };
    if (CargaTarea_1.CargaTarea.NUEVA) {
        nuevaTarea.fechaCreacion = new Date();
        nuevaTarea.ultimaEdicion = nuevaTarea.fechaCreacion;
    }
    else {
        nuevaTarea.ultimaEdicion = new Date();
    }
    nuevaTarea.titulo = (0, validarEntrada_1.validarEntrada)((0, ingresoPorTeclado_1.ingresoPorTeclado)({ valor: "", tipo: Entrada_1.TiposEntrada.TITULO }), Entrada_1.TiposEntrada.TITULO).valor;
    nuevaTarea.descripcion = (0, validarEntrada_1.validarEntrada)((0, ingresoPorTeclado_1.ingresoPorTeclado)({ valor: "", tipo: Entrada_1.TiposEntrada.DESCRIPCION }), Entrada_1.TiposEntrada.DESCRIPCION).valor;
    nuevaTarea.dificultad = convertirADificultad((0, validarEntrada_1.validarEntrada)((0, ingresoPorTeclado_1.ingresoPorTeclado)({ valor: "", tipo: Entrada_1.TiposEntrada.DIFICULTAD }), Entrada_1.TiposEntrada.DIFICULTAD).valor);
    nuevaTarea.estado = convertirAEstado((0, validarEntrada_1.validarEntrada)((0, ingresoPorTeclado_1.ingresoPorTeclado)({ valor: "", tipo: Entrada_1.TiposEntrada.ESTADO }), Entrada_1.TiposEntrada.ESTADO).valor);
    var _a = (0, validarEntrada_1.convertirAFecha)((0, validarEntrada_1.validarEntrada)((0, ingresoPorTeclado_1.ingresoPorTeclado)({ valor: "", tipo: Entrada_1.TiposEntrada.VENCIMIENTO }), Entrada_1.TiposEntrada.TITULO).valor), dia = _a.dia, mes = _a.mes, anio = _a.anio;
    nuevaTarea.fechaVencimiento = new Date(dia, mes, anio);
    return nuevaTarea;
}
exports.cargarTarea = cargarTarea;
function convertirADificultad(dificultadStr) {
    switch (+dificultadStr) {
        case 1:
            return Dificultad_1.Dificultad.FACIL;
        case 2:
            return Dificultad_1.Dificultad.MEDIA;
        case 3:
            return Dificultad_1.Dificultad.DIFICIL;
    }
    return Dificultad_1.Dificultad.FACIL;
}
function convertirAEstado(estadoStr) {
    switch (+estadoStr) {
        case 1:
            return Estado_1.Estado.PENDIENTE;
        case 2:
            return Estado_1.Estado.EN_CURSO;
        case 3:
            return Estado_1.Estado.TERMINADA;
        case 4:
            return Estado_1.Estado.CANCELADA;
    }
    return Estado_1.Estado.PENDIENTE;
}
