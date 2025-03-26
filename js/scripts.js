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

const prices = [23, 78, 45];

const sumPrices = () => {
  let totalPrice = 0;
  for (let i = 0; i < prices.length; i++) {
    totalPrice = totalPrice + prices[i];
  }
  console.log(`Precio total: ${totalPrice}`);
};
sumPrices();

//3️⃣ Macarena quiere generar tres códigos de seguridad y almacenarlos en un array. Cada código debe ser un número aleatorio entre 1000 y 9999. Usa un bucle for para generar los códigos y luego mostrarlos.
//Ejemplo salida: [4356, 7890, 1234]

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

const wordsList = ['Agua', 'Munición', 'Botiquín', 'Czst'];

const identifyVowels = () => {
  const vowels = 'aeiou';
  for (const word of wordsList) {
    for (const letter of word) {
      if (vowels.includes(letter.toLowerCase())) {
        console.log(`${word} contiene vocales`);
      } else {
      }
    }
  }
};
identifyVowels();

// 5️⃣ Bego está calculando precios con descuento. Tiene un array con precios, (por ejemplo [150, 300, 50]). Si el precio es mayor a 100, aplica un 20% de descuento, si no, un 10%. Usa un bucle para mostrar cada precio original, descuento aplicado y precio final.
// Ejemplo salida:
// Precio original: 150 - Descuento aplicado: 30 - Precio final: 120
// Precio original: 300 - Descuento aplicado: 60 - Precio final: 240
// Precio original: 50 - Descuento aplicado: 5 - Precio final: 45

const aplicateDiscounts = pricesList => {
  for (const price of pricesList) {
    if (price > 100) {
      console.log(
        `Precio original: ${price} - Descuento aplicado: ${
          price * 0.2
        } - Precio final: ${price - price * 0.2}`
      );
    } else {
      console.log(
        `Precio original: ${price} - Descuento aplicado: ${
          price * 0.1
        } - Precio final: ${price - price * 0.1}`
      );
    }
  }
};
aplicateDiscounts([150, 300, 50]);

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

const validateIfNumberIsMultipleOf3 = () => {
  const aleatoryNumberList = [3];
  for (let i = 0; i < 10; i++) {
    aleatoryNumberList.push(Math.floor(Math.random() * (100 - 1) + 1));
  }
  console.log(`Números generados:${aleatoryNumberList}`);
  let list = [];
  for (const number of aleatoryNumberList) {
    if (number % 3 === 0) {
      list.push(number);
    } else {
    }
  }
  console.log(`Múltiplos de 3 encontrados:${list.length}`);
};
validateIfNumberIsMultipleOf3();

// 8️⃣ Macarena tiene un array con tres nombres y debe crear un array nuevo con las iniciales de cada nombre en mayúsculas usando un bucle.
// Ejemplo entrada: ['Pedro', 'Ana', 'Luis']
// Ejemplo salida: ['P', 'A', 'L']

const firstLetterName = names => {
  const initialsNames = [];
  for (const name of names) {
    initialsNames.push(name.charAt(0));
  }
  console.log(initialsNames);
};
firstLetterName(['Pedro', 'Ana', 'Luis']);

// 9️⃣ Abby está revisando mensajes cifrados. Tiene un array con palabras (cantidad y palabras a tu elección) que deben invertirse y mostrarse en minúsculas. Usa un bucle para procesarlas todas. Investiga sobre las funciones split(), reverse() y join()
// Ejemplo entrada: ['FUEGO', 'REFUGIO', 'SUMINISTROS']
// Ejemplo salida: ['oguef', 'oiguref', 'sotsinimus']

//Split: divide el string en un array. string.split(que lo delimita)
//Reverse: invierte el orden de un array. array.reverse()
//Join: une los elementos array en un string. array.join(que lo delimita)

//NO SÉ HACERLO

const descifrateWords = words => {
  for (const divideWord of words) {
    console.log(divideWord.split(''));
  }
  const dividedWord = [];
  console.log(dividedWord);

  //for (const unifyWord of divideWord){
  //console.log(unifyWord);
  //}
};
descifrateWords(['FUEGO', 'REFUGIO', 'SUMINISTROS']);

