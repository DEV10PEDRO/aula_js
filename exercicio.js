//Exercicio//

/* Questão 1 */
//Crie uma variável, inicialize e exiba seu valor no console.
let nome = "pedro"
console.log(nome)


/* Questão 2*/
//Crie um array de itens, itere sobre eles e os exiba no console.
const itens = ["maçã", "banana", "laranja", "uva", "manga"];
for (let i = 0; i  < itens.length; i++){
    console.log(itens[i]);
}

/* Questão 3 */
//Como acessar o terceiro elemento da lista?
var frutas = ["maçã", "banana", "laranja", "uva"]
console.log(frutas[2])


/* Questão 4 */
//Crie uma função que calcule a área do quadrado em metros. Quadrado é a
//figura que tem todos os lados iguais.
function caucular (l){
    let resultado = l ** 2;
    return resultado
}

let resultado = caucular(6)
console.log(resultado)


/* Questão 4 */
function calcularAAreaDoQuadrado(lado){
    let area = lado * lado
    console.log(`A area do quadrado de lado ${lado} é ${area}m2`)
}

/* Questão 5 */
// Faça um algoritmo que leia os valores de A, B, C e em seguida imprima na
//tela a soma entre A e B e mostre se a soma é menor que C.

let a = 5
let b = 10
let c = 30

let soma = a + b 

if(soma < c){
    console.log("A + B é menor que C")
    console.log(soma)
}

/* Questão 6 */
// Qual a saída desse código?
let num "5";
let soma = num + 10;
console.log (soma);


//7. Faça um algoritmo que leia dois valores inteiros A e B, se os valores de A e B
//forem iguais, deverá somar os dois valores, caso contrário deverá multiplicar
//A por B. Ao final de qualquer um dos cálculos deve-se atribuir o resultado a
//uma variável C e imprimir seu valor na tela.

