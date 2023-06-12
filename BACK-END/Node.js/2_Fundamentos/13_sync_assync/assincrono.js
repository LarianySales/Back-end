const fs = require('fs')

console.log('inicio')

fs.writeFile('arqu.txt','oi', function(err){
    setTimeout(function(){
        console.log("Arquivo criado")
    },1000)
}) 
console.log('fim')

//primeiro ele excuta inicicio-depois fim,depois a criação do evento de criar o arquivo em 1000 e depois vai o console