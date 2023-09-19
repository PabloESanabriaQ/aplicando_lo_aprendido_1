const prompt = require("prompt-sync")({ sigint: true });

function nuevaTarea(
  listaTareas,
  id,
  titulo,
  descripcion,
  estado = "pendiente",
  vencimiento,
  dificultad = "facil"
) {
  let creacion = new Date();
  creacion = `${creacion.getDate()}/${creacion.getMonth()}/${creacion.getFullYear()}`;
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
  let nuevaTarea = [
    id,
    titulo,
    descripcion,
    estado,
    creacion,
    creacion, //última edición tiene el valor de creación inicialmente
  ];

  vencimiento ? nuevaTarea.push(vencimiento) : nuevaTarea.push("Sin Datos");
  nuevaTarea.push(dificultad);
  listaTareas.push(nuevaTarea);
}
/* Tarea:

0 - id
1 - titulo
2 - descripcion
3 - estado
4 - creacion
5 - ultima edicion
6- vencimiento
7 - dificultad
*/
function imprimirTareas(listaTareas, filtro = 1) {
  if (listaTareas.length === 0) return;

  for (let i = 0; i < listaTareas.length; i++) {
    switch (+filtro) {
      case 1:
        console.log(`[${listaTareas[i][0]}] ${listaTareas[i][1]}`);
        break;
      case 2:
        if (listaTareas[i][3] == "pendiente")
          console.log(`[${listaTareas[i][0]}] ${listaTareas[i][1]}`);
        break;
      case 3:
        if (listaTareas[i][3] == "en curso")
          console.log(`[${listaTareas[i][0]}] ${listaTareas[i][1]}`);
        break;
      case 4:
        if (listaTareas[i][3] == "terminada")
          console.log(`[${listaTareas[i][0]}] ${listaTareas[i][1]}`);
        break;
    }
  }

  let verMas;
  console.log("¿Deseas ver los detalles de alguna?");
  console.log("Introduce el número para verla o 0 para volver");
  verMas = prompt();
  console.clear();
  if (verMas == 0) return;

  for (let i = 0; i < listaTareas.length; i++) {
    if (listaTareas[i][0] == verMas) {
      console.log(`ID: ${listaTareas[i][0]}`);
      console.log(`Titulo: ${listaTareas[i][1]}`);
      console.log(`Descripcion: ${listaTareas[i][2]}`);
      console.log(`Estado: ${listaTareas[i][3]}`);
      console.log(`Creacion: ${listaTareas[i][4]}`);
      console.log(`Ultima Edicion: ${listaTareas[i][5]}`);
      console.log(`Vencimiento: ${listaTareas[i][6]}`);
      if (listaTareas[i][7] == "facil") console.log(`[Dificultad: 🌕🌑🌑`);
      if (listaTareas[i][7] == "medio") console.log(`[Dificultad: 🌕🌕🌑`);
      if (listaTareas[i][7] == "dificil") console.log(`[Dificultad: 🌕🌕🌕`);
    }
  }
  console.log(
    "Si deseas editarla presiona E, o presiona 0 para volver al menú principal"
  );
  editar = prompt();
  if (editar.toLowerCase() == "e") editarTarea(listaTareas, verMas);
}

function buscarTarea(listaTareas, tituloTarea) {
  let tareaEncontrada = [];

  if (listaTareas.length == 0) return;
  for (let i = 0; i < listaTareas.length; i++) {
    if (listaTareas[i][1].includes(tituloTarea.toLowerCase())) {
      console.log("(-------------------------------------)");
      console.log(`ID: ${listaTareas[i][0]}`);
      console.log(`Titulo: ${listaTareas[i][1]}`);
      console.log(`Descripcion: ${listaTareas[i][2]}`);
      console.log(`Estado: ${listaTareas[i][3]}`);
      console.log(`Creacion: ${listaTareas[i][4]}`);
      console.log(`Ultima Edicion: ${listaTareas[i][5]}`);
      console.log(`Vencimiento: ${listaTareas[i][6]}`);
      if (listaTareas[i][7] == "facil") console.log(`[Dificultad: 🌕🌑🌑`);
      if (listaTareas[i][7] == "medio") console.log(`[Dificultad: 🌕🌕🌑`);
      if (listaTareas[i][7] == "dificil") console.log(`[Dificultad: 🌕🌕🌕`);
      console.log("(-------------------------------------)");
      tareaEncontrada.push(listaTareas[i]);
    }
    if (!tareaEncontrada)
      return console.log(
        `No se encontró una tarea que contenga el texto indicado ${tituloTarea}`
      );
  }
}

function editarTarea(listaTareas, idTarea) {
  let titulo, descripcion, estado, creacion, ultimaEdicion, vencimiento;
  idTarea = +idTarea;
  for (let i = 0; i < listaTareas.length; i++) {
    if (listaTareas[0][i] == idTarea) {
      console.log(`ID: ${listaTareas[i][0]}`);
      console.log(`Titulo: ${listaTareas[i][1]}`);
      console.log(`Descripcion: ${listaTareas[i][2]}`);
      console.log(`Estado: ${listaTareas[i][3]}`);
      console.log(`Creacion: ${listaTareas[i][4]}`);
      console.log(`Ultima Edicion: ${listaTareas[i][5]}`);
      console.log(`Vencimiento: ${listaTareas[i][6]}`);
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
    estado = prompt();
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

  idTarea--;

  if (listaTareas[idTarea][1] !== titulo || titulo === "")
    listaTareas[idTarea][1] = titulo;

  if (listaTareas[idTarea][2] !== descripcion && descripcion !== "")
    listaTareas[idTarea][2] = descripcion;

  if (listaTareas[idTarea][3] !== estado && estado !== "")
    listaTareas[idTarea][3] = estado;

  listaTareas[idTarea][5] = `${new Date().getDate()}/${
    new Date().getMonth
  }/${new Date().getFullYear()}`;

  if (listaTareas[idTarea][6] !== vencimiento && vencimiento !== "")
    listaTareas[idTarea][6] = vencimiento;

  if (listaTareas[idTarea][7] !== dificultad && dificultad !== "")
    listaTareas[idTarea][7] = dificultad;
  /* Tarea:

0 - id
1 - titulo
2 - descripcion
3 - estado
4 - creacion
5 - ultima edicion
6- vencimiento
7 - dificultad
*/
}

function validarEntrada(tipoValidacion, valor, mes = 11) {
  switch (tipoValidacion) {
    case "titulo":
      if (valor == null || valor.length > 100 || valor.length == 0)
        return false;
      break;
    case "descripcion":
      if (valor.length > 500) {
        return false;
      } else {
        return true;
      }
      break;
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
      if (valor > 12 || valor < 0) {
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

let valorIngresado, nombre, opcionTareas, tareaBuscada;
let id = 0;
let listaTareas = [];

console.log("Ingrese su nombre:");
nombre = prompt();
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

  switch (+valorIngresado) {
    case 1:
      if (listaTareas.length === 0) {
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
          imprimirTareas(listaTareas, opcionTareas);
        }
      }
      break;
    case 2:
      if (listaTareas.length === 0) {
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

        buscarTarea(listaTareas, tareaBuscada);
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
      nuevaTarea(
        listaTareas,
        id,
        titulo,
        descripcion,
        estado,
        vencimiento,
        dificultad
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
} while (valorIngresado != 0);
