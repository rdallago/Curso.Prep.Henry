# Homework: Javascript IV

## Instrucciones
---
1. En un archivo de texto separado que debes crear, escribe explicaciones de los siguientes conceptos como si se lo estuvieras explicando a un niño de 12 años. Hacer esto te ayudará a descubrir rápidamente cualquier agujero en tu comprensión.

	* Objetos:
	* Propiedades:
	* Métodos:
	* Bucle `for…in`:
	* Notación de puntos vs notación de corchetes

	Un objeto de JavaScript tiene propiedades asociadas a él. Una propiedad de un objeto se puede explicar como una variable adjunta al objeto. Las propiedades de un objeto básicamente son lo mismo que las variables comunes de JavaScript, excepto por el nexo con el objeto. Las propiedades de un objeto definen las características del objeto. Accedes a las propiedades de un objeto con una simple notación de puntos:

     objectName.propertyName.


     Un método es una función asociada a un objeto, o, simplemente, un método es una propiedad de un objeto que es una función. Los métodos se definen normalmente como una función, con excepción de que tienen que ser asignados como la propiedad de un objeto.

     A veces queremos iterar sobre cada par clave-valor en nuestro objeto. Con las matrices, utilizamos un estándar para el bucle y una variable de número de índice. Los objetos no contienen índices numéricos, por lo que el bucle estándar no funcionará para los objetos. Javascript tiene un segundo tipo de bucle for integrado llamado “for … in loop”. Es una sintaxis ligeramente diferente, comienza igual pero entre paréntesis declararemos una variable, la palabra clave in y el nombre del objeto. Esto recorrerá cada clave del objeto y finalizará cuando se hayan iterado todas las claves.


     Los operadores de miembros proporcionan acceso a las propiedades y métodos de un objeto.


     Los operadores de miembros proporcionan acceso a las propiedades y métodos de un objeto.
     Un objeto es en realidad un arreglo asociativo (por ejemplo map ,dictionary ,hash ,lookup table ). Las claves en este arreglo son los nombres de las propiedades y los métodos (propiedades que hacen referencia a funciones). Hay dos modos de acceder a estas propiedades: notación por punto y notación por corchete (es decir, operador de subscripción). Por ejemplo para acceder a la propiedad edad de un objeto persona puedo hacerlo de cualquier de estas dos formas:

       persona.edad
       persona['edad']

	