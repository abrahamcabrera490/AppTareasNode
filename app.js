require('colors');
const {inquireMenu, pausa,
leerinput,
listadoBorrar,
confirmar,
MostrarListadoCompletar
} = require('./helpers/inquire');
const { guardarData, leerData } = require('./helpers/guardarArchivo')
const Tareas = require('./models/tareas');

const main = async()=>{

let opt ='';
const tareas = new Tareas();
const tareasDb = leerData();
if(tareasDb)
{
tareas.cargarTareasArray(tareasDb);

}

do{
   opt = await inquireMenu();
   switch(opt){
        case '1':
     const desc = await  leerinput('Descripcion: ');
     
    tareas.crearTarea(desc);
            break;
        case '2':
          tareas.listadoCompleto();
          
            break;
        case '3':
              tareas.statustask(true);
            break;
            case '4':
              tareas.statustask(false);
            break;            
            case '5': //completar tareas
              const ids = await MostrarListadoCompletar(tareas.listadoArr);
              tareas.toggleCompletdas(ids);
            break;            
            case '6'://BORRAR
              const id = await listadoBorrar (tareas.listadoArr);
            if(id!=0)
            {
              const ok= await confirmar('Estas seguro de eliminarlo');
              //confirmacion
              if(ok){
                tareas.borrartarea(id);
                console.log('la tarea se elimino con exito');
              }
            }
              
            break;            
   }

   guardarData(tareas.listadoArr);

  await pausa();

}while(opt !== '0');

}

main();