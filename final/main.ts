import { mostrarMenu } from "./menu";
import { Tarea } from "./tipos/Tarea";

export function main(): void {
    let tareas : Tarea[] = [];
    let nuevoId = 0;

    mostrarMenu(tareas, ++nuevoId);
}
