const num = window.prompt('Digite um número')

    const numerioTitulo = document.getElementById = ('titulo')
    const texto = document.getElementById = ('texto')
    numeroTitulo.innerHTML += `Seu número é ${num}`

    document.body.innerHTML += `Raiz quadrada: ${num ** 0.5} <br>`
    document.body.innerHTML += `${num} é inteiro: ${Number.isNaN(num)} <br>`
    document.body.innerHTML += `É NaN: ${Number.isInteger(num)} <br>`
    document.body.innerHTML += `Arredondando para baixo: ${Math.floor(num)} <br>`
    document.body.innerHTML += `Arredondando para cima: ${Math.ceil(num)} <br>`
    document.body.innerHTML += `com duas casas decimais: ${num}`