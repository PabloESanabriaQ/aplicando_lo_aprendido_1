import { textoIdTarea, textoOpcion, textoTitulo, textoDescripcion, textoVencimiento, textoDificultad, textoEstado } from './TextoEntrada';
import { EntradaParam, TiposEntrada } from './tipos/Entrada';

export function ingresoPorTeclado( entrada : EntradaParam ) : EntradaParam {
    const prompt  = require('prompt-sync')();

    let valor: string = "";
        switch(+entrada.tipo) {
          case TiposEntrada.OPCION:
            valor = prompt(textoOpcion);
          break;
          case TiposEntrada.IDTAREA:
            valor = prompt(textoIdTarea);
          break;
          case TiposEntrada.TITULO:
            valor = prompt(textoTitulo);
          break;
          case TiposEntrada.DESCRIPCION:
            valor = prompt(textoDescripcion);
          break;
          case TiposEntrada.ESTADO: 
            valor = prompt(textoEstado);
          break;
          case TiposEntrada.VENCIMIENTO: 
            valor = prompt(textoVencimiento);
          break;
          case TiposEntrada.DIFICULTAD:
            valor = prompt(textoDificultad); 
          break;
        }
        return {...entrada, valor: valor}
}
