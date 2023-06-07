//ersse console representa um array no momento
// node index.js nome=Alana idade=60
console.log(process.argv)//ele olha o diretorio do novo arquivo
const args = process.argv.slice(2)//-slice vai adicionar ou remover do array
console.log(args)

const nome = args[0].split('=')[1]//split ela vai encontar as informações escolhida com aquele indice,tirando o sinal de igualdade e tornado o nome um indice
// console.log(typeof nome)//´para aparecer o nome
console.log(nome)

const idade = args[1].split('=')[1]
console.log(idade)

console.log(`O nome é: ${nome} e a idade ${idade}`)