import { Fecha } from "./Fecha"

export type EntradaParam = {
    tipo: TiposEntrada,
    valor: string
}

export enum TiposEntrada {
    OPCION,
    IDTAREA,
    TITULO,
    DESCRIPCION,
    ESTADO,
    VENCIMIENTO,
    DIFICULTAD
}
