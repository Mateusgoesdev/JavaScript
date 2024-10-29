// const tresHoras = 60 * 60 * 3 * 1000
// const umDia = 60 * 60 * 24 * 1000

// const data = new Date()
// console.log('Dia', data.getDate())
// console.log('Mês', data.getMonth() + 1) // mês começa no 0
// console.log('Ano', data.getFullYear())
// console.log('Horas', data.getHours())
// console.log('Min', data.getMinutes())
// console.log('Seg', data.getSeconds())
// console.log('ms', data.getMilliseconds())
// console.log('Dia semana', data.getDay()) // 0 - domingo ao 6 - sábado
// console.log(Date.now())
// console.log(data.toDateString()) ]

function zeroAEsquerda (num) {
    return num >= 10 ? num : `0${num}`
}

function formatadata(data) {
    const dia = zeroAEsquerda(data.getDate())
    const mes = zeroAEsquerda(data.getMonth())
    const ano = zeroAEsquerda(data.getFullYear())
    const hora = zeroAEsquerda(data.getHours())
    const min = zeroAEsquerda (data.getMinutes())
    const seg = zeroAEsquerda(data.getSeconds())

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`
}

const data = new Date()
const dataBrasil = formatadata(data)
console.log(dataBrasil)
