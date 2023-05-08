const validator = { //definimos el objeto validator
  isValid: function (cardNumber) { /*definimos el método "isValid" dentro del objeto "validator" tomando el
  argumento cardNumber*/
   
    let sum = 0;/*Declaramos la variable "sum" con un valor de cero. Esta variable la usamos para almacenar 
    la suma de los dígitos de la tarjeta de crédito.*/
    let doubleUp = false; /*Declaramos una variable booleana "doubleUp" con un valor de falso. Esta variable 
    se utiliza para determinar si un dígito de la tarjeta de crédito debe multiplicarse por dos. (duda)*/
    for (let i = cardNumber.length - 1; i >= 0; i--) { /*Iniciamos un ciclo for que recorre cada 
    dígito del número de tarjeta de crédito, comenzando desde el último dígito.*/
      let digit = parseInt(cardNumber.charAt(i), 10); /*Convertimos el strin en el valor numérico del dígito 
      actual de cardNumber y lo almacenamos en la variable "digit"*/
  
      if (doubleUp) { /*línea comprueba si el valor de "doubleUp" es verdadero. Si es así, el dígito actual
       se multiplica por dos.*/
        digit *= 2; /*Multiplicamos el dígito actual por dos*/
        if (digit > 9) {/*Comprueba si el resultado de la multiplicación es mayor que 9.*/
          digit -= 9; /*- Si el resultado de la multiplicación es mayor que 9, le restamos 9 
          del resultado para obtener un número de un solo dígito.*/
        }
      }
  
      sum += digit; /*Agregamos el valor actual de "digit" a la variable "sum"*/
      doubleUp = !doubleUp; /*Invierte el valor de "doubleUp" para alternar entre multiplicar 
      y no multiplicar los dígitos por dos en cada iteración del bucle*/
    }
  
    return sum % 10 === 0;/*Devolvemos verdadero si la suma de los dígitos de 
    la tarjeta de crédito es divisible por 10 (lo que indica que la tarjeta es válida) y falso en caso contrario*/
  },
  
  maskify: function(cardNumber) { /*Definimos el metodo "maskify" dentro del objeto "validator" tomando 
  el argumento cardNumber*/
    const mask = cardNumber.slice(0, -4).replace(/./g, "#") + cardNumber.slice(-4); /*Utilizamos el método "slice" 
    para obtener todos los caracteres del número de tarjeta excepto los últimos cuatro. Luego, utilizamos el método
    "replace" con una expresión regular (regex) para reemplazar todos los caracteres restantes con el carácter "#" 
    que representa el enmascaramiento. Finalmente, agregamos los últimos cuatro dígitos del número de 
    tarjeta original al final de la cadena enmascarada*/
    return mask //Devolvemos la versión enmascarada del número de tarjeta de crédito
  }
}
export default validator; //Exportamos el objeto "validator"