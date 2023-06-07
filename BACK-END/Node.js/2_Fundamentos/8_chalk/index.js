const chalk = require ('chalk')

const nota = 4

if(nota >= 7){
console.log(chalk.green.bgGreen('Parabéns,você passou!'))
   
}else{
    console.log(chalk.gray.bgYellow('Parabén, você reprovou,te vejo ano que vem'))
}


