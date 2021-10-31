1. En un archivo de texto separado que debes crear, escribe explicaciones de los siguientes conceptos como si se lo estuvieras explicando a un niño de 12 años. Hacer esto te ayudará a descubrir rápidamente cualquier agujero en tu comprensión.

* `for`: En el bucle for podemos marcar el número de interacciones que queremos que nuestro código se repita. Este bucle está en casi todos los lenguajes de programación y es uno de los que más se usa.


Elementos del bucle

En primer lugar tenemos la variable de control, que normalmente se usa la letra i (iterador), la variable de control debe inicializarse, es decir, el valor inicial que le damos a esa variable de control. Luego se define la condición de control, que es el valor final que puede tomar la variable de control, y una vez cumpla ese valor el bucle se rompe y deja de repetirse. También  en la definición del for definimos el incremento, que es el valor en el que se va a incrementar la variable de control en cada iteración del bucle. Y por último tenemos el cuerpo, que es código que se va a ejecutar en cada iteración.

Aquí vemos un ejemplo en javascript, como vemos tenemos un for, donde primero definimos la variable de control i, que empieza siendo cero, y este bucle que se ejecutará siempre y cuando la variable i sea menor que 10, o lo que es lo mismo, hasta que llegue al valor 9. Vemos que va incrementando su valor de uno en uno.

for (let i = 0                 ; i < 10                 ; i++          ) {
// | Declaramos una variable | Expresión condcicional | Incrementamos la variable |
    console.log(i);
}

//La salida correspondiente será la siguiente:

0
1
2
3
4
5
6
7
8
9


* `&&`: El operador AND && realiza lo siguiente: Evalúa los operandos de izquierda a derecha. Para cada operando, los convierte a un booleano. Si el resultado es false, se detiene y retorna el valor original de dicho operando. Si todos los operandos han sido evaluados (todos fueron valores verdaderos), retorna el último operando. En otras palabras, AND retorna el primer valor falso o el último valor si ninguno fue encontrado. Las reglas anteriores son similares a las de OR. La diferencia es que AND retorna el primer valor falso mientras que OR retorna el primer valor verdadero.

Ejemplo:

// si el primer operando es un valor verdadero,
// AND retorna el segundo operando:
alert(1 && 0); // 0
alert(1 && 5); // 5

// si el primer operando es un valor falso,
// AND lo retorna. El segundo operando es ignorado
alert(null && 5); // null
alert(0 && "cualquier valor"); // 0



* `||`: En la programación clásica, el OR lógico esta pensado para manipular solo valores booleanos. Si cualquiera de sus argumentos es true, retorna true, de lo contrario retorna false. En JavaScript, el operador es un poco más complicado y poderoso. Pero primero, veamos qué pasa con los valores booleanos.

Hay cuatro combinaciones lógicas posibles:

alert(true || true); // true (verdadero)
alert(false || true); // true
alert(true || false); // true
alert(false || false); // false (falso)



* `!`: El operador booleano NOT se representa con un signo de exclamación !.

La sintaxis es bastante simple:

result = !value;
El operador acepta un solo argumento y realiza lo siguiente:

Convierte el operando al tipo booleano: true/false.
Retorna el valor contrario.
Por ejemplo:

alert(!true); // false
alert(!0); // true