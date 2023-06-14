//cormodule - é o mesmo que modulo interno(que já tem no node)

// serrve para fazer a analise da url conseguindo saber quem é seus hospedeiros e outras info referentes
 const url = require('url')
 //para trabalhar com url tem de passar o endereço que vai trabalhar
 const address = 'https://www.al.senai.br/catalog?cursos=programadorBackEnd'

 const parsedUrl = new url.URL(address)

 console.log(parsedUrl.host)//host é o hospedeiro no caso vai dizer o host q a pag está hospedada
 console.log(parsedUrl.pathname)//pasta da url
 console.log(parsedUrl.search)//o ponto central de busca da url,onde é que a gente tá pesquisando 
 console.log(parsedUrl.searchParams)//os parametros de busca,vai adaptando a nossa necessidade
 console.log(parsedUrl.searchParams.get('cursos'))//vai pegar info das parte de dentro da area especificada,no caso curso

 //url's são pastas