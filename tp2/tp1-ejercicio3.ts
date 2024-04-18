const prompt = require("prompt-sync")({ sigint: true });

import { Tarea, Estado, Dificultad } from "./types";

const tareas: Tarea[] = [];

function nuevaTarea(
  listaTareas: Tarea[],
  id: number,
  titulo: string,
  descripcion: string,
  estado: Estado = "pendiente",
  vencimiento?: Date,
  dificultad: Dificultad = "facil"
): void {
  let creacion = new Date();
  creacion = new Date(creacion.getFullYear(), creacion.getMonth(), creacion.getDate());

  switch (estado.toString().toLowerCase()) {
    case "1":
    case "p":
    case "pendiente":
      estado = "pendiente";
      break;
    case "2":
    case "e":
    case "en curso":
      estado = "en curso";
      break;
    case "3":
    case "t":
    case "terminada":
      estado = "terminada";
      break;
    case "4":
    case "c":
    case "cancelada":
      estado = "cancelada";
      break;
  }

  let nuevaTarea: Tarea = {
    id,
    titulo,
    descripcion,
    estado,
    creacion,
    ultimaEdicion: creacion, // última edición tiene el valor de creación inicialmente
    vencimiento: vencimiento || "Sin Datos",
    dificultad,
  };

  listaTareas.push(nuevaTarea);
}

function editarTarea(listaTareas: Tarea[], idTarea: string | number): void {
  let titulo: string, descripcion: string, estado: Estado, vencimiento: Date | null | string, dificultad: Dificultad;
  let anio: string, mes: string, dia: string;

  idTarea = +idTarea;
  for (let i = 0; i < listaTareas.length; i++) {
    if (listaTareas[i].id == idTarea) {
      console.log(`ID: ${listaTareas[i].id}`);
      console.log(`Titulo: ${listaTareas[i].titulo}`);
      console.log(`Descripcion: ${listaTareas[i].descripcion}`);
      console.log(`Estado: ${listaTareas[i].estado}`);
      console.log(`Creacion: ${listaTareas[i].creacion}`);
      console.log(`Ultima Edicion: ${listaTareas[i].ultimaEdicion}`);
      console.log(`Vencimiento: ${listaTareas[i].vencimiento}`);
    }
  }

  do {
    console.log("1- Ingresa el título (Dejar vacío para no modificarlo):");
    titulo = prompt();
  } while (!validarEntrada("titulo", titulo) || titulo === "");

  do {
    console.log("2- Ingresa la descripción (Dejar vacío para no modificarlo):");
    descripcion = prompt();
  } while (!validarEntrada("descripcion", descripcion));

  do {
    console.log(
      "3- Ingresa el estado, los valores posibles son (Dejar vacío para no modificarlo):"
    );
    console.log("1- (P) - Pendiente");
    console.log("2- (E) - En curso");
    console.log("3- (T) - Terminada");
    console.log("4- (C) - Cancelada");
    estado = prompt() as Estado;
  } while (!validarEntrada("estado", estado));

  console.log("4- ¿Desea ingresar la fecha de vencimiento?:");
  console.log(
    "Presione 1 para ingresarla, presione otra tecla para continuar:"
  );
  vencimiento = prompt();
  if (vencimiento == "1") {
    do {
      console.log("Ingresa el año:");
      anio = prompt();
    } while (!validarEntrada("anio", anio));

    do {
      console.log("Ingresa el mes:");
      mes = prompt();
    } while (!validarEntrada("mes", mes));

    do {
      console.log("Ingresa el día:");
      dia = prompt();
    } while (!validarEntrada("dia", dia, +mes));

    vencimiento = new Date(`${mes}/${dia}/${anio}`);
  } else {
    vencimiento = null;
  }

  do {
    console.log(
      "3- Ingresa la dificultad, los valores posibles son (Dejar vacío para no modificarlo):"
    );
    console.log("1- (F) facil");
    console.log("2- (M) medio");
    console.log("3- (D) dificil");
    dificultad = prompt() as Dificultad;
  } while (!validarEntrada("dificultad", dificultad));

  idTarea--;

  if (listaTareas[idTarea].titulo !== titulo || titulo === "")
    listaTareas[idTarea].titulo = titulo;

  if (listaTareas[idTarea].descripcion !== descripcion && descripcion !== "")
    listaTareas[idTarea].descripcion = descripcion;

  if (listaTareas[idTarea].estado !== estado)
    listaTareas[idTarea].estado = estado;

  listaTareas[idTarea].ultimaEdicion = new Date();

  if (listaTareas[idTarea].vencimiento !== vencimiento)
    listaTareas[idTarea].vencimiento = vencimiento;

  if (listaTareas[idTarea].dificultad !== dificultad)
    listaTareas[idTarea].dificultad = dificultad;
}