// 🔟 Camila quiere generar un código de acceso combinando letras aleatorias y números. Usa un bucle para crear un string aleatorio de 6 caracteres sacados de 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'.
// Ejemplo salida: 'A3P9K8'

const aleatoryPosition = () => {
  const aleatoryCharacter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  const aleatoryNumber = Math.floor(Math.random() * aleatoryCharacter.length);

  return aleatoryNumber;
};

const aleatoryAccesCode = () => {
  const aleatoryCharacter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  const codeList = [];
  for (let i = 0; i < 6; i++) {
    console.log(codeList.push(aleatoryCharacter.charAt(aleatoryPosition())));
  }
  console.log(codeList);
};
aleatoryAccesCode();

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

const namesAndSurnamesGenerator = () => {
  const names = ['Juan', 'Ana', 'Luis'];
  const surnames = ['Pérez', 'Martínez', 'García'];

  for (const name of names) {
    for (const surname of surnames) {
      console.log(`${name} ${surname}`);
    }
  }
};
namesAndSurnamesGenerator();

// 1️⃣2️⃣ Abby quiere comprobar si al menos uno de los números generados aleatoriamente entre 1 y 100 es divisible por 5. Genera 5 números y muestra si se cumple la condición.
// Ejemplo salida:
// Números generados: [23, 45, 67, 12, 90]
// Números divisibles por 5 encontrados: [45, 90]

//Está mal, no sñe que se mete en el push.

const aleatoryNumberGenerator = () => {
  const aleatoryNumber = Math.floor(Math.random() * (100 - 1) + 1);

  return aleatoryNumber;
};

const validateIfNumberCanBeDividedBy5 = () => {
  const numberList = [];
  const numbersDividedBy5 = [];
  for (let i = 0; i < 5; i++) {
    numberList.push(aleatoryNumberGenerator());
    if (i % 5 === 0) {
      numbersDividedBy5.push();
    } else {
      ('ninguno es divisible');
    }
  }
  console.log(`Números generados: ${numberList}`);
  console.log(`Números divisibles por 5 encontrados: ${numbersDividedBy5}`);
};
validateIfNumberCanBeDividedBy5();

// 1️⃣3️⃣ Camila tiene un array con nombres y quiere mostrar sólo aquellos que tienen más de 4 letras.
// Ejemplo entrada: ['Pedro', 'Ana', 'Luis', 'Elena', 'Sofía']
// Ejemplo salida: ['Pedro', 'Elena', 'Sofía']

const determineLengthNames = names => {
  const fourLetterNames = [];
  for (const name of names) {
    name.length > 4 ? fourLetterNames.push(name) : 'nada';
  }
  console.log(fourLetterNames);
};
determineLengthNames(['Pedro', 'Ana', 'Luis', 'Elena', 'Sofía']);

// 1️⃣4️⃣ Bego tiene un array con tres palabras y quiere mostrar todas las combinaciones posibles de esas palabras usando dos palabras a la vez y cuyas combinaciones no repitan la palabra.
// Ejemplo entrada: ['Sol', 'Luna', 'Estrella']
// Ejemplo salida:
// Sol Luna
// Sol Estrella
// Luna Sol
// Luna Estrella
// Estrella Sol
// Estrella Luna

const wordCombiner = () => {
  const firstList = ['Sol', 'Luna', 'Estrella'];
  const secondList = ['Sol', 'Luna', 'Estrella'];
  for (const firstWord of firstList) {
    for (const secondWord of secondList) {
      console.log(firstWord + ' ' + secondWord);
    }
  }
};
wordCombiner();

// 1️⃣5️⃣ Sabrina quiere generar un nombre de usuario aleatorio combinando una consonante, una vocal y un número aleatorio entre 1 y 99. Debe hacerlo 5 veces y mostrar los resultados.
// Ejemplo salida: ['MA87', 'RO56', 'LE23', 'FI99', 'PU12']

