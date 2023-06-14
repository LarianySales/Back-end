//criar o http 
const http = require('http')
const port = 3333

const server = http.createServer((req, res) => {
//rotas
//rota 1 - (/) caminho principal da aplicação-usada para fazer um roteamento da aplicação
//  (/about)|{:id} - rota que possui uma página sobre

//litle servidor com rotas
if(req.url === '/'){
    res.writeHead( 200, {'Content-Type': 'text/plan'})
    res.end('Página inicial')
}else if(req.url ==='/about'){
    res.writeHead(200, {'Content-Type': 'text/plan'})
    res.end('PÁGINA TAL')
}else{
    res.writeHead(404, {'Content-Type': 'text/plan'})
    res.end('Página não encontrada')
}

})

server.listen(port, ()=>{
    console.log(`Rodando na porta ${port}🤷‍♀️`)
})