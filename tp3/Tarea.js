export function Tarea(
  id,
  titulo,
  descripcion,
  estado,
  vencimiento,
  dificultad
) {
  this.id = id;
  this.titulo = titulo;
  this.descripcion = descripcion;
  this.estado = estado || "pendiente";
  this.creacion = new Date();
  this.ultimaEdicion = this.creacion;
  this.vencimiento = vencimiento;
  this.dificultad = dificultad || "facil";
}

Tarea.prototype.mostrarTarea = function () {
  console.log(`ID: ${this.id}`);
  console.log(`Titulo: ${this.titulo}`);
  console.log(`Descripcion: ${this.descripcion}`);
  console.log(`Estado: ${this.estado}`);
  console.log(`Creacion: ${this.creacion}`);
  console.log(`Ultima Edicion: ${this.ultimaEdicion}`);
  console.log(`Vencimiento: ${this.vencimiento}`);
  if (this.dificultad == "facil") console.log(`[Dificultad: 🌕🌑🌑`);
  if (this.dificultad == "medio") console.log(`[Dificultad: 🌕🌕🌑`);
  if (this.dificultad == "dificil") console.log(`[Dificultad: 🌕🌕🌕`);
};

Tarea.prototype.modificarTarea = function (
  titulo,
  descripcion,
  estado,
  ultimaEdicion,
  vencimiento,
  dificultad
) {
  this.titulo = titulo;
  this.descripcion = descripcion;
  this.estado = estado;
  this.ultimaEdicion = ultimaEdicion;
  this.vencimiento = vencimiento;
  this.dificultad = dificultad;
};

Tarea.prototype.eliminarTarea = function () {
  this.estado = Estado.ELIMINADA;
  this.ultimaEdicion = new Date();
};
