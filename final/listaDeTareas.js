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
exports.imprimirTarea = exports.imprimirTareasPorEstado = exports.modificarTarea = exports.cancelarTarea = exports.buscarTarea = exports.agregarTarea = void 0;
var Estado_1 = require("./tipos/Estado");
var TextoEntrada_1 = require("./TextoEntrada");
function agregarTarea(tareas, nuevaTarea) {
    return __spreadArray(__spreadArray([], tareas, true), [nuevaTarea], false);
}
exports.agregarTarea = agregarTarea;
function buscarTarea(tareas, idTarea) {
    if (!tareas.length) {
        console.log(TextoEntrada_1.noHayTareas);
        return;
    }
    return tareas.find(function (tarea) { return tarea.id == idTarea; });
}
exports.buscarTarea = buscarTarea;
function cancelarTarea(tareas, idTarea) {
    return tareas.map(function (tarea) {
        if (tarea.id === idTarea) {
            return __assign(__assign({}, tarea), { estado: Estado_1.Estado.CANCELADA });
        }
        return tarea;
    });
}
exports.cancelarTarea = cancelarTarea;
function modificarTarea(tareas, idTarea, nuevaInfo) {
    return tareas.map(function (tarea) {
        if (tarea.id === idTarea) {
            return __assign(__assign({}, tarea), nuevaInfo);
        }
        return tarea;
    });
}
exports.modificarTarea = modificarTarea;
function imprimirTareasPorEstado(tareas, estado) {
    var filtrarTareas = tareas;
    if (!tareas.length) {
        console.log(TextoEntrada_1.noHayTareas);
        return;
    }
    if (estado) {
        filtrarTareas = tareas.filter(function (tarea) { return tarea.estado === estado; });
    }
    console.log("Tareas con estado \"".concat(estado, "\":"));
    filtrarTareas.forEach(function (tarea) {
        console.log("ID: ".concat(tarea.id));
        console.log("T\u00EDtulo: ".concat(tarea.titulo));
        console.log("Descripci\u00F3n: ".concat(tarea.descripcion));
        console.log("Fecha de Creaci\u00F3n: ".concat(tarea.fechaCreacion));
        console.log("\u00DAltima Edici\u00F3n: ".concat(tarea.ultimaEdicion));
        if (tarea.fechaVencimiento) {
            console.log("Fecha de Vencimiento: ".concat(tarea.fechaVencimiento));
        }
        console.log("Dificultad: ".concat(tarea.dificultad));
        console.log("--------------------------");
    });
}
exports.imprimirTareasPorEstado = imprimirTareasPorEstado;
function imprimirTarea(tareas, idTarea) {
    var tarea = tareas.find(function (tarea) { return tarea.id == idTarea; });
    if (tarea) {
        console.log("--------------------------");
        console.log("ID: ".concat(tarea.id));
        console.log("T\u00EDtulo: ".concat(tarea.titulo));
        console.log("Descripci\u00F3n: ".concat(tarea.descripcion));
        console.log("Fecha de Creaci\u00F3n: ".concat(tarea.fechaCreacion));
        console.log("\u00DAltima Edici\u00F3n: ".concat(tarea.ultimaEdicion));
        console.log("Fecha de Vencimiento: ".concat(tarea.fechaVencimiento));
        console.log("Dificultad: ".concat(tarea.dificultad));
        console.log("--------------------------");
    }
    if (!tarea)
        console.log(TextoEntrada_1.textoTareaNoEncontrada);
}
exports.imprimirTarea = imprimirTarea;
