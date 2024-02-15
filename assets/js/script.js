const solicitarNumero = () => {
  let numero = parseInt(prompt("Ingrese un número entre 1 y 20:"));

  // Validar el rango
  if (numero < 1 || numero > 20) {
    alert("Número fuera del rango. Intente nuevamente.");
    solicitarNumero();
  } else {
    calcularTablasYFactorial(numero);
  }
};

// Función para calcular tablas de multiplicar y factoriales
const calcularTablasYFactorial = (numero) => {
  // Obtener el elemento donde se mostrarán los resultados
  const resultadosElement = document.getElementById('resultados');

  // Calcular y mostrar tablas de multiplicar
  for (let i = 1; i <= numero; i++) {
    for (let j = 1; j <= 10; j++) {
      resultadosElement.innerHTML += `${j} x ${i} = ${j * i} <br>`;
    }
  }

  // Calcular y mostrar factoriales
  for (let i = 1; i <= numero; i++) {
    let factorial = 1;
    for (let j = 1; j <= i; j++) {
      factorial *= j;
    }
    resultadosElement.innerHTML += `Factorial de ${i} es: ${factorial} <br>`;
  }
};

// Llamar a la función solicitarNumero
solicitarNumero();