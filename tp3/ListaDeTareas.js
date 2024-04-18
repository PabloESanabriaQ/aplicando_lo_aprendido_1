function ListaDeTareas() {
  this.tareas = [];
}

ListaDeTareas.prototype.agregarTarea = function (tarea) {
  this.tareas.push(tarea);
};

ListaDeTareas.prototype.eliminarTarea = function (id) {
  this.tareas = this.tareas.filter((tarea) => tarea.id !== id);
};

ListaDeTareas.prototype.imprimirTareas = function (estado = 1) {
  switch (+estado) {
    case 2:
      estado = "pendiente";
      break;
    case 3:
      estado = "en curso";
      break;
    case 4:
      estado = "terminada";
      break;
  }
  if (estado == 1)
    return this.tareas.forEach((tarea) => {
      console.log("-----------------------");
      tarea.mostrarTarea();
      console.log("-----------------------");
    });
  console.log("Acá el estado es: " + estado);
  const tareasFiltradas = this.tareas.filter(
    (tarea) => tarea.estado === estado
  );
  tareasFiltradas.forEach((tarea) => {
    console.log("-----------------------");
    tarea.mostrarTarea();
    console.log("-----------------------");
  });
};

ListaDeTareas.prototype.buscarTarea = function (titulo) {
  const tareaBuscada = this.tareas.find((tarea) => tarea.titulo == titulo);
  if (tareaBuscada) {
    console.log("-----------------------");
    tareaBuscada.mostrarTarea();
    console.log("-----------------------");
    return tareaBuscada.titulo;
  } else {
    console.log("Tarea no encontrada");
  }
};

ListaDeTareas.prototype.modificarTarea = function (
  titulo,
  estado,
  vencimiento,
  dificultad
) {
  const tareaModificada = this.tareas.find((tarea) => tarea.titulo == titulo);
  if (tareaModificada) {
    tareaModificada.estado = estado || tareaModificada.estado;
    tareaModificada.vencimiento = vencimiento || tareaModificada.vencimiento;
    tareaModificada.dificultad = dificultad || tareaModificada.dificultad;
    console.log("Tarea modificada");
  } else {
    console.log("Tarea no encontrada");
  }
};

export { ListaDeTareas };
