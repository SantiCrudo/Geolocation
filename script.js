/*
! 3 métodos:
    ? getCurrentPosition(ubicacion, error, configuracion)
        * Consultas individuales, contiene 3 atributos:
        * Una funcion para procesar la ubicacion retornada
        * Otra funcion para procesar los errores retornados
        * Y un objeto para configurar como la info sera adquirida.

    ? watchPosition(ubicacion, error, configuracion)
        * Es como el anterior, solo que comenzara un proceso de vigilancia
        * para la deteccion de nuevas ubicaciones, cumple una funcion parecida
        * al setInterval()

    ? clearWatch(id)
        * Este metodo retorna un valor que puede ser almacenado en una variable 
        * para luego usarla como referencia pro el metodo clearWatch() y asi detener 
        * la vigilancia, similar al metodo clearInterval()

*/
const iniciar = ()=>{
    var boton = document.querySelector('#obtener');
    boton.addEventListener('click', obtener, false);
}

const obtener = ()=>{
    navigator.geolocation.getCurrentPosition(mostrar)
}

const mostrar = (posicion)=>{
    var ubicacion = document.querySelector('.ubicacion');
    var datos = ''; 
    datos += 'Latitud: ' +posicion.coords.latitude+ '<br>';
    datos += 'Longitud: ' +posicion.coords.longitude+ '<br>';
    datos += 'Exactitud: ' +posicion.coords.accuracy+ '<br>';
    ubicacion.innerHTML = datos;
}

window.addEventListener('load', iniciar, false)

