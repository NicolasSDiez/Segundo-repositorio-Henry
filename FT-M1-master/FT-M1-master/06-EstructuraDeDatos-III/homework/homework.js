'use strict';

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)
  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/
function BinarySearchTree(value) {
   this.value = value;
   this.left = null;
   this.right = null;
}

BinarySearchTree.prototype.insert = function (value) {
   if(value >= this.value) { //this.value es la raíz
      if(!this.right) {
         this.right = new BinarySearchTree(value);
      } else {
        return this.right.insert(value);
      }
   }
   if(value < this.value) {
      if(!this.left) {
         this.left = new BinarySearchTree(value);
      } else {
         this.left.insert(value);
      }

   }
}





//retorna true o false luego de evaluar si cierto valor existe dentro del árbol
// objetivo del algoritmo: "verificar si contiene un valor"
BinarySearchTree.prototype.contains = function (value) {
   
   if(value === this.value) return true; //si es igual al root

   
   if(value >= this.value) {//this.value es el root
      if(!this.right) return false; //si no hay nodo der
      else {return this.right.contains(value) //llamada recursiva de "contains" sobre nodo derecha
      }
   }

   if(value < this.value) {
      if(!this.left) return false;
      else {return this.left.contains(value)} //llamada recursiva sobre ese nodo izq existente
   }

}



BinarySearchTree.prototype.size = function () {
   let contador = 1 //comienza en el root

   if(this.left) {
      contador += this.left.size(); //llamada recursiva sobre left
   }
   if(this.right) {
      contador += this.right.size();//recursivo sobre right
   }
   return contador;
}




BinarySearchTree.prototype.depthFirstForEach = function (cb, order) {
   // in-order: left, root, right
   if(!order || order === 'in-order') { //por defecto se ejecuta in-order
      if(this.left) this.left.depthFirstForEach(cb, order)
      cb(this.value) // root
      if(this.right) this.right.depthFirstForEach(cb, order)
   }

   //post-order": left - right - root
   else if(order === 'post-order') {
      if(this.left) this.left.depthFirstForEach(cb, order)
      if(this.right) this.right.depthFirstForEach(cb, order)
      cb(this.value) // root
   }

   //"pre-order": root, left, right
   else {
      cb(this.value) // root
      if(this.left) this.left.depthFirstForEach(cb, order)
      if(this.right) this.right.depthFirstForEach(cb, order)
   }

}





BinarySearchTree.prototype.breadthFirstForEach = function (cb, array) {
   if(!array) {
      var array = [];
   }

   cb(this.value) //ejecuta el cb sobre el root
   this.left && array.push(this.left); //si hay nodo izq, lo pushea al array
   this.right && array.push(this.right);

   if(array.length > 0){
      array.shift().breadthFirstForEach(cb, array) //llamada recursiva  sobre los valores agregados al array
   }
}





// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   BinarySearchTree,
};
