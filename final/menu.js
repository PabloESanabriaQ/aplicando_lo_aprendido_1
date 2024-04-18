"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mostrarMenu = void 0;
var TextoEntrada_1 = require("./TextoEntrada");
var cargarTarea_1 = require("./cargarTarea");
var ingresoPorTeclado_1 = require("./ingresoPorTeclado");
var listaDeTareas_1 = require("./listaDeTareas");
var CargaTarea_1 = require("./tipos/CargaTarea");
var Entrada_1 = require("./tipos/Entrada");
function mostrarMenu(tareas, nuevoId) {
    console.log("¡Bienvenido!");
    console.log("¿Qué deseas hacer?");
    console.log("[1] Ver mis tareas");
    console.log("[2] Buscar una tarea por id");
    console.log("[3] Agregar una tarea");
    console.log("[4] Modificar una tarea");
    console.log("[0] Salir");
    var entrada = (0, ingresoPorTeclado_1.ingresoPorTeclado)({ tipo: Entrada_1.TiposEntrada.OPCION, valor: "5" });
    var idTarea;
    switch (+entrada.valor) {
        case 1:
            (0, listaDeTareas_1.imprimirTareasPorEstado)(tareas);
            break;
        case 2:
            idTarea = (0, ingresoPorTeclado_1.ingresoPorTeclado)({ tipo: Entrada_1.TiposEntrada.IDTAREA, valor: "" }).valor;
            (0, listaDeTareas_1.buscarTarea)(tareas, +idTarea);
            if ((0, listaDeTareas_1.buscarTarea)(tareas, +idTarea))
                (0, listaDeTareas_1.imprimirTarea)(tareas, +idTarea);
            break;
        case 3:
            //TODO: Tampoco está mostrando los filtros de tarea. Corregir fecha de vencimiento
            var tarea = (0, cargarTarea_1.cargarTarea)(nuevoId++, CargaTarea_1.CargaTarea.NUEVA);
            tareas = __spreadArray(__spreadArray([], tareas, true), (0, listaDeTareas_1.agregarTarea)(tareas, tarea), true);
            entrada.valor = "5";
            break;
        case 4:
            idTarea = (0, ingresoPorTeclado_1.ingresoPorTeclado)({ tipo: Entrada_1.TiposEntrada.IDTAREA, valor: "" }).valor;
            if ((0, listaDeTareas_1.buscarTarea)(tareas, +idTarea)) {
                (0, listaDeTareas_1.imprimirTarea)(tareas, +idTarea);
            }
            else {
                return console.log(TextoEntrada_1.textoTareaNoEncontrada);
            }
            var nuevaInfo = (0, cargarTarea_1.cargarTarea)(+idTarea, CargaTarea_1.CargaTarea.MODIFICAR);
            (0, listaDeTareas_1.modificarTarea)(tareas, +idTarea, nuevaInfo);
            break;
        case 0:
            break;
    }
    if (+entrada.valor != 0)
        return mostrarMenu(tareas, nuevoId);
    console.clear();
}
exports.mostrarMenu = mostrarMenu;
