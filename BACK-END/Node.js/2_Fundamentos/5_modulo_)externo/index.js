//npm init - vai   iniciar o modulo externo e começãr para fazer  um modulo externo pelo terminar

//é no json que vai gravar as informações do modulo externo,para ser usados. Só é possivel fazer o dowlond do modulo externo precisa do .json por ter as  info

// o npm install minimist vai buscar na internet com o projeto e criar um arquivo que não pode ser alterado

//isso é só para configurar o projeto

//QUANDO SE TRABALHA COM O NODE.JS,SE TRABALHA COM MODULOS,QUE TEM OBJETOS/
//USAR O MODULO PRECISA IMPORTAR
//TEM 3 MODULO INTERNO(TEM DE BUSCAR),EXTERNO(USA GERENCIADOR DO NODE) E DO NODE(JÁ VEM NO NODE)

// vai fazer o mesmo para impotar modulo-o minimist
const minimist = require('minimist')//já se tem acesso a ele
// console.log(minimist)
//argumento no minimist = node index.js --nome=Alana --idade=71
const args = minimist(process.argv.slice(2))
console.log(args)

const nome = args['nome']
const idade = args['idade']
console.log(`Onome ${nome} e idade ${idade}`)