//imprimir mais de um valor

const x = 10
const y = 'Bruno'
const z = [1,2]

console.log(x,y,z)

//contagem de impressôes

console.count(`o valor de x é: ${x}, contagem`)

//variavel entre string 
console.log('o nome é %s é o Bruuuuuuno', y)

//setTimeout- vvai limpar o terminal depois de dois segundos/no caso ele realiza uma ação em um tempo determinado no código.

setTimeout(()=>{
    console.clear()
},2000)