function validarEntrada(tipoValidacion: string, valor: any, mes: number = 11): boolean {
  switch (tipoValidacion) {
    case "titulo":
      if (valor == null || valor.length > 100 || valor.length === 0)
        return false;
      break;
    case "descripcion":
      if (valor.length > 500) {
        return false;
      } else {
        return true;
      }
    case "estado":
      switch (valor.toLowerCase()) {
        case "":
        case "1":
        case "2":
        case "3":
        case "4":
        case "p":
        case "e":
        case "t":
        case "c":
        case "pendiente":
        case "en curso":
        case "terminada":
        case "cancelada":
          return true;
        default:
          return false;
      }
    case "dia":
      mes = +mes;
      valor = +valor;
      switch (mes) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
          if (valor > 31 || valor < 1) return false;
          return true;
        case 2:
          if (valor > 28 || valor < 1) return false;
          return true;
        case 4:
        case 6:
        case 9:
        case 11:
          if (valor > 30 || valor < 1) return false;
          return true;
        default:
          return false;
      }
    case "mes":
      valor = +valor;
      if (valor > 12 || valor < 1) {
        return false;
      } else {
        return true;
      }
    case "anio":
      valor = +valor;
      if (valor > 2050 || valor < 1950) {
        return false;
      } else {
        return true;
      }
    case "dificultad":
      switch (valor.toLowerCase()) {
        case "":
        case "1":
        case "2":
        case "3":
        case "f":
        case "m":
        case "d":
        case "facil":
        case "medio":
        case "dificil":
          return true;
        default:
          return false;
      }
  }
  return true;
}

function buscarTarea(listaTareas: Tarea[], tituloTarea: string): Tarea[] {
  const tareasEncontradas: Tarea[] = [];

  if (listaTareas.length === 0) return tareasEncontradas;

  for (let i = 0; i < listaTareas.length; i++) {
    if (listaTareas[i].titulo.toLowerCase().includes(tituloTarea.toLowerCase())) {
      console.log("(-------------------------------------)");
      console.log(`ID: ${listaTareas[i].id}`);
      console.log(`Titulo: ${listaTareas[i].titulo}`);
      console.log(`Descripcion: ${listaTareas[i].descripcion}`);
      console.log(`Estado: ${listaTareas[i].estado}`);
      console.log(`Creacion: ${listaTareas[i].creacion}`);
      console.log(`Ultima Edicion: ${listaTareas[i].ultimaEdicion}`);
      console.log(`Vencimiento: ${listaTareas[i].vencimiento}`);
      if (listaTareas[i].dificultad === "facil") console.log(`Dificultad: 🌕🌑🌑`);
      if (listaTareas[i].dificultad === "medio") console.log(`Dificultad: 🌕🌕🌑`);
      if (listaTareas[i].dificultad === "dificil") console.log(`Dificultad: 🌕🌕🌕`);
      console.log("(-------------------------------------)");
      tareasEncontradas.push(listaTareas[i]);
    }
  }

  if (tareasEncontradas.length === 0) {
    console.log(`No se encontró una tarea que contenga el texto indicado ${tituloTarea}`);
  }

  return tareasEncontradas;
}

function imprimirTareas(listaTareas: Tarea[], filtro: number = 1): void {
  if (listaTareas.length === 0) return;

  for (let i = 0; i < listaTareas.length; i++) {
    switch (filtro) {
      case 1:
        console.log(`[${listaTareas[i].id}] ${listaTareas[i].titulo}`);
        break;
      case 2:
        if (listaTareas[i].estado == "pendiente")
          console.log(`[${listaTareas[i].id}] ${listaTareas[i].titulo}`);
        break;
      case 3:
        if (listaTareas[i].estado == "en curso")
          console.log(`[${listaTareas[i].id}] ${listaTareas[i].titulo}`);
        break;
      case 4:
        if (listaTareas[i].estado == "terminada")
          console.log(`[${listaTareas[i].id}] ${listaTareas[i].titulo}`);
        break;
    }
  }

  let verMas: string | null;
  console.log("¿Deseas ver los detalles de alguna?");
  console.log("Introduce el número para verla o 0 para volver");
  verMas = prompt();
  console.clear();
  if (verMas === "0" || !verMas) return;

  for (let i = 0; i < listaTareas.length; i++) {
    if (listaTareas[i].id == +verMas) {
      console.log(`ID: ${listaTareas[i].id}`);
      console.log(`Titulo: ${listaTareas[i].titulo}`);
      console.log(`Descripcion: ${listaTareas[i].descripcion}`);
      console.log(`Estado: ${listaTareas[i].estado}`);
      console.log(`Creacion: ${listaTareas[i].creacion}`);
      console.log(`Ultima Edicion: ${listaTareas[i].ultimaEdicion}`);
      console.log(`Vencimiento: ${listaTareas[i].vencimiento}`);
      if (listaTareas[i].dificultad === "facil") console.log(`Dificultad: 🌕🌑🌑`);
      if (listaTareas[i].dificultad === "medio") console.log(`Dificultad: 🌕🌕🌑`);
      if (listaTareas[i].dificultad === "dificil") console.log(`Dificultad: 🌕🌕🌕`);
    }
  }
  console.log(
    "Si deseas editarla presiona E, o presiona 0 para volver al menú principal"
  );
  let editar: string | null = prompt();
  if (editar?.toLowerCase() === "e") editarTarea(listaTareas, verMas || "");
}

