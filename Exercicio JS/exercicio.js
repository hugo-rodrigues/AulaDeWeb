function trocaConteudo(){
    
    document.getElementById("lampada").src = " https://ak.picdn.net/shutterstock/videos/16051507/thumb/1.jpg";
  
};

function trocaConteudoOriginal(){
     document.getElementById("lampada").src = " https://www.abc.net.au/reslib/200806/r261775_1090070.jpg";
  
};

function AlertaHTML(){
    alert ("AIA");
};

function AlertaHTMLExterna(){
    alert ("Funcao Criada Externamente");
};

function PalavrasSequencia(string1){
    let palavras = string1;
    var arrayOfStrings = palavras.split(' ');
    for (i = 0 ; i<=arrayOfStrings.length; i++ ){
        console.log(i+"-"+arrayOfStrings[i] );
    };
};

function Saudacoes() {
  let nome =  document.getElementById("nome5").value
  let sobrenome =  document.getElementById("sobrenome5").value

 
    alert("ola " + nome +" "+sobrenome);
}

function Media(){
   let medias = document.getElementById("media6").value
    let somamedia = 0;
    let mediatotal = 0;
    let Arraymedias = medias.split('.');
    alert("A Media total é :"+mediatotal,Arraymedias,somamedia)
    // for (i = 0 ; i<=Arraymedias.length; i++ ){
    //      somamedia = Arraymedias[i] +somamedia;
    // };
    //  mediatotal = somamedia /  i++ ;
    // console.log( mediatotal );
    // alert("A Media total é :"+mediatotal)
};

function Quadrado(string1){
    var quadradin = string1;
 
     var Arraymedias = quadradin.split(',');
     for (i = 0 ; i<=Arraymedias.length; i++ ){
      
          var quadradomagico =    Arraymedias[i]  *    Arraymedias[i] ;
         console.log( quadradomagico );
     };
 };

 function Maiornumero(string1){
    var maiornumero = string1;
    let menor = -100000000000000;
     var Arraymedias = maiornumero.split(',');
     for (i = 0 ; i<=Arraymedias.length; i++ ){
      if (Arraymedias[i] > menor){
          menor = Arraymedias[i];
      }
     };
     console.log( menor );
 };

 function MaiorIdade(string1){
    var idade = string1;
    let menor = 0;
    let maior = 0;
     var Arraymedias = idade.split(',');
     for (i = 0 ; i<=Arraymedias.length; i++ ){
      if (Arraymedias[i] > 17){
          maior++;
      }else{
          menor++;
      }
     };
     console.log( "quantidade de menores de idade é :"+menor+"A quantidade de maiores de idade é :"+maior );
 };

 function PalavrasSequenciaContrario(string1){
    let palavras = string1;
    var arrayOfStrings = palavras.split(' ');
    for (i = arrayOfStrings.length ; i>= 0; i-- ){
        console.log(i+"-"+arrayOfStrings[i] );
    };
};

// function SomaBotao(){

//     var resultado = document.getElementById("resultado");
//     var soma = 2 +2;
//      resultado.innerHTML = soma;
  
// };

// function MostrarResultado(){
//       var resultado = document.getElementById("exercicio4");
//       var retorno= document.getElementById("exercicio4Resultado");
// if (resultado>0 || resultado <10){
//    retorno.innerHTML = "Insuficiente";
// }else if (resultado >= 10 || resultado < 14){
//     retorno.innerHTML = "bom";
// }else{

// retorno.innerHTML = "muito bom";
// }
 
// };
// var x ;
// function Soma(){

//      x = 5 + 6;
//      console.log(x);
  
// };

// function Multiplicacao(){


//     var soma = x * 10;
//      console.log(soma);
  
// };

// function SomasDoidas(){
//     var x = "fiat" + 147;
//     var x = "fiat" + 1+4+7;
//     var x =  147 + "fiat" ;
//     var x =  1+4+7 + "fiat" ;
// }

// function Calculadora (valor1,valor2,operacao){

//     switch(operacao){
//         case 1:
//             let resultado = valor1 + valor2;
//             break;
//         case 2:
//             let resultado = valor1 - valor2;
//             break;
//         case 3:
//             let resultado = valor1 * valor2;
//             break;
//         case 4:
//             let resultado = valor1 / valor2;
//             break;
//         default:
//             console.log("Insira valores validos")
//     }
// };

//  class Pessoa{
//     constructor()
//     nome = 'jose';
//     idade = 10;

// };
// class Carro{
//     constructor()
//     portas = 4;
//     arcondicionado = true;
// }
// class Animal{
//     constructor()
//     patas = 4;
//     calda = true;
// }
// class Computador{
//     constructor()
//     processador = "i5";
//     placaDeVideo = false;
// }

// var pessoa = new Pessoa();
// var carro = new Carro();
// var animal = new Animal();
// var computador = new Computador();

// function VindowsAlert(){
//     alert("estamos na unibh");
// };

// function TamanhoString(istring){
//     let contar = istring;
//     contar.length;

// };

// function ProcuraPalavra(texto,palavra){
//     var str = texto;
//     var resultado = str.indexof("palavra");

// }

// function ConcatenarString(string1,string2){
//     let primeira = string1;
//     let segunda = string2;
//     let resultado = primeira.concat(segunda);
//     let teste = primera + segunda;
// };
// function SubtrairString(string1,string2){
//     let primeira = string1;
//     let segunda = string2;
 
//     let teste = primera - segunda;
// };
// function SomaMais(palavra){
//     let palavramais = palavra;
//     let resultado = "+"+palavramais+"+";
// };

// function PalavrasSequencia(string1){
//     let palavras = string1;
//     var arrayOfStrings = palavras.split(' ');
//     for (i = 0 ; i<=arrayOfStrings.length; i++ ){
//         console.log(i+"-"+arrayOfStrings[i] );
//     };
// };

// function Exercicio1819(stringToSplit) {
//     var arrayOfStrings = stringToSplit.split(',');
  
//     console.log('A string original é: "' + stringToSplit + '"');
//     console.log('O separador é: "' + ',' + '"');
//     console.log('O array tem ' + arrayOfStrings.length + ' elementos: ' + arrayOfStrings.join(' / '));
//   };

// function Exercicio20(valor){
//    let arrayOfString = valor;
//    for (i = 0 ; i<=arrayOfString.length; i++ ){
//     console.log(i+"-"+arrayOfString[i].toUpperCase() );
// };
// }
