
const http = require('http')
const port = 4006


const server = http.createServer((req, res)=>{
const urlInfo = require('url').parse(req.url, true)//vai fazer analisee na requisição da url
const name = urlInfo.query.name//trabalha  com a query é fazer uma consulta,no caso atual,do nome

res.writeHead(200,{'Content-Type':'text/html'})
if(!name){
res.end('<h1>Preencha seu nome:  </h1><form method="get"><input type="text" name="name" name="name" /><input type="submit" value="enviar" /input></form> <iframe width="560" height="315" src="https://www.youtube.com/embed/aSMl5Lmsxj8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>')
    
}else{
    res.end(`<h1>Seja bem vindo ${name}</h1>`)
}
})

server.listen(port,()=>{
    console.log(`Servidor Rodando na porta ${port}`)
})