/**
 * _Listado {
 * uuid: uuid-2134-23442
 * { id: 12, desc: esdfa, completado: 13434}}
 */

const Tarea = require('./tarea');
class Tareas {
    _listado = {};

get listadoArr(){

const listado = [];
Object.keys(this._listado).forEach( key =>{
    const tarea = this._listado[key];

    listado.push(tarea);
    } );
return listado;

}

    constructor(){
        this._listado = {};
    }
borrartarea(id =''){

if(this._listado[id]){
    delete this._listado[id];
}


}
    crearTarea(desc = ''){

        const tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea;
        
    }

    cargarTareasArray( tareas = []){

        
        tareas.forEach(tarea =>{
            this._listado[tarea.id ] = tarea;

        });
        //
    }

listadoCompleto()
{
      
    this.listadoArr.forEach((tarea,i) => {
        const idx = `${i +1}`.green;
        const {desc, completado} = tarea;
const estado = (completado) ? ' Completada'.green : 'Pendiente'.red;
  console.log(`${idx} ${desc} :: ${estado}`);
    });
}

statustask(status = true)
{
let contador = 0;
    
    this.listadoArr.forEach(tarea => {
        const {desc, completado} = tarea;
const estado = (completado) ? ' Completada'.green : 'Pendiente'.red;
  //console.log(`${idx} ${desc} :: ${estado}`);
if(status)
{
if(completado)
{
    contador +=1;
    console.log(`${(contador.toString().green +'.').green } ${desc} ${completado.yellow} ::  ${'Completada'.green}  `);
}
}else{
    if(!completado)
    {
        contador +=1;
    console.log(`${(contador.toString().green +'.').green } ${desc} ::  ${'Pendiente'.red}  `);
    }
}    
});
       

}


toggleCompletdas(ids = [])
{
    ids.forEach(id =>{
        const tarea = this._listado[id];
        if(!tarea.completado){
            tarea.completado = new Date().toISOString();
        }
    });

this.listadoArr.forEach(tarea =>{
    if(!ids.includes(tarea.id))
    {
        this._listado[tarea.id].completado = null;

    }
});

}



}
    
module.exports = Tareas;