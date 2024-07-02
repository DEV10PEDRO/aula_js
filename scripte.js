// comentarios

let nome = "fulano"
console.log(nome)
console.log("Hello World")
console.log("Ola" + nome) // Ola fulano


let num1 = 10
let num2 = 5

let resultado = num1 + num2 
console.log(resultado) // 15
console.log(num1 + num2) // 15
console.log(10 + 5) // 15
console.log(10 - 5) // 5
console.log(10 * 5) // 50
console.log(10 / 5) // 2
console.log(10 % 5) // 0
console.log(10 ** 5) // 100000

console.log(num1 == num2) // false
console.log(5 === "5") // compara VALOR E TIPO nesse caso false

console.log(num1 != num2) // true
console.log(6 !== "7") // true 
console.log(6 > 5) // true
console.log(4 < 3) // false
console.log(4 <= 4) // true
console.log(5 >= 8) // false

let idade = 33

if(idade >= 18 && idade <= 70){
    console.log("VOTO OBRIGATORIO")    
} else if (idade >= 16 || idade > 70) {
    console.log("VOTO OPCIONAL")
}
else {
    console.log("NAO VOTA")
}

let situacao = (idade >= 18 && idade <= 70) ? "VOTO OBRIGATORIO" : "NAO VOTA"

let cor_favorita = "azul"
switch (cor_favorita){
    case "azul": 
        console.log("A COR FAVORITA É AZUL")
        break
    case "vermelho":
        console.log("A COR FAVORITA É VERMELHO")
        break
    default:
        console.log("COR INVALIDA")    
}

for(let i = 0; i <= 10; i++){
    console.log(i)
}

let contador = 0
while(contador < 10){
    console.log(contador)
    contador++
}



do {
    console.log(contador)
    contador++
} while(contador < 10)


    function soma(x, y){
        let resultado = x + y
         return resultado
    }

    let valor = soma(2, 3)
    let valor1 = soma(-3, 50)
    let  valor2 = soma(valor, valor1)

    function ola(){
        console.log("OLA")
    }

    ola()

    setInterval (ola,5000)

    const frutas = ["maçã", "banana", "morango", "Manga"]
    console.log(frutas[0])

    for(let f = 0; f < frutas.length; f++){
        console.log(frutas[f])
    }

    for(const f of frutas){
        console.log(f)
    }

    frutas.forEach(function(f){
        console.log(f)

    })

    frutas.push("Manga") //  ["maçã", "banana", "morango", "Manga"]

    frutas.forEach(function(f){
        console.log(f)
    })

    console.error("deu erro")

    let x = 10
    let y = "a" 
    try {
        if(y == 0){
            throw RangeError("Valor zero não é permitido")
        } else if (typeof(y) == "string" || TypeError(x) == "string"){
            throw TypeError("Valor do tipo string não é permitido")
        }
        console.log(x/y)
    } catch (error) {
        console.error("Aconteceu um erro: " + error)
        console.error(`O erro ${error} aconteceu`)
    }







