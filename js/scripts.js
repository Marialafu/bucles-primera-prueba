const values = [5, 6, 7, 8, 9, 0, 2];

const printFirst10Numbers = () => {
  for (let i = values.length - 1; i >= 0; i--) {
    console.log(values[i]);
  }
};
printFirst10Numbers();

//1️⃣ Camila está revisando una lista de nombres, (por ejemplo: ['Pedro', 'Ana', 'Luis', 'Elena', 'Sofía']). Debe imprimir cada nombre en mayúsculas, uno por línea.
//Ejemplo salida:
//PEDRO
//ANA
//LUIS
//ELENA
//SOFÍA

console.log('Primer ejercicio');

const names = ['Pedro', 'Ana', 'Luis', 'Elena', 'Sofía'];

const printNames = () => {
  for (const name of names) {
    console.log(name.toUpperCase());
  }
};
printNames();

//2️⃣ Bego tiene un array con precios. Debe sumar todos los precios usando un bucle for y mostrar el total.
//Ejemplo entrada: [23, 78, 45]
//Ejemplo salida: Total: 146

console.log('Segundo ejercicio');

const prices = [23, 78, 45];

const sumPrices = () => {
  let totalPrice = 0;
  for (let i = 0; i < prices.length; i++) {
    totalPrice = totalPrice + prices[i];
  }
  console.log(totalPrice);
};
sumPrices();

//3️⃣ Macarena quiere generar tres códigos de seguridad y almacenarlos en un array. Cada código debe ser un número aleatorio entre 1000 y 9999. Usa un bucle for para generar los códigos y luego mostrarlos.
//Ejemplo salida: [4356, 7890, 1234]
console.log('Tercer ejercicio');

const aleatoryNumber = () => {
  const codeList = [];
  for (let i = 0; i < 3; i++) {
    const aleatoryNumber = Math.floor(Math.random() * (9999 - 1000) + 1000);
    codeList.push(aleatoryNumber);
  }
  console.log(codeList);
};
aleatoryNumber();

//4️⃣ Abby encontró una lista de suministros en un refugio: ['Agua', 'Munición', 'Botiquín', 'Czst']. Debe comprobar si todos los elementos contienen al menos una vocal.
//Ejemplo salida:
//Agua contiene vocales.
// Munición contiene vocales.
// Botiquín contiene vocales.
// Czst no contiene vocales.

console.log('Cuarto ejercicio NO SALE');

const wordsList = ['Agua', 'Munición', 'Botiquín', 'Czst']

const identifyVowels = () => {
  const vowels = 'aeiou';
  for (const word of wordsList){
    for (const letter of word){
      if (vowels.includes(letter.toLowerCase())) {
        console.log(word + ' contiene vocales')
      } else {'nada'}
    }
  }
}
identifyVowels()

// 5️⃣ Bego está calculando precios con descuento. Tiene un array con precios, (por ejemplo [150, 300, 50]). Si el precio es mayor a 100, aplica un 20% de descuento, si no, un 10%. Usa un bucle para mostrar cada precio original, descuento aplicado y precio final.
// Ejemplo salida:
// Precio original: 150 - Descuento aplicado: 30 - Precio final: 120
// Precio original: 300 - Descuento aplicado: 60 - Precio final: 240
// Precio original: 50 - Descuento aplicado: 5 - Precio final: 45

console.log('Quinto ejercicio');

const aplicateDiscounts = (pricesList) => {
  for (const price of pricesList){
    if (price > 100) {
      console.log(`Precio original: ${price} - Descuento aplicado: ${price*0.2} - Precio final: ${price - price*0.2}`)
    } else {console.log(`Precio original: ${price} - Descuento aplicado: ${price*0.1} - Precio final: ${price - price*0.1}`);
     }
  }
}
aplicateDiscounts([150, 300, 50])

// 6️⃣ Bego está calculando precios con descuento. Tiene un array con precios, (por ejemplo [150, 300, 50]). Si el precio es mayor a 100, aplica un 20% de descuento, si no, un 10%. Usa un bucle para mostrar cada precio original, descuento aplicado y precio final.
// Ejemplo salida:
// Precio original: 150 - Descuento aplicado: 30 - Precio final: 120
// Precio original: 300 - Descuento aplicado: 60 - Precio final: 240
// Precio original: 50 - Descuento aplicado: 5 - Precio final: 45

console.log('Sexto ejercicio: Mismo que el 5');


// 7️⃣ Sabrina quiere verificar cuántos números aleatorios generados entre 1 y 100 son múltiplos de 3. Haz una función que haga esta comprobación con 10 números.
// Ejemplo salida:
// Números generados: [12, 35, 75, 9, 27, 4, 6, 88, 15, 3]
// Múltiplos de 3 encontrados: 7

