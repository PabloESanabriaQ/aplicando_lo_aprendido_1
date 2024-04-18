# Ejercicio 1

Considera el lenguaje JavaScript acotado al paradigma de programación orientada a objetos basado en prototipos y analízalo en términos de [los cuatro componentes de un paradigma](https://www.notion.so/f36d432c55274b93913dc289446f424d?pvs=21) mencionados por Kuhn.

## 1. Generalización simbólica: ¿Cuáles son las reglas escritas del lenguaje?

En JavaScript, los objetos son una de las características fundamentales del lenguaje y juegan un papel central en la programación orientada a objetos basada en prototipos.

En JavaScript, un objeto es una colección de propiedades, donde cada propiedad tiene un nombre (también conocido como clave o identificador) y un valor asociado. Estos valores pueden ser de cualquier tipo de datos, incluyendo otros objetos, lo que permite la construcción de estructuras de datos complejas.

En JavaScript, cada objeto tiene un prototipo, que es otro objeto al que el objeto se vincula para heredar propiedades y métodos. El concepto de prototipo es fundamental para la herencia en JavaScript.

Cada objeto en JavaScript tiene un enlace interno a otro objeto llamado prototipo. Cuando intentas acceder a una propiedad en un objeto y esa propiedad no está presente en el objeto actual, JavaScript busca esa propiedad en el prototipo. Este proceso se repite hasta que se encuentra la propiedad o hasta que se alcanza el final de la cadena de prototipos.

## 2.Creencias de los profesionales: ¿Qué características particulares del lenguaje se cree que sean "mejores" que en otros lenguajes?

En términos generales, las características son compartidas con la programación estructurada en JavaScript. El sistema de prototipos de JavaScript proporciona una forma única de lograr la herencia, permitiendo a los desarrolladores crear jerarquías de objetos de manera flexible.
