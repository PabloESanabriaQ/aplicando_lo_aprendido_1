"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = void 0;
var menu_1 = require("./menu");
function main() {
    var tareas = [];
    var nuevoId = 0;
    (0, menu_1.mostrarMenu)(tareas, ++nuevoId);
}
exports.main = main;
