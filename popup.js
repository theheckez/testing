/* exported showModal() */

/* Importación de variables */
var overlay = document.getElementById('overlay'),
	popup = document.getElementById('popup'),
    btnSubmit = document.getElementById('btn-submit');

/* Función para cerrar el disclaimer al pulsar entendido */
btnSubmit.addEventListener('click', function(e){
	e.preventDefault();
	overlay.classList.remove('active');
	popup.classList.remove('active');
});


/* Función para mostrar el disclaimer*/
function showModal() {
	overlay.classList.add('active');
	popup.classList.add('active');
}