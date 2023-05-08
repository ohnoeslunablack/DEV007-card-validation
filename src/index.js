import validator from "./validator.js"; //exportamos el objeto "validator"
/*definimos tres variables utilizando la función "querySelector" para seleccionar elementos del DOM: 
"form", "cardNumberInput", y "resultDiv".*/
const form = document.querySelector("form");
const cardNumberInput = document.querySelector("#card-number");
const resultDiv = document.querySelector("#result");
/*agrega un "escuchador de eventos" en el formulario que está siendo seleccionado por la variable "form". 
Cuando se envía el formulario, el evento "submit" se activa y se ejecuta la función de callback definida.*/
form.addEventListener("submit", (event) => {
  /*agregamos el método "preventDefault" del objeto "event" para evitar que el formulario se envíe y 
  la página se recargue.*/
  event.preventDefault();
   /*llama al método "trim" en la variable "cardNumberInput.value" 
  para eliminar cualquier espacio en blanco en el inicio o final del número de tarjeta de crédito ingresado. */
  const cardNumber = cardNumberInput.value.trim();
  /*el número "cardNumber" se pasa como argumento al método "isValid" del objeto "validator" para verificar si 
  el número de tarjeta de crédito es válido o no. El resultado se almacena en la variable "valid". */
  const valid = validator.isValid(cardNumber);
  /*el numero "cardNumber" se pasa por el método "maskify" del objeto "validator" como argumento, y el resultado 
  se almacena en la variable "maskedCardNumber".*/
  const maskedCardNumber = validator.maskify(cardNumber);
/*el numero "cardNumber" llama a la función "getBrand" para obtener la marca de la tarjeta , y el resultado 
  se almacena en la variable "maskedCardNumber".*/
  const brand = getBrand(cardNumber);
/*definimos la función getBrand que toma cardNumber, y devuelve un string que representa la marca de la tarjeta 
de crédito basada en el número de la tarjeta.*/
  function getBrand(cardNumber) {
/*agregamos las declaraciones condicionales usando la función startsWith() que verifica si la cadena cardNumber 
comienza con ciertos números*/
    if (cardNumber.startsWith("4")) {
      return "Visa";
    } else if (cardNumber.startsWith("5")) {
      return "MasterCard";
    } else if (cardNumber.startsWith("34") || cardNumber.startsWith("37")) {
      return "American Express";
    } else if (cardNumber.startsWith("36")) {
      return "Diner's Club / International";
    } else if (
      cardNumber.startsWith("38") ||
      cardNumber.startsWith("300") ||
      cardNumber.startsWith("301") ||
      cardNumber.startsWith("302") ||
      cardNumber.startsWith("303") ||
      cardNumber.startsWith("304") ||
      cardNumber.startsWith("305")
    ) {
      return "Diner's Club / Carte Blanche";
    } else if (cardNumber.startsWith("2014") || cardNumber.startsWith("2149")) {
      return "Diner's Club / enRoute";
    } else if (cardNumber.startsWith("6011")) {
      return "Discover";
    } else if (cardNumber.startsWith("2131") || cardNumber.startsWith("1800")) {
      return "JCB";
    } else {
      return "desconocida";
    }
  }
/*establecemos un texto en resultDiv si la cadena ingresada esta vacía*/
  if (cardNumber === "") {
    resultDiv.textContent = "Por favor, ingrese un número de tarjeta.";
    return;
  }
/*establecemos un texto en resultDiv si la tarjeta es valida*/
  if (valid === true) {
    resultDiv.textContent = `El número de tarjeta  ${maskedCardNumber} es válido.  Marca: ${brand}`;
  }
/*establecemos un texto en resultDiv para cualquier otro caso*/
  else{
    resultDiv.textContent = `El número de tarjeta no es válido.`;
  }
});


