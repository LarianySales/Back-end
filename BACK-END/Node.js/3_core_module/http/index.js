//usando o http - ele é um motor que auxiliou no uso dos modulos

//na aplicação tem de colocar o metodo e status
const http = require('http')
const port = 4000
// o modulo http -
//server - servidor,
//sempre que criar esse metodo,temos o parametro de requisão e a resposta

const server = http.createServer((req, res)=>{
res.writeHead(200,{'Content-Type':'text/plan'})//-> cabeçalho
//o write faz analogia a um documento ou arquivo recebendo o q é necessario,(status code o tipo de documento do diretorio)
//terá de chamar os metodos.

res.end('olá,mundo!')
})

//terá de retornar a variavel
server.listen(port,()=>{//vai rodar no localhost:4000
    console.log(`Servidor Rodando na porta ${port}`)
})