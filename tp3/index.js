import promptSync from "prompt-sync";
import { ListaDeTareas } from "./ListaDeTareas.js";
import { Tarea } from "./Tarea.js";
import { validarEntrada } from "./ValidarEntrada.js";

const prompt = promptSync();
let listaTareas = new ListaDeTareas();
let opcion = 0;
let valorIngresado, nombre, opcionTareas, tareaBuscada, nuevaTarea;
let id = 0;

console.log("Ingrese su nombre:");
nombre = prompt();
console.clear();

console.clear();

do {
  console.log(`¡Hola ${nombre}!`);
  console.log("¿Qué deseas hacer?");
  console.log("[1] Ver mis tareas");
  console.log("[2] Buscar una tarea");
  console.log("[3] Agregar una tarea");
  console.log("[4] Modificar una tarea");
  console.log("[0] Salir");
  valorIngresado = prompt();
  console.clear();

  switch (+valorIngresado) {
    case 1:
      if (listaTareas.tareas.length === 0) {
        valorIngresado = 4;
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
        opcionTareas = prompt();

        if (opcionTareas == 0) {
          valorIngresado = 4;
          break;
        } else {
          listaTareas.imprimirTareas(opcionTareas);
        }
      }
      break;
    case 2:
      if (listaTareas.tareas.length === 0) {
        valorIngresado = 4;
        console.log("----------------------------------------");
        console.log("Ingrese al menos una tarea para comenzar");
        console.log("----------------------------------------");
        console.log("Presione una tecla para continuar");
        prompt();
        console.clear();
      } else {
        console.log("Ingrese el título de la tarea a buscar:");
        tareaBuscada = prompt();
        listaTareas.buscarTarea(tareaBuscada);
      }
      break;
    case 3:
      let titulo, descripcion, estado, vencimiento, dificultad, dia, mes, anio;
      console.log("-----------------------");
      console.log("Estás creando una tarea");
      console.log("-----------------------");
      do {
        console.log("1- Ingresa el título:");
        titulo = prompt();
      } while (!validarEntrada("titulo", titulo));
      do {
        console.log("2- Ingresa la descripción (Puede dejarla vacía):");
        descripcion = prompt();
      } while (!validarEntrada("descripcion", descripcion));
      do {
        console.log(
          "3- Ingresa el estado, los valores posibles son (Puede dejarla vacía):"
        );
        console.log("1- (P) - Pendiente");
        console.log("2- (E) - En curso");
        console.log("3- (T) - Terminada");
        console.log("4- (C) - Cancelada");
        estado = prompt();
      } while (!validarEntrada("estado", estado));
      switch (estado.toLowerCase()) {
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
        } while (!validarEntrada("dia", dia, mes));

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
        dificultad = prompt();
      } while (!validarEntrada("dificultad", dificultad));

      id++;

      nuevaTarea = new Tarea(
        id,
        titulo,
        descripcion,
        estado,
        vencimiento,
        dificultad
      );

      listaTareas.agregarTarea(nuevaTarea);
      console.log("------------------------------");
      console.log("¡Tarea guardada correctamente!");
      console.log("------------------------------");
      console.log("Presione una tecla para continuar");
      prompt();
      console.clear();
      break;
    case 4:
      if (listaTareas.tareas.length === 0) {
        valorIngresado = 4;
        console.log("----------------------------------------");
        console.log("Ingrese al menos una tarea para comenzar");
        console.log("----------------------------------------");
        console.log("Presione una tecla para continuar");
        prompt();
        console.clear();
      } else {
        console.log("Ingrese el título de la tarea a modificar:");
        tareaBuscada = prompt();
        let tituloTareaAModificar = listaTareas.buscarTarea(tareaBuscada) || "";
        let estado, vencimiento, dificultad, anio, mes, dia;

        if (tituloTareaAModificar == "") {
          console.log("-----------------------");
          console.log("No se encontró la tarea");
          console.log("-----------------------");
          console.log("Presione una tecla para continuar");
          prompt();
          console.clear();
        } else {
          do {
            console.log(
              "3- Ingresa el estado, los valores posibles son (Dejar vacío para no modificarlo):"
            );
            console.log("1- (P) - Pendiente");
            console.log("2- (E) - En curso");
            console.log("3- (T) - Terminada");
            console.log("4- (C) - Cancelada");
            estado = prompt();
          } while (!validarEntrada("estado", estado));
          switch (estado.toLowerCase()) {
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
            } while (!validarEntrada("dia", dia, mes));

            vencimiento = `${dia}/${mes}/${anio}`;
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
            dificultad = prompt();
          } while (!validarEntrada("dificultad", dificultad));
        }
        listaTareas.modificarTarea(
          tituloTareaAModificar,
          estado,
          vencimiento,
          dificultad
        );

        console.clear();
      }

      break;
    default:
  }
} while (valorIngresado != 0);