const userNameGenerator = () => {
  const vowels = 'aeiou';
  const aleatoryVowel = Math.floor(Math.random() * vowels.length);
  const consonant = 'bcdfghjklmnñpqrstvwxyz';
  const aleatoryConsonant = Math.floor(Math.random() * consonant.length);
  const aleatoryNumber = Math.floor(Math.random() * 99);

  const userNameGenerator =
    consonant.charAt(aleatoryConsonant).toUpperCase() +
    vowels.charAt(aleatoryVowel).toUpperCase() +
    aleatoryNumber;

  return userNameGenerator;
};
userNameGenerator();

const userNameList = () => {
  const userNameList = [];
  for (let i = 0; i < 6; i++) {
    userNameList.push(userNameGenerator());
  }
  console.log(userNameList);
};
userNameList();

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

//SIN REVERSE

const multiplicationTableUpward = number => {
  const concadenateNumbersTable = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10'
  ];

  console.log('Función ascendente');
  for (const concadenateNumbers of concadenateNumbersTable) {
    console.log(
      `${number} x ${concadenateNumbers} = ${number * concadenateNumbers}`
    );
  }

  console.log('Función descendente');
  for (let i = concadenateNumbersTable.length - 1; i >= 0; i--) {
    console.log(`${number} x ${i} = ${number * i}`);
  }
};
//multiplicationTableUpward(4)

//CON REVERSE

const multiplicationTableUpward1 = number => {
  const concadenateNumbersTable = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10'
  ];

  console.log('Función ascendente');
  for (const concadenateNumbers of concadenateNumbersTable) {
    console.log(
      `${number} x ${concadenateNumbers} = ${number * concadenateNumbers}`
    );
  }

  console.log('Función descendente');
  for (const concadenateNumbers of concadenateNumbersTable.reverse()) {
    console.log(
      `${number} x ${concadenateNumbers} = ${number * concadenateNumbers}`
    );
  }
};
//multiplicationTableUpward1(3)

// 1 - Bego necesita un generador de contraseñas. Debe crear 3 contraseñas únicas usando letras mayúsculas, minúsculas, números y símbolos. Cada contraseña debe tener 8 caracteres, "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*"
// Ejemplo salida: ['aB9$Rty1', 'Cz7%Qw2$', 'Xy8&Re9P']

console.clear();

const characters =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';

const generatePassword = () => {
  let generatedPassword = '';
  for (let i = 0; i < 8; i++) {
    const aleatoryNumber = Math.floor(Math.random() * characters.length);
    generatedPassword = generatedPassword + characters.charAt(aleatoryNumber);
  }
  console.log(generatedPassword);
};
generatePassword();

// 2 - Macarena quiere hacer un filtro de palabras. Tiene un array con palabras mezcladas y quiere devolver un nuevo array solo con las que empiezan con vocal.
// Ejemplo entrada: ['Agua', 'Pan', 'Elefante', 'Mesa', 'Oruga']
// Ejemplo salida: ['Agua', 'Elefante', 'Oruga']

const vowels = 'AEIUO';

const wordFilter = words => {
  const wordsFirstLetterIsVowel = [];
  for (const word of words) {
    if (vowels.includes(word.charAt(0))) {
      wordsFirstLetterIsVowel.push(word);
    }
  }
  console.log(wordsFirstLetterIsVowel);
};
wordFilter(['Agua', 'Pan', 'Elefante', 'Mesa', 'Oruga']);

// 3 - Bego está calculando la media aritmética de un array de números. Debe mostrar el promedio y el total de elementos en el array.
// Ejemplo entrada: [5, 10, 15, 20]
// Ejemplo salida: Promedio: 12.5 - Total de elementos: 4

const calculateAverage = numbers => {
  const totalNumbers = numbers.length;
  let calculatedAverage = 0;

  for (const number of numbers) {
    calculatedAverage += number;
  }

  calculatedAverage = calculatedAverage / totalNumbers;

  console.log(calculatedAverage);
};
calculateAverage([5, 10, 15, 20]);

