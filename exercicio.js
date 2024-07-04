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
    console.log(`A soma de ${a} + ${b} é igual a ${soma} e é menor que: ${c}`)
} else {
    console.log(`A soma de ${a} + ${b} é igual a ${soma} e é maior que: ${c}`)
}

/* Questão 6 */
// Qual a saída desse código?
//let num "5";
//let soma = num + 10;
//console.log (soma);


//Q7. Faça um algoritmo que leia dois valores inteiros A e B, se os valores de A e B
//forem iguais, deverá somar os dois valores, caso contrário deverá multiplicar
//A por B. Ao final de qualquer um dos cálculos deve-se atribuir o resultado a
//uma variável C e imprimir seu valor na tela.

let a1 = 5
let b1 = 10

let c1

if(a1 === b1){
    c = a1 + b1 
} else {
    c = a * b 
    console.log(c)
}

//Q8. O que acontece na execução do código a seguir? E se trocar a declaração da variável por let?
for (var contador = 0; contador < 5; contador++){

}

console.log(contador)

//Q9. Faça um algoritmo que receba um número inteiro e imprima na tela o seu antecessor e o seu sucessor. 
function antESuc(x){
    console.log(`O antecessor de ${x} é ${x-1}`)
    console.log(`O sucessor de ${x} é ${x-1}`)
}

antESuc(99)

//Q10. Faça um algoritmo que receba um número inteiro e imprima na tela o seu antecessor e o seu sucessor.




//Q12.
const numerico = [1,2,3,4,5,6,7,8,9,10]
const pares = []

numerico.forEach((elemento)=>{
    if(elemento%2 == 0){
        pares.push(elemento)
    }
})

console.log(pares)

//Q13.

function calcMedia(n1, n2, n3){
    let media = (n1+n2+n3)/3
    return media
    }
    let minhaMedia = calcMedia(7, 8, 5)
    if(minhaMedia >= 7){
        console.log(`Média ${minhaMedia}, resultado: Aprovado".`)
    } else if(minhaMedia >= 5){
        console.log(`Média ${minhaMedia}, resultado: Recuperação".`)
    } else {
        console.log(`Média ${minhaMedia}, resultado: Reprovado".`)
    
    }


//Q14.
let altura = 180
let peso = 80

function calcIMC(peso, altura){
    let imc = peso / (altura * altura)
}
    if(imc <= 18.5){
        console.log(`Seu IMC é ${imc}, resultado: Abaixo do peso`)
    }else if(imc <= 25){
        console.log(`Seu IMC é ${imc}, resultado: Peso Ideal`)
    }else if(imc <= 30){
        console.log(`Seu IMC é ${imc}, resultado: Sobrepeso`)
    }else if(imc <= 40){
        console.log(`Seu IMC é ${imc}, resultado: Obesidade`)   
    }else(imc <= 50){
        console.log(`Seu IMC é ${imc}, resultado: Obesidade Morbida`)
    }    


    //Q15.
    function tabuada(x){
        for(let i = 0; i <= 10; i++){
            console.log(`${x} x ${i} = ${x * i}`)
        }
    }

    tabuada(8)

    //Q16.
    let n1 = 10
    let n2 = 0

    function divsao(x,y){
        try{
            if(y == 0){
                throw error("Zero não é permitido")
            }else{
                console.log(x / y)
            }
        }catch (error){
            console.error(error)
        }
    }
    divisao(n1, n2)

    //Q17.
    function calculaGasolina(distancia){
        const autonomia = 9.8
        const preco = 5.24

        let valor = (((distancia * 2) / autonomia) * preco).toFixed(2)
        console.log(`Para fazer ${distancia}kms ida e volta você deve abastecer ${valor}R$`)
    }
    calculaGasolina(2900)

    //Q18.
    function fatorial(num){
        try{
        if(num < 0){
            throw Error("Nao pode fatorial de numero negativo")
        }else if(num == 0){
            return 1
        }else{
            let fatorial = 1;
            for (let i = 2; i <= num; i++){
                fatorial *= i;
            }
            return fatorial;
        }
        } catch (error){
        console.log(error)
        }     
    }
    console.log("Fatorial de 5: + fatorial(5))

   //Q19.
    const arraQ = [12, 36, 52, 77]
    const resQ = []

    for



   //Q20.
   let RG = true
   let CNH = true
   if(RG || CNH){
    console.log("FAz a prova")
   }else{
    console.log("Vai pra casa")
   }