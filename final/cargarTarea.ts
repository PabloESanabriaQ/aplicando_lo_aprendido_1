import { ingresoPorTeclado } from "./ingresoPorTeclado";
import { CargaTarea } from "./tipos/CargaTarea";
import { Dificultad } from "./tipos/Dificultad";
import { TiposEntrada } from "./tipos/Entrada";
import { Estado } from "./tipos/Estado";
import { Tarea } from "./tipos/Tarea";
import { validarEntrada, convertirAFecha } from "./validarEntrada";

export function cargarTarea(idTarea : number, tipo: CargaTarea) : Tarea {

    let nuevaTarea: Tarea = {
        id: idTarea,
        titulo: "",
        descripcion: "",
        estado: Estado.PENDIENTE,
        fechaCreacion: new Date(),
        ultimaEdicion: new Date(),
        dificultad: Dificultad.FACIL
    };

    if(CargaTarea.NUEVA){
        nuevaTarea.fechaCreacion = new Date();
        nuevaTarea.ultimaEdicion = nuevaTarea.fechaCreacion;
    } else {
        nuevaTarea.ultimaEdicion = new Date();
    }

    nuevaTarea.titulo = validarEntrada(ingresoPorTeclado({ valor: "", tipo: TiposEntrada.TITULO }), TiposEntrada.TITULO).valor;
       
    nuevaTarea.descripcion = validarEntrada(ingresoPorTeclado({ valor: "", tipo: TiposEntrada.DESCRIPCION }), TiposEntrada.DESCRIPCION).valor;

    nuevaTarea.dificultad = convertirADificultad(validarEntrada(ingresoPorTeclado({ valor: "", tipo: TiposEntrada.DIFICULTAD }), TiposEntrada.DIFICULTAD).valor);

    nuevaTarea.estado = convertirAEstado(validarEntrada(ingresoPorTeclado({ valor: "", tipo: TiposEntrada.ESTADO }), TiposEntrada.ESTADO).valor);

    const { dia, mes, anio } = convertirAFecha(validarEntrada(ingresoPorTeclado({ valor: "", tipo: TiposEntrada.VENCIMIENTO }), TiposEntrada.TITULO).valor);
    nuevaTarea.fechaVencimiento = new Date(dia, mes, anio);
        
    return nuevaTarea;
}

function convertirADificultad(dificultadStr : string) : Dificultad {
    switch (+dificultadStr) {
        case 1:
            return Dificultad.FACIL;
        case 2:
            return Dificultad.MEDIA;
        case 3:
            return Dificultad.DIFICIL;
    }
    return Dificultad.FACIL;
}

function convertirAEstado(estadoStr : string) : Estado {
    switch (+estadoStr) {
        case 1:
            return Estado.PENDIENTE;
        case 2:
            return Estado.EN_CURSO;
        case 3:
            return Estado.TERMINADA;
        case 4:
            return Estado.CANCELADA;
    }
    return Estado.PENDIENTE;
}