// 4 - Camila quiere invertir un array sin usar el método .reverse(). El array debe mostrarse al revés y ser un nuevo array diferente al original.
// Ejemplo entrada: [1, 2, 3, 4]
// Ejemplo salida: [4, 3, 2, 1]

const revertNumbers = numbers => {
  let revertedNumbers = [];

  for (let i = numbers.length - 1; i >= 0; i--) {
    revertedNumbers.push(numbers[i]);
  }
  console.log(revertedNumbers);
};
revertNumbers([1, 2, 3, 4]);

// 5 - Bego está organizando números. Tiene un array de números positivos y negativos y quiere separarlos en dos arrays: uno con positivos y otro con negativos.
// Ejemplo entrada: [3, -2, -7, 4, 0, -1, 5]
// Ejemplo salida: Positivos: [3, 4, 0, 5] - Negativos: [-2, -7, -1]

const divideNumberIntoPositiveAndNegative = numbers => {
  const positiveNumbers = [];
  const negativeNumbers = [];
  for (number of numbers) {
    number < 0 ? negativeNumbers.push(number) : positiveNumbers.push(number);
  }
  console.log(`Positivos: ${positiveNumbers}. Negativos: ${negativeNumbers}`);
};
divideNumberIntoPositiveAndNegative([3, -2, -7, 4, 0, -1, 5]);

// 6 - Macarena necesita una función que genere un array con números del 1 al 100 que sean divisibles por 5 pero no por 3.
// Ejemplo salida: [5, 10, 20, 25, 35, 40, 50, 55, 65, 70, 80, 85, 95, 100]

const generatorOfMultiplesOf5ButNot3 = () => {
  const multiplesOf5ButNot3 = [];
  for (let i = 0; i <= 100; i++) {
    if (i % 5 === 0 && i % 3 !== 0) {
      multiplesOf5ButNot3.push(i);
    }
  }
  console.log(multiplesOf5ButNot3);
};
generatorOfMultiplesOf5ButNot3();

// 7 - Abby quiere transformar un array de strings en un único string separado por comas, pero ignorando las palabras que empiezan con vocal.
// Ejemplo entrada: ['Agua', 'Pan', 'Elefante', 'Mesa', 'Oruga']
// Ejemplo salida: 'Pan, Mesa'

//Split: divide el string en un array. string.split(que lo delimita)
//Reverse: invierte el orden de un array. array.reverse()
//Join: une los elementos array en un string. array.join(que lo delimita)

const eliminateWordsThatStartWithVowels = words => {
  const vowels = 'AEIOU';
  let wordsStartWithConsonantArray = [];
  for (const word of words) {
    if (vowels.includes(word.charAt(0).toUpperCase())) {
      wordsStartWithConsonantArray.push(word);
    }
  }
  const wordsStartWithConsonantString = wordsStartWithConsonantArray.join(', ');
  console.log(wordsStartWithConsonantString);
};
eliminateWordsThatStartWithVowels(['Agua', 'Pan', 'Elefante', 'Mesa', 'oruga']);

// 8 - Bego tiene un array con números y debe devolver un nuevo array con solo los números impares multiplicados por 2.
// Ejemplo entrada: [3, 6, 9, 12, 15]
// Ejemplo salida: [6, 18, 30]

const oddNumbersList = numbers => {
  const oddNumbers = [];
  for (const number of numbers) {
    if (number % 2 !== 0) {
      oddNumbers.push(number * 2);
    }
  }
  console.log(oddNumbers);
};
oddNumbersList([3, 6, 9, 12, 15]);

// 9 - Sabrina quiere crear un sistema para clasificar números. Recibe un array y debe mostrar cuántos son pares, cuántos son impares y cuántos son cero.
// Ejemplo entrada: [0, 3, 6, 9, 12, 0]
// Ejemplo salida: Pares: 2 - Impares: 3 - Ceros: 2

