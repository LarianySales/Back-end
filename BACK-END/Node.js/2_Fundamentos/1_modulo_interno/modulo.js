//para criar um modulo
//tem de criar o obj e dar seus devidos valores e chaves
module.exports ={
    soma(a,b){
        console.log(`${a+b}`)
    },
    subtracao(c,d){
        if(c>d){
            console.log(`${c-d}`)
        }else if(d>c){
            console.log(`${d-c}`)
        }else if(d <=0){
            console.log("ERRO")
        }
    },
    multiplicao(e,f){
        console.log(`${e*f}`)
    },
    divisao(g,h){
        if(g > h){
console.log(`${g/h}`)
        }else{
            console.log(`${h/g}`)
        }
    }
    
}//um modulo que vai exportar,uma característica dele é que é um objeto.

