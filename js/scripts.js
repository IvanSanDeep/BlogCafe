//querySlector retonar el valor de 0 a 1
const heading = document.querySelector('#heading') //retorna 0 o 1 Eleknto
heading.textContent = 'Nuevo Heading';
console.log(heading);

//querySelectorAll retorna todos valores que concuerdan con el selector css
const enlaces = document.querySelectorAll('.navegacion a');
enlaces[0].textContent = 'Nuevo texto par el enlace'
enlaces[0].classList.add('nueva-clase');
// enlaces[0].href = 'http://google.com';

//getElementById
// const heading2 = document.getElementById('heading');
// console.log(heading2);

//Generar un nuevo enlace
const nuevoEnlace = document.createElement('A')
//agregar el href
nuevoEnlace.href = 'nuevo-enlace.html';

//Agregar el texto 
nuevoEnlace.textContent = 'Tienda virtual';

//agregar la clase
nuevoEnlace.classList.add('navegacion__enlace');

const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(nuevoEnlace);

console.log(nuevoEnlace);

//Eventos

// console.log(1);


// //load es pera que el JS y los archivos que dependen del HTML este listos
// window.addEventListener('load', function(){ 
//   console.log(2);
// })

// window.onload = function(){
//   console.log(3);
// }


// //Solo espera por el HTML. pero no espera CSS o imagenes
// document.addEventListener('DOMContentLoaded', function(){
//   console.log(4);
// });

// console.log(5);

// window.onscroll = function() {
//   console.log('scrolling...')
// }

//formularios
// const btnEnviar = document.querySelector('.boton--primario');
// btnEnviar.addEventListener('click', function(evento){
//   console.log(evento);
//   evento.preventDefault();
//   //validar un formulario

//   console.log('enviando formulario');
// })



//Eventos de los imputs o texttareas
const datos ={
  nombre: '',
  email:'',
  mensaje:''
}

const nombre  = document.querySelector('#nombre');
const email  = document.querySelector('#email');
const mensaje  = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');

nombre.addEventListener('input', leerTexto)
email.addEventListener('input', leerTexto)
mensaje.addEventListener('input', leerTexto)

//El evento de submit
formulario.addEventListener('submit', function(evento){
  evento.preventDefault();

  //Validar  el formulario
  const{nombre, email, mensaje} = datos;
 
  if(nombre === '' || email === '' || mensaje === ''){
    mostrarAlerta('Todos los datos son obligatorios', true);
    return;
  }
  //Crear la otra alerta de Enviar correctamente
  mostrarAlerta('Mensaje enviado correctamente');
});


function leerTexto(e){
  //console.log(e.target.value);
  datos[e.target.id] = e.target.value

  //console.log(datos);
}

function mostrarAlerta(mensaje, error = null){
  const alerta = document.createElement('P');
  alerta.textContent = mensaje;

  if(error){
    alerta.classList.add('error');
  }else{
    alerta.classList.add('correcto');
  }
  formulario.appendChild(alerta);

    //desaparexa despues de 5 segundos
  setTimeout(() => {
    alerta.remove()
  }, 5000);
}


// //Muestra una alerta de que se envio correctamente
// function mostrarMensaje(mensaje){
//   //const alerta = document.createElement('P');
//   //alerta.textContent = mensaje;
//   //alerta.classList.add('correcto')


//   //desaparexa despues de 5 segundos
//   // setTimeout(() => {
//   //   alerta.remove()
//   // }, 5000);
// }


// //Muestra un error en pantalla
// function mostrarError(mensaje){
//   //const error = document.createElement('P');
//   //error.textContent = mensaje;
//   //error.classList.add('error')

//   formulario.appendChild(error);

//   //Desaparesca despues de 5 segundos
//   setTimeout(() => {
//     error.remove();
//   }, 5000);
// }

