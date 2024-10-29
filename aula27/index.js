// (condição)? 'valor para true' : 'valor para false'
const pontuacaoUsuario = 999
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'usuario VIP' : 'usurario NORMAL'

const corUsurario = null
const corPadrao = corUsurario || 'preta'

console.log(nivelUsuario, corPadrao)