let num1 = window.prompt('Digite um número')
let num2 = window.prompt('Digite outro número')
let resultado = Number(num1) + Number(num2)
const r = window.confirm('Deseja ver o resultado?')
if (r == true) {
    window.alert(`O resultado foi ${resultado}`)
}
else {
    window.alert('ok, até mais')
}

