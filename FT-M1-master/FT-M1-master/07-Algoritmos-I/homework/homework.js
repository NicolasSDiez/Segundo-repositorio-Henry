'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:

  //empieza a dividir
  let arrayFactores = [1]
  let divisor = 2;
  while(num > 1){
    if(num % divisor === 0){
      //pushear
      arrayFactores.push(divisor)
      num /= divisor
    }
    //aumenta el divisor
    else {
      divisor++
    }
  }
return arrayFactores;
}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      let aux = array[j]
      if(array[j] > array[j+1]){
        array[j] = array[j+1]
        array[j+1] = aux
      }
    }
  }
  return array
}


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for (let i = 1; i < array.length; i++){
    let aux = array[i]
    let j = i-1;


    while(j >= 0 && aux < array[j]){
      array[j+1] = array[j]
      j--;
    }
    array[j+1] = aux
  }
  return array
}


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for (let i = 0; i < array.length; i++){
    //identifico al menor valor
    let minimo = i
    for (let j = i + 1; j < array.length; j++){
      if(array[j] < array[minimo]){
        minimo = j
      }
    }
    let aux = array[i]
    array[i] = array[minimo]
    array[minimo] = aux
  }
  return array
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
