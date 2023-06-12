//trabalha com o evento visto no front,como o click,tirando que será trabalhada a execução do codigo,decidindo se sera executado no meio,fim inicio,ira determinar quando ir executar.

const EventEmitter = require('events')
const eventEmitter = new EventEmitter ()

eventEmitter.on('start',()=>{// ira start uma parte do evento-dizendo o que ele irá executar,a outra será quando ele for chamado
    console.log('meio')
})
console.log('inicio')

eventEmitter.emit('start')//é quando i´ra acontecer o evento
//sem o .emit não é possível rodar o event pois não saberá onde ira iniciar o evento
console.log('fim')
