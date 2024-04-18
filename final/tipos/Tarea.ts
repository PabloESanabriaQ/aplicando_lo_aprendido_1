import { Dificultad } from "./Dificultad";
import { Estado } from "./Estado";

export type Tarea = {
  id: number;
  titulo: string;
  descripcion: string;
  estado: Estado;
  fechaCreacion: Date;
  ultimaEdicion: Date;
  fechaVencimiento?: Date;
  dificultad: Dificultad;
}
