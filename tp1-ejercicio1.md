# Ejercicio 1

Considera el lenguaje JavaScript acotado al paradigma de programación estructurada y analízalo en términos de [los cuatro componentes de un paradigma](https://www.notion.so/f36d432c55274b93913dc289446f424d?pvs=21) mencionados por Kuhn.

## 1. Generalización simbólica: ¿Cuáles son las reglas escritas del lenguaje?

JavaScript es un lenguaje interpretado, corre en el navegador, esto le permite una gran portabilidad, facilidad de desarrollo al no tener que compilarlo y actualización bastante dinámica.

Es un lenguaje multiparadigmas que permite declarar variables y funciones de manera bastante liberal.

Se pueden utilizar las variables sin haberlas declarado previamente, o declarándolas utilizando las palabras clave: const, var, let.

Var declara variables en el scope de declaración y el inmediato superior. Esto generaba problemas de consistencia y por esta razón ECMA, la empresa encargada de escribir el estándar de JS decidió agregar CONST y LET, para solucionarlo:

Const declara constantes, y let variables que se utilizan dentro del scope en que fueron declaradas.

Las funciones en JavaScript pueden ser declaradas de 3 maneras. Utilizando la palabra clave function o declarándolas de manera anónima (funciones flecha), para ser utilizadas una única vez o guardarlas dentro de variables dentro de variables, y llamarlas utilizando el nombre de la variable seguida de paréntesis y sus parámetros, si los tuviera.

También se pueden declarar funciones flecha, que se declaran de manera similar a la anterior.

JavaScript además tiene un único hilo de ejecución, pero trabaja con funciones asincrónicas que le permiten realizar operaciones asincrónicas que no bloquean el hilo de ejecución principal.

## 2. Creencias de los profesionales: ¿Qué características particulares del lenguaje se cree que sean "mejores" que en otros lenguajes?

- Es muy versatil, se pueden crear aplicaciones de frontend, backend y utilizando múltiples paradigmas.
- Tiene un ecosistema de bibliotecas y frameworks de trabajo muy amplio.
- Una comunidad muy grande y activa, por lo que cuenta con numerosos recursos disponibles y gran soporte.
