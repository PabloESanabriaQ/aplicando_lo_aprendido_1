# Ejercicio 1

Considera un lenguaje que conozcas bien y analízalo en términos de [los cuatro
componentes de un paradigma](https://www.notion.so/Paradigmas-lenguajes-y-programas-f36d432c55274b93913dc289446f424d?pvs=21) mencionados por Kuhn.

## 1. Generalización simbólica: ¿Cuáles son las reglas escritas del lenguaje?

En el caso de Java, los símbolos serían los elementos fundamentales del lenguaje, como palabras clave, operadores, y nombres de variables y funciones. Java tiene un conjunto definido de palabras clave, como class, public, static, void, etc. Estos símbolos forman la base del lenguaje y son fundamentales para su estructura.

Todo código escrito en Java debe escribirse en un archivo con extensión .java, y dentro de una clase. Cada clase puede tener atributos y funciones. Toda clase tiene un constructor (una función con el nombre de la clase a la que pertenece) por defecto vacío que sirve para crear objetos con el modelo de la misma. Si creamos un constructor, el constructor por defecto no se crea, pero podemos tener cuantos constructores personalizados queramos, siempre y cuando tengan distintos parámetros.

Los atributos en Java tienen un tipo de dato, los primitivos son int, short, long, double, float, boolean, byte, char. También cuentan con modificadores de acceso, al igual que las funciones: public, private, protected y default. Si queremos declarar un atributo como constante utilizamos la palabra clave final. También podemos declarar atributos y funciones que serán utilizadas llamando a la clase y no pertenecen a los objetos creados en base a la clase, estos se declaran utilizando la palabra clave "static".

Java tiene una estructura muy marcada y reglas estrictas de declaración de clases y funciones. Todo programa en Java tendrá una única función inicializadora main que nos indica dónde comenzará a ejecutarse el código del mismo.

## 2. Creencias de los profesionales: ¿Qué características particulares del lenguaje se cree que sean "mejores" que en otros lenguajes?

- Portabilidad: Java es conocido por su capacidad de ser ejecutado en múltiples plataformas sin la necesidad de recompilar el código fuente. Esto se logra mediante la máquina virtual Java (JVM), lo que permite que las aplicaciones escritas en Java sean altamente portátiles.

- Orientación a objetos: Java es un lenguaje de programación orientado a objetos, lo que significa que se basa en conceptos como clases y objetos. La orientación a objetos puede facilitar el diseño y la organización del código, así como la reutilización de componentes.

- Seguridad: Java ha incorporado características de seguridad desde sus primeras versiones. La ejecución de código en la JVM se lleva a cabo en un entorno controlado, lo que ayuda a prevenir vulnerabilidades de seguridad y ejecución de código malicioso.

- Rendimiento razonable: Aunque la ejecución de Java se realiza en la JVM, que agrega una capa de abstracción, el rendimiento de Java ha mejorado con el tiempo y es considerado razonable en comparación con otros lenguajes de alto nivel. Además, la capacidad de optimización de la JVM ha mejorado significativamente.

- Amplia comunidad y bibliotecas: Java tiene una amplia comunidad de desarrolladores y una gran cantidad de bibliotecas y frameworks disponibles. Esto facilita el desarrollo rápido de aplicaciones y proporciona soluciones para una variedad de problemas.

- Herramientas de desarrollo robustas: Java cuenta con una variedad de herramientas de desarrollo, como Eclipse, IntelliJ IDEA y NetBeans, que son conocidas por su robustez y funcionalidades avanzadas. Estas herramientas facilitan la escritura, depuración y mantenimiento del código.

- Madurez y estabilidad: Java es un lenguaje de programación maduro y ha sido utilizado en una amplia gama de aplicaciones durante muchos años. La estabilidad y la madurez del lenguaje son a menudo consideradas ventajas para proyectos empresariales de larga duración.

## 3. Valores: ¿Qué pensamiento o estilo de programación consideraron mejor los creadores?

Los creadores de Java, liderados por James Gosling, Mike Sheridan y Patrick Naughton, tenían varios valores y principios en mente al desarrollar el lenguaje. Java fue diseñado con el objetivo de abordar las limitaciones y desafíos de la programación en entornos distribuidos y dispositivos heterogéneos. Algunos de los valores y principios clave que se reflejan en el diseño de Java incluyen:

- Portabilidad: Uno de los valores fundamentales de Java es la portabilidad, permitiendo que el código escrito en Java sea ejecutado en cualquier dispositivo o plataforma que tenga una implementación de la Máquina Virtual Java (JVM). Esta característica facilita el desarrollo de software que puede ejecutarse en una variedad de entornos sin modificaciones significativas.

- Orientación a objetos: Java adopta un enfoque de programación orientada a objetos, lo que significa que los programas se estructuran en términos de clases y objetos. Este estilo de programación promueve la reutilización de código, la modularidad y la organización eficiente de software.

- Seguridad: La seguridad fue un aspecto crucial en el diseño de Java. La ejecución de código en la JVM se realiza en un entorno controlado, y se implementaron varias características para prevenir problemas de seguridad, como el acceso no autorizado a recursos del sistema y la ejecución de código malicioso.

- Simplicidad y claridad: Los creadores de Java valoraron la simplicidad y la claridad en el diseño del lenguaje. Querían crear un lenguaje que fuera fácil de aprender y entender, fomentando buenas prácticas de programación y reduciendo la posibilidad de errores.

- Desarrollo colaborativo y comunidad abierta: Desde sus primeras versiones, Java ha fomentado la colaboración y la creación de una comunidad activa de desarrolladores. La idea era construir un ecosistema donde los desarrolladores pudieran compartir conocimientos, bibliotecas y soluciones.

- Rendimiento razonable: Aunque la portabilidad era una prioridad, los creadores de Java también reconocieron la importancia del rendimiento. A lo largo de las versiones, se realizaron mejoras continuas para optimizar el rendimiento de las aplicaciones Java, manteniendo un equilibrio entre la portabilidad y la eficiencia.

- Independencia de la arquitectura y de la implementación específica del hardware: Java fue diseñado para ser independiente de la arquitectura y de la implementación específica del hardware. Esto significa que el código Java puede ejecutarse en diversas plataformas sin la necesidad de modificaciones significativas, lo que contribuye a la portabilidad.

## 4. Ejemplares: ¿Qué clase de problemas pueden resolverse más fácilmente en el lenguaje?

Java es un lenguaje de propósito general que se utiliza ampliamente en diversos dominios de desarrollo de software. Algunos tipos de problemas se prestan particularmente bien para ser abordados con Java debido a sus características y fortalezas. Aquí hay algunos ejemplos de problemas que pueden resolverse más fácilmente o de manera eficiente en Java:

- Desarrollo empresarial y de sistemas: Java es ampliamente utilizado en el desarrollo de aplicaciones empresariales y sistemas grandes. Su capacidad para manejar la concurrencia, la orientación a objetos y la gestión de memoria automática hace que sea adecuado para construir sistemas escalables y robustos.

- Desarrollo de aplicaciones web: Java es una opción popular para el desarrollo de aplicaciones web empresariales. Frameworks como Spring proporcionan herramientas poderosas para la construcción de aplicaciones web escalables y modulares.

- Desarrollo de aplicaciones móviles Android: Java ha sido durante mucho tiempo el lenguaje principal para el desarrollo de aplicaciones Android. Aunque Kotlin ha ganado popularidad en este espacio, Java sigue siendo relevante y muchas aplicaciones existentes están escritas en este lenguaje.

- Desarrollo de servicios web: Java es utilizado comúnmente para construir servicios web. La Plataforma Java EE (Enterprise Edition) proporciona especificaciones y APIs para el desarrollo de servicios web empresariales.

- Sistemas embebidos y dispositivos IoT: Java puede ser utilizado en sistemas embebidos y dispositivos IoT, especialmente cuando se requiere portabilidad y una máquina virtual Java está disponible para la plataforma de destino.

- Desarrollo de juegos: Aunque no es tan dominante como en algunos otros dominios, Java también se utiliza en el desarrollo de juegos, especialmente en juegos para dispositivos móviles y aplicaciones basadas en JavaFX.

- Aplicaciones científicas y de investigación: Aunque no es el lenguaje principal en este dominio, Java se utiliza en aplicaciones científicas y de investigación, especialmente cuando la portabilidad es esencial y se requiere un lenguaje de alto nivel.

- Desarrollo de herramientas y aplicaciones de escritorio: Java es una opción popular para el desarrollo de aplicaciones de escritorio, especialmente cuando se utiliza la biblioteca Swing o plataformas más modernas como JavaFX.
