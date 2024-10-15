const pessoa1 = {
    nome: 'Mateus',
    sobrenome: 'Goes',
    idade:25,

    fala() {
        console.log(`a minha idade atual é ${this.idade}`)
    },

    incrementaIdade() {
        ++this.idade
    }
}
pessoa1.fala()
pessoa1.incrementaIdade()
pessoa1.fala()
pessoa1.incrementaIdade()
pessoa1.fala()
pessoa1.incrementaIdade()
pessoa1.fala()
pessoa1.incrementaIdade()
pessoa1.fala()

