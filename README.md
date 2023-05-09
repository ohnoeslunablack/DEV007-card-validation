# Tarjeta de crédito válida

## Índice

* [1. Universal Payment: Validación de Tarjetas de Crédito](#1-Universal-Payment:-Validación-de-Tarjetas-de-Crédito)
* [2. Uso de la función isValid](#2-Uso-de-la-función-isValid)
* [3. Uso de la función maskify](#3-Uso-de-la-función-maskify)
* [4. Uso de la función getBrand](#4-Uso-de-la-función-getBrand)
* [5. Ejemplos de uso](#5-Ejemplos-de-uso)
* [6. Consideraciones técnicas](#6-consideraciones-técnicas)

***

## 1. Universal Payment: Validación de Tarjetas de Crédito

Este proyecto es una implementación del algoritmo de Luhn para validar números
de tarjetas de crédito en una plataforma de pagos electrónicos llamada 
Universal Payment. 
La idea detrás de este proyecto es asegurarnos de que los usuarios puedan realizar
transacciones en línea de manera segura y sin problemas.
![logo](https://github.com/ohnoeslunablack/DEV007-card-validation/blob/main/img/logo.png)


### ¿Quiénes son los principales usuarios del producto?

Los principales usuarios del producto son personas que realizan transacciones en línea 
con tarjetas de crédito. Esto incluye compradores en línea, vendedores y cualquier persona 
que realice transacciones financieras en línea.
![client](https://github.com/ohnoeslunablack/DEV007-card-validation/blob/main/img/UP1.jpeg)

### ¿Cuáles son los objetivos de estos usuarios en relación con tu producto?

Los usuarios tienen como objetivo principal realizar transacciones en línea de manera segura 
y sin problemas. Los compradores buscan poder realizar pagos en línea de manera rápida y 
sencilla, mientras que los vendedores buscan poder aceptar pagos en línea de manera segura.

### ¿Cómo crees que el producto que estás creando está resolviendo sus problemas?

Con la validación de tarjetas de crédito basada en el algoritmo de Luhn, Universal Payment 
puede garantizar que los números de tarjetas de crédito ingresados son válidos. 
Esto ayuda a prevenir errores en la entrada de datos y a evitar transacciones fraudulentas. 
Además, con las funciones de isValid y maskify, los usuarios pueden verificar si un número de 
tarjeta de crédito es válido y ocultar los números de la tarjeta para proteger su información personal.


### Proceso de diseño

Para diseñar Universal Payment, nos enfocamos en crear una interfaz intuitiva y fácil de usar para los usuarios.
Se optó por una interfaz de usuario limpia y minimalista que permita a los usuarios realizar transacciones
de manera sencilla. Además, se priorizó la seguridad y la protección de la información personal del usuario
en todo momento.

En cuanto a la experiencia de usuario, se decidió que el proceso de validación de tarjetas de crédito fuera 
lo más transparente posible para los usuarios. La validación se realiza automáticamente en segundo plano 
y los usuarios solo verán un mensaje que les indica si el número de tarjeta de crédito es válido o no.

![brand](https://github.com/ohnoeslunablack/DEV007-card-validation/blob/main/img/UP2.jpeg)

## 2. Uso de la función isValid

La función isValid es una función que se encarga de validar el número de tarjeta de crédito ingresado 
por el usuario. La función utiliza el algoritmo de Luhn para determinar si el número de tarjeta de 
crédito es válido o no. Si el número de tarjeta de crédito es válido, la función devolverá true. 
Si no es válido, la función devolverá false.

## 3. Uso de la función maskify

La función maskify es una función que se encarga de ocultar los últimos dígitos del número de tarjeta 
de crédito para proteger la información personal del usuario. La función recibe como parámetro el 
número de tarjeta de crédito y devuelve una versión enmascarada del mismo.

## 4. Uso de la función getBrand

La función getBrand se utiliza para determinar la marca de la tarjeta de crédito a partir de su número.
La función utiliza declaraciones condicionales y la función startsWith() para verificar si el número 
de la tarjeta comienza con ciertos dígitos que son característicos de cada marca de tarjeta.


## 5. Ejemplos de uso

Los usuarios pueden utilizar estas funciones en sus propias aplicaciones o sitios web para proporcionar 
una forma segura y confiable de procesar pagos en línea. Por ejemplo, una tienda en línea podría utilizar
las funciones de Universal Payment para verificar los números de tarjeta de crédito de los clientes 
antes de procesar un pedido, asegurando que la información de pago sea correcta y protegida.

La interfaz es simple, solo basta introducir el numero de tarjeta y presionar el boton validar.
![validacion](https://github.com/ohnoeslunablack/DEV007-card-validation/blob/main/img/validacion.jpeg)

En caso de que se envie el formulario vacío arrojará un mensaje solicitando el número de tarjeta.
![vacio](https://github.com/ohnoeslunablack/DEV007-card-validation/blob/main/img/empty.jpeg)

Si el usuario introduce caracteres "no digitos" arrojará un mensaje de invalido.
![string](https://github.com/ohnoeslunablack/DEV007-card-validation/blob/main/img/string.jpeg)

Si el usuario introduce menos caracteres arrojará un mensaje de invalido.
![incomplete](https://github.com/ohnoeslunablack/DEV007-card-validation/blob/main/img/incomplete.jpeg)

Si el usuario introduce un numero de tarjeta invalido arrojará un mensaje de invalido.
![invalid](https://github.com/ohnoeslunablack/DEV007-card-validation/blob/main/img/invalid.jpeg)

Cuando el usuario introduce un numero de tarjeta valido pero no se encuentra la marca arrojará un mensaje de valido con el numero de tarjeta enmascarado y la marca deconocida.
![nobrand](https://github.com/ohnoeslunablack/DEV007-card-validation/blob/main/img/nobrand.jpeg)

Cuando el usuario introduce un numero de tarjeta valido y se encuentra la marca arrojará un mensaje de valido con el numero de tarjeta enmascarado y la marca identificada.
![brand](https://github.com/ohnoeslunablack/DEV007-card-validation/blob/main/img/brand.jpeg)

## 6. Consideraciones técnicas

La lógica del proyecto debe estar implementada completamente en JavaScript. En
este proyecto NO está permitido usar librerías o frameworks, solo JavaScript
puro también conocido como Vanilla JavaScript.

Para comenzar este proyecto tendrás que hacer un _fork_ y _clonar_ este
repositorio que contiene un _boilerplate_ con tests (pruebas). Un _boilerplate_
es la estructura basica de un proyecto que sirve como un punto de partida con
archivos inicial y configuración basica de dependencias y tests.

Los tests unitarios deben cubrir un mínimo del 70% de _statements_, _functions_
y _lines_, y un mínimo del 50% de _branches_. El _boilerplate_ ya contiene el
setup y configuración necesaria para ejecutar los tests (pruebas) así como _code
coverage_ para ver el nivel de cobertura de los tests usando el comando `npm
test`.

El boilerplate que les damos contiene esta estructura:

```text
./
├── .babelrc
├── .editorconfig
├── .eslintrc
├── .gitignore
├── README.md
├── package.json
├── src
│   ├── validator.js
│   ├── index.html
│   ├── index.js
│   └── style.css
└── test
    ├── .eslintrc
    └── validator.spec.js
```

### Descripción de scripts / archivos

* `README.md`: debe explicar la información necesaria para el uso de tu aplicación
  web, así como una introducción a la aplicación, su funcionalidad y decisiones de
  diseño que tomaron.
* `src/index.html`: este es el punto de entrada a tu aplicación. Este archivo
  debe contener tu _markup_ (HTML) e incluir el CSS y JavaScript necesario.
* `src/style.css`: este archivo debe contener las reglas de estilo. Queremos que
  escribas tus propias reglas, por eso NO está permitido el uso de frameworks de
  CSS (Bootstrap, Materialize, etc).
* `src/validator.js`: acá debes implementar el objeto `validator`, el cual ya está
  _exportado_ en el _boilerplate_. Este objeto (`validator`) debe contener dos
  métodos:
  - `validator.isValid(creditCardNumber)`: `creditCardNumber` es un `string`
     con el número de tarjeta que se va a verificar. Esta función debe retornar
     un `boolean` dependiendo si es válida de acuerdo al [algoritmo de Luhn](https://es.wikipedia.org/wiki/Algoritmo_de_Luhn).
  - `validator.maskify(creditCardNumber)`: `creditCardNumber` es un `string` con
    el número de tarjeta y esta función debe retornar un `string` donde todos menos
    los últimos cuatro caracteres sean reemplazados por un numeral (`#`) o 🐱.
    Esta función deberá siempre mantener los últimos cuatro caracteres
    intactos, aún cuando el `string` sea de menor longitud.

    Ejemplo de uso

    ```js
    maskify('4556364607935616') === '############5616'
    maskify(     '64607935616') ===      '#######5616'
    maskify(               '1') ===                '1'
    maskify(               '')  ===                ''
    ```

* `src/index.js`: acá debes escuchar eventos del DOM, invocar
  `validator.isValid()` y `validator.maskify()` según sea necesario y
  actualizar el resultado en la UI (interfaz de usuario).
* `test/validator.spec.js`: este archivo contiene algunos tests de ejemplo y acá
  tendrás que implementar los tests para `validator.isValid()` y `validator.maskify()`.

El _boilerplate_ incluye tareas que ejecutan [eslint](https://eslint.org/) y
[htmlhint](https://github.com/yaniswang/HTMLHint) para verificar el `HTML` y
`JavaScript` con respecto a una guías de estilos. Ambas tareas se ejecutan
automáticamente antes de ejecutar las pruebas (tests) cuando usamos el comando
`npm run test`. En el caso de `JavaScript` estamos usando un archivo de
configuración de `eslint` que se llama `.eslintrc` que contiene un mínimo de
información sobre el parser que usar (qué version de JavaScript/ECMAScript), el
entorno (browser en este caso) y las [reglas recomendadas (`"eslint:recommended"`)](https://eslint.org/docs/rules/).
En cuanto a reglas/guías de estilo en sí,
usaremos las recomendaciones _por defecto_ de tanto `eslint` como `htmlhint`.

***

#### Deploy

Hacer que los sitios estén publicados (o _desplegados_) para que usuarias de
la web puedan acceder a él es algo común en proyectos de desarrollo de software.

En este proyecto, utilizaremos _Github Pages_ para desplegar nuestro sitio web.

El comando `npm run deploy` puede ayudarte con esta tarea y también puedes
 consultar su [documentación oficial](https://docs.github.com/es/pages).


