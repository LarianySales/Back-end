const { isUtf8 } = require('buffer')
const http = require('http')

const port = 3336

const server = http.createServer((req, res)=>{
if(req.url === '/'){
   res.writeHead(200, {'Content-Type': 'text/html'})
   res.write('<meta charset=utf8>')
   res.write('<h1>Página Home</h1>')//ira escrever html
}else if(req.url === '/sobre'){
   res.writeHead(200, {'Content-Type': 'text/html'})
   res.write('<meta charset=utf8>')

   res.write('<h1>Página sobre</h1>')

}else if(req.url === '/contato'){
   res.writeHead(200, {'Content-Type': 'text/html'})
   res.write('<meta charset=utf8>')

   res.write('<h1>Página contato</h1>')

}else{
    res.writeHead(404, {'Content-Type': 'text/html'})
   res.write('<meta charset=utf8>')

    res.write('<h1>Página não encontrada</h1>')
}
})
server.listen(port,()=>{
    console.log(`Rodando na porta ${port}😶‍🌫️`)
})
