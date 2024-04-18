import { textoTareaNoEncontrada } from "./TextoEntrada";
import { cargarTarea } from "./cargarTarea";
import { ingresoPorTeclado } from "./ingresoPorTeclado";
import { agregarTarea, buscarTarea, imprimirTarea, imprimirTareasPorEstado, modificarTarea } from "./listaDeTareas";
import { CargaTarea } from "./tipos/CargaTarea";
import { TiposEntrada } from "./tipos/Entrada";
import { Tarea } from "./tipos/Tarea";

export function mostrarMenu(tareas : Tarea[], nuevoId: number): void {
  
  console.log("¡Bienvenido!");
  console.log("¿Qué deseas hacer?");
  console.log("[1] Ver mis tareas");
  console.log("[2] Buscar una tarea por id");
  console.log("[3] Agregar una tarea");
  console.log("[4] Modificar una tarea");
  console.log("[0] Salir");
  const entrada = ingresoPorTeclado({tipo: TiposEntrada.OPCION, valor: "5"});

  let idTarea : string;
  switch(+entrada.valor){
    case 1:
      imprimirTareasPorEstado(tareas);
    break;
    case 2:
      idTarea = ingresoPorTeclado({tipo: TiposEntrada.IDTAREA, valor: "" }).valor;
      buscarTarea(tareas, +idTarea);
      if(buscarTarea(tareas, +idTarea)) imprimirTarea(tareas, +idTarea);
    break;
    case 3:
      //TODO: Tampoco está mostrando los filtros de tarea. Corregir fecha de vencimiento
      const tarea = cargarTarea(nuevoId++, CargaTarea.NUEVA);
      tareas = [...tareas, ...agregarTarea(tareas, tarea)];
      entrada.valor = "5";
    break;
    case 4:
      idTarea = ingresoPorTeclado({tipo: TiposEntrada.IDTAREA, valor: "" }).valor;
      if(buscarTarea(tareas, +idTarea)) {
        imprimirTarea(tareas, +idTarea);
      } else {
        return console.log(textoTareaNoEncontrada);
      }
      const nuevaInfo = cargarTarea(+idTarea, CargaTarea.MODIFICAR);
      modificarTarea(tareas, +idTarea, nuevaInfo);
    break;
    case 0:
    break;
    
  }
  if(+entrada.valor != 0) return mostrarMenu(tareas, nuevoId);
  console.clear();
}