let valorIngresado: number | string, nombre: string, opcionTareas: string, tareaBuscada: string;
let id: number = 0;
let listaTareas: Tarea[] = [];

console.log("Ingrese su nombre:");
nombre = prompt() || '';
console.clear();

do {
  console.log(`¡Hola ${nombre}!`);
  console.log("¿Qué deseas hacer?");
  console.log("[1] Ver mis tareas");
  console.log("[2] Buscar una tarea");
  console.log("[3] Agregar una tarea");
  console.log("[0] Salir");
  valorIngresado = prompt();
  console.clear();

  if(!valorIngresado) valorIngresado = 5;

  switch (+valorIngresado) {
    case 1:
      if (listaTareas.length === 0) {
        valorIngresado = '4';
        console.log("----------------------------------------");
        console.log("Ingrese al menos una tarea para comenzar");
        console.log("----------------------------------------");
        console.log("Presione una tecla para continuar");
        prompt();
        console.clear();
      } else {
        console.log("¿Qué tareas deseas ver?");
        console.log("[1] Todas");
        console.log("[2] Pendientes");
        console.log("[3] En Curso");
        console.log("[4] Terminadas");
        console.log("[0] Volver");
        opcionTareas = prompt() || '0';

        if (opcionTareas == '0') {
          valorIngresado = '4';
          break;
        } else {
          imprimirTareas(listaTareas, +opcionTareas);
        }
      }
      break;
    case 2:
      if (listaTareas.length === 0) {
        valorIngresado = '4';
        console.log("----------------------------------------");
        console.log("Ingrese al menos una tarea para comenzar");
        console.log("----------------------------------------");
        console.log("Presione una tecla para continuar");
        prompt();
        console.clear();
      } else {
        console.log("Ingrese el título de la tarea a buscar:");
        tareaBuscada = prompt();
        buscarTarea(listaTareas, tareaBuscada || '');
      }
      break;
    case 3:
      let titulo: string, descripcion: string, estado: string, vencimiento: string | null, dificultad: string, dia: string, mes: string, anio: string;

      console.log("-----------------------");
      console.log("Estás creando una tarea");
      console.log("-----------------------");
      do {
        console.log("1- Ingresa el título:");
        titulo = prompt() || '';
      } while (!validarEntrada("titulo", titulo));
      do {
        console.log("2- Ingresa la descripción (Puede dejarla vacía):");
        descripcion = prompt() || '';
      } while (!validarEntrada("descripcion", descripcion));
      do {
        console.log(
          "3- Ingresa el estado, los valores posibles son (Puede dejarla vacía):"
        );
        console.log("1- (P) - Pendiente");
        console.log("2- (E) - En curso");
        console.log("3- (T) - Terminada");
        console.log("4- (C) - Cancelada");
        estado = prompt() || '';
      } while (!validarEntrada("estado", estado));
      console.log("4- ¿Desea ingresar la fecha de vencimiento?:");
      console.log(
        "Presione 1 para ingresarla, presione otra tecla para continuar:"
      );
      vencimiento = prompt() || '';
      if (vencimiento == '1') {
        do {
          console.log("Ingresa el año:");
          anio = prompt() || '';
        } while (!validarEntrada("anio", anio));
        do {
          console.log("Ingresa el mes:");
          mes = prompt() || '';
        } while (!validarEntrada("mes", mes));
        do {
          console.log("Ingresa el día:");
          dia = prompt() || '';
        } while (!validarEntrada("dia", dia, +mes));

        vencimiento = `${dia}/${mes}/${anio}`;
      } else {
        vencimiento = null;
      }
      do {
        console.log(
          "3- Ingresa la dificultad, los valores posibles son (Puede dejarla vacía):"
        );
        console.log("1- (F) facil");
        console.log("2- (M) medio");
        console.log("3- (D) dificil");
        dificultad = prompt() || '';
      } while (!validarEntrada("dificultad", dificultad));

      id++;
      let estadoTipo: Estado = estado.toLowerCase() as Estado;
      let vencimientoTipo: Date | undefined = vencimiento ? new Date(vencimiento) as Date : undefined;
      let dificultadTipo: Dificultad | undefined = dificultad ? dificultad.toLowerCase() as Dificultad : undefined;
      nuevaTarea(
        listaTareas,
        id,
        titulo,
        descripcion,
        estadoTipo,
        vencimientoTipo,
        dificultadTipo
      );
      console.log("------------------------------");
      console.log("¡Tarea guardada correctamente!");
      console.log("------------------------------");
      console.log("Presione una tecla para continuar");
      prompt();
      console.clear();
      break;
    default:
  }
} while (valorIngresado !== '0');
