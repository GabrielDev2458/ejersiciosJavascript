//Creacion y analizis de las constantes en js

var nombre  = 'Gabriel';
let lenguaje = 'JavaScript';
const  matricula = 'GHM2021INF';

nombre = 'Jaime';
lenguaje= 'Python';
//matricula = 'JHM2021INF'; //TypeError: Assignment to constant variable.

const estudiante = {'id':8, nombre: 'Gabriel'};

console.log(estudiante);

estudiante.id = 7;

console.log(estudiante);

//estudiante = {'id':8, nombre: 'Gabriel'};//TypeError: Assignment to constant variable.

//console.log(estudiante);
