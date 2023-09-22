'use strict';

/* EJERCICIO 1
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback. En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 
  EJEMPLO 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/
function LinkedList() {
  this.head = null //al crear la lista, está vacía
  this._length = 0
}

function Node(value) { //para crear un nuevo nodo
  this.value = value //node es el valor ingresado
  this.next = null //apuntador
}



LinkedList.prototype.add = function(value) {//método para añadir nodos
  let newNode = new Node(value) //se crea una nueva instancia de Node
  let current = this.head //current es la cabeza

  if(!current){// si No hay cabeza
    this.head = newNode//el nuevo nodo es la cabeza
    this._length++//aumenta tamaño(size) de la lista.
    return newNode
  }
  //si SI hay cabeza
  while(current.next){ //mientras exista un nodo siguiente
    current = current.next //nos paramos en el siguiente nodo
  }
  current.next = newNode //y asignamos el valor a ese lugar/nodo
  this._length++ //aumenta el size de la lista
  return newNode
}


LinkedList.prototype.remove = function() {
 let current = this.head //hacemos referencia a la cabeza

  if(!current){ //Si la lista está vacía 
    return null
 } 

 if(!current.next){ //Si la lista tiene un solo nodo
  this.head = null //elimina ese nodo
  this._length-- // reduce el size
  return current.value //retorna el VALOR de ese current
 }

 //cuando hay al menos dos nodos
 while(current.next.next){ //se sitúa en el anteúltimo nodo
  current = current.next
 }
 let aux = current.next //creamos una variable auxiliar para almacenar el dato del nodo
 current.next = null //borramos ese nodo
 this._length-- 
 return aux.value //retornamos el valor del current almacenado
}


LinkedList.prototype.search = function(arg){
let current = this.head

//si la lista está vacía
if(!current) return 'Lista vacía'

//si hay al menos UN nodo
        while(current){
                if(typeof arg === 'function'){ //si ese valor es una función:
                if(arg(current.value)) {return current.value} //si ese arg(que es una función) puede
              //ejecutarse(porque su condición se cumple, por lo tanto da TRUE ) que retorne el valor de su ejecución.
              }
                if(current.value === arg) {return current.value} //si el valor de Head es igual al ingresado, que retorne ese valor

              current = current.next //que continue al siguiente nodo
              }

  return null //retorna null si nada de lo anterior se cumple
}
/* EJERCICIO 2
Implementar la clase HashTable.
Nuetra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros; es decir, posiciones posibles para almacenar la información), donde guardaremos datos en formato clave-valor (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). (Luego de haber pasado todos los tests, a modo de ejercicio adicional, pueden modificar un poco la clase para que reciba la cantidad de buckets por parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético, suma el código numérico de cada caracter del input (investigar el método charCodeAt de los strings) y calcula el módulo de ese número total por la cantidad de buckets; de esta manera determina la posición de la tabla en la que se almacenará el dato.
  - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash, y almacena todo el conjunto en el bucket correcto.
  - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.
  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con hasKey, si ya hay algo en la tabla con el nombre 'instructora'; luego, invocando set('instructora', 'Ani'), se almacenará el par clave-valor en un bucket específico (determinado al hashear la clave)
*/
function HashTable() {
  this.numBuckets = 35
  this.buckets = []
}



HashTable.prototype.hash = function(value) {
  let sum = 0
  for(let i = 0; i < value.length; i++){//recorre el value ingresado (tipo alfabetico)
  sum += value.charCodeAt(i)//
  }
  return sum % this.numBuckets //retorna el modulo entre la suma y la cant de buckets
}



HashTable.prototype.set = function(key, value) {
  if(typeof key !== 'string') throw new TypeError('Keys must be strings') //si no se ingresa un string como key arroja error

  let index = this.hash(key) //se calcula el índice en el que se debe almacenar el par clave-valor en la tabla hash

  if(!this.buckets[index]) {this.buckets[index] = {} //verifica sin en esa posición existe un bucket, si no lo hay lo crea
  }
  this.buckets[index][key] = value //agrega el par key/value en el lugar correspondiente
}



HashTable.prototype.get = function(key) {
  //if(typeof key !== 'string') throw new TypeError('Keys must be strings')

  let index = this.hash(key) //calcula el índice en el que se debe buscar el valor en la tabla hash
  //f (this.buckets[index] && this.buckets[index][key]) {
    return this.buckets[index][key];
 // }
 // return undefined;
  //return this.buckets[index][key] //Aquí se realiza la recuperación del valor asociado a la clave key en la tabla hash.

  // this.buckets[index] accede al objeto (o "bucket") en la posición calculada index de la tabla hash. En este objeto, se espera que se almacenen pares clave-valor.
  
  // [key] se utiliza para acceder al valor asociado a la clave key dentro de ese objeto.
}



HashTable.prototype.hasKey = function(key) {
  let index = this.hash(key)
  if(this.buckets[index] && this.buckets[index][key]) {
    return true
  }
  if(this.buckets[index]) {
    return this.buckets[index].hasOwnProperty(key)
  }
  return false
}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   Node,
   LinkedList,
   HashTable,
};
