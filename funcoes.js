

function calculo(){

var a = document.getElementById('text1').value;
var b = document.getElementById('text2').value;
var resultado = (parseInt(a)+parseInt(b));
var nome = ("O IDH CALCULADO FOI DE: "+ resultado);
document.getElementById('resultado').innerHTML =  nome;

 }
 function calculo2(){

var a = document.getElementById('text1').value;
var b = document.getElementById('text2').value;
var c = document.getElementById('text3').value;
var resultado = (parseInt(a)-parseInt(b)/2+parseInt(c)/2)+1;
var nome = ("O IDH CALCULADO FOI DE: "+ resultado);
document.getElementById('resultado').innerHTML =  nome;

 }