const clarifyPropertyOfNumber = numbers => {
  let pairNumbers = 0;
  let oddNumbers = 0;
  let amountOf0 = 0;
  for (const number of numbers) {
    if (number % 2 === 0 && number !== 0) {
      pairNumbers++;
    } else if (number % 2 !== 0) {
      oddNumbers++;
    } else if (number === 0) {
      amountOf0++;
    }
  }
  console.log(
    `Pares: ${pairNumbers} - Impares: ${oddNumbers} - Ceros: ${amountOf0}`
  );
};
clarifyPropertyOfNumber([0, 3, 6, 9, 12, 0]);

// 10 - Camila quiere un sistema que reciba un array de nombres y devuelva un array nuevo con las posiciones donde aparecen nombres con más de 5 letras.
// Ejemplo entrada: ['Pedro', 'Ana', 'Esteban', 'María', 'Begoña']
// Ejemplo salida: [2, 4]

const identificateMoreThan5LettersPosition = words => {
  const positionWordList = [];

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > 5) {
      positionWordList.push(i);
    }
  }
  console.log(positionWordList);
};
identificateMoreThan5LettersPosition([
  'Pedro',
  'Ana',
  'Esteban',
  'María',
  'Begoña'
]);

// 11 - Macarena quiere generar un código de seguridad que se crea uniendo la primera letra de cada palabra en un array de frases.
// Ejemplo entrada: ['Fuego en el bosque', 'Refugio seguro', 'Suministros esenciales']
// Ejemplo salida: 'FRS'

const securityCode = sentences => {
  let code = '';
  for (const sentence of sentences) {
    code = code + sentence.charAt(0);
  }
  console.log(`El código es: ${code}`);
};
securityCode([
  'Fuego en el bosque',
  'Refugio seguro',
  'Suministros esenciales'
]);

// 12 - Bego quiere hacer un sistema que reciba dos arrays de números y devuelva un array con los números que aparecen en ambos arrays.
// Ejemplo entrada: [1, 2, 3, 4] y [3, 4, 5, 6]
// Ejemplo salida: [3, 4]

const equalNumbersList = (firstList, secondList) => {
  const equalNumbers = [];

  for (const number of firstList) {
    if (secondList.includes(number)) {
      equalNumbers.push(number);
    }
  }
  console.log(equalNumbers);
};
equalNumbersList([1, 2, 3, 4], [3, 4, 5, 6]);

// 13 - Camila necesita generar un array que contenga todos los números entre dos números dados, inclusive.
// Ejemplo entrada: 5 y 10
// Ejemplo salida: [5, 6, 7, 8, 9, 10]

const generateNumbersList = (firstNumber, secondNumber) => {
  const numbersList = [];
  for (let i = firstNumber; i <= secondNumber; i++) {
    numbersList.push(i);
  }
  console.log(numbersList);
};
generateNumbersList(3, 10);

// 14 - Macarena quiere un programa que devuelva el número total de vocales en cada palabra de un array.
// Ejemplo entrada: ['Hola', 'Mundo', 'JavaScript']
// Ejemplo salida: [2, 2, 3]

const identifyNumberOfVowels = words => {
  const vowels = 'AEIOUaeiou';
  const totalVowelsForEachWord = [];
  for (const word of words) {
    let = amountVowels = 0;
    for (const letter of word) {
      if (vowels.includes(letter)) {
        amountVowels++;
      }
    }
    totalVowelsForEachWord.push(amountVowels);
  }
  console.log(totalVowelsForEachWord);
};
identifyNumberOfVowels(['Hola', 'Mundo', 'JavaScript']);

// 15 - Bego quiere que cada string en un array se muestre al revés.
// Ejemplo entrada: ['Hola', 'Mundo']
// Ejemplo salida: ['aloH', 'odnuM']

const reverseEachWord = words => {
  let reverseWord = [];
  for (const word of words) {
    const revertedWord = word.split('').reverse().join('');
    reverseWord.push(revertedWord);
  }
  console.log(reverseWord);
};
reverseEachWord(['Hola', 'Mundo']);
