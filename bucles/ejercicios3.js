// Ejercicios: Bucles en JavaScript

// 1. Bucle for
console.log("Ejercicio 1: Bucle for");
// Escribe una función llamada 'imprimirNumeros' que use un bucle for para imprimir
// los números del 1 al 10.

// Tu código aquí

// Llamada a la función
imprimirNumeros();
// Debería imprimir: 1 2 3 4 5 6 7 8 9 10

// 2. Bucle for (suma)
console.log("\nEjercicio 2: Bucle for (suma)");
// Escribe una función llamada 'sumarNumeros' que use un bucle for para sumar
// los números del 1 al n, donde n es un parámetro de la función.

// Tu código aquí

console.log(sumarNumeros(5));  // Debería mostrar: 15
console.log(sumarNumeros(10)); // Debería mostrar: 55

// 3. Bucle while
console.log("\nEjercicio 3: Bucle while");
// Escribe una función llamada 'contarRegresivo' que use un bucle while para
// contar regresivamente desde n hasta 1, donde n es un parámetro de la función.

// Tu código aquí

contarRegresivo(5);
// Debería imprimir: 5 4 3 2 1

// 4. Bucle do-while
console.log("\nEjercicio 4: Bucle do-while");
// Escribe una función llamada 'adivinarNumero' que use un bucle do-while para
// simular un juego donde el usuario intenta adivinar un número entre 1 y 10.
// La función debe generar un número aleatorio y "preguntar" al usuario hasta
// que adivine correctamente. (Simula las entradas del usuario con un array de números)

// Tu código aquí

const intentosUsuario = [3, 7, 5, 2]; // Simula las entradas del usuario
adivinarNumero(intentosUsuario);
// Ejemplo de salida:
// Intenta adivinar el número (entre 1 y 10)
// Intento 1: Demasiado bajo
// Intento 2: Demasiado alto
// Intento 3: ¡Correcto! Has adivinado en 3 intentos.

// 5. Bucle for (array)
console.log("\nEjercicio 5: Bucle for (array)");
// Escribe una función llamada 'encontrarMayor' que use un bucle for para encontrar
// el número mayor en un array de números.

// Tu código aquí

console.log(encontrarMayor([2, 5, 1, 9, 3])); // Debería mostrar: 9
console.log(encontrarMayor([-1, -5, -2]));    // Debería mostrar: -1

// 6. Bucle while (potencia)
console.log("\nEjercicio 6: Bucle while (potencia)");
// Escribe una función llamada 'calcularPotencia' que use un bucle while para calcular
// la potencia de un número. La función debe tomar dos parámetros: la base y el exponente.

// Tu código aquí

console.log(calcularPotencia(2, 3));  // Debería mostrar: 8
console.log(calcularPotencia(5, 2));  // Debería mostrar: 25