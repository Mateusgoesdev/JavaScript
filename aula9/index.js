// String, number, undefined, null, boolean, symbol
const nome = 'Mateus' // string
const nome1 = "Mateus" // string
const nome2 = `Mateus` // string
const num1 = 10 // number
const num2 = 10.52 // number (ponto flutuante)
let nomeAluno// undefined = não aponta pra local nenhum na memória
const sobreNomeAluno = null // Nulo -> não aponta pra local nenhum na memória
const aprovado = false // boolean = true, false (lógico)

const a = [1, 2]
const b= a

console.log(a, b)
b.push(3)
console.log(a, b)  