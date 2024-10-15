/*
Primitivos - string, number, boolean, undefined,
null, (bigint, symbol) - valores copiados

Referência (mutável) - Array, object, function - passados por referência
 */
let a = [1,2,3]
let b = a
console.log(a,b)

a.push()
console.log(a,b)
