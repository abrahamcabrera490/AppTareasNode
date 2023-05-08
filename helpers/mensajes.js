const { resolve } = require('path');

require('colors');


const mostrarMenu= ()=>{
    console.clear();
    return new Promise((resolve=>{
        console.log('=========================='.green);
        console.log('SELECCIONE UNA OPCION'.green);
        console.log('==========================\n'.green);
        
        console.log(`  ${'1.-'.green} Crear tareas`);
        console.log(`  ${'2.-'.green} Mostrar Tareas`);
        console.log(`  ${'3.-'.green} Mostrar Tareas Completadas`);
        console.log(`  ${'4.-'.green} Mostrar Tareas Pendientes`);
        console.log(`  ${'5.-'.green} Completar Tareas`);
        console.log(`  ${'6.-'.green} Borrar Tareas`);
        console.log(`  ${'0.-'.green} salir\n`);
        
        const readline = require('readline').createInterface({
          input: process.stdin,
          output: process.stdout
        });
        
        readline.question('Selecciona una opcion: ', (opt)=>{
            readline.close();          
            resolve(opt);
        });
    }))




}

const pausa = () =>{
    return new Promise((resolve=>{
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
          });
          
          
          readline.question(`\nPRESIONE ${'ENTER'.green} PARA CONTINUAR \n`,(opt)=>{
            readline.close();
            resolve();
          });
    }));


}



module.exports={
    mostrarMenu,
    pausa
}