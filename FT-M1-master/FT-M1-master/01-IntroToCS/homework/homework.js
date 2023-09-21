'use strict';

function BinarioADecimal(num) {
   let resultado = 0;
   let posicion = num.length -1;
   for(let i = 0; i<num.length; i++){
      resultado = resultado + num[i] * 2 ** posicion;
      posicion--;
   }
   return resultado;
}



function DecimalABinario(num) {
   let binario = [];
   while(num > 0){
      let resto = num % 2;
      binario.unshift(resto)
      num = Math.floor(num / 2);
   }
   return binario.join('');
}
module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
