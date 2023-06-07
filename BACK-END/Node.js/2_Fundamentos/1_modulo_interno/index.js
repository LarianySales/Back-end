// importar um modulo
//modulos internos-arquivos que criamos para usar em aplicação

//para importar o modulo usamos o require
const meuModulo = require('./modulo')
// console.log(meuModulo)//se colocar um ponto ele trás os metodos daquele obj

const soma = meuModulo.soma//ele atribuiu agora a uma variavel
soma(7,8)//determinou os parametros da function do obj
div(7,8)
mult(6,7)
sub(5,7)
const sub = meuModulo.subtracao
const mult = meuModulo.multiplicao
const div = meuModulo.divisao