
//--a=10 --b=20
//externo
const minimist = require('minimist')

//interno
const soma = require('./soma').soma

const args = minimist(process.argv.slice(2))
//slice-vai retornar a parte do segundo espaço|percorre a string ou array para selecionar o valor determinado nos parâmetros.
// soma(2,2)
const a = parseInt(args['a'])
const b = parseInt(args['b'])

soma(a,b)

//argv-conseguir acessar os argumentos.
