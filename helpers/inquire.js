const  inquirer  = require( 'inquirer' );
require('colors');

const preguntas =[
{
    type: 'list',
    name: 'opcion',
    message: 'Que desea hacer ?',
    choices: [{
        value: '1',
        name: `${'1.-'.green} Crear Tarea`
    },
{
    value: '2',
    name: `${'2.-'.green} Listar Tareas`
},
{
    value: '3',
    name: `${'3.-'.green} Listar Tareas completadas`
},
{
    value: '4',
    name: `${'4.-'.green} Listar Tareas pendientes`
},
{
    value: '5',
    name: `${'5.-'.green} Completar tarea`
},
{
    value: '6',
    name: `${'6.-'.green} Eliminar tarea`
},
{
    value: '0',
    name: `'${'0.-'.green}' salir`
}


]
}
];
const inquireMenu = async() => {
   console.clear();
    console.log('=========================='.green);
    console.log('  SELECCIONE UNA OPCION   '.america.bgGreen);
    console.log('==========================\n'.green);
   
   const {opcion} = await inquirer.prompt(preguntas)
   return opcion;
}


const pausa = async()=>{
const pregunta = [
{
    type: 'input',
    name: 'enter',
    message: 'preciona enter para continuar'
}

];
console.log('\n');
await inquirer.prompt(pregunta);
}

const leerinput= async(message) => {
const question = {
    type: 'input',
    name: 'desc',
    message,
    validate(value){
        if(value.length === 0){
            return'Por favor ingresa un valor';
        }
  return true;
    }
};
const {desc} = await inquirer.prompt(question);
return desc;

}

const listadoBorrar = async(tareas = []) =>{

const choices = tareas.map((tarea,i) =>{
    
    const idx = `${i+1}.`.green;
    return{
        value: tarea.id,
        name: `${idx}  ${tarea.desc} ` 
    }
});
choices.unshift({
    value: '0',
    name:'0. ' + 'Cancelar'
});
const preguntas = [
    {
        type:'list',
        name: 'id',
        message:'Borrar',
        choices
    }
];
const {id} = await inquirer.prompt(preguntas);

return id;

}

const confirmar = async(message) =>{

const question =[{
type: 'confirm',
name: 'ok',
message
}];
const {ok} = await inquirer.prompt(question);
return ok;

}


const MostrarListadoCompletar = async(tareas = []) =>{

    const choices = tareas.map((tarea,i) =>{
        
        const idx = `${i+1}.`.green;
        return{
            value: tarea.id,
            name: `${idx}  ${tarea.desc} `, 
            checked: (tarea.completado) ? true : false
        }
    });

    const pregunta = [
        {
            type:'checkbox',
            name: 'ids',
            message:'seleccion',
            choices
        }
    ];
    const {ids} = await inquirer.prompt(pregunta);
    
    return ids;
    
    }

module.exports={
 inquireMenu,
 pausa,
 leerinput,
 listadoBorrar,
 confirmar,
 MostrarListadoCompletar
}