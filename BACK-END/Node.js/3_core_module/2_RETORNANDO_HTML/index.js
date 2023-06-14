const http = require('http')
const port= 3338
//pro html separamos as info

//tem de mudar a numeração da porta em cada api
const server = http.createServer((req, res)=>{
    // res.writeEarlyHints(200, {'Content-Type': 'text/html'})
res.statusCode = 200
res.setHeader('Content-Type','text/html')//não precisa passar como objeto

//maneira dificil de retotnar html
res.end('<h1>Olá, já viu premonição?</h1>')
})

serve.listen(port, ()=>{
    console.log(`Servidor rodand na porata ${port}😎`)
})