console.log('Septimo ejercicio');

const validateIfNumberIsMultipleOf3 = () => {
  const aleatoryNumberList = [3]
  for (let i = 0; i < 10; i++){
  aleatoryNumberList.push(Math.floor(Math.random()*(100-1)+1))
  }
  console.log(`Números generados:${aleatoryNumberList}`);
  let list = []
  for (const number of aleatoryNumberList){
  if (number % 3 === 0) {
  list.push(number)
  } else {}
  }
  console.log(`Múltiplos de 3 encontrados:${list.length}`);
}
validateIfNumberIsMultipleOf3()

// 8️⃣ Macarena tiene un array con tres nombres y debe crear un array nuevo con las iniciales de cada nombre en mayúsculas usando un bucle.
// Ejemplo entrada: ['Pedro', 'Ana', 'Luis']
// Ejemplo salida: ['P', 'A', 'L']

console.log('8 ejercicio');

const firstLetterName = (names) => {
  const initialsNames = []
  for (const name of names){
    initialsNames.push(name.charAt(0))
  }
  console.log(initialsNames);
  
}
firstLetterName(['Pedro', 'Ana', 'Luis'])

// 9️⃣ Abby está revisando mensajes cifrados. Tiene un array con palabras (cantidad y palabras a tu elección) que deben invertirse y mostrarse en minúsculas. Usa un bucle para procesarlas todas. Investiga sobre las funciones split(), reverse() y join()
// Ejemplo entrada: ['FUEGO', 'REFUGIO', 'SUMINISTROS']
// Ejemplo salida: ['oguef', 'oiguref', 'sotsinimus']

// 🔟 Camila quiere generar un código de acceso combinando letras aleatorias y números. Usa un bucle para crear un string aleatorio de 6 caracteres sacados de 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'.
// Ejemplo salida: 'A3P9K8'

// 1️⃣1️⃣ Macarena quiere crear un sistema que genere combinaciones de nombres y apellidos. Tiene dos arrays: ['Juan', 'Ana', 'Luis'] y ['Pérez', 'Martínez', 'García']. Debe generar todos los nombres posibles combinando uno de cada array.
// Ejemplo salida:
// Juan Pérez
// Juan Martínez
// Juan García
// Ana Pérez
// Ana Martínez
// Ana García
// Luis Pérez
// Luis Martínez
// Luis García

// 1️⃣2️⃣ Abby quiere comprobar si al menos uno de los números generados aleatoriamente entre 1 y 100 es divisible por 5. Genera 5 números y muestra si se cumple la condición.
// Ejemplo salida:
// Números generados: [23, 45, 67, 12, 90]
// Números divisibles por 5 encontrados: [45, 90]

// 1️⃣3️⃣ Camila tiene un array con nombres y quiere mostrar sólo aquellos que tienen más de 4 letras.
// Ejemplo entrada: ['Pedro', 'Ana', 'Luis', 'Elena', 'Sofía']
// Ejemplo salida: ['Pedro', 'Elena', 'Sofía']

// 1️⃣4️⃣ Bego tiene un array con tres palabras y quiere mostrar todas las combinaciones posibles de esas palabras usando dos palabras a la vez y cuyas combinaciones no repitan la palabra.
// Ejemplo entrada: ['Sol', 'Luna', 'Estrella']
// Ejemplo salida:
// Sol Luna
// Sol Estrella
// Luna Sol
// Luna Estrella
// Estrella Sol
// Estrella Luna

// 1️⃣5️⃣ Sabrina quiere generar un nombre de usuario aleatorio combinando una consonante, una vocal y un número aleatorio entre 1 y 99. Debe hacerlo 5 veces y mostrar los resultados.
// Ejemplo salida: ['MA87', 'RO56', 'LE23', 'FI99', 'PU12']

// 1️⃣6️⃣ Abby tiene problemas con las tablas de multiplicar, quiere hacer 2 funciones que reciban un número y le impriman la tabla de multiplicar de ese número desde hasta el 10 una en orden descendente y otra en orden ascendente.

// Ejemplo entrada: 4

// Ejemplo salida función descendente:
// 4 x 10 = 40
// 4 x 9 = 36
// 4 x 8 = 32
// 4 x 7 = 28
// 4 x 6 = 24
// 4 x 5 = 20
// 4 x 4 = 16
// 4 x 3 = 12
// 4 x 2 = 8
// 4 x 1 = 4
// 4 x 0 = 0

// Ejemplo salida función ascendente:
// 4 x 0 = 0
// 4 x 1 = 4
// 4 x 2 = 8
// 4 x 3 = 12
// 4 x 4 = 16
// 4 x 5 = 20
// 4 x 6 = 24
// 4 x 7 = 28
// 4 x 8 = 32
// 4 x 9 = 36
// 4 x 10 = 40
