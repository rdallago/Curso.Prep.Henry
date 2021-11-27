// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí


 vector=[];
  
  for(var i in objeto){
    
        
   vector.push([i,objeto[i]]);
    
    
  }
 return vector; 


}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí


  var a=0;
var b=0;
var c=0;
var d=0;
var e=0;
var f=0;
var g=0;
var h=0;
var i=0;
var j=0;
var k=0;
var l=0;
var m =0;
var n=0;
var ñ=0;  
var o=0;
var p=0;
var q=0;
var r=0;
var s=0;
var t=0;
var u=0;
var v=0;
var w=0;
var x=0;
var y=0;
var z=0;
  
for(let i=0;i<string.length;i++){
  
  switch(string[i]){
    case 'a':
      a=a+1;
     break;
    case 'b':
      b=b+1;
        break;
       case 'c':
      c=c+1;
        break;
       case 'd':
      d=d+1;
        break;
       case 'e':
      e=e+1;
        break;
       case 'f':
      f=f+1;
        break; case 'g':
      g=g+1;
        break;
       case 'h':
      h=h+1;
        break;
       case 'i':
      i=i+1;
        break;
       case 'j':
      j=j+1;
        break;
       case 'k':
      k=k+1;
        break;
       case 'l':
      l=l+1;
        break;
       case 'm':
      m=m+1;
        break;
       case 'n':
      n=n+1;
        break;
          case 'ñ':
      ñ=ñ+1;
        break;
       case 'o':
      o=o+1;
        break;
       case 'p':
      p=p+1;
        break;
       case 'q':
      q=q+1;
        break;
       case 'r':
      r=r+1;
        break;
       case 's':
      s=s+1;
        break;
       case 't':
      t=t+1;
        break;
       case 'u':
      u=u+1;
        break;
       case 'v':
      v=v+1;
        break;
       case 'w':
      w=w+1;
        break;
       case 'x':
      x=x+1;
        break;
       case 'y':
      y=y+1;
        break;
       case 'z':
      z=z+1;
        break;
      
  }}
   const objeto={}
   
   if(a!==0){
   objeto['a']=a;}
   if(b!==0){
   objeto['b']=b;}
   if(c!==0){
   objeto['c']=c;}
   if(d!==0){
   objeto['d']=d;}
   if(e!==0){
   objeto['e']=e;}
   if(f!==0){
   objeto['f']=f;}
   if(g!==0){
   objeto['g']=g;}
   if(h!==0){
   objeto['h']=h;}
   if(i!==0){
   objeto['i']=i;}
   if(j!==0){
   objeto['j']=j;}
   if(k!==0){
   objeto['k']=k;}
   if(l!==0){
   objeto['l']=l;}
   if(m!==0){
   objeto['m']=m;}
   if(n!==0){
   objeto['n']=n;}
   if(ñ!==0){
   objeto['ñ']=ñ;}
   if(o!==0){
   objeto['o']=o;}
   if(p!==0){
   objeto['p']=p;}
   if(q!==0){
   objeto['q']=q;}
   if(r!==0){
   objeto['r']=r;}
   if(s!==0){
   objeto['s']=s;}
   if(t!==0){
   objeto['t']=t;}
   if(u!==0){
   objeto['u']=u;}
   if(v!==0){
   objeto['v']=v;}
   if(w!==0){
   objeto['w']=w;}
   if(x!==0){
   objeto['x']=x;}
   if(y!==0){
   objeto['y']=y;}
   if(z!==0){
   objeto['z']=z;}
   return objeto;


}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí


var sr='';
    //coloco primero en el arreglo de salida las mayúsculas al principio:
  for(let i=0;i<s.length;i++){
    if(s[i] == s[i].toUpperCase()){
      sr=sr+s[i];
    }
    
  }
  
  //por último ubico todas las minúsculas al final:
   for(let j=0;j<s.length;j++){
   if (s[j] == s[j].toLowerCase()){

     
     sr=sr+s[j];
   }
  
  
  
}
  return sr

}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí

var palabra="";  
 
 
var arrayDeCadenas= str.split(" ");
  
   for(let i=0;i<arrayDeCadenas.length;i++){
   if(palabra===''){
     
palabra=arrayDeCadenas[i].split("").reverse().join("");}
    else if(palabra!==''){
      palabra=palabra+" "+arrayDeCadenas[i].split("").reverse().join("");

    }
  }

 return palabra;
} 

function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí

  String.prototype.reverse=function(){return this.split("").reverse().join("");}
  
  var inverseNumero=numero.toString().reverse();

  if(numero.toString()===inverseNumero){
    return "Es capicua"
  }

  else{ return "No es capicua";}

}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí


var deleteABC = /abc/g;
var deleteA=/a/g;
var deleteB=/b/g;
var deleteC=/c/g;


var resultado = cadena.replace(deleteABC, '');
var resultado1= resultado.replace(deleteA, '');
var resultado2=resultado1.replace(deleteB, '');
var resultado3=resultado2.replace(deleteC, '');

return resultado3;




}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí

   arr.sort(function(a, b) {
   
  return b.length - a.length
});
   

  return (arr.sort(function(a, b) {
   
  return b.length - a.length
})).reverse();
      
      
      
    
    
   
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  

var setA = new Set(arreglo1);
  var setB = new Set(arreglo2);
  var intersection = new Set([...setA].filter(x => setB.has(x)));
  return (Array.from(intersection)).sort();




}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

