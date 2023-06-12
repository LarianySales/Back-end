//exemplo para syncrona

const fs = require('fs')

console.log('inicio')

fs.writeFileSync('arquivo.txt','oi')//-criar arquivo
//toda a vez que utilizar o sincrono deve usar o sufixo Sync para que o codigo entenda como fazer-no caso linha a linha

console.log('fim')