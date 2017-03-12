/**
 * Created by iZel on 3/10/17.
 */

// 1
function tieneAtributo(objeto, atributo){

  var existe= false;

  // codigo extra
  existe= objeto[atributo] != undefined;

  return existe;
}

// 2
function limpiar(arr) {

  var result = [];

  // codigo extra

  var params=[].splice.call(arguments,1,arguments.length);

  result=arguments[0].filter(function (val) {
    return params.indexOf(val)==-1;
  });


  return result;

}

// 3

function suma(par, os) {

  // adicionar código
  if(os){
    return par + os
  }else{
    return function(num){
      return par+num;
    };
  }
}



// 4

function mayusculaInvertida(str) {

  var cadena = '';

  // agregar código acá
  cadena =str.replace(/\w\S*/g, function(txt){
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  })
    .split("")
    .reverse()
    .join("");

  return cadena;
}

//5

function aplanar(arr) {

  var arrPlano = [];
  var isArray = false;
  arrPlano = [].concat.apply([], arr);

  arrPlano.forEach(function (val) {
    isArray = Array.isArray(val) || isArray
  });

  if (isArray) {
    arrPlano=aplanar(arrPlano)
  }

  return arrPlano;
}
