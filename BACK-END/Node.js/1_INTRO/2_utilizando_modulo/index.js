
//com o node sempre utilizamos modulos/já que é como uma biblioteca

//exemplo de como usar o modulo
// const fs = require('fs')//foi feita a solicitação require para o modulo--quando for usar o modulo é bom o usar na constante o nome do modulo para que consiga relacionar quando pegar o código novamente.
// fs.readFile('arquivo.txt', 'utf8',(err, data)=>{//readFile:é um metodo para ler um arquivo| utf8 - vai retornar o arquivo sem erro,éle codifica os textos que não tem acentuação
//txt-extensão para acessar arquivos de texto,sem ele da bug.

//err-erro/data-coisa do arquivo.
// if(err){
//     console.log(err)
// } 
//  console.log(data)
// })


//fs-fire sistem-sistema de arquivos:onde é possivel criar arquivos,excluir,olha o q tem no arquivo,e sua extensão
// const fs = require('fs')
// fs.appendFile('arquivo.txt','Ultima linha',function (err){
//     if 
//     (err) throw(err) 
//         console.log('uptade')
    
// })// adiciona coisas ao arquivo já existente| se colocar o nome de um arquivo que não existe ele cria

// const fs = require('fs')

// fs.open('arquivo2.txt','w',function (err){
    //o open é usado para criar arquivos limpos,onde dá o nome do arquivo,coisa a flag ,ele não vai inserir texto pois não terá a flag para isso,abre arquivos
    //para adiciona o texto é o appendFile
//     if 
//     (err) throw(err) 
//         console.log('uptade!')
    
// })

const fs = require('fs')
//para substituir uma informação( o texto) por completo do arquivo,caso arquiso não exista ele cria
// fs.writeFile('arquivo2.txt','Quem badala assim tão bem ...',function (err){
//servem para atualizar arquivos,caso não exista ele cria
//     if 
//     (err) throw(err) 
//         console.log('saved!')
    
// })
// fs.unlink('arquivo2.txt',function (err){
//para excluir arquivos
//     if 
//     (err) throw(err) 
//         console.log('saved!')
    
// })

//metdo para renomear arquivo
fs.rename('joão_das_beiras','joão_das_beira',function (err){
    //para excluir arquivos,onde coloca o nome atual do arquivo e o que vc quer
        if 
        (err) throw(err) 
            console.log('saved!')
        
    })