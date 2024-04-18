export type Dificultad = "facil" | "medio" | "dificil" | "f" | "m" | "d" | 1 | 2 | 3;
export type Estado = "pendiente" | "en curso" | "terminada" | "cancelada" | "p" | "e" | "t" | "c" | 1 | 2 | 3 | 4;

export interface Tarea {
  id: number;
  titulo: string;
  descripcion: string;
  estado: Estado;
  creacion: Date;
  ultimaEdicion: Date;
  vencimiento: Date | null | string;
  dificultad: Dificultad;
}
