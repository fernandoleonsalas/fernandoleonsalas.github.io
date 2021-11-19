const texto = document.getElementById("logo");
const subtitulo = document.getElementById("subtitulo");

const letras = texto.innerText.split("");
texto.innerText = ""; /* esto es para eliminar el texto que estaba antes */   


/*innerText =  obtiene el texto entre las etiquetas de inicio y fin del objeto, osea solo obtiene su valor y no trae tambien LAS etiquetas 

split() divide un objeto de tipo String en un array (vector) de cadenas mediante la separación de la cadena 

forEach = recorrer los diferentes elementos que podemos obtener de un array y  este siempre devuelve el valor undefined y no es encadenable  en base a un parametro
*/


letras.forEach(function(cadaletra){
    /* Esto es para agragar el caracter espacio */

    let espacio;
    if (cadaletra === " " ){
        espacio = "&nbsp;"
    }else{
        espacio = cadaletra;
    }

    texto.innerHTML += `
    <div>
        <span class="primera_linea">${espacio}</span>
        <span class="segunda_linea">${espacio}</span>
    </div>
    `


});



/* ------------------Parte de la ejecucion del texto */

texto.addEventListener("mouseenter",function(){
    let cuenta = 0;

    const intervalo = setInterval(function(){
    /* setInterval(funcion + milisegundos_seejecute) crea un intervalo  y luego llama una funcion dependiendo de los milisegundos*/
        
        if(cuenta< texto.children.length) {
            
            texto.children[cuenta].classList.add('animacion');
            
            /*si cuenta es menor a el numero de elemento div que se encuentra en texto que en este caso es 13, es decir =  texto.children.length nos indica el numero de elementos que se encuentra e texto */



            cuenta += 1;
            
        }else{
            /* cuando cuanta es mayor a los elementos, limpiamos el intervalo con la siguiente propiedad:  */
            clearInterval(intervalo)
        }
    }, 30);
});
subtitulo.addEventListener("mouseenter",function(){
    let cuenta = 0;

    const intervalo = setInterval(function(){
    /* setInterval(funcion + milisegundos_seejecute) crea un intervalo  y luego llama una funcion dependiendo de los milisegundos*/
        
        if(cuenta< texto.children.length) {
            
            texto.children[cuenta].classList.add('animacion');
            
            /*si cuenta es menor a el numero de elemento div que se encuentra en texto que en este caso es 13, es decir =  texto.children.length nos indica el numero de elementos que se encuentra e texto */



            cuenta += 1;
            
        }else{
            /* cuando cuanta es mayor a los elementos, limpiamos el intervalo con la siguiente propiedad:  */
            clearInterval(intervalo)
        }
    }, 30);
});




texto.addEventListener("mouseleave",function(){
    let cuenta = 0;

    const intervalo = setInterval(function(){
    /* setInterval(funcion + milisegundos_seejecute) crea un intervalo  y luego llama una funcion dependiendo de los milisegundos*/
        
        if(cuenta< texto.children.length) {
            
            texto.children[cuenta].classList.remove('animacion');
            
            /*si cuenta es menor a el numero de elemento div que se encuentra en texto que en este caso es 13, es decir =  texto.children.length nos indica el numero de elementos que se encuentra e texto */



            cuenta += 1;
            
        }else{
            /* cuando cuanta es mayor a los elementos, limpiamos el intervalo con la siguiente propiedad:  */
            clearInterval(intervalo)
        }
    }, 30);
});

subtitulo.addEventListener("mouseleave",function(){
    let cuenta = 0;

    const intervalo = setInterval(function(){
    /* setInterval(funcion + milisegundos_seejecute) crea un intervalo  y luego llama una funcion dependiendo de los milisegundos*/
        
        if(cuenta< texto.children.length) {
            
            texto.children[cuenta].classList.remove('animacion');
            
            /*si cuenta es menor a el numero de elemento div que se encuentra en texto que en este caso es 13, es decir =  texto.children.length nos indica el numero de elementos que se encuentra e texto */



            cuenta += 1;
            
        }else{
            /* cuando cuanta es mayor a los elementos, limpiamos el intervalo con la siguiente propiedad:  */
            clearInterval(intervalo)
        }
    }, 30);
});