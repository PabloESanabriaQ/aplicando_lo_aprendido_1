import { Tarea } from "./tipos/Tarea";
import { Estado } from "./tipos/Estado";
import { textoTareaNoEncontrada, noHayTareas } from "./TextoEntrada";

export function agregarTarea(tareas: Tarea[], nuevaTarea: Tarea): Tarea[] {
  return [...tareas, nuevaTarea];
}

export function buscarTarea(tareas: Tarea[], idTarea: number): Tarea | undefined {
  if(!tareas.length) {
    console.log(noHayTareas);
    return;
  }
  return tareas.find(tarea => tarea.id == idTarea);
}

export function cancelarTarea(tareas: Tarea[], idTarea: number): Tarea[] {
  return tareas.map(tarea => {
    if (tarea.id === idTarea) {
      return { ...tarea, estado: Estado.CANCELADA };
    }
    return tarea;
  });
}

export function modificarTarea(tareas: Tarea[], idTarea: number, nuevaInfo: Partial<Tarea>): Tarea[] {
  return tareas.map(tarea => {
    if (tarea.id === idTarea) {
      return { ...tarea, ...nuevaInfo };
    }
    return tarea;
  });
}

export function imprimirTareasPorEstado(tareas: Tarea[], estado?: Estado): void {
  let filtrarTareas = tareas;

  if(!tareas.length) {
    console.log(noHayTareas);
    return;
  }
  if(estado){
    filtrarTareas = tareas.filter(tarea => tarea.estado === estado);
  }
  
  console.log(`Tareas con estado "${estado}":`);
  filtrarTareas.forEach(tarea => {
    console.log(`ID: ${tarea.id}`);
    console.log(`Título: ${tarea.titulo}`);
    console.log(`Descripción: ${tarea.descripcion}`);
    console.log(`Fecha de Creación: ${tarea.fechaCreacion}`);
    console.log(`Última Edición: ${tarea.ultimaEdicion}`);
    if (tarea.fechaVencimiento) {
      console.log(`Fecha de Vencimiento: ${tarea.fechaVencimiento}`);
    }
    console.log(`Dificultad: ${tarea.dificultad}`);
    console.log("--------------------------");
  });
}

export function imprimirTarea(tareas: Tarea[], idTarea : number) {

  let tarea = tareas.find(tarea => tarea.id == idTarea);
  if(tarea){
    console.log("--------------------------");
    console.log(`ID: ${tarea.id}`);
    console.log(`Título: ${tarea.titulo}`);
    console.log(`Descripción: ${tarea.descripcion}`);
    console.log(`Fecha de Creación: ${tarea.fechaCreacion}`);
    console.log(`Última Edición: ${tarea.ultimaEdicion}`);
    console.log(`Fecha de Vencimiento: ${tarea.fechaVencimiento}`);
    console.log(`Dificultad: ${tarea.dificultad}`);
    console.log("--------------------------");
  }
  if(!tarea) console.log(textoTareaNoEncontrada);